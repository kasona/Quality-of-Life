"use strict";

var topics = [
                {
                    "jobtitle" : "Sr. Java Developer",
                    "company" : "Texas Mutual Insurance Company",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "Texas Mutual Insurance Company",
                    "date" : "Thu, 29 Oct 2015 20:54:34 GMT",
                    "snippet" : "Texas Mutual Insurance Company is the state's leading provider of workers' compensation insurance, and we offer exceptional customer service and competitive",
                    "url" : "http://www.indeed.com/viewjob?jk=50f56da573a2eb1b&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "50f56da573a2eb1b",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "9 days ago"
}
,
                {
                    "jobtitle" : "Systems Analyst - Java Production Support Job",
                    "company" : "Visa",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "Visa",
                    "date" : "Sat, 07 Nov 2015 06:20:15 GMT",
                    "snippet" : "Systems Analyst - <b>Java</b> Production Support. As part of the team \u2013 you will be responsible for supporting critical applications and ensure the stability of the...",
                    "url" : "http://www.indeed.com/viewjob?jk=cbbfcf5361f3af5b&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "cbbfcf5361f3af5b",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "15 hours ago"
}
,
                {
                    "jobtitle" : "Entry Level Java Developer\u00A0",
                    "company" : "National Software Management",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "Indeed",
                    "date" : "Thu, 05 Nov 2015 16:18:03 GMT",
                    "snippet" : "PHP, python, C++, C#, Perl, <b>Java</b> script, <b>Java</b>, JQuery. Free <b>java</b> training. National software Management is currently seeking an Entry Level <b>Java</b> Developer for...",
                    "url" : "http://www.indeed.com/viewjob?jk=950b5f07e3481bfe&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "950b5f07e3481bfe",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : true,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "2 days ago"
}
,
                {
                    "jobtitle" : "Java Programmer",
                    "company" : "Dept of Family & Protectve Svc",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "Texas Health and Human Services Commission",
                    "date" : "Thu, 05 Nov 2015 05:24:40 GMT",
                    "snippet" : "This position functions as a Programmer on the development and maintenance of applications for use by Texas Department of Family and Protective Services (DFPS)...",
                    "url" : "http://www.indeed.com/viewjob?jk=f6650e325e8ed420&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "f6650e325e8ed420",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "2 days ago"
}
,
                {
                    "jobtitle" : "Entry Level Java Developer",
                    "company" : "AMG TECHNOLOGY",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "AMG TECHNOLOGY",
                    "date" : "Sat, 07 Nov 2015 05:12:40 GMT",
                    "snippet" : "<b>Java</b> script, <b>Java</b>, JQuery. Entry Level <b>Java</b> Developer. National software Management is currently seeking an Entry Level <b>Java</b> Developer for an awesome...",
                    "url" : "http://www.indeed.com/viewjob?jk=450b6c0634f43521&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.21978,
                    "longitude" : -97.74725,
                    "jobkey" : "450b6c0634f43521",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX 73301",
                    "formattedRelativeTime" : "16 hours ago"
}
,
                {
                    "jobtitle" : "Application Developer - Java/Websphere",
                    "company" : "IBM",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "IBM",
                    "date" : "Sun, 01 Nov 2015 03:05:45 GMT",
                    "snippet" : "Job Description Want your skills to make a difference in how the world works - for the better? IBM is seeking keen-minded Application Developers interested",
                    "url" : "http://www.indeed.com/viewjob?jk=ba3909ba5e8c2d4f&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "ba3909ba5e8c2d4f",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "6 days ago"
}
,
                {
                    "jobtitle" : "Software as a Service (SaaS) Java Backend Software Developer",
                    "company" : "IBM",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "IBM",
                    "date" : "Wed, 04 Nov 2015 12:34:59 GMT",
                    "snippet" : "At least 2 years experience in developing with <b>Java</b>, Node.js or a similar server-side language. We are looking for a Software as a Service (SaaS) <b>Java</b> Developer...",
                    "url" : "http://www.indeed.com/viewjob?jk=4b0c5868661bbdce&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "4b0c5868661bbdce",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "3 days ago"
}
,
                {
                    "jobtitle" : "Application developer - JAVA",
                    "company" : "IBM",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "IBM",
                    "date" : "Sun, 01 Nov 2015 03:06:20 GMT",
                    "snippet" : "Job Description NOTE: This role has been created to support the deployment of the HRMS system. It is not to be used for Expertise Assessment. It should not",
                    "url" : "http://www.indeed.com/viewjob?jk=136fe66663f9de53&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "136fe66663f9de53",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "6 days ago"
}
,
                {
                    "jobtitle" : "Watson - Lead (Java) Software Developer",
                    "company" : "IBM",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "IBM",
                    "date" : "Thu, 05 Nov 2015 06:20:34 GMT",
                    "snippet" : "<b>Java</b> server/system programming. At least 3 years experience in <b>Java</b> Programming. Want to become a cognitive computing ninja?...",
                    "url" : "http://www.indeed.com/viewjob?jk=016c38057dccc6c6&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "016c38057dccc6c6",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "2 days ago"
}
,
                {
                    "jobtitle" : "Java Developer",
                    "company" : "IMCSGroup",
                    "city" : "Austin",
                    "state" : "TX",
                    "country" : "US",
                    "formattedLocation" : "Austin, TX",
                    "source" : "Indeed",
                    "date" : "Tue, 03 Nov 2015 22:44:06 GMT",
                    "snippet" : "<b>Java</b> Developer with Web Technologies, Spring Framework, Spring MVC Experience (Years) 6-8 Essential Skills:. \u2022 6-8 years of experience with hands-on application...",
                    "url" : "http://www.indeed.com/viewjob?jk=c345823f55d29817&qd=_Eg2vwv-W7Xbq1qTFtzNjPwFJhFFPMLqFHk4M6z6lYkRdIPXjia8Il1dvSZwyXqexGaJuUHnzN1O6VcQMeMGPRUSSI4ppkJuinSZOLzLdes&indpubnum=1588917421720308&atk=1a3hu55985tdncdh",
                    "onmousedown" : "indeed_clk(this, '8763');",
                    "latitude" : 30.266483,
                    "longitude" : -97.74176,
                    "jobkey" : "c345823f55d29817",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : true,
                    "formattedLocationFull" : "Austin, TX",
                    "formattedRelativeTime" : "3 days ago"
  }
];

var jobs = [];
for(var i = 0; i < topics.length; i++){
  var data = [
    {
      name : 'jobtitle',
      val : topics[i].jobtitle
    },
    {
      name : 'company',
      val : topics[i].company
    },
    {
      name : 'snippet',
      val : topics[i].snippet
    },
    {
      name : 'url',
      val : topics[i].url
    },
    {
      name : 'latitude',
      val : topics[i].latitude
    },
    {
      name : 'longitude',
      val : topics[i].longitude
    }
  ];
  jobs.push(data);
}

module.exports = jobs;