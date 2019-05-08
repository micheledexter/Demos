let car = {};

let makeFunctions = (function() {
    let make = 'Ford';
    return [() => {return make;}, (newValue) => {newValue ? make = newValue : make}];
})();

car.getMake = makeFunctions[0];
car.setMake = makeFunctions[1];
console.log(car.getMake());
car.setMake('Kia');
console.log(car.getMake());