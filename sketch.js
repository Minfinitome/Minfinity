// bien trong code
var fireworks = [];
var gravity;
var time = 1;
var number = 1;
var add = 237;
var heart;
var typing;
var img;
var isEnd = false;

// bien cua preLoad
var song;
var font1;

// bien lam nhiem vu displayText
var _pos = [100];
for(var i = 0; i< 101; i++) _pos[i] = 1;
var seconz = 0;

// bien hien thi
var column = 100;
var exrow = 45;

function preload() {
  song = loadSound("https://tolaaii.github.io/tangemyeu/payday.mp3");
  img = loadImage("https://tolaaii.github.io/tangemyeu/heart.png");
}

function setup() {
  createCanvas(1350, 645); colorMode(RGB);
  gravity = createVector(0, 0.15);
  stroke(255); strokeWeight(4);
  song.loop();
}

function draw() {
  if(isEnd == false) {
    background(0);
    fire();
    if(seconz > 7) coutUp();
    displayOnScreen();
    time += 1;
    if(time % 200 == 0) seconz += 1;
  }
  else ending();
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
  noStroke(); fill(255);
  textFont("Amatic SC", 40);
  text(n.substring(0, Math.floor(_pos[z])), x, y);
  if(_pos[z] < n.length) _pos[z] += 0.5;
  else _pos[z] = n.length;
}

function displayImg(img, x, y) {
  // hien thi tung pixel 1 | hoac 1 hang pixel 1 :3
}

function displayOnScreen() {
  textFont("Amatic SC", 40); noStroke(); fill(255);
  if(seconz < 4) {
    displayText("Hey ...", column, 100, 0);
    if(seconz > 1) displayText("Let's go on a journey ...", column, 100 + exrow, 1);
    if(seconz > 2) displayText("It's short, but ... ", column, 100 + exrow*2, 2);
    if(seconz > 2) displayText("I hope you like it :heart:", column, 100 + exrow*3, 3)
  }

  if(seconz > 4 && seconz < 18) {
    if(seconz > 4) displayText("Bắt đầu từ 27-01-2017", column, 100, 4);
    if(seconz > 5) displayText("Hôm nay đã là 07-10-2018 ...", column, 100 + exrow, 5);
    if(seconz > 6) displayText("Thế là đã qua ...", column, 100 + exrow*2, 6)
    if(seconz > 7) {
      text(number + " ngày", column, 100 + exrow*3);
	    if(number >= 365) displayText("là một năm ...", column, 100 + exrow*4, 7);
      if(number >= 600) displayText("cộng thêm với " + add + " ngày !", column*3 - 30, 100 + exrow*4, 8);
    }
    if(seconz > 16) displayText("(Từ đoạn này trở đi thì em nên xem một mình thôi nhé :D)", column, 100 + exrow*5,99);
  }

  if(seconz < 34) {
    if(seconz > 19) displayText("Cũng lâu ghê rồi ấy nhỉ :p", column, 100, 9);
    if(seconz > 21) displayText("Cùng nhau qua bao nhiêu chuyện...", column, 100 + exrow, 10);
    if(seconz > 23) displayText("mới ngày đầu yêu nhau, còn hơi chút chưa quen...", column, 100 + exrow*2, 11);
    if(seconz > 25) displayText("sau đó là một chút đi chơi với nhau :D, đi xung quanh bờ hồ, rồi đi khắp phố cổ...", column, 100 + exrow*3, 12);
    if(seconz > 27) displayText("rồi ôm nhau lần đầu, tiếp theo là first kiss :p", column, 100 + exrow*4, 13);
    if(seconz > 29) displayText("ngày này năm ngoái cũng thích, được ở cạnh nhau cả ngày...", column, 100 + exrow*5, 14);
    if(seconz > 31) displayText("nói chung là rất rất nhiều...", column, 100 + exrow*6, 15);
    if(seconz > 32) displayText("............................................ <3", column, 100 + exrow*7, 16);
  }

  if(seconz < 44) {
    if(seconz > 34) displayText("Anh chỉ muốn nói rằng:...", column, 100, 17);
    if(seconz > 36) displayText("Bên cạnh em qua nhiều ngày qua.........", column, 100 + exrow, 18);
    if(seconz > 38) displayText("anh thấy hạnh phúc lắm đó ^^", column, 100 + exrow*2, 19);
    if(seconz > 40) displayText("cảm ơn em... và yêu em nhiều lắm <3", column, 100 + exrow*3, 20);
    if(seconz > 40) displayText("<3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3", column, 100 + exrow*4, 30);
  }

  if(seconz < 60) {
    if(seconz > 44) displayText("Hì......", column, 100, 21);
    if(seconz > 46) displayText("Quà anh tặng em chỉ nho nhỏ thế thôi,", column, 100 + exrow, 22);
    if(seconz > 48) displayText("nhưng mà là đồ handmade đó :v", column, 100 + exrow*2, 23);
    if(seconz > 50) displayText("Mong em thích món quà này ^^ !", column, 100 + exrow*3, 24);
    if(seconz > 52) displayText("Ò thật ra là món quà có thể to hơn một chút nữa :v", column, 100 + exrow*4, 25);
    if(seconz > 54) displayText("nhưng mà lúc bắt tay vào làm thì anh cứ bị run out of idea :(", column, 100 + exrow*5, 26);
    if(seconz > 56) displayText("Hành trình đến đây sắp hết rồi, em chờ thêm khoảng 10 giây nữa nhé :p", column, 100 + exrow*6, 27);
    if(seconz > 58) displayText("Yêu emm nhiều :p", column, 100 + exrow*7, 28);
  } else isEnd = true;

}

function ending() {
  background(255);
  noStroke(); fill(0);
  textFont("Charmonman", 48);
  text("Chúc em sinh nhật thật hạnh phúc <3", column, 100);
  image(img, 480, 180);
}
