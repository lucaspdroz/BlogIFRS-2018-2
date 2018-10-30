var mic, fft;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(200);

    var spectrum = fft.analyze();

    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i *2, map(spectrum[i], -width/2, 255 * 4, height, 0));
    }
    endShape();
}