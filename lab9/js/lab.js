// index.js - Javascript for the web
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/10/2023

//finding the element
var outputEl=document.getElementById("output");

//Creating elements
var new1El=document.createElement("p");

new1El.innerHTML="Hey! I'm saying something new!";

var new2El=document.createElement("p");

new2El.innerHTML="This is something different that I am saying!"


//Appending the div 
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//chaning text color to green
outputEl.style.color="green";

//blurring an image
imgEl=document.getElementById("lab-img");
imgEl.style.filter = "blur(5px)";

