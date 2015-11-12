"use strict";

var trulia = require('./trulia_data.js');
var parseXML = require('xml2js').parseString;

var data = {};
parseXML(trulia, function(err, result) {
  data = result.TruliaStats;
});
var trafficStats = data.trafficStats[0].trafficStat;
var listingStats = data.listingStats[0].listingStat;

var months = {};
for (var i = 0; i < listingStats.length; i++) {
  var listingItem = listingStats[i];
  var num = listingItem.weekEndingDate[0];
  num = num.substring(0, 7);
  if (!months[num])
    months[num] = { month: num, count: 0, housingCounts: 0, medianPrice: 0, averagePrice: 0, nationalTraffic: 0 };
  var listingPrice = listingItem.listingPrice[0].subcategory[0];
  months[num].count++;
  months[num].housingCounts += parseInt(listingPrice.numberOfProperties);
  months[num].medianPrice += parseInt(listingPrice.medianListingPrice);
  months[num].averagePrice += parseInt(listingPrice.averageListingPrice);
}

for (var i = 0; i < trafficStats.length; i++) {
  var trafficItem = trafficStats[i];
  var num = trafficItem.date[0];
  num = num.substring(0, 7);                // all months objects should now exist;
  months[num].nationalTraffic += parseFloat(trafficItem.percentNationalTraffic[0]);
}

var thisMonth = (new Date()).getMonth();      // 0-based month; get 5 yrs of data, starting from last month;
var prices = Object.keys(months).map(function(key) { return months[key]; });

var counters = [];
for (var i = 0; i < prices.length; i++) {
  prices[i].housingCounts /= prices[i].count;
  prices[i].medianPrice /= prices[i].count;
  prices[i].averagePrice /= prices[i].count;

  prices[i].nationalTraffic /= prices[i].count;
  counters[i] = { month: prices[i].month, housingCounts: prices[i].housingCounts, nationalTraffic: prices[i].nationalTraffic };
  delete prices[i].count;
  delete prices[i].housingCounts;
  delete prices[i].nationalTraffic;
}

counters.reverse();
prices.reverse();                  // put latest months first;
module.exports = { prices: prices, counters: counters };

// home_stats document schema (8 fields): city: city, state: state, month: [housingCounts, medianPrice, averagePrice, nationalTraffic, rentalCounts, rentalMedian] FOR EACH MONTH;

// http://api.trulia.com/webservices.php?library=TruliaStats&function=getCityStats&city=Miami&state=FL&apikey=vb8fwj79vknntzqeva4fm93u&startDate=2014-01-01&endDate=2014-12-31
// http://images.shrinktheweb.com/xino.php?stwembed=1&stwaccesskeyid=b5c5d987ec59d94&stwsize=lg&stwurl=www.ibm.com          (stwurl MUST BE LAST!)
