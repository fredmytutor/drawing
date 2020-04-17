const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(200, 200);
  };

  s.draw = () => {
    s.background(0);
  };
};

const myp5 = new p5(sketch);
