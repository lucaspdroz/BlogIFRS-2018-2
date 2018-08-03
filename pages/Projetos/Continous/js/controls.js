/*Play music with p5.js*/
function PlayMusic(){
	if (myRec.resultString == "Play Music" || myRec.resultString == "tocar música" || myRec.resultString == "toque música" || myRec.resultString == "tocar músicas" ) {
			song.play();
		}
	/*else if(myRec.resultString == "Where im" || myRec.resultString == "onde estou" || myRec.resultString == "Play Music"){	
	}*/
	else{
		console.log("Não entendi... :'/ ");
	}
}	

/*make a refresh page*/
function refreshPage(){
	location.reload(true);
}


	