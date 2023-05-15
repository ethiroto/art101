// index.js - Javascript for the web
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/15/2023

//finding the elements
var inputEl=document.getElementById('user-name');

var buttonEl=document.getElementById('my-button');

var outputEl=document.getElementById('output');

function sortName(input){
    //turn name into array
    var nameSplit= input.split('');
    //sort array
    var sortedArray=nameSplit.sort();
    console.log("sortedArray ",sortedArray)

    //turn back into string
    var sortedName=sortedArray.join('');

    return sortedName
}


buttonEl.addEventListener('click', function(){
    var inputEl=document.getElementById('user-name');
    var inputValue=inputEl.value;
    var sortedOutput=sortName(inputValue);
    outputEl.innerHTML=sortedOutput;
});


