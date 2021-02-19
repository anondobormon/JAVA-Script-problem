var a = 5;
var b = 7;
// console.log("before swap:", a, b);
var temp = a;
a = b;
b = temp;
// console.log("after swap:", a, b);


var x = 3;
var y = 2;
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap:", x, y);


var a = 5;
var b = 7;
[a, b] = [b, a]
console.log("before swap:", a, b);