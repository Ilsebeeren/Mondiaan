function setup() {
  createCanvas(500,500);
  background(240);
  // put setup code here
//https://www.piet-mondrian.org/composition-2-1922.jsp



  //grote vierkant in het midden
  // strokeWeight(10);
  // stroke(0);
  noStroke();
  rect(50,50,350,350);

  //vierkant grijs links
  noStroke();
  fill(240);
  rect(0,50,50,200);

  //vierkant blauw links
  fill(0,0,255);
  rect(0,200,50,200);

  //vierkant bovenin grijs
  fill(240);
  rect(0,0,200,50);

  //vierkant bovenin geel
  fill(255,255,0);
  rect(200,0,200,50);


  //vierkant zwart rechts
  fill(0);
  rect(400,0,100,150);

  //vierkantje rood rechts onderin
  fill(255,0,0);
  rect(400,450,100,50);


  //LIJNEN

  //lijn bovenin
  stroke(0);
  strokeWeight(10);
  line(200, 0, 200, 50);

  //lijn horizontaal bovenin
  line(0, 50, 500, 50);

  //lijn links verticaal
  line(50,50,50,400);

  //lijn horizontaal onderin
  line(20, 400, 400, 400);

  // lijn verticaal rechts
  line(400,50,400,500);

}


function draw() {
  // put drawing code here
}