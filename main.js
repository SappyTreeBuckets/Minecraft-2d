canvas = new fabric.Canvas("myCanvas");
var blockimgwidth= 30;
var blockimgheight= 30;
var blockimgobject = "";

var playerx = 10;
var playery = 10;
var playerobject = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,left:playerx
        });
        canvas.add(playerobject);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimgobject=Img;
        blockimgobject.scaleToWidth(blockimgwidth);
        blockimgobject.scaleToHeight(blockimgheight);
        blockimgobject.set({
            top:playery,left:playerx
        });
        canvas.add(blockimgobject);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log(" p and shift together");
        blockimgwidth =  blockimgwidth + 10;
        blockimgheight =  blockimgheight + 10;
        document.getElementById("width").innerHTML =  blockimgwidth;
        document.getElementById("height").innerHTML =  blockimgheight;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log(" m and shift together");
        blockimgwidth =  blockimgwidth - 10;
        blockimgheight =  blockimgheight - 10;
        document.getElementById("width").innerHTML =  blockimgwidth;
        document.getElementById("height").innerHTML =  blockimgheight;
    }

if(keyPressed == "37"){
left();
console.log("left");
}

if(keyPressed == "38"){
 up();
console.log("up");
}

 if(keyPressed == "39"){
right();
console.log("right");
 }

if(keyPressed == "40"){
  down();
  console.log("down");
}

if(keyPressed == "67"){
  new_image("cloud.jpg");
  console.log("c");
}

if(keyPressed == "68"){
    new_image("dark_green.png");
    console.log("d");
    }

if(keyPressed == "71"){
  new_image("ground.png");
  console.log("g");
}
if(keyPressed == "76"){
    new_image("light_green.png");
    console.log("l");
    }
if(keyPressed == "82"){
 new_image("roof.jpg");
 console.log("r");
}
if(keyPressed == "84"){
    new_image("trunk.jpg");
    console.log("t");
    }
if(keyPressed == "85"){
  new_image("unique.png");
  console.log("u");
}
if(keyPressed == "87"){
    new_image("wall.jpg");
    console.log("w");
    }
if(keyPressed == "89"){
  new_image("yellow_wall.png");
console.log("y");
}
}


function up(){
    if(playery >=0){
        playery = playery - blockimgheight;
        console.log("block image height = " + blockimgheight);
        console.log("When up arrow is pressed, x = " + playerx + ", y = "+ playery);
        canvas.remove(playerobject);
        player_update();

    }
}

function down(){
    if(playery <=500){
        playery = playery + blockimgheight;
        console.log("block image height = " + blockimgheight);
        console.log("When down arrow is pressed, x = " + playerx + ", y = "+ playery);
        canvas.remove(playerobject);
        player_update();

    }
}

function left(){
    if(playerx >=0){
        playerx = playerx - blockimgwidth;
        console.log("block image width = " + blockimgwidth);
        console.log("When left arrow is pressed, x = " + playerx + ", y = "+ playery);
        canvas.remove(playerobject);
        player_update();

    }
}

function right(){
    if(playerx <=900){
        playerx = playerx + blockimgwidth;
        console.log("block image width = " + blockimgwidth);
        console.log("When right arrow is pressed, x = " + playerx + ", y = "+ playery);
        canvas.remove(playerobject);
        player_update();

    }
}




