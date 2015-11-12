

$(function() {
  function log( message ) {
    $( "<div>" ).text( message ).prependTo( "#list" );
    $( "#list" ).scrollTop( 0 );
  }

  var jobCatTypes = [
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
  ];
  $( '#jobCatTypes' ).autocomplete({
    source: jobCatTypes,
    select: function( event , ui ){
      log( ui.item ?
        "Selected : " + ui.item.value + " aka " + ui.item.id : "Nothing selected " + this.value);
    }

  });

});
