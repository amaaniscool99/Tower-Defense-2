 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;
var engine, world;
var box1, square1;
var block6,chain;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(750,120,80,80);
    box2 = new Box(880,120,80,80);
    square1 = new Square(810, 350);
    block1 = new Block(810, 260, 400, PI/2);

    box3 = new Box(700, 240, 80,80);
    box4 = new Box(920,240,80,80);
    square3 = new Square(810, 220);

    block3 =  new Block(810,180,400, PI/2);

    box5 = new Box(810,160,70,70);
    block4 = new Block(760,120,250, PI/7);
    block5 = new Block(870,120,250, -PI/7);

    ball = new Ball(100,100);
    block6 = new Block(230,180,80,PI/2);
    chain = new Chain(ball.body,block6.body);
   
}

function draw(){
    background("white");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    square1.display();
    block1.display();

    box3.display();
    box4.display();
    square3.display();
    block3.display();

    box5.display();
    block4.display();
    block5.display();

    ball.display();
    block6.display();
    chain.display();
}
