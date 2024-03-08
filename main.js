noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
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
    document.getElementById("side length").innerHTML = "The current side length is " + difference + " px";
    background('#B9EBFF');
    fill('#004E75');
    stroke('#004E75');
    square(noseX, noseY, difference);

}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + ", Nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Right Wrist X = " + rightWristX + ", Left Wrist X = " + leftWristX + ", Difference = " + difference + ".");
    }
}
