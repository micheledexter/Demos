// while vs do-while
// basically the same, except do while will always run once

let a = 5;

do {
    a = Math.ceil(Math.random() * 5);
    console.log(a);
} while (a != 5);