class Animal {
  constructor(public name: string) {}
  move(meters: number) {
    console.log(this.name + " moved " + meters + "m.");
  }
}
class Snake extends Animal {
  move() {
    console.log("Slithering...");
    super.move(5);
  }
}

class Horse extends Animal {
  move() {
    console.log("Galloping...");
    super.move(45);
  }
}

const sam = new Snake("Sammy the Python");
const tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
