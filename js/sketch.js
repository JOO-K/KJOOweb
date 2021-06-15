function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(8);
  stroke(0,255,50);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
