// var fibo = [0, 1];
// for (var i = 2; i <= 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);

function fibonacchi(n){
    var fibo = [5, 4];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacchi(10);
console.log(result);