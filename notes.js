                  Agenda 07/19/17

// Using d3 to navigate / manipulate the DOM
  // similar to jQuery, interchangeble
// Quick intro to SVG


// d3 selection object
d3 takes everything you select it and adds selection objects to chain methods together

// ex
d3.select("p")
  .text("I've set text using D3!") // Select the first element, even if you run it twice
  .style("font-size", "100px")

// .selectAll("some tag")
d3.selectAll("p")
  .text("woahhh")
  .style("font-size", "20px")

// can take functions, on all things on page
d3.selectAll("p")
  .text(function(cb, idx) {
    return "I am the p tag at index " + index
  })
  .style("font-size", "20px")
  // if there are multiple tags of a certain kind, goes through all tags and assign index

now, example of a chain
d3.select("body") //wraps html element into more code
                  // can select p > h1
  .selectAll("p") // p tags don't exist in the first place
                  // will append tags outside of body if not insered
  .data(quotes) // bind data to elements in the page, creates enter and exit selection array
                // creates new elements in enter if the data has more than the element that was passed (usually 0 or 1)
  .enter() // what
  .append("p") // can specify any tag, and it will add this, regardless of what tag you pass in to selectAll
    .text(function(d) { // best practice to show end
      return d;
  });

  // can be used as getters or setters
    // Getter
    d3.select("p").text()

    // Setter
    d3.select("p").text("set")


  // if there are more p tags than data for p tag, then the rest of p tags get pushed to remove array
  // throw away with:
  ...
  .exit()
  .remove()

d3.select("body").node() // grab the html from the d3 constructed syntax


// Data in an array of objects
  .text((d,i) => "quote #" + i + " is " + d.text)
  .style('color', d => d.color)
