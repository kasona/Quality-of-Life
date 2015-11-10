"use strict";

var trulia = require('trulia_data');
var parseXML = require('xml2js').parseString;

var data = {};
parseXML(trulia, function(err, result) {
  data = result;
});

// http://api.trulia.com/webservices.php?library=TruliaStats&function=getCityStats&city=Miami&state=FL&apikey=vb8fwj79vknntzqeva4fm93u&startDate=2014-01-01&endDate=2014-12-31
