// var n = 89;
// for(i =2; i < n; i++){
//     console.log(i, n % i);
//     if (n % i == 0){
//          console.log("Note Prime Number");
//          break;
//     }
    

// }

function isPrime(n) {
    for (i = 2; i < n; i++){
        if (n % i ==0){
            return 'Not a prime number';
        }
    }
    return 'Your number is prime number';
}
var result = isPrime(61);
console.log(result);