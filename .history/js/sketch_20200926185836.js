


function setup() {
  let canvas = createCanvas(250,250);
  canvas.parent("canvas1");
  background(250);
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


