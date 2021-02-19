



function factorials(n) {
    var factorials = 1;
    for (var i = 1; i <= n; i++){
        factorials = factorials * i;
    }
    return factorials;
}
var result = factorials(6);
console.log(result);