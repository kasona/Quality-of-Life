var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream('./util/jobCategoryjobTitle.csv');
var stream = fs.createReadStream('./util/jobtitleCitySalary.csv');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var masterList = [];
var mongoose = require('mongoose');
var lodash = require('lodash');
mongoose.connect('mongodb://localhost:27017/job-imports');


//define schema for import data from indeed
var JobWithCatSchema = Schema({
  jobCategory: String,
  jobtitle: String,
  salary: Number
  });

//attach schema to model
var JobCat = mongoose.model('JobCat', JobWithCatSchema);

// read in CSV as stream row by row
csv.fromStream(stream, {headers:true})
    .on('data', function(data){
      console.log(data);
      // masterList.push(data);
      addJobCatToCollection(data);
    })
    .on('end', function(){
      // console.log('done');
      console.log(masterList.toString());
    });

function addJobCatToCollection(data){

  //create model and save to database
  var jobCat = new JobCat(data);
  // console.log(jobCat);
  jobCat.save(function (err) {
    if (err) // ...
    console.log(err);
  });
}



//define schema for import data
var JobSchema = Schema({
  state: String,
  city: String,
  jobtitle: String,
  salary: Number});

//attach schema to model
var Job = mongoose.model('Job', JobSchema);

// read in CSV as stream row by row
csv.fromStream(stream, {headers:true})
    .on('data', function(data){
      // console.log(data);
      // masterList.push(data);
      addJobToCollection(data);
    })
    .on('end', function(){
      // console.log('done');
      console.log(masterList.toString());
    });

function addJobToCollection(data){

//   //create model and save to database
  var job = new Job(data);
  // console.log(job);
  job.save(function (err) {
    if (err) // ...
    console.log(err);
  });
}




/*
var salaryAvg = Job.find(function(err, result){
  var finalAvgStateSalPerJobtitle = {};  // see below for example of what is returned

  // console.log('results', err,result); // results.length = 65499 entries
  var getJobTitles = lodash.groupBy(result, function(job){
    return job.jobtitle;
  });
  // group by jobtitles
  // console.log('getJobTitles', Object.keys(getJobTitles)); // total jobtitles = 828

  var jobTitles = Object.keys(getJobTitles);  // array of jobtitles (828)

  if ( jobTitles.length > 0) {
    jobTitles.forEach(function(job){
      finalAvgStateSalPerJobtitle[job] = {};
      // console.log('finalAvgStateSalPerJobtitle', finalAvgStateSalPerJobtitle);
      var singleJobForAllStates = getJobTitles[job];  // array of a jobtitle with an object key values of salary, jobtitle,city, state, and id
      var stateGrouping = lodash.groupBy(singleJobForAllStates, function(jobItem) {
        return jobItem.state;
      });

      //group by states
      // console.log('job', job, 'state', Object.keys(stateGrouping).length); // returns job Writers and Authors state 20
      // console.log('@@@@@@@', stateGrouping); // returns an object key is state value is array with object of individual city

      var states = Object.keys(stateGrouping);
      if (states.length > 0) {
        // this is array
        states.forEach(function(state) {
          var singleJobForOneState = stateGrouping[state];
          // console.log('@@@@@@@@', singleJobForOneState);
          var totalSalary = lodash.sum(singleJobForOneState, function(jobItem2) {
            return jobItem2.salary;
          });
          var avgSalaryForStatePerJobtitle = totalSalary / singleJobForOneState.length;
           console.log( singleJobForOneState + "  " +  avgSalaryForStatePerJobtitle);

          finalAvgStateSalPerJobtitle[job][state] = avgSalaryForStatePerJobtitle;



        });
      }


    });
// console.log('finalAvg', finalAvgStateSalPerJobtitle['Word Processors and Typists']['HI']); // returns $40463


    // console.log(wordProcessor['state']);
  }
//     var wordProcessor = Object.keys(finalAvgStateSalPerJobtitle['Word Processors and Typists']).length;
//     var salaries = finalAvgStateSalPerJobtitle['Word Processors and Typists'];
//     console.log(salaries);


// // console.log('finalAvg', finalAvgStateSalPerJobtitle['Word Processors and Typists'][state]); // returns $40463
// // console.log('wordProcessor', wordProcessor); // returns $40463
//     for(var i=0; i < wordProcessor; i++){

//       console.log(salaries['state']);
//     }
});



/* what is returned for finalAvgStateSalPerJobtitle

'Word Processors and Typists':
   { AK: 35360,
     AL: 35753.333333333336,
     AR: 32620,
     AZ: 29885,
     CA: 40462.8,
     CO: 38295,
     CT: 40570,
     DC: 39730,
     DE: 44790,
     FL: 26688.666666666668,
     GA: 36110,
     HI: 32230,
     IA: 34388,
     ID: 25425,
     IL: 34990,
     IN: 27610,
     KY: 34240,
     LA: 31050,
     MA: 41085 },

 */

