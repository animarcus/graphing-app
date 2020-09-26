
let canvasW = 400;
let canvasH = 400;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");
  
  background(240);
}


function draw() {
  fill(color("green"));
  translate(canvasW/2, canvasH/2);
  // rect(0,0,50,50);
  drawHandlers.drawGrid();
}


let drawHandlers = {
  drawGrid : function() {
    console.table(-canvasH/2, canvasH/2);
    
    // translate(canvasW/2, canvasH/2);
    stroke(0);
    strokeWeight(5)
    line(-canvasH/2, canvasH/2);
    
  }
}