function largeNumber(numbers){
    var large = [0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > large){
            large = element;
        }
    }
    return large;
}
var output = largeNumber([45, 34, 35]);
console.log(output);