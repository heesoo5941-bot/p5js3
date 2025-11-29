let tShirtColor;

function setup() {
  createCanvas(400, 600);
  tShirtColor = color(120, 160, 230); // 기본 티셔츠 색
}

function draw() {
  background(230, 240, 255);

  fill(245, 220, 180);
  stroke(180, 140, 100);
  strokeWeight(2);
  beginShape();
  vertex(120, 180);
  bezierVertex(120, 120, 280, 120, 280, 180);
  bezierVertex(300, 320, 200, 420, 200, 420);
  bezierVertex(200, 420, 100, 320, 120, 180);
  endShape(CLOSE);

  // 귀
  fill(245, 220, 180);
  stroke(180, 140, 100);
  ellipse(110, 220, 30, 50);
  ellipse(290, 220, 30, 50);

  // 머리(검정, 시스루 앞머리)
  fill(30, 30, 40);
  stroke(20, 20, 20);
  arc(200, 170, 200, 180, PI, 0, CHORD);
  stroke(60, 60, 60, 180);
  strokeWeight(6);
  for (let i = -60; i <= 60; i += 20) {
    line(200 + i, 170, 200 + i / 2, 210);
  }

  // 눈 흰자
  fill(255);
  stroke(80);
  ellipse(165, 230, 32, 18);
  ellipse(235, 230, 32, 18);

  // 눈동자
  let pupilOffsetX = map(mouseX, 0, width, -5, 5, true);
  let pupilOffsetY = map(mouseY, 0, height, -3, 3, true);
  fill(60, 60, 60);
  ellipse(165 + pupilOffsetX, 230 + pupilOffsetY, 12, 12);
  ellipse(235 + pupilOffsetX, 230 + pupilOffsetY, 12, 12);

  // 깜빡임
  if (frameCount % 180 < 8) {
    stroke(180, 140, 100);
    strokeWeight(2);
    line(149, 230, 181, 230);
    line(219, 230, 251, 230);
  }

  // 눈썹
  stroke(40, 40, 40);
  strokeWeight(4);
  noFill();
  arc(165, 215, 30, 10, PI, 0);
  arc(235, 215, 30, 10, PI, 0);
  strokeWeight(2);

  // 코
  stroke(120, 90, 60);
  line(200, 240, 200, 265);
  arc(200, 265, 18, 10, 0, PI);

  // 입
  if (mouseIsPressed) {
    fill(60);
    stroke(180, 80, 80);
    ellipse(200, 300, 25, 20); // 놀란 입
  } else {
    noFill();
    stroke(180, 80, 80);
    arc(200, 295, 40, 18, 0, PI); // 기본 입
  }

  // 안경
  stroke(40, 40, 40);
  noFill();
  ellipse(165, 230, 40, 22);
  ellipse(235, 230, 40, 22);
  line(185, 230, 215, 230);

  // 목
  fill(245, 220, 180);
  stroke(180, 140, 100);
  rect(180, 370, 40, 50, 10);

  // 티셔츠
  fill(tShirtColor);
  stroke(60, 90, 160);
  rect(140, 420, 120, 60, 30, 30, 10, 10);

  // 목걸이
  noFill();
  stroke(255, 215, 40);
  strokeWeight(12);
  arc(200, 410, 90, 40, PI, 0);
  stroke(255, 200, 60);
  strokeWeight(8);
  arc(200, 415, 70, 28, PI, 0);
  stroke(255, 180, 30);
  strokeWeight(5);
  arc(200, 420, 50, 18, PI, 0);
  fill(255, 220, 80);
  stroke(220, 160, 40);
  for (let i = 0; i < 7; i++) {
    let angle = map(i, 0, 6, PI, 0);
    let x = 200 + 40 * cos(angle);
    let y = 410 + 20 * sin(angle);
    ellipse(x, y, 14, 14);
  }
}

function keyPressed() {
  if (key === '1') {
    tShirtColor = color(200, 100, 100); // 빨간색
  } else if (key === '2') {
    tShirtColor = color(100, 200, 100); // 초록색
  } else if (key === '3') {
    tShirtColor = color(120, 160, 230); // 파란색
  }
  if (key === 'S' || key === 's') {
    saveGif('myCaricature.gif', 10);
    print("10초 GIF 저장을 시작합니다...");
  }
}
