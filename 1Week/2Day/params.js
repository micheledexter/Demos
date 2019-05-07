function doMath(a, b = 10, ...params) {
    console.log(a + b);
    let x = 0;
    for(let i = 0; i < params.length; i++) {
        x += params[i];
    }
    if (params.length > 0) console.log(params, x);
}

doMath(1, 2);
doMath(1);
doMath(1, 2, 3, 4, 5, 6);