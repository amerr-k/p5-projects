function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  drawSierpinski(180, 450, 348, 120, 516, 450);
}

let drawSierpinski = (x1, y1, x2, y2, x3, y3) => {
  triangle(x1, y1, x2, y2, x3, y3);

  setInterval(() => {
    drawSierpinski(
      x1,
      y1,
      (x2 + x1) / 2,
      (y2 + y1) / 2,
      (x3 + x1) / 2,
      (y3 + y1) / 2
    );
    drawSierpinski(
      (x2 + x1) / 2,
      (y2 + y1) / 2,
      x2,
      y2,
      (x3 + x2) / 2,
      (y3 + y2) / 2
    );
    drawSierpinski(
      (x3 + x1) / 2,
      (y3 + y1) / 2,
      (x3 + x2) / 2,
      (y3 + y2) / 2,
      x3,
      y3
    );
  }, 1000);
};
