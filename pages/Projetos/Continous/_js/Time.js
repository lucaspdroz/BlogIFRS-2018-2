/*named month in PT-BR*/
/*With out this Array, the month will be represented by 0 = January, 1 = February, and like that Successively */
var monthArr = ["Janeiro", "Fevereiro", "Março","Abril","Maio","Junho","Julho",
			 "Agosto","Setembro","Outubro","Novembro","Dezembro"];

/*Control clock*/

var nIntervId;
function upadateTime() {
  nIntervId = setInterval(updateClock, 1000);
}

function updateClock() {
  var d = new Date();/*get Full date fro user PC*/
  var h = d.getHours();
  var m = d.getMinutes();/**/
  var s = d.getSeconds();/**/

  var day = d.getDate();/*Get Day, remember, if you use .getDay(); you will take for exaple: Fri or Sun and not the number ok*/
  var month = d.getMonth();
  var year = d.getFullYear();

  var oElem = document.getElementById('clock');
  oElem = document.getElementById("clock").innerHTML =  h + ":" + m + ":" + s;
  oElem = document.getElementById("date").innerHTML = day + "/" + monthArr[month] + "/" + year; 
}


function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

/*Refresh page*/
function reloadPage() {
    location.reload(true);
}