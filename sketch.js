//var monkey_running,monkey;
var background_image , jungle;
//var banana , banana_image;
//var stone, stone_image

function preload()
{
  background_image=loadImage("jungle.png");
  
  //monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_010.png")
}

function setup() {
  createCanvas(400, 400);
  
  jungle = createSprite(200,200,20,20);
  jungle.addImage(background_image);
  
 //jungle =createSprite(100,350,20,50);
  //.addAnimation("monkey",monkey_running);
}

function draw() {
  background(0);
  
  drawSprite();
}