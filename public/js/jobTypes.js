$(function() {
  var jobTypes = [
    "Accounting/Finance",
    "Healthcare",
    "Non=Profit/Volunteering",
    "Administrative",
    "Computer/Internet",
    "Pharmaceutical/Bio=tech",
    "Arts/Entertainment/Publishing",
    "Hospitality/Travel",
    "Real Estate",
    "Banking/Loans",
    "Human Resources",
    "Restaurant/Food Service",
    "Construction/Facilities",
    "Insurance",
    "Retail",
    "Customer Service",
    "Law Enforcement/Security",
    "Sales",
    "Education/Training",
    "Legal",
    "Telecommunications",
    "Engineering/Architecture",
    "Manufacturing/Mechanical",
    "Transportation/Logistics",
    "Government/Military",
    "Marketing/Advertising/PR",
    "Upper Management/Consulting"

  ];
  $( '#jobTypes' ).autocomplete({
    source: jobTypes
  });
});
