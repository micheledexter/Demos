let cars = [{
        make: 'ford',
        model: 'escape',
        year: 2018,
    },
    {
        make: 'kia',
        model: 'soul',
        year: 1979
    },
    {
        make: 'ford',
        model: 'explorer',
        year: 2003
    },
    {
        make: 'BMW',
        model: 'M5',
        year: 1989
    }
];

// how filter works is we have to return true or false in our callback function
// if we return true, we will keep the ele, false we will drop it
// filter will return a new array with all the kept elements

let newCars = cars.filter((ele) => {
    if (ele.year > 2000) {
        // returning "true" means "add this item to the new array"
        return true;
    } else {
        // returning "false" means "do NOT add this item to the new array"
        return false;
    }
});

// shorthand using ternary
let nCars = cars.filter(ele => ele.year < 2000 ? true : false);

console.log(newCars);
console.log(nCars);
console.log(cars);