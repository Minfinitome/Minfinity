// bien trong code
var fireworks = [];
var gravity;
var time = 1;
var number = 1;
var add = 235;
var heart;

// bien cua preLoad
var song;
var font1;

// bien lam nhiem vu displayText
var _pos = [100];
for(var i = 0; i< 101; i++) _pos[i] = 1;

// bien hien thi text
var column = 100;
var exrow = 45;

function preload() {
  song = loadSound("https://mtinfinity.github.io/Minfinity/payday.mp3");
}

function setup() {
  createCanvas(1350, 645);
  colorMode(RGB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  song.loop();
}

function draw() {
  background(0);
  fire();
  if(time > 900) coutUp();
  textOnScreen();
  drawHeart();
  time += 1;
}

function fire() {
  colorMode(HSB);
  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function coutUp() {
	if(number <= 50) {if(time % 5 == 0) number += 1;}
	else if(number <= 100) {if(time % 4 == 0) number += 1;}
	else if(number <= 150) {if(time % 4 == 0) number += 3;}
	else if(number <= 200) {if(time % 3 == 0) number += 3;}
	else if(number <= 250) {if(time % 2 == 0) number += 3;}
	else if(number <= 400) {if(time % 1 == 0) number += 4;}
	else if(number <= 500) {if(time % 2 == 0) number += 3;}
	else if(number <= 550) {if(time % 3 == 0) number += 2;}
	else if(number <= 600) {if(time % 7 == 0) number += 2;}
	else if(number <= 605) {if(time % 20 == 0) {number += 1; add += 1;}}
	else if(number <= 610 ) {if(time % 30 == 0) {number += 1; add +=1;}}
	else if(number <= 617) {if(time % 50 == 0) {number += 1; add += 1;}}
  else {number = 618; add = 253;}
}

function displayText(n, x, y, z) {
  noStroke();
  fill(255);
  textFont("Amatic SC", 40);
  text(n.substring(0, _pos[z]), x, y);
  if(_pos[z] < n.length) _pos[z]++;
  else _pos[z] = n.length; 
}

function textOnScreen() {
  textFont("Amatic SC", 40);
  noStroke();
  fill(255);
  if(time < 400)
    displayText("Hey ...", column, 100, 0);
  if(time > 200 && time < 400)
    displayText("Let's begin a short journey ...", column, 100 + exrow, 1);
  if(time > 400)
    displayText("Bắt đầu từ 27-01-2017", column, 100, 2);
  if(time > 600) 
    displayText("Hôm nay đã là 07-10-2018 ...", column, 100 + exrow, 3);
  if(time > 900) {
	  text(number + " ngày", column, 100+exrow*2);
	  if(number >= 365) displayText("một năm", column, 100 + exrow*3, 4);
    if(number >= 600) text("cộng thêm với " + add, column*2 + 4, 100 + exrow*3);
    if(number == 618) displayText("ngày nữa !", column*4 + 10, 100 + exrow*3, 5);
  }
}

function drawHeart() {
  heart = new heart();
  heart.show();
}
