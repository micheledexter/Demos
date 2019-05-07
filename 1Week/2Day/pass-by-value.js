function fun1(x) {
    console.log(`fun1 a before ${x}`);
    x = x + 1;
    console.log(`fun1 a after ${x}`);
}

let a = 5;
console.log(`a before fun1 ${a}`); // we know will be 5
fun1(a); // because a is 'primitized' we just copy the value 5
console.log(`a after fun1 ${a}`); // is this going to be 5 or 6 ???

// Strings also act like primitives in JavaScript.

function fun2(obj) {
    console.log(`fun2 obj before`, obj);
    obj.name = 'Alec';
    console.log(`fun2 obj after`, obj);
}

let b = {
    name: 'Eli',
    age: 'restricted'
};
console.log(b); // shouldn't have changed name
fun2(b);
console.log(b); // name should be changed