const car = {
    engine: "hybrid",
    doors: 2,
    airbags: {
        left: true,
        right: true,
        dash: true
    },
    topSpeed: 180
}

console.log(JSON.stringify(car));
// we can use dot . to access fields
console.log(`car's top speed is ${car.topSpeed}`);
// or we can use brackets [] to access fields
console.log(`car's engine is ${car['engine']}`);

// we can dynamically add fields to our objects
car.radio = true;
car.engine = "diesel";

console.log(`does car have a radio? ${car.radio}`);

delete car.airbags; // this will remove the field 'airbags' from our car

console.log(car);