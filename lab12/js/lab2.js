// index.js - Conditionals
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/22/2023

//finding the elements
buttonEl=$('#button');
inputEl=$('#input');
outputEl=$('#output');

houses=['Gryffindor','Ravenclaw','Slytherin','Hufflepuff','House Dope-shit'];
//Create the sorting hat logic, sorts based on the remainer from 4
function sortingHat(str){
    length=str.length;
    mod=length%houses.length;
    return houses[mod];
}

//Button event listener
buttonEl.on('click',function(){
    house=sortingHat(inputEl.val());
    outputEl.append('<p>You are sorted into house: '+ house + '</p>');
});

