
let canvasW = 400;
let canvasH = 400;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");

  background(240);
  translate(canvasW/2, canvasH/2);

  stroke('rgba(0%, 0%, 0%, 1)');
  // strokeWeight(1.1);
  line(-canvasW/2, 0, canvasW/2, 0);
  line(0, -canvasH/2, 0, canvasH/2);

  // strokeWeight(1);
  stroke('rgba(0%, 0%, 0%, 0.1)');
  for (let x = -canvasW/2; x < canvasW/2; x += 20) {
    line(x, -canvasH/2, x, canvasH/2);
  }
  for (let y = -canvasH/2; y < canvasH/2; y += 20) {
    line(-canvasW/2, y, canvasW/2, y);
  }
}


function draw() {
  fill(color("green"));
  drawHandlers.drawGrid();
}


let drawHandlers = {
  drawGrid : function() {
    
  }
};