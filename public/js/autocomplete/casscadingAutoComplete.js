$(function() {
  $("#country").autocomplete({
      source: [
          "Argentina",
          "Venezuela",
          "Italia",
          "Russia",
          "China",
          "Australia"
      ]
  });
  $("#city").autocomplete({
      source: function(request, response) {
          var country = $("#country").val(),
              cities = [
                  "City 1, " + country,
                  "City 2, " + country,
                  "City 3, " + country,
                  "City 4, " + country
              ];
          var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term ), "i" );
          response($.grep(cities, function(value) {
              return matcher.test(value);
          }));
      }
  });
  $("#street").autocomplete({
      source: function(request, response) {
          var city = $("#city").val(),
              streets = [
                  "Street 1, " + city,
                  "Street 1, " + city,
                  "Street 1, " + city,
                  "Street 1, " + city
              ];
          var matcher = new RegExp($.ui.autocomplete.escapeRegex( request.term ), "i" );
          response($.grep(streets, function(value) {
              return matcher.test(value);
          }));
      }
  });

  $.cascadingAutocompletes(["#country", "#city", "#street"]);
});