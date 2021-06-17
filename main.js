var canvas= document.getElementById("Canvas1");
var ctx= canvas.getContext("2d");
var color = document.getElementById("color_input");
var line_width = document.getElementById("Line_width_input");
canvas.addEventListener("mousedown", drawcircle);
canvas.addEventListener("mousemove", myMouseMove);

 function myMouseMove(){
     var cow = "mousemove";
 }
function drawcircle(e){
    mousex= e.clientX - canvas.offsetLeft;
    mousey= e.clientY - canvas.offsetTop;
    if(cow == "mousemove"){
        circle(mousex, mousey);
    }
    
}

function circle(mousex, mousey){
   ctx.beginPath();
   ctx.strokeStyle= color;
   ctx.lineWidth= 10;
   ctx.arc(mousex, mousey, document.getElementById(radius_inputs),0, 2*Math.PI);
   ctx.stroke();
}

function ds(){
    ctx.clearRect(0,0, canvas.width,  canvas.height);
}