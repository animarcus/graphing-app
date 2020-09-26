function setup() {
  createCanvas(500,250);
}
let images = [];
for (let x = 0; x < 500; x = x + 10) {
  let result = (x*x)/2;
  result = -result + 245;
  images.push(result);
}

console.table(images);
function draw() {
  background(200);
  fill(color("green"));
  for (let x = 0; x < images.length; x++) {
    rect(x,images[x], 5,5);
  }
}


