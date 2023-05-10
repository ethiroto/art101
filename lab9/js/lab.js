// index.js - Arrays and Objects
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/10/2023

//finding the element
outputEl=document.getElementById("output");

//Creating elements
new1El=document.createElement("p");

new1El.innerHTML="Hey! I'm saying something new!";

new2El=document.createElement("p");

new2El.innerHTML="This is something different that I am saying!"


//Appending the div 
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//chaning text color to green
outputEl.style.color="green";

//blurring an image
imgEl=document.getElementById("lab-img");
imgEl.style.filter = "blur(5px)";

