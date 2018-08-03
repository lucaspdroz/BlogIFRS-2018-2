

function setup() {
    createCanvas(windowWidth, windowHeight + 50);
    // initial angle
    var angle = 0.48;
    // The values represents(min of slider, half of the slider, the angle(as default 0.48 or PI/8),max of slider) 
    //and add a class to the element.
    slider = createSlider(0, TWO_PI, angle, 0).class("slider");

}


function draw() {
    background(255);
    //"get.value()"
    angle = slider.value();
    // red
    stroke(255, 0, 0);
    // center the object
    translate(width / 2, height / 1.5);
    // braches created
    branch(100);
}

// get the atribute and add to len
function branch(len) {
    line(0, 0, 0, - len);
    translate(0, -len);

    if (len > 6) {
        // Mirror Effect draw

        // left of the tree
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
