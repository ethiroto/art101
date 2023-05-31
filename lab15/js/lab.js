// index.js - AJAX
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/30/2023

//finding our output element
outputEl=$('#output');
//finding our button element
buttonEl=$('#chuckButton');

//adding a click event handler to our button
buttonEl.click(function(){$.ajax({
  //where we are getting our data from
  url: "https://api.chucknorris.io/jokes/random",
  type: "GET",
  dataType: "json",

  //what to do when we get the data
  success: function(data){
    console.log(data);
    outputEl.html(data.value);
  },
  error: function(error){
    console.log("There was an error");
    console.log(error);
  }
})});
