function setup () {
    video = createCapture(VIDEO);
    video.size(530, 400);
    video.position(30, 150)

    canvas = createCanvas(550, 550)
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized");

}
function draw() {
    background('#B9EBFF')
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}
