function setup() {
  createCanvas(1200, 1500, WEBGL);
}
function draw() {
  //move the camera away from the plane by a sin wave
  camera(0, 0, sin(frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0);
  plane(120, 120);
}