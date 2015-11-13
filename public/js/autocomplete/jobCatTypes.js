

$(function() {

  var jobTitlesPerCat = [];
  $( '#jobCatTypes' ).autocomplete({
    source: [
      "Accounting/Finance Jobs",
      "Administrative Jobs",
      "Arts/Entertainment/Publishing",
      "Banking/Loans",
      "Construction/Facilities",
      "Customer Service",
      "Education/Training",
      "Engineering/Architecture",
      "Government/Military",
      "Healthcare",
      "Computer/Internet Jobs",
      "Hospitality/Travel",
      "Human Resources Jobs",
      "Insurance",
      "Law Enforcement/Security",
      "Legal",
      "Manufacturing/Mechanical",
      "Marketing/Advertising/PR",
      "Non-Profit/Volunteering",
      "Pharmaceutical/Bio-tech",
      "Real Estate",
      "Restaurant/Food Service",
      "Retail",
      "Sales",
      "Telecommunications",
      "Transportation/Logistics",
      "Upper Management/Consulting"
    ],
    select: function( event , ui ){

      var jobtitle = autocomplete[ui.item.value].JobTitles;
      for(var i = 0; i < jobtitle.length; i++) {
        // console.log(jobtitle[i].name);
        var titles = jobtitle[i].name;
        jobTitlesPerCat.push(titles);
        console.log(jobTitlesPerCat);
      }
    }
  });

  $("#jobtitleTypes").autocomplete({
    source: function(request, response) {
      var country = $("#jobCatTypes").val();
          console.log(jobTitlesPerCat);
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term ), "i" );
      response($.grep(jobTitlesPerCat, function(value) {
          return matcher.test(value);
      }));
    }
  });

  $.cascadingAutocompletes(["#jobCatTypes", "#jobtitleTypes"]);

});


  var autocomplete = {
    "Accounting/Finance Jobs": {
      "JobTitles": [
        {
          name: "Account Manager",
          salary: "30000"
        }, {
          name: "Bank Teller",
          salary: "45000"
        }]

    },
    "Administrative Jobs": {
      "JobTitles": [
        {
          name: "qAccount Manager",
          salary: "30000"
        }, {
          name: "qBank Teller",
          salary: "45000"
        }]
    }
  };
