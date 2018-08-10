function setup() {
  
    let width = window.innerWidth;
    let height = window.innerHeight;
  
    createCanvas(width, height);
    // call a funtion in case of resized the window
    windowResized();
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0, 0, 0);
  
    // Size of circle
    let size = 300;
   
    // Variables hour()  minute() second()
    let hr = hour();
    let mn = minute();
    let sc = second();
  
    // Add 0 before the minute or secund if it's less than 10 !-- NEED REFACTOR --!
  
    function testaSegundo(a){
      if(sc < 10){
         var a = "0";
         return a + sc;
      }else{
        return sc;
      }
    }
  
    function testaMin(a){
      if(mn < 10){
         var a = "0";
         return a + mn;
      }else{
        return mn;
      }
    }
  
    function testaHora(a){
      if(hr < 10){
         var a = "0";
         return a + hr;
      }else{
        return hr;
      }
    }
    
    //Central Text with time
    translate(width/2, height/2);
    noStroke(255);
    fill(255);
    textSize(40);
    text(testaHora() +':'+ testaMin() +':'+ testaSegundo(), -75, 10);
    
  
    // Clock Colors by Time
    translate(0, 0);
    rotate(-90);
    strokeWeight(10);
    noFill();
  
    // Second
    stroke(255, 100, 150);
    let end1 = map(sc, 0, 60, 0, 359);
    arc(0, 0, size, size, 0, end1);
  
    // minute
    stroke(189, 253, 6);
    let end2 = map(mn, 0, 60, 0, 359);
    arc(0, 0, size- 20, size- 20, 0, end2);
  
    // hour
    stroke(	8, 248, 199);
    let end3 = map(hr % 24, 0, 24, 0, 360);
    arc(0, 0, size - 40, size - 40, 0, end3);
  
  }
  
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }