var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
ball_x = 10;
ball_y = 10;
var ball_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("ball.png", function(Img)
    {
        ball_object = Img;
        ball_object.scaleToWidth(150);
    ball_object.scaleToHeight(140);
	ball_object.set({
            top:ball_y,
            left:ball_x
         }); 
canvas.add(block_image_object);
})
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed= e.keyCode;
console.log(keyPressed);
if(e.shiftKey== true && keyPressed == '80')

if(keyPressed=='38')
{
up();
console.log("up");;
}
if(keyPressed=='40')
{
down();
console.log("down");
}
if(keyPressed=='37')
{
left()
console.log("left");
}
if(keyPressed=='39')
{
right()
console.log("right");
}
}