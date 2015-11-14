//Define Variables
// var state = stateId;
// var color = val; // ?

// Load map into the container
$("#map-container").load("Blank_US_Map.svg", function() {
  // state abb + color in hex
  // $("#"+ state).css("fill", color);
  $("#CA").css("fill", "pink");

});

//job cat states
// var stateId = stateies.map(function(obj) {
//   var var = obj.house;
// })


// //job cat salaries
// var salaryCss = salaries.map(function(obj) {
//   var val = obj.salary;
//   return val <= 30000 ? '#E0EEEE' :
//     (val <= 60000 ? '#D1EEEE' :
//     (val <= 90000 ? '#96CDCD' :
//     (val <= 120000 ? '#388E8E' :
//     (val <= 150000 ? '#008080' :
//     'white'))));
// });



// var salaries = [ sample data here ]


/**
 * Job Cat
 * 1. Salary
 * 2. Counts
 * 3. Popularity index
 *
 * Homes
 * 1. Median Price
 * 2. Counts
 * 3. Popularity Index
 *
 * Rentals
 * 1. Median Price
 * 2. Counts
 * 3. Popularity Index
 */