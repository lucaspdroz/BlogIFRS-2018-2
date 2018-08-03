	
	var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	var myVoice = new p5.Speech(); //new P5.Speech object	

	function setup(){
		// graphics stuff:
		createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		slider = createSlider(0,1,0.9,0.01)
		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("Diga algo - Say Something", width/2, height/2);
		myRec.onResult = showResult;
		myRec.start();
		
	}

	function loaded(){
		PlayMusic();
	}

	function draw(){
		// why draw when you can talk?
		/*song.setVolume(slider.value());*/

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
			song = loadSound("file.mp3", loaded);	
			PlayMusic();
		}

		function PlayMusic(){
			if (myRec.resultString == "Play Music" || myRec.resultString == "tocar música" || myRec.resultString == "toque música" || myRec.resultString == "tocar músicas" ) {
				  song.play(); 
				  myRec.start();	
				}

			if (myRec.resultString == "pause") {
				song.pause();
			}
				else{
					console.log(song);
			}
		}	
	}


	