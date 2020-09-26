
let canvasW = 400;
let canvasH = 400;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");
  
  background(240);
}

// console.table(images);

function draw() {
  fill(color("green"));
  translate(canvasW/2, canvasH/2);
  rect(0,0,50,50);
}


let drawHandlers = {
  drawGrid : function() {
    translate(canvasW/2, canvasH/2);
    line(-canvasH/2, canvasH/2);
    stroke(color("black"));
  }
}