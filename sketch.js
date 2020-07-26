

function preload(){
    
}

function setup(){

  
}

function draw(){
background(0);

  if(this.rain.position.y > height ){

    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
}

}   