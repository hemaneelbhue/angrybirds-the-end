const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImg,bg="sprites/bg.png"
var a ="this is a string"
console.log(a) 
var s = "the strongest person in the universe"
console.log(s)
var d = "349"
console.log(d+1)
console.log(a+s)
var j = 755
console.log(j)
var k 
console.log(k)
var g = null
console.log(g)
var frog = [45 , 37, 998,20,78]
console.log(frog)
console.log(frog[3])
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState="on"
var score = 0

function preload() {
    getbgImg()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(bgImg){
        background(bgImg);
    }
   else{
       background("green")
   }
   textSize(30)
   text("Score : "+score,900,50)
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
pig1.score()
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
pig3.score()
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "out"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    slingshot.fly();
    gameState="out"
}
function keyPressed(){
    if(keyCode===32){
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body)
        gameState="on"
    }
}
async function getbgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()
    
        var datetime =responseJson.datetime
var hour =datetime.slice(11,13)
   if(hour>=06 && hour<=14){
bg="sprites/bg.png"
   }
   else{
       bg="sprites/bg2.jpg"
   }
   bgImg= loadImage(bg)
}