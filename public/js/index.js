window.onload = function() {
  var plays = d3.select('#plays');
  var data = [4, 8, 15, 16, 23, 42];

  plays
  .selectAll("div")
  .data(data)
  .enter().append('div')
  .style("width", function(d) { return d * 10 + "px"; })
  .text(function(d) { return d; });
};
