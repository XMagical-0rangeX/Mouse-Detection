//detect

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//global variables

let mouseX, mouseY, pmouseX, pmouseY;
let rectcooler = "white";
let circooler = "white";

function getDistance(x1,y1,x2,y2){
    let xdis = pmouseX-200;
    let ydis = pmouseY-400;

    return Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));
}

//main program loop (60 fps)
requestAnimationFrame(loop);
function loop () {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height); //draw filled square

    ctx.beginPath();
    ctx.fillStyle = circooler;
    ctx.arc(200,400,30,0,2*Math.PI);
    ctx.fill();
    

    
    if (getDistance(200,pmouseX,400,pmouseY) < 30) {
        circooler = "red";
    } else {
        circooler = "white";
    }
    
    ctx.fillStyle = rectcooler;
    ctx.fillRect(400, 200, 50, 50); 
    
    if (pmouseX >400 && pmouseX<450 && pmouseY <250 && pmouseY>200) {
        rectcooler = "blue";
    } else {
        rectcooler = "white";
    }

    console.log(getDistance(200,pmouseX,400,pmouseY));
    requestAnimationFrame(loop);
}

// document event stuff

document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
    //save previous mouse x and y 
    pmouseX = mouseX;
    pmouseY = mouseY;

    //update mousex and mousey
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}



