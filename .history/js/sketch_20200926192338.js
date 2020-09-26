
let canvasW = 400;
let canvasH = 400;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");
  drawHandlers.drawGrid();
  background(240);
}


function draw() {
  fill(color("green"));
  translate(canvasW/2, canvasH/2);
  // rect(0,0,50,50);
  
}


let drawHandlers = {
  drawGrid : function() {
    strokeWeight(1.5);
    line(0, -canvasH/2, 0, canvasH/2);
    line(-canvasW/2, 0, canvasW/2, 0);
  }
}