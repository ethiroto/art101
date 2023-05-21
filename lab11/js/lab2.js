// index.js - Libraries and jQuery
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/17/2023


//finding the elements
var challengeEl=$('#challenge');
var problemEl=$('#problem');
var outputEl=$('#output')
var resultsEl=$('#results')

//creating the button elements
var cButton= $('<button> Press me!! </button>');
var pButton= $('<button> Press me! </button>');
var rButton= $('<button> Press me! </button>');

//Adding the buttons to the elements
challengeEl.append(cButton);
problemEl.append(pButton);
resultsEl.append(rButton);

//creating a function that takes in where you want to toggle the class
function specialActivate(id){
    id.toggleClass('special');
}

//Assigning the event listners to
cButton.on('click', function() {
    specialActivate(challengeEl);
    pButton.addClass('fun-button');
    cButton.removeClass('funner-button');
});

pButton.on('click', function() {
    specialActivate(problemEl);
    pButton.removeClass('fun-button');
    cButton.addClass('funner-button');
});

rButton.on('click', function() {
    specialActivate(resultsEl);
});





