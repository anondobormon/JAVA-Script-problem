// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){

//     if(strSplit[i].length > longestWord)
//     {
// 	longestWord = strSplit[i].length;
//      }
//   }
//   return longestWord;
// }
// var result = findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(result);




// **************Mega Friend****************

function megaFriend(num) {
    for (var i = 0; i < num.length; i++) {
        var nameWord = num[i];
        var largeName = 0;
        if (largeName < nameWord.length) {
            largeName = nameWord;
        }
    }
    return largeName;
}
var result = megaFriend(["Akash", "Asraful Alam", "Shohag Kumar", "Joy Gobinda", "Rojit Roy"]);
console.log(result);

// **************Mega Friend****************