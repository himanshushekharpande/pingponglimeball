let position
let speed
let radius
let sound

function preload(){
  soundFormats('mp3', 'ogg');
  mySound = loadSound("drop.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight) 
  position = createVector(100, 50)
  speed = createVector(5, 5)
  radius = 35
}
function draw(){
  background("#0D000185")
  fill("#ffff00")
  noStroke()
	circle(position.x, position.y, radius*2)
  position.add(speed)
  speed.mult(1.00005)
  
  if (position.y > windowHeight-radius || position.y < radius) {
    speed.y = speed.y * -1
    mySound.play()
  }
  if (position.x > windowWidth-radius || position.x < radius) {
    speed.x = speed.x * -1
    mySound.play()
      }
}



function mouseClicked(){
  let angle = random(7*PI/2)
  speed.rotate(angle)
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
