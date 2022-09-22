// p5.js - fractalTree.js
let angle = 0.48;

function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, PI, angle, 0).class("slider");
}

function draw() {
    background(255);
    angle = slider.value();
    // red
    stroke(255, 0, 0);
    translate(width / 2.05, height/1.5);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 6) {
        // left side of the tree
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        // right of the tree
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}

// DD/MM/YYYY-HH:mm