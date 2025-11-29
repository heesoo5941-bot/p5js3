
  let basePink, baseBlue, baseYellow;

function setup() {
  createCanvas(900, 600);
  colorMode(RGB);
  basePink = color(255, 190, 210);
  baseBlue = color(110, 160, 220);
  baseYellow = color(240, 220, 90);
}

function draw() {
  background(220, 230, 245);

  // 바닥
  fill(210, 230, 210);
  stroke(210, 230, 210);
  rect(0, 500, 900, 100);

  // 몸통 
  let bodyOffsetX = 20 * sin(frameCount * 0.02);
  let bodyOffsetY = 10 * cos(frameCount * 0.015);

  // 머리 
  let headOffsetX = 10 * sin(frameCount * 0.04 + PI / 2);
  let headOffsetY = 8 * cos(frameCount * 0.018 + PI / 2);

  // 코/입 
  let noseOffsetY = 12 * sin(frameCount * 0.021);

  // 귀 움직임
  let earL_x = 285 + headOffsetX;
  let earL_y = 218 + headOffsetY;
  let earL_x2 = 344 + headOffsetX;
  let earL_y2 = 238 + headOffsetY;
  let earL_x3 = 312 + headOffsetX;
  let earL_y3 = 144 + headOffsetY;

  let earR_x = 374 + headOffsetX;
  let earR_y = 220 + headOffsetY;
  let earR_x2 = 428 + headOffsetX;
  let earR_y2 = 245 + headOffsetY;
  let earR_x3 = 410 + headOffsetX;
  let earR_y3 = 145 + headOffsetY;

  // 꼬리 
  let tailY = 338 + 17 * sin(frameCount * 0.027);

  // 이빨 
  let toothY = 330 + 12 * sin(frameCount * 0.13);

  // 다리 
  let legW = 50 + 6 * sin(frameCount * 0.07);
  let legH = 90 + 12 * cos(frameCount * 0.09);

  // 몸통 
  let t = (sin(frameCount * 0.03) + 1) / 2;
  let bodyColor = lerpColor(color(170, 170, 180), color(200, 180, 160), t);

  let pinkC = lerpColor(basePink, color(230, 220, 250), (sin(frameCount * 0.023) + 1) / 2);
  let blueC = lerpColor(baseBlue, color(90, 200, 180), (cos(frameCount * 0.021) + 1) / 2);
  let yellowC = lerpColor(baseYellow, color(220, 140, 180), (cos(frameCount * 0.017) + 1) / 2);

  // 몸통
  fill(bodyColor);
  stroke(90, 90, 110);
  ellipse(570 + bodyOffsetX, 330 + bodyOffsetY, 420, 260);

  // 머리
  fill(180, 180, 190);
  stroke(90, 90, 110);
  ellipse(330 + headOffsetX, 300 + headOffsetY, 250, 180);

  // 코, 입
  fill(185, 185, 195);
  stroke(90, 90, 110);
  ellipse(270 + headOffsetX, 370 + headOffsetY + noseOffsetY, 280, 150);

  // 귀
  fill(180, 180, 190);
  stroke(90, 90, 110);
  triangle(earL_x, earL_y, earL_x2, earL_y2, earL_x3, earL_y3);
  triangle(earR_x, earR_y, earR_x2, earR_y2, earR_x3, earR_y3);

  // 꼬리
  fill(170, 170, 180);
  stroke(90, 90, 110);
  triangle(765, tailY, 830, tailY - 13, 790, tailY + 12);

  // 이빨
  fill(150, 120, 180);
  stroke(90, 90, 170);
  triangle(360, toothY, 380, toothY + 20, 365, toothY - 10);

  // 다리
  fill(170, 170, 180);
  stroke(90, 90, 110);
  rect(500, 450, legW, legH);
  rect(620, 450, legW, legH);

  // 머리 위
  fill(pinkC);
  stroke(90, 90, 110);
  ellipse(360 + headOffsetX, 250 + headOffsetY, 18, 14);

  // 몸통
  fill(blueC);
  stroke(90, 90, 110);
  ellipse(550 + bodyOffsetX, 290 + bodyOffsetY, 24, 18);

  fill(yellowC);
  stroke(90, 90, 110);
  ellipse(590 + bodyOffsetX, 360 + bodyOffsetY, 20, 17);

  // 눈
  fill(50, 50, 50);
  noStroke();
  ellipse(340 + headOffsetX + 3 * sin(frameCount * 0.13), 320 + headOffsetY, 16, 16);
  ellipse(382 + headOffsetX + 3 * cos(frameCount * 0.11), 324 + headOffsetY, 16, 16);
}

// Save a 10-second gif when the user presses the 's' key.
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}