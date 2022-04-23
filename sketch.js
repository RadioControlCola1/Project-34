
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img
var mango_img;
var mangoTree_img, mangoTree;

var mango1, mango2, mango3;

var stone, stoneIMG;

var ground;


function preload(){
  bg_img = loadImage("bgIMG.jpg");
  mangoTree_img = loadImage("mango_tree.png");
}

function setup() {
  createCanvas(1600,760);

  engine = Engine.create();
  world = engine.world;

  mango1 = new Mango(1200, 250, 30);
  mango2 = new Mango(1000, 400, 30);
  mango3 = new Mango(1250, 100, 30);
  
  ground = new Ground(width/2, height-5, 1600, 20);

  stone = new Stone(100, 500, 20);

  Engine.run(engine);
}


function draw() 
{
  background(51);
  
  image(bg_img,0,0,width,height);

  image(mangoTree_img, 900, 60, 700, 700);

  Engine.update(engine);

  stone.display();

  console.log(stone.body.position.x, stone.body.position.y)
  
  mango1.display();
  mango2.display();
  mango3.display();
  ground.display();

  
  collide(stone, mango1);
  collide(stone, mango2);
  collide(stone, mango3);
    
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(stone.body, stone.body.position, {x:65, y:-30})
  }
}

function collide(lstone,lsprite)
{
  stonepos = lstone.body.position;
  spritepos = lsprite.body.position;
  var d = dist(stonepos.x,stonepos.y,spritepos.x,spritepos.y);
  if(d<=lstone.r + lsprite.r){
    Matter.Body.setStatic(lsprite.body, false)
  }
          
         
}




