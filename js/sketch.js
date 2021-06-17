var canvasdraw;

function setup() {
  canvasdraw = createCanvas(displayWidth, displayHeight);
  strokeWeight(8);
  stroke(0,255,50);
  canvasdraw.style("z-index: -100");
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
