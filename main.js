song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("mus_papyrusboss.ogg");
    song2 = loadSound("mus_zz_megalovania.ogg");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(650, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}