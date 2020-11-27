const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var buidling1;
var buidling2;
var buidling3;
var buidling4;
var buidling5;
var ground1;
var ball1;
var rope1;


function setup(){
    createCanvas(800,400);
    engine = Engine.create()
    world=engine.world
buidling1 = new building(50,55,20,30);
buidling2 = new building(50,65,20,30);
buidling3 = new building(50,75,20,30);
buidling4 = new building(50,85,20,30);
buidling5 = new building(50,95,20,30);
ground1 = new ground(400,380,800,20);
ball1 = new ball(200,200,30);
rope1 = new rope(ball1.body,{x:200,y:100})
}

function draw (){
    background("black");
    Engine.update(engine);
  buidling1.display()
  buidling2.display()
  buidling3.display()
  buidling4.display()
  buidling5.display()
  ground1.display()
  ball1.display()
  rope1.display()
}
function mouseDragged () {
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}