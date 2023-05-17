// index.js - Javascript for the web
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/15/2023

//finding the elements
var inputEl=document.getElementById('user-name');

var inputEl2=document.getElementById('user-name2');

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

//creates anagram
function createAnagram(name) {
    // Convert the name to an array of characters
    var chars = name.split('');

    // Shuffle the array
    for (var i = chars.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }

    // Convert the array back to a string
    var anagram = chars.join('');

    return anagram;
}

function spitSort(){
    var inputEl=document.getElementById('user-name');
    var inputValue=inputEl.value;
    var sortedOutput=sortName(inputValue);
    
    var newLine=document.createElement('p');
    newLine.innerHTML=sortedOutput;
    outputEl.appendChild(newLine);
}

//listens for the button press, takes the input field, and sorts and outputs.
buttonEl.addEventListener('click', spitSort);



//Listens for keypresses
inputEl.addEventListener('keydown', function(keyPressed){
    console.log('Enter key was pressed');
    if (keyPressed.key==='Enter'|| keyPressed.keyCode === 13){
        spitSort();
    }
})

//Function to be called from event listener
function spitAnagram(){
    var inputEl2=document.getElementById('user-name2');
    var inputValue=inputEl2.value;
    var sortedOutput=createAnagram(inputValue);
    
    var newLine=document.createElement('p');
    newLine.innerHTML=sortedOutput;
    outputEl.appendChild(newLine);
};

//Button for Anagram
buttonEl2.addEventListener('click', spitAnagram);


//Listens for keypresses
inputEl2.addEventListener('keydown', function(keyPressed){
    console.log('Enter key was pressed');
    if (keyPressed.key==='Enter'|| keyPressed.keyCode === 13){
        spitAnagram();
    }
})








