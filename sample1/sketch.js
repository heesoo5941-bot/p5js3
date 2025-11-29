function setup() {
  createCanvas(900, 600);
  colorMode(RGB);
  noLoop();
}

function draw() {
  background(220, 230, 245);

  // 바닥
  fill(210, 230, 210);
  stroke(210, 230, 210);
  rect(0, 500, 900, 100);

  // 몸통
  fill(180, 180, 190);
  stroke(90, 90, 110);
  ellipse(570, 330, 420, 260);

  // 머리
  fill(180, 180, 190);
  stroke(90, 90, 110);
  ellipse(330, 300, 250, 180);

  // 코/입
  fill(185, 185, 195);
  stroke(90, 90, 110);
  ellipse(270, 370, 280, 150);

  // 귀
  fill(180, 180, 190);
  stroke(90, 90, 110);
  triangle(285, 218, 344, 238, 312, 144);
  triangle(374, 220, 428, 245, 410, 145);

  // 꼬리
  fill(170, 170, 180);
  stroke(90, 90, 110);
  triangle(765, 338, 830, 325, 790, 350);

  // 이빨
  fill(150, 120, 180);
  stroke(90, 90, 170);
  triangle(360, 330, 380, 350, 365, 320);

  // 다리
  fill(170, 170, 180);
  stroke(90, 90, 110);
  rect(500, 450, 50, 90);
  rect(620, 450, 50, 90);

  // 머리 위 장식
  fill(255, 190, 210);
  stroke(90, 90, 110);
  ellipse(360, 250, 18, 14);

  // 몸통 장식
  fill(110, 160, 220);
  stroke(90, 90, 110);
  ellipse(550, 290, 24, 18);

  fill(240, 220, 90);
  stroke(90, 90, 110);
  ellipse(590, 360, 20, 17);

  // 눈
  fill(50);
  noStroke();
  ellipse(340, 320, 16, 16);
  ellipse(382, 324, 16, 16);
}
