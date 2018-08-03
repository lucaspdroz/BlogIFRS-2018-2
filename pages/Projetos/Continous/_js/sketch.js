    var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	var myVoice = new p5.Speech(); //new P5.Speech object

	var song;
	
	function preload(){
		song = loadSound("file.mp3");
	}

	function setup(){
		// graphics stuff:
		createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("Diga algo - Say Something", width/2, height/2);
		myRec.onResult = showResult;
		myRec.start();

	}

	function draw(){
		// Draw slider to set Volume(manual)
		if (song == true || loadSound == true) {
			song.setVolume(slider.value());
		}	
	}

	function showResult(){
		if(myRec.resultValue==true){
			background(192, 255, 192);
			text(myRec.resultString, width/2, height/2);
			console.log(myRec.resultString);
			myVoice.speak(myRec.resultString);
			PlayMusic();
		}else{
			background(226, 75, 20);
			textSize(32);
			textAlign(CENTER);
			text("Erro", width/2, height/2);
		}

		function PlayMusic(){
			if (myRec.resultString == "Play Music" || myRec.resultString == "tocar música" || myRec.resultString == "toque música" || myRec.resultString == "tocar músicas" ) {
					song.play();
				}if (myRec.resultString == "pause") {} else{
					song.pause();
			}
		}	
	}


	