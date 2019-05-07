class Car {
    constructor(engine, airbags, topSpeed, doors) {
        this.engine = engine;
        this.airbags = airbags;
        this.topSpeed = topSpeed;
        this.doors = doors;
    }

    run() {
        console.log("I am driving real fast");
    }
}

Car.safetyRating = 0;

let prius = new Car('hybrid', {}, 25, 4);

prius.run();

console.log(Car.safetyRating);
prius.radio = true;
console.log(prius.radio);