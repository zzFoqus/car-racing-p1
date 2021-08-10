var backgroundIMG, database;
var gameState=0;
var playerCount
var form,game,player;
var canvas;


function setup(){
  database = firebase.database();

  canvas=createCanvas(500,500); 
  

  game=new Game()

  game.getState()
  game.start()
}

function draw(){
  
  
}

