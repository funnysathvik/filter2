function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose',posne);
}

function draw(){
    image(video,300,300,300,300);
}

function modelloaded(){
    console.log("load");
}

function posne(results){
    if(results.length >0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
    }

}