let pos = [], a = [], mx = 10,mn = 5,s = 10,am = 70;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0,0,15);
  am = round(width/10);
  setItup();
  textSize(s);
}

function draw() {
  background(0,0,20,10);
  noStroke();
  fill(0,255,0);
  for(let i = 0;i < am*2;i+=2){
    for(let j = 0;j < a[i/2];j+=1){
      text(char(round(round(pos[i]+pos[i+1])+(s*j+i))),pos[i],pos[i+1]+(s*j));
    }
    pos[i+1] += s;
    if(pos[i+1] > height){
      pos[i] = random(width);
      pos[i+1] = -(a[i/2]*s);
    }
  }
}

function setItup(){
  for(let i = 0;i < am*2;i+=2){
    pos[i] = random(width);
    pos[i+1] = random(height);
    a[i/2] = random(mn,mx);
  }
}
