function setup() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  createCanvas(width, height);
  windowResized();

  // createCanvas(400, 400);
}

function draw() {
  background(205);
  smooth();
  noFill();
  // quad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) or quad(x1, y1, x2, y2, x3, y3, x4, y4)
  /*
    where:
      x1	Number: the x-coordinate of the first point
      y1	Number: the y-coordinate of the first point
      x2	Number: the x-coordinate of the second point
      y2	Number: the y-coordinate of the second point
      x3	Number: the x-coordinate of the third point
      y3	Number: the y-coordinate of the third point
      x4	Number: the x-coordinate of the fourth point
      y4	Number: the y-coordinate of the fourth point
      z1	Number:
      z2	Number:
      z3	Number:
      z4	Number:
  */
 noFill();
 stroke(2, 0, 128);
 quad(205, 150, -180, 550, 10, 170, 80, 10);

  fill(255, 204, 255);
  stroke(128, 0, 128);
  quad(5, 50, 180, 550, 0, 200, 400, 0);

  fill(255, 204, 255);
  stroke(128, 0, 128);
  quad(5, 50, 180, 50, 0, 0, 0, 0);

  fill(0, 204, 255);
  stroke(0);
  quad(106, 470, 300, 50, 0, 400, 100, 30);

  fill(0, 204, 10);
  stroke(0);
  quad(406, 470, 800, 150, 200, 400, 400, 130);
}

function polygon(n, cx, cy, r) {
  angle = 360.0 / n;

  for (i in n.lenght) {
    beginShape();
    vertex(cx + r * cos(radians(angle * i)), cy + r * sin(radians(angle * i)));
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}