function setup() {
  createCanvas(500,500);

}

let images = [50,100,40];

function draw() {
  background(51);
  fill(color("green"));
  for (let x = 0; x < images.length; x++) {
    console.log(images[x]);
    rect(x,images[x], 5,5);
  }
}


