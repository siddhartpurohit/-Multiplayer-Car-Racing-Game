var canvas;
var allPlayers;
var gameState = 0;
var playerCount;
var database;
var updateCount;
var form, player, game;
var cars, car1, car2, car3, car4;
var car1Img,car2Img,car3Img,car4Img,groundImg,track;
var carSound
var carStopping;
function preload(){
    car1Img = loadImage("../images/car1.png");
    car2Img = loadImage("../images/car2.png");
    car3Img = loadImage("../images/car3.png");
    car4Img = loadImage("../images/car4.png");
    groundImg = loadImage("../images/ground.png");
    track = loadImage("../images/track.jpg");
    carSound = loadSound("../car running.mp3");
    carStopping = loadSound("../car stopping.mp3");
}
function setup(){
  canvas = createCanvas(displayWidth-200,displayHeight- 100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}