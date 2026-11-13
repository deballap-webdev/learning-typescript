// Type assertion || Type casting
// cconvert to more or less specific type
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Ts sees no problem here but a string is returned (be careful with type assetion)
let nextVal = addOrConcat(2, 2, "concat");
10;
10; // force or double casting
// The DOM
const anotherImg = document.querySelector("#myimg"); // does not work with react in tsx files
const myImg = document.getElementById('img');
const img = document.querySelector('img');
img.src;
myImg.src;
anotherImg.src;
export {};
