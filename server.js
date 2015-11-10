"use strict";

const PORT = process.env.PORT || 3000;
var methodOverride = require('method-override');
var parser = require('body-parser');
var request = require('request-json');
var express = require('express');
var app = express();

var client = request.createClient('http://localhost:4000');    // use port different from server;
app.set ('view engine', 'jade');
app.set('views', './views');

var jobs = require('./api_data/job_listings.js');
var homes = require('./api_data/home_data.js');
var rents  = require('./api_data/rent_counts.js');
var leases = require('./api_data/rent_prices.js');

app.use(methodOverride('_method'));   // enable PUT & DELETE methods;
app.use(parser.urlencoded({ extended: true })); // parse form data;
app.use(parser.json());           // for parsing application/ json;
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('index', { jobs: jobs, rents: rents, leases: leases });
});
app.listen(PORT, function() {
  console.log('App is listening on port:', PORT);
});
