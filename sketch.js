const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1,pig3;
var bird, slingshot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    block8 = new Box(620, 250, 50, 60);
    block9 = new Box(660, 250, 50, 60);
    block10 = new Box(690, 250, 50, 60);
    block11 = new Box(720, 250, 50, 60);
    block12 = new Box(750, 250, 50, 60);
    block13 = new Box(660, 200, 50, 60);
    block14 = new Box(690, 200, 50, 60);
    block15 = new Box(715, 200, 50, 60);
    block16 = new Box(690, 200, 50, 60);


    bird = new Bird(200,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    ground = new Ground(690, 300, 400, 20);
}

function draw(){

   background(0);
    
    Engine.update(engine);
    strokeWeight(4);
    //box1.display();
    //box2.display();
    ground.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

     bird.display();
     //log6.display();
    // slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}


