var canvas;
var ctx;
var clicado = false;
var cor ="#FF0000";
window.onload = init;

function init(){
canvas = document.getElementById("canvas0");
ctx = canvas.getContext("2d");

canvas.onmousedown = clicou;
canvas. onmouseup  = desclicou;
canvas.onmousemove = moveu;
document.body.onkeydown =  mudacor;
}
function mudacor(event){
   if(event.key == "r"){
     cor = "#FF0000";
}
if(event.key == "g"){
  cor = "#00FF00";r
}
if(event.key == "b"){
   cor = "#0000FF";
   }
if(event.key == "w") {
  cor = "#ffffff";
    } 
}
function clicou(){
 clicado = true;
}
function desclicou(){
 clicado = false;
}
function moveu(event){
  if(clicado){
 console.log("desenhar");
 var x = event.offsetX;
 var y = event.offsetY;
 console.log(x,y);
 //ctx.fillRect(x,y,5,5);
 // desenhar um ponto onde o mouse estava ao se mover
 ctx.strokeStyle = cor;
 ctx.lineWidth = 5;
 ctx.beginPath();
 ctx.moveTo(x - event.movementX , y - event.movementY);
 ctx.lineTo(x , y);
 ctx.stroke();
 ctx.clearRect(10, 10, 100, 100);

  }
}
