
let canvasW = 400;
let canvasH = 400;
let cellW = 20;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");

  background(240);
  translate(canvasW/2, canvasH/2);

  stroke('rgba(0%, 0%, 0%, 1)');
  line(-canvasW/2, 0, canvasW/2, 0);
  line(0, -canvasH/2, 0, canvasH/2);

  stroke('rgba(0%, 0%, 0%, 0.1)');
  for (let x = -canvasW/2; x < canvasW/2; x += cellW) {
    if (x === -canvasW/2) {
      continue;
    }
    let currentX = x/cellW;
    strokeWeight(1);
    line(x, -canvasH/2, x, canvasH/2);
    strokeWeight(2);
    line(x, -cellW/5, x, cellW/5);

    text(currentX, x, cellW);
    textAlign(CENTER, CENTER);
  }
  for (let y = -canvasH/2; y < canvasH/2; y += cellW) {
    strokeWeight(1);
    line(-canvasW/2, y, canvasW/2, y);
    strokeWeight(2);
    line(-cellW/5, y, cellW/5, y);
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