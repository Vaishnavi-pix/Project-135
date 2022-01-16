status="";
object=[];
function preload(){
    
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}
function start(){
    objectDetected=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
    object_name=document.getElementById("Object_Name").value;
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
}
function draw(){
    image(video,0,0,480,380);
}