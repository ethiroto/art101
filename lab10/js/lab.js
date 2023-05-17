// index.js - Javascript for the web
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/15/2023

//finding the elements

var buttonEl=document.getElementById('my-button');

var buttonEl2=document.getElementById('my-button2');

var outputEl=document.getElementById('output');

//takes in string input, and sorts it returning a string.

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



//listens for the button press, takes the input field, and sorts and outputs.
buttonEl.addEventListener('click', function(){
    var inputEl=document.getElementById('user-name');
    var inputValue=inputEl.value;
    var sortedOutput=sortName(inputValue);
    outputEl.innerHTML=sortedOutput;
});


buttonEl.addEventListener('click', function(){
    var inputEl=document.getElementById('user-name2');
    var inputValue=inputEl.value;
    var sortedOutput=anagramName(inputValue);
    outputEl.innerHTML=sortedOutput;
});



