let monster;
let vader;
let x, y, rotation;

let monster2;

function preload(){
  //monster = loadImage('data/Monster_300_204.png');  // the exact path for the file, from the sketch.js file
  vader = loadImage('data/legoVader.png');

}


function setup() {
  createCanvas(800, 800);

  loadImage('data/Monster_300_204.png', m => {
    monster = m; console.log("loaded");
  }, console.log("failed"));

  monster2 = 'ted';


 
/*
   loadImage('data/legoVader.png', img => {
    image(img, 200, 200);
  });
  */
}

function draw() {
  background(0);
  image(vader, 100, 100);

  push();
  translate(200, 200);
  scale(.5);
  image(vader, 200, 200);
  pop();

  if(mouseIsPressed){
     image(monster, mouseX - 100, mouseY - 100);
  }
 


}






