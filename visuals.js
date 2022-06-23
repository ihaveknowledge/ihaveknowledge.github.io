
// Create variables here
var myArray = ["#ff0000", "#0000ff", "#00ff40", "#ff00bf", "#ff8000", "#ffff00"];
var opac = 0.2


var w = window.innerWidth * 0.9;
var h = window.innerHeight - 230;
var newShapes = 25;
var svg = d3.select("#canvas").append("svg").attr("width", w).attr("height", h);
var randomColour = myArray[Math.floor(Math.random()*myArray.length)];
var circleCount = 0;

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
const dmodeOutput = document.querySelector('#dmode');


function clean_board() {
    myCircles = d3.selectAll("circle")._groups[0];
    circleCount = myCircles.length;
    //console.log(circleCount);
    for(let i = 0; i < circleCount; i++) {
      myCircles[i].remove();
    }

    myRect = d3.selectAll("rect")._groups[0];
    rectCount = myRect.length;
    //console.log(circleCount);
    for(let i = 0; i < rectCount; i++) {
      myRect[i].remove();
    }
}

function draw_circles() {
  for (let i = 0; i < newShapes; i++) {
    var randomColour = myArray[Math.floor(Math.random()*myArray.length)];
    svg.append("circle")
        .attr("r", Math.random()*100)
        .attr("cx", Math.random()*w)
        .attr("cy", Math.random()*h)
        .style("opacity", 0.2)
        .style("fill", randomColour);
  }
}


function draw_squares() {
  for (let i = 0; i < newShapes; i++) {
    var randomColour = myArray[Math.floor(Math.random()*myArray.length)];
    svg.append("rect")
        .attr("width", Math.random()*200)
        .attr("height", Math.random()*200)
        .attr("x", Math.random()*w)
        .attr("y", Math.random()*h)
        .style("opacity", opac)
        .style("fill", randomColour);

  }
}


function reportWindowSize() {
  h = window.innerHeight - 230;
  w = window.innerWidth * 0.95;
  svg.attr("height", h);
  svg.attr("width", w);

}

window.onresize = reportWindowSize;
