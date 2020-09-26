function setup() {
  createCanvas(500,250);
}
let images = [];
for (let i = 0; i < 500; i = i + 10) {
  let result = i;
  result = -result + 495;
  images.push(result);
}


function draw() {
  background(200);
  fill(color("green"));
  for (let x = 0; x < images.length; x++) {
    rect(x,images[x], 5,5);
  }
}


