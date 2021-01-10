class Paper {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    };
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x, this.y, 35, this.options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 90, 90);
    pop();
  }
}

