// var num = [11, 22, 12, 32, 45, 45, 78, 85];

// for (var i = 0; i < num.length; i++){
//     var element = num[i];
//     console.log(element);
// }


// function largestNumber(num){
//     var larger = num[0];
//     for (var i = 0; i < num.length; i++){
//         var element = num[i];
//         if(element > larger){
//             larger = element; 
//         }
//     }
//     return larger;
// }
// var largest = largestNumber([11, 22, 12, 32, 45, 45, 78, 85]);
// console.log(largest);




function sum(numbers) {
    var name = [0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        // if(name = element){
        //     element + name;
        // }
        var total = element + name;
    }
    return name;
}
var total = sum([2, 3]);
console.log(total);