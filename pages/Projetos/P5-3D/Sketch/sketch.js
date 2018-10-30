var obj3D;
var img;

function preload() {
    obj3D = loadModel('3DModels/deer.obj');
    img = loadImage('3DModels/texture.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    setAttributes('antialias', true);
    createEasyCam({ distance: 2800 });
}

function draw() {
    background(8);
    stroke(0);
    rotateX(2.9);
    texture(img);
    rotateY(frameCount * -0.01);
    translate(0, -(width / 2), 0);
    model(obj3D);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

document.oncontextmenu = function () { return false; }
document.onmousedown = function () { return false; }