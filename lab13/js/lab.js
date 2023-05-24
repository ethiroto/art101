// index.js - Conditionals
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/24/2023

//finding our output element
output=$('#output');

//looping through 200
for (i=1; i<=200;i++){
    //creating the string to append
    var str=''

    //conditionals for Fizz, buzz and boom
    if (i%3==0){
        str+='Fizz';
    }
    if (i%5==0){
        str+='Buzz';
    }
    if (i%7==0){
        str+='Boom';
    }

    //Output conditions
    if (i%3==0 | i%5==0 | i%7==0){
        output.append(str+'! <br>');
    }
    else{
        output.append(i+'<br>');
    }
    
}