const sketch = (s) => {
  s.setup = () => {
    s.background('fff');
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  s.draw = () => {
  };
};

const myp5 = new p5(sketch, 'sketch');
