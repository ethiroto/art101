// index.js - AJAX
// Author: Ethan Christian and Aaron Rodriguez
// Date: 6/5/2023

//finding our elements
outputEl=$('#output');
title=$('#comicTitle');

$.ajax({
  //where we are getting our data from
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",

  //what to do when we get the data
  success: function(data){
    console.log(data);
    outputEl.html('<img src="' + data.img + '" alt="' + data.alt + '">');
    title.html(data.title);
  },
  error: function(error){
    console.log("There was an error");
    console.log(error);
  }
});

