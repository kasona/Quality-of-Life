var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream('./util/job-imports.csv');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var masterList = [];
var mongoose = require('mongoose');
var lodash = require('lodash');
mongoose.connect('mongodb://localhost:27017/job-imports');

//define schema for import data
var JobSchema = Schema({
  state: String,
  city: String,
  jobtitle: String,
  salary: Number});

//attach schema to model
var Job = mongoose.model('Job', JobSchema);


//read in CSV as stream row by row
// csv.fromStream(stream, {headers:true})
//     .on('data', function(data){
//       // console.log(data);
//       // masterList.push(data);
//       addJobToCollection(data);
//     })
//     .on('end', function(){
//       // console.log('done');
//       console.log(masterList.toString());
//     });

function addJobToCollection(data){

  //create model and save to database
  var job = new Job(data);
  // console.log(job);
  job.save(function (err) {
    if (err) // ...
    console.log(err);
  });
}


// var salaryAvg = 0;
// function salaryAverage(jobtitle){
//   // find matching states and jobtitles
//     // eg.  ca programming 69000
//     //      ca programming 71000
//     var sameJobtitle = Job.find({$where: jobtitle === jobtitle  });
//     // Job.find({$where: state === state  });
//     console.log(sameJobtitle);

//   // get the average of all the salaries
//     // eg. salaries/ salaries.length


// }
// salaryAverage("Audiologists");


var salaryAvg = Job.find(function(err, result){
  var finalAvgStateSalPerJobtitle = {};
  console.log(err,result.length);
  var jobTitleGrouping = lodash.groupBy(result, function(job){
    return job.jobtitle;
  });
  // group by jobtitles
  console.log('jobTitleGrouping', Object.keys(jobTitleGrouping).length);

  var jobTitles = Object.keys(jobTitleGrouping);

  if ( jobTitles.length > 0) {
    jobTitles.forEach(function(job){
      finalAvgStateSalPerJobtitle[job] = {};

      var singleJobForAllStates = jobTitleGrouping[job];
      var stateGrouping = lodash.groupBy(singleJobForAllStates, function(jobItem) {
        return jobItem.state;
      });
      //group by states
      // console.log('job', job, 'state', Object.keys(stateGrouping).length);

      var states = Object.keys(stateGrouping);
      if (states.length > 0) {
        // this is array
        states.forEach(function(state) {
          var singleJobForOneState = stateGrouping[state];
          var totalSalary = lodash.sum(singleJobForOneState, function(jobItem2) {
            return jobItem2.salary;
          });
          var avgSalaryForStatePerJobtitle = totalSalary / singleJobForOneState.length;

          finalAvgStateSalPerJobtitle[job][state] = avgSalaryForStatePerJobtitle;

        });
      }
    });
// console.log('finalAvg', finalAvgStateSalPerJobtitle['Word Processors and Typists']['CA']); // returns $40463
  }
});
