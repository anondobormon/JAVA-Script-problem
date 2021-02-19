// var days = 50;
// var cost = 0;
// if(days <= 10){
//     cost = days * 100;
// }
// else if(days <= 20){
//     var rules1Part = 10 * 100;
//     var remaining = days - 10;
//     var rules2Part = remaining * 80;
//     cost = rules1Part + rules2Part; 
// }
// else{
//     var rules1Part = 10 * 100;
//     var rules2Part = 10 * 80;
//     var remaining = days - 20;
//     var theirdPart = remining * 50;
//     cost = rules1Part + rules2Part + theirdPart;
//     console.log(cost);

// }


// var days = 17;



// function hotelCost(days) {


//     var cost = 0;
//     if (days <= 10) {
//         cost = days * 100;

//     }
//     else if (days <= 20) {
//         var rules1 = 10 * 100;
//         var remaining = days - 10;
//         var rules2 = remaining * 80;
//         cost = rules1 + rules2;
//     }
//     else {
//         var rules1 = 10 * 100;
//         var rules2 = 10 * 80;
//         var remaining = days - 20;
//         var rules3 = remaining * 50;
//         cost = rules1 + rules2 + rules3;

//     }
//     return cost;
// }
// var result = hotelCost(10);
// console.log(result);



// function largeNumber(num) {
//     var large = 0;
//     for (var i = 0; i < num.length; i++) {
//         var word1 = num[i];
//         if (large <word1.length) {
//             large = word1;
//         }

//     }
//     return large;
// }
// var result = largeNumber["akash", "batas", "chanddilar"];
// console.log(result);


// complete

// var num = ["akash", "batas", "chanddilar", "tumiamialarsithi", "Asinmostcasesofgreatand"];

//     for (var i = 0; i < num.length; i++) {
//         var word1 = num[i];
//         var large = 0;
//         if (large <word1.length) {
//             large = word1;
//         }
//         // return large;

//     }
//     console.log(large); 




// function megaFriend(num) {
//     for (var i = 0; i < num.length; i++) {
//         var nameWord = num[i];
//         var largeName = 0;
//         if (largeName < nameWord.length) {
//             largeName = nameWord;
//         }
//     }
//     return largeName;
// }
// var result = megaFriend(["akash", "batas", "chanddilar", "tumiamialarsithi"]);
// console.log(result);




// function kilometerToMeter(kilometer) {
//     var meter = 0;
//     if(kilometer <= -1){
//         meter = "Nothing";
//     }
//     else {
//         meter = kilometer * 1000;
//     }
//     return meter;
// }
// var result = kilometerToMeter(-50);
// console.log(result);





// function budgetCalculator(sum) {
//     for (var i = 0; i < sum.length; i++) {
//         var Watch = 0;
//         var Mobile = 0;
//         var Laptop = 0;
//         var total = 0;


//         if (sum[0, 1, 2] <= -1) {
//             total = "Nothing";
//         }
//         else {
//             Watch = sum[0] * 50;
//             Mobile = sum[1] * 100;
//             Laptop = sum[2] * 500;
//             total = Watch + Mobile + Laptop;
//         }





//         // var Watch = sum[0] * 50;
//         // var Mobile = sum[1] * 100;
//         // var Laptop = sum[2] * 500;
//         // var total = Watch + Mobile + Laptop;


//     }
//     return total;
// }
// var result = budgetCalculator([-1, -1, -1]);
// console.log(result);




// **************Mega Friend****************

function megaFriend(num) {
    var largeName = [0];
    for (var i = 0; i < num.length; i++) {
        var nameWord = num[i];
    
        if (largeName < nameWord.length) {
            largeName = nameWord
            
        }
        
    }
    return largeName;
}
var result = megaFriend(["Akash", "AsrafulAlam", "ShohagKumar", "JoyGobinda", "RojitRoy"]);
console.log(result);

// **************Mega Friend****************