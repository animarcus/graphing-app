
let canvasW = 400;
let canvasH = 400;

function setup() {
  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");
  background(240);
}


let images = [];
for (let x = 0; x < 500; x = x + 10) {
  let result = (x*x)/2;
  result = -result + 245;
  images.push(result);
}

console.table(images);

function draw() {
  
  fill(color("green"));
  for (let x = 0; x < images.length; x++) {
    rect(x,images[x], 5,5);
  }
}


