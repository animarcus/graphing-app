let graph = [];
let canvasW = 400;
let canvasH = 400;
let cellW = 50;
let validityText;
let droite;
let a = 1;
let b = 0;
let degree = 1;


function setup() {
  frameRate(1);


  console.log(a,b);
  droite = new func(a,b);
  droite.calc1dFunc();

  let canvas = createCanvas(canvasW,canvasH);
  canvas.parent("canvas1");

  background(240);
  translate(canvasW/2, canvasH/2);

  stroke('rgba(0%, 0%, 0%, 1)');
  line(-canvasW/2, 0, canvasW/2, 0);
  line(0, -canvasH/2, 0, canvasH/2);

  stroke('rgba(0%, 0%, 0%, 0.1)');
  textAlign(CENTER, BOTTOM);
  textSize(cellW/2);
  for (let x = -canvasW/2; x < canvasW/2; x += cellW) {
    if (x === -canvasW/2 || x === canvasW/2 || x === 0) {
      continue;
    }
    let currentX = round(x/cellW);
    strokeWeight(1);
    line(x, -canvasH/2, x, canvasH/2);
    strokeWeight(2);
    line(x, -cellW/5, x, cellW/5);
    fill(color("green"));
    text(currentX, x, cellW);
  }
  textAlign(CENTER, CENTER);
  for (let y = -canvasH/2; y < canvasH/2; y += cellW) {
    if (y === -canvasH/2 || y === canvasH/2 || y === 0) {
      continue;
    }
    let currentY = round(-y/cellW);
    strokeWeight(1);
    line(-canvasW/2, y, canvasW/2, y);
    strokeWeight(2);
    line(-cellW/5, y, cellW/5, y);
    text(currentY, cellW/2, y);
  }
  // funcVis.processFunc();
  validityText = text("", 0,0);
}


function draw() {
  fill(color("green"));
  droite.drawFunc();
}


//in input use regex to format function accordingly

function update() {
  clear();
  droite = null;
  inputA = document.getElementById("inputA").value;
  inputB = document.getElementById("inputB").value;
  a = inputA;
  b = inputB;
  setup();
}

function resizeGrid(W,H,CW) {
  if (W > 0) {
    console.log("a");
    canvasW = W;
  }
  if (H > 0) {
    canvasH = H;
  }
  if(CW > 0) {
    cellW = CW;
  }

  clear();
  droite = null;
  setup();
}

function changeDegree() {
  let example = document.getElementById("exampleFunc");
  if (degree === 1) {
    example.innerHTML = "f(x) = ax^2 + b";
    degree = 2;
  } else if (degree === 2) {
    example.innerHTML = "f(x) = ax + b";
    degree = 1;
  }
  update();

}


  // if (!((canvasW/100)%(canvasH/100) === 0 || (canvasW/100)%(canvasH/100) === 2)) {
  //   while (!((canvasW/100)%(canvasH/100) === 0 || (canvasW/100)%(canvasH/100) === 2)) {
  //     canvasW += 1;
  //   }
  // } else if (!((canvasH/100)%(canvasW/100) === 0 || (canvasH/100)%(canvasW/100) === 2)) {
  //   while (!((canvasH/100)%(canvasW/100) === 0 || (canvasH/100)%(canvasW/100) === 2)) {
  //     canvasH +=1;
  //   }
  // } else {
  //   console.log("bad spacing");
  // }