var quotes = [
  "Go ahead, make my day.",
  "I'll be back.",
  "May the Force be with you.",
  "There's no place like home.",
  "You're gonna need a bigger boat."
];

d3.select("body")
  .selectAll("p")
  .data(quotes)
  .enter()
  .append("p")
  .text(function(d) {
    return d;
  });
