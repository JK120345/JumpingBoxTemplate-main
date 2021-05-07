var canvas;
var music;
var b,y,p,g;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b=createSprite(0,580,360,30);
    b.shapeColor="blue";

    g=createSprite(295,580,200,30);
    g.shapeColor="green";

    y=createSprite(515,580,200,30);
    y.shapeColor="yellow";

    p=createSprite(740,580,220,30);
    p.shapeColor="purple";

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor=rgb(255,255,255);
    ball.velocityX=4;
    ball.velocityY=9;

   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(ball.isTouching(b) && ball.bounceOff(b)){
        ball.shapeColor=rgb(0,0,255);
        music.play();
    }
    if(ball.isTouching(g) && ball.bounceOff(g)){
        ball.shapeColor=rgb(0, 128, 0);
        
    }
    if(ball.isTouching(p)){
        ball.shapeColor=rgb(128, 0, 128);
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
    if(ball.isTouching(y) && ball.bounceOff(y)){
        ball.shapeColor=rgb(255, 255, 0);
        
    }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
