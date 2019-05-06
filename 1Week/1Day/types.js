// js is a loosely typed language
// this means that while it has types, variables can change types in their lifetime.
// also, we do not need to specify types of our variables

function typeCheck(a) {
    console.log(`a has a value of ${a} and a type of ${typeof(a)}`);
}

typeCheck(true);
typeCheck(false);
typeCheck(8);
typeCheck('string');
typeCheck("double string");
typeCheck(`template literal`);
typeCheck(0);
typeCheck(89.7);
typeCheck(typeCheck);
typeCheck(undefined);
typeCheck(null);
typeCheck({});
typeCheck(NaN);
typeCheck([1,2,3,4]);
typeCheck(Infinity);