
let canvasW = 400;
let canvasH = 400;
let offsetX = canvasW/2;
let offsetY = canvasH/2;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");
  background(240);
}

console.table(images);

function draw() {

  fill(color("green"));
  for (let x = 0; x < images.length; x++) {
    rect(x,images[x], 5,5);
  }
}


