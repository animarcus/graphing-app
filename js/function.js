class func {
  constructor(a,b) {
    this.a = Number(a);
    this.b = Number(b);
    this.domain = [-canvasW/2, canvasW/2];
    this.results = [];
    console.log(this.a);
  }
  calc1dFunc() {
    for (let x = this.domain[0]/cellW; x <= this.domain[1]/cellW; x += 1) {
      this.y = this.a*x+this.b;
      this.currentRes = {"x": x, "y": this.y};
      this.results.push(this.currentRes);
    }
    console.log(this.results);
  }
  drawFunc() {
    translate(canvasW/2, canvasH/2);
    // rect(50,50,50,50);
    stroke('rgba(0%, 0%, 0%, 1)');
    for (let curr = 1; curr < this.results.length; curr ++) {
      let current = {"x": this.results[curr].x*cellW, "y": this.results[curr].y*cellW};
      let previous = {"x": this.results[curr-1].x*cellW, "y": this.results[curr-1].y*cellW};

      stroke('rgba(0%, 0%, 0%, 1)');
      line(previous.x, -previous.y, current.x, -current.y);
      stroke('rgba(0%, 0%, 0%, 0)');
      rect(current.x-5,-current.y-5,10,10);
      if (current.x/cellW !== 0) {
        // text(["(",current.x/cellW ,";" , current.y/cellW, ")"].join(""), current.x +cellW/2, -current.y +cellW/2);
      }
      // previous = {"x": current.x*cellW, "y": current.y*cellW};
    }

  }
}



