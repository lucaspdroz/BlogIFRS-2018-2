function preload() {
    // Here you place the Sound archive to play
    sound = loadSound('The_Model_-_1_The_Model_-_I_Am_Always_on_Your_Mind2.mp3');
}

function setup() {
    // create a canvas with width and height of the window
    var cnv = createCanvas(windowWidth, windowHeight);

    // calls the function tooglePlay
    cnv.mouseClicked(togglePlay);

    // Create a instance of the
    fft = new p5.FFT();
    sound.amp(0.2);

}

function draw() {
    background(0);

    var positive = 2;
    var negative = -2;
    var spectrum = fft.analyze();
    noStroke();
    fill(0, 177, 136); // spectrum is green
    for (var i = 0; i < spectrum.length; i++) {
        var x = map(i, 0, spectrum.length, 0, width * 1.6);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h);
    }

    var waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(188, 70, 76); // waveform is red
    strokeWeight(6);
    for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], negative, positive, 0, height);
        vertex(x, y);
    }
    endShape();
    strokeWeight(1.2);


}

// fade sound if mouse is over canvas
function togglePlay() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.loop();
    }
}

// Here will update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}