// index.js - Arrays and Objects
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/1/2023

//Function takes in a username and returns a sorted version
function sortName(){
    //take input
    var userName =window.prompt("Give me your name! I'll sort it!");
    console.log("userName ",userName)
    //turn name into array
    var nameSplit= userName.split('');
    console.log("nameSplit ",nameSplit)
    //sort array
    var sortedArray=nameSplit.sort();
    console.log("sortedArray ",sortedArray)
    //turn back into string
    var sortedName=sortedArray.join('');
    console.log("sortedName ",sortedName)

    return sortedName
}

var nameOutput=sortName();

document.writeln("this is the name sorted: ",nameOutput);