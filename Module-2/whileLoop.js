var i = 10;
var factorial = 1;
while (i > 1){
    factorial = factorial * i;
    console.log(i, factorial);
    i--;
}
function total(n) {
    var total1 = 1;
    for(var i = 1; i <= n; i++){
        total1 = total1 * i;
    }
    return total1;
}
var result = total(10);
console.log(result);
var result = total(10);
console.log(result);



function factoria(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factoria(n - 1);
    }
}
var result5 = factoria(11);
console.log(result5);