// we have three ways to make strings in javascript
let s1 = "ely says, \"javascript is great\"";
let s2 = 'ralph says "javascript is rad"';
let template = `Template literals allow us to use
multi line strings
they also allow string interpolation
this means we can directly inject js expressions into our string.
we do this with $ and {}
for example
s1 and s2 = ${s1 + " " + s2}
math = ${100 * 9 / 57}
random number = ${Math.ceil(Math.random()*5)}`

console.log(template);
