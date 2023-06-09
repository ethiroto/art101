// index.js - Conditionals
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/22/2023

//finding the elements
buttonEl=$('#button');
inputEl=$('#input');
outputEl=$('#output');

//Create the sorting hat logic, sorts based on the remainder from 4
function sortingHat(str){
    length=str.length;
    mod=length%4;
    if(mod==0){
        return 'Gryffindor';
    }
    else if(mod==1){
        return 'Ravenclaw';
    }
    else if(mod==2){
        return 'Slytherin';
    }
    else if(mod==3){
        return 'Hufflepuff';
    }
}

//Button event listener
buttonEl.on('click',function(){
    house=sortingHat(inputEl.val());
    outputEl.append('<p>You are sorted into house: '+ house + '</p>');
});


