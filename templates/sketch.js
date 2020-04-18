const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  s.draw = () => {
    s.background('fff');
  };
};

const myp5 = new p5(sketch, 'sketch');
