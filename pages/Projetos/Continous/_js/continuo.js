var myRec = new p5.SpeechRec();
var myVoice = new p5.Speech();
myRec.continuous = true;

/*user*/
var name = "No momento se encontra indisponível, Desculpe";
var birthday = "4/3/2017";
var systemName = " Siege Automaton E54 ";

function setup(){
	createCanvas(800, 400);
	background(255, 255, 255);
	fill(0, 0, 0, 255);
	// instructions:
	textSize(32);
	textAlign(CENTER);
	isBirthday();
	/*myVoice.speak("Olá, "+ name + " Em que posso ajudar?");*/
	text("Diga Algo - Say Something ", width/2, height/2);
	myRec.onResult = showResult;
	myRec.start(); // start engine
}

function showResult(){
	if(myRec.resultValue==true){
		background(192, 255, 192);
		text(myRec.resultString, width/2, height/2);
		/*song = loadSound("file.mp3", loaded);*/
		parseResult();
	} else{
		console.log("Problema ao carregar");
	}
}

function draw()	{}

function loaded(){
	parseResult();
}

function updateClock() {
  var d = new Date();/*get Full date from user PC*/
  var h = d.getHours();
  var m = d.getMinutes();/**/
  var s = d.getSeconds();/**/

  if (m < 10) {
  	m = "0" + m; 
  }
  return h + " : " + m;
}

function updateDate(){
  var d = new Date();/*get Full date from user PC*/
  var day = d.getDate();/*Get Day, remember, if you use .getDay(); you will take for exaple: Fri or Sun and not the number ok*/
  var month = d.getMonth();
  var year = d.getFullYear();

  return day + "/" + (month + 1) + "/" + year;
}

function isBirthday(){
	if (updateDate() == birthday) {
		myVoice.speak("Feliz Aniverssário " + name + " , espero que seja muito feliz! ");
	}else{
		myVoice.speak("");
	}
}

function parseResult(){
	// recognition system will often append words into phrases.
	// so hack here is to only use the last word:
	updateClock();
	var mostrecentword = myRec.resultString.split('  ').pop();
	//Player Control
	if(mostrecentword.indexOf("Play")!==-1) { /*song.play(); */ console.log(" Play >"); }
	else if(mostrecentword.indexOf("stop")!==-1) { /*song.stop();*/ console.log(" STOP ");}
	else if(mostrecentword.indexOf("pause")!==-1) { /*song.pause();*/ console.log(" Pause ||");}
	else if(mostrecentword.indexOf("next")!==-1 || mostrecentword.indexOf("próximo")!==-1) { console.log(" -> próximo"); }
	else if(mostrecentword.indexOf("Back")!==-1 || mostrecentword.indexOf("voltar")!==-1 || mostrecentword.indexOf("volte")!==-1) { console.log(" <-  voltar "); }

	//Outros comandos
	else if(mostrecentword.indexOf("list voz")!==-1 || mostrecentword.indexOf("listar voz")!==-1|| mostrecentword.indexOf("mostrar voz")!==-1) {myVoice.listVoices();}
	//Controle da  Pagina
	else if(mostrecentword.indexOf("olá")!==-1 || mostrecentword.indexOf("Olá")!==-1 ) { myVoice.speak('Oi! Tudo bem? eu sou um software de voz!');}
	else if(mostrecentword.indexOf("stop")!==-1) { /*song.stop();*/ console.log(" STOP ");}
	else if(mostrecentword.indexOf("recarregar")!==-1) {refreshPage();}
	else if(mostrecentword.indexOf("Qual o seu nome")!==-1 || mostrecentword.indexOf("qual o seu nome")!==-1 || mostrecentword.indexOf("seu nome")!==-1 || mostrecentword.indexOf("Seu nome")!==-1) {myVoice.speak("Meu Nome é, " + systemName + "Prazer em conhecê-lo");}
	else if(mostrecentword.indexOf("O que é você")!==-1 || mostrecentword.indexOf("o que é você")!==-1 || mostrecentword.indexOf("para que você serve")!==-1) {myVoice.speak("Sou um sistema de reconhecimento e sintetização de voz , desenvolvida com a biblioteca p5.js pelo meu senhor todo poderoso, Lucas Pacheco (re, re, re. Ele não é tudo isso não)")}
	//Não funciona corretamente
	else if(mostrecentword.indexOf("tchau")!==-1 || mostrecentword.indexOf("Tchau")!==-1) { myVoice.speak("Até logo!")}
	// Horarios
	else if(mostrecentword.indexOf("Que dia é hoje")!==-1 || mostrecentword.indexOf("dia")!==-1) { myVoice.speak("Hoje é dia: " + updateDate()) + text(updateDate(), width/2, height/-1.5);  textSize(32);}
	else if(mostrecentword.indexOf("que horas são")!==-1 || mostrecentword.indexOf("Que horas são")!==-1 || mostrecentword.indexOf("horário")!==-1 || mostrecentword.indexOf("horas")!==-1 || mostrecentword.indexOf("Horas")!==-1 ) { myVoice.speak("Agora são exatamente" + updateClock()) + text(updateClock(), width/2, height/-1.5);  textSize(32);}
	else if(mostrecentword.indexOf("Liga luz")!==-1 || mostrecentword.indexOf("Ligar luz")!==-1 ||  mostrecentword.indexOf("Ligar a luz")!==-1 || mostrecentword.indexOf("ligar a lâmpada")!==-1) { console.log("Liga"); }
	else if(mostrecentword.indexOf("Desliga luz")!==-1 || mostrecentword.indexOf("desligar")!==-1 ||  mostrecentword.indexOf("desligar luz")!==-1 || mostrecentword.indexOf("desligar lâmpada")!==-1) { console.log("Desliga"); }
	else if(mostrecentword.indexOf("Ler texto")!==-1 || mostrecentword.indexOf("ler texto")!==-1){

	var Arr = ["Resumo Apresenta o contexto contemporâneo que embasa as atividades de profissionais da informação,"
		,"tendo em vista mercados de trabalhos com crescentes níveis de exigência e a necessidade de se solucionarem problemas de informação cada vez mais complexos e dinâmicos. "
		,"Define-se gestão da informação, assim como sua abrangência acadêmicooperacional tendo como base os pressupostos teóricos da área de ciência da informação, "
		,"em especial o núcleo de conteúdos relacionados à gestão integral dos recursos de informação de indivíduos, grupos e organizações. "
		,"Ressaltase que a gestão da informação compartilha com demais profissões afins, "
		,"os processos de criação, seleção e avaliação, gerenciamento, divulgação, utilização, preservação e políticas de direitos (privacidade, direitosautorais e outros) relacionados ao trinômio dado, informação e conhecimento. "
		,"São descritas habilidades e conhecimentos necessários ao desempenho profissional do gestor, "
		,"assim como as dificuldades inerentes à atuação no campo de atividades de informação"];

		for (var i = 0; i <= Arr.length; i++) {
			/*myVoice.speak(Arr[i]);*/
			console.log(Arr[i]);
			myVoice.speak(Arr[i]);
		}		
	}
}



