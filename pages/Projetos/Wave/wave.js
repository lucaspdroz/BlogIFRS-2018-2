/* 
    About this sketch(MIT):

    The main idea is to show a graphical
    interface using waveform of a math expression and variants
            Wave sin(.5x);

    Inspired on math and Siri (wave talk)

    Developed by Lucas Pacheco 
*/


// Global Variables goes Here:
let angle = 0;

function setup() {
    // Create a 2D canvas setting max width and hight of the window
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0);
    // Translate to center
    translate(width / 2, height / 2);
    rectMode(CENTER);

    // Every frame create a new offset to render to a new position
    let offset = 0;

    // Blue Wave (Long + fast wave)
    for (var x = 0; x < width; x += 10) {
        // var a =  is a control to angle and  
        let a = angle * 3 + offset / 2;
        let h = map(sin(a), 1, -1, 0, 100);
        fill(22, 96, 188);
        // Create a rect (position,min size,max size, based on map
        rect(x - width / 2, 0, 3, h);
        offset -= 0.12;
    }
    // Green Wave (medium + slow wave)
    for (var x = 0; x < width; x += 10) {
        let a = angle + offset;
        let h = map(sin(a), -1, 1, 0, 100);
        fill(40, 139, 128);
        // Create a rect (position,min size,max size, based on map
        rect(x - width / 2, 0, 2, h);
        offset += 0.12;

    }

    // Red Wave (medium + slow wave)
    for (var x = 0; x < width; x += 10) {
        let a = angle * 2 + offset;
        let h = map(sin(a), 1, -1, 0, 100);
        fill(133, 53, 73);
        // Create a rect (position,min size,max size, based on map
        rect(x - width / 2, 0, 2, h);
        offset -= 0.12;
    }


    //Control the Speed of the Wave
    angle += 0.04;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}