class Dustbin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.bottom = Bodies.rectangle(this.x, this.y, 200, 20, { isStatic: true });
    this.right = Bodies.rectangle(this.x - 90, this.y - 100, 20, 200, { isStatic: true });
    this.left = Bodies.rectangle(this.x + 90, this.y - 100, 20, 200, { isStatic: true });

    World.add(world, this.bottom);
    World.add(world, this.right);
    World.add(world, this.left);

    this.image = loadImage("dustbin.png");
  }

  display() {
    var pos = this.bottom.position;
    push();
    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(pos.x, pos.y, 200, 20);
    rect(this.left.position.x, this.left.position.y, 20, 200);
    rect(this.right.position.x, this.right.position.y, 20, 200);
    image(this.image, pos.x, pos.y - 100, 200, 200);
    pop();
  }
}
