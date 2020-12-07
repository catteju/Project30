const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var platform, ground;
var polygon, slingShot;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(800, 500, 340, 20);
    ground1 = new Ground(600, 690, 1200, 20);
    ground2 = new Ground(1190, 600, 20, 1200);
    ground3 = new Ground(10, 600, 20, 1200);
    box1 = new Box(685, 460, 50, 55);
    box2 = new Box(740, 460, 50, 55);
    box3 = new Box(795, 460, 50, 55);
    box4 = new Box(850, 460, 50, 55);
    box5 = new Box(905, 460, 50, 55);
    box6 = new Box(712, 400, 50, 55);
    box7 = new Box(767, 400, 50, 55);
    box8 = new Box(822, 400, 50, 55);
    box9 = new Box(877, 400, 50, 55);
    box10 = new Box(739, 340, 50, 55);
    box11 = new Box(794, 340, 50, 55);
    box12 = new Box(849, 340, 50, 55);
    box13 = new Box(766, 280, 50, 55);
    box14 = new Box(821, 280, 50, 55);
    box15 = new Box(793, 220, 50, 55);
    polygon = new Polygon(200, 500);
    slingShot = new SlingShot(polygon.body,{x:200, y:500});
 
}

function draw(){
    background("brown");
    Engine.update(engine);

    platform.display();
    ground1.display();
    ground2.display();
    ground3.display();
    polygon.display();
    slingShot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();    
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
         slingshot.attach(polygon.body);
    }
}
