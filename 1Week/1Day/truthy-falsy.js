// in js we have this idea of truthy and falsy values
// this means that in boolean contexts, we will convert different types to booleans
// a few values become false all otherse are true
// 

function tFCheck(a) {
    if (a) {
        console.log(`${a} is truthy`);
    } else {
        console.log(`${a} is falsy`);
    }
}

tFCheck(false); // falsy
tFCheck(null); // falsy
tFCheck(undefined); // falsy
tFCheck(0); // falsy
tFCheck(""); // falsy
tFCheck({}); // truthy
tFCheck([]); // truthy
tFCheck(NaN); // falsy

