const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     // add condition to check if any background image is there to add 
     if(backgroundImg)
      background(backgroundImg); 
      Engine.update(engine);
        fill("black");
         textSize(30);
          if(hour>=12)
          { text("Time : "+ hour%12 + " PM", 50,100); }
          else if(hour==0){
               text("Time : 12 AM",100,100); }
               else{ 
                   text("Time : "+ hour%12 + " AM", 50,100);
                 } 

    // add condition to check if any background image is there to add


   

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()


    // write code to fetch time from API
    var datetime=responseJSON.datetime
    console.log(datetime)
    var hour = datetime.slice(11,13)
    console.log(hour)

    if(hour <= 4 && hour >= 6){
        var bg = "sunrise1.png";
    }
    else if(hour <= 6 && hour >= 8){
        var bg = "sunrise2.png";
    }
    else if(hour <= 8 && hour >= 11){
        var bg = "sunrise4.png";
    }
    else if(hour <= 11 && hour >= 13){
        var bg = "sunrise5.png";
    }
    else if(hour <= 13 && hour >= 15){
        var bg = "sunset7.png";
    }
    else if(hour <= 15 && hour >= 17){
        var bg = "sunset10.png";
    }
    else if(hour <= 17 && hour >= 18){
        var bg = "sunset11.png";
    }
    else {
        var bg = "sunset12.png";
    }

 
    


    //load the image in backgroundImg variable here
   backgroundImg=loadImage(bg)

}
