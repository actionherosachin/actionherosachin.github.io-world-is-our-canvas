
var drawing = [];
var currentPath = [];

function setup() {
  var canvas = createCanvas(1325,635);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
}

function startPath(){
   currentPath = [];
   drawing.push(currentPath);
}

function endPath(){

}

function draw() {
  background("white");
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    
    currentPath.push(point);

  } 

  noFill("black");
  stroke("black"); 
  strokeWeight(1);

  for(var i = 0; i< drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var p = 0; p< path.length; p++){
        vertex(path[p].x, path[p].y);
    }
    endShape();
  }

}