class func {
  constructor(a,b) {
    this.a = Number(a);
    this.b = Number(b);
    this.domain = [-canvasW/2, canvasW/2];
    this.results = [];
    if (degree === 1) {
      this.iterate = 1;
    } else if (degree === 2) {
      this.iterate = 0.2;
    }
  }
  calc1dFunc() {
    for (let x = this.domain[0]/cellW; x <= this.domain[1]/cellW; x += this.iterate) {
      if (degree === 1) {
        this.y = this.a*x+this.b;
      } else if (degree === 2) {
        this.y = this.a*x*x+this.b;
      }
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
      rect(current.x-2,-current.y-2,4,4);
      if (current.x/cellW !== 0) {
        // text(["(",current.x/cellW ,";" , current.y/cellW, ")"].join(""), current.x +cellW/2, -current.y +cellW/2);
      }
      // previous = {"x": current.x*cellW, "y": current.y*cellW};
    }

  }
}



