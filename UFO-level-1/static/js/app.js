//`datetime`, `city`, `state`, `country`, `shape`, durationMinutes, and `comment`.. need
//datetime: "1/1/2010"
//console.log("what do we have in this script?");
// from data.js
var tableData = data;

// YOUR CODE HERE!

var datetimes = [];
var cities = [];
var states = [];
var countries = [];
var shapes = [];
var durationMin = [];
var comment = [];

tableData.forEach((table) => {
    Object.entries(table).forEach(([key, value]) => {
        if (key === "datetime") {
            datetimes.push(value);
        }
        else if (key === "city") {
            cities.push(value)
        }
        else if (key === "state") {
            states.push(value)
        }
        else if (key === "country") {
            countries.push(value)
        }
        else if (key === "shape") {
            shapes.push(value)
        }
        else if (key === "durationMinutes") {
            durationMin.push(value)
        }
        else if (key === "comments") {
            comment.push(value)
        }
    });
});
//console.log(datetimes);
//console.log(cities);
//console.log(states);
//console.log(countries);
//console.log(shapes);
//console.log(durationMin);
//console.log(comment);


var sightings = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", filterTable);
form.on("submit", filterTable);
function filterTable() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  //console.log(inputValue);
  //console.log(sightings);

  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

}

