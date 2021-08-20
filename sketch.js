let bg;
let y = 0;

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  bg = loadImage(
    "https://preview.redd.it/duhprq2s1oq11.jpg?width=640&crop=smart&auto=webp&s=bea570ef3dc328be98f98b17f86bc6211ee7ae78"
  );
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(bg);
  translate(width / 2, height / 2);
  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  strokeWeight(6);

  stroke("gray");
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  stroke("gray");
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();

  stroke("gray");
  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 270, 270, 0, minuteAngle);

  push();
  stroke("gray");
  rotate(minuteAngle);
  line(0, 0, 130, 0);
  pop();

  stroke("gray");
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(mn, 0, 60, 0, 6);
  arc(0, 0, 240, 240, 0, hourAngle);

  push();
  stroke("gray");
  rotate(hourAngle);
  line(0, 0, 120, 0);
  pop();

  push();
  stroke("gray");
  strokeWeight(10);
  point(0, 0);
  pop();

  stroke("gray");
  strokeWeight(1);
  rotate(90);
  text("12", 0, -160);
  text("1", 80, -135);
  text("2", 135, -80);
  text("3", 160, 0);
  text("4", 135, 80);
  text("5", 80, 150);
  text("6", 0, 170);
  text("7", -80, 150);
  text("8", -150, 80);
  text("9", -165, 0);
  text("10", -150, -80);
  text("11", -80, -135);
  stroke("black");
  text(hr + " :  v" + mn + " : " + sc, -30, -15);
}
