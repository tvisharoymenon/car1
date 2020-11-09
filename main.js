canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add()  {
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
     background_imgtag.src=background_image;

     rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
     rover_imgtag.src=rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)  {
    Keypressed=e.keyCode;
    console.log(Keypressed);
    if(Keypressed=='38') {
        up();
    }
    if(Keypressed=='40') {
        down();
    }
    if(Keypressed=='37') {
        left();
    }
    if(Keypressed=='39') {
        right();
    }
}