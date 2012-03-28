window.onload = function() {
  var plays = d3.select('#plays');
  var data = [4, 8, 15, 16, 23, 42];

  // Scaling Functions 
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

  var y = d3.scale.ordinal()
    .domain(data)
    .rangeBands([0, 120]);

  // Generate the bars for the 'plays' chart
  plays
  .selectAll('rect')
  .data(data)
  .enter().append('rect')
  .attr('y', function(d, i) { return i*20;})
  .attr('width', x)
  .attr('height', y.rangeBand());

  // Generate the text for the 'plays' chart
  plays.selectAll("text")
    .data(data)
    .enter().append("text")
    .attr("x", x)
    .attr("y", function(d) { return y(d) + y.rangeBand() / 2; })
    .attr("dx", -3) // padding-right
    .attr("dy", ".35em") // vertical-align: middle
    .attr("text-anchor", "end") // text-align: right
    .text(String);
};
