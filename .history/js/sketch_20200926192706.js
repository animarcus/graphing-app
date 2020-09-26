
let canvasW = 400;
let canvasH = 400;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");

  background(240);
  translate(canvasW/2, canvasH/2);

  line(-canvasW/2, 0, canvasW/2, 0);
  line(0, -canvasH/2, 0, canvasH/2);
}


function draw() {
  fill(color("green"));
  drawHandlers.drawGrid();
}


let drawHandlers = {
  drawGrid : function() {
  
  }
};