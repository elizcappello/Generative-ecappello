var song
var night
var images= []
var x= []
var y=[]
var w=[]
var h=[]

function preload() {
  street=loadImage("assets/nycstreet.jpg")
 //seperate from array static, will load seperately 
 song= loadSound ("assets/nycsong.mp3")
 night=loadImage("assets/night.jpg")
}

function setup() {
  createCanvas(1000,700)
  frameRate (5)
  song.play
  song.loop()
  song.setVolume (0.5)
  
    song.play()
  
  images = [ //loading as an array
    loadImage("assets/g1.png"), 
    loadImage("assets/g2.png"),  
    loadImage("assets/g3.png"), 
    loadImage("assets/g4.png"),
    loadImage("assets/g5.png"),
    loadImage("assets/g6.png"),
    loadImage("assets/g7.png"),
    loadImage("assets/g8.png"),
  ]
    
 
 //where the width and height of the images will begin on the page
  for (var i=0;i<100;i=i+1) { //for loop, i is images; i is greater than 100 loop
  //and images = images plus 1
    w[i]=random(200,400)//var images, random width var betwwen 200 and 400
    h[i]=random(500,200)// var images, random height var between 
}
  //where the images start on the page
for (var i=0;i<100;i=i+1) {
    x[i]=random(200,600)  //x axis -20 and 900 going across
    y[i]=random(700,300) //y axis-700 down and 300 from the bottom 1000 canvas size
  

}
} 
function draw() {
  

  
  //if (mouseIsPressed) {
      //image (night,mouseX, mouseY,windowWidth,windowHeight) 
    
  
  image(street,0,0,windowWidth,windowHeight)
  //background image drawn once in the back so will not draw over the the people
  //draw city people, repeats, city, people repeats
  
 
 
  
  //draw the image and loop to 100
  for (var i=0;i<100;i=i+1) {
    x[i]=x[i]+random(-10,10) //+implies movement
    y[i]=y[i]+random(-10,10) //higher # will move by less
    image(images[i%8],x[i],y[i],w[i],h[i]) //drawing the array
    //        modulo      x   y   w   h
           //will stay betwwen 0 and 8 parameters and keep looping through because there are 8 images
   
    
  for (var i=0;i<100;i=i+1) {
    w[i]=random(100,200)
    h[i]=random(100,200)
    image(images[i%8],x[i],y[i],w[i],h[i])
    //tint[i](images,255,126)
    
  }
      
      
    }  
    
  }  
  
  

        


  
