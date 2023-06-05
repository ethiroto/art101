// index.js - AJAX
// Author: Ethan Christian and Aaron Rodriguez
// Date: 6/5/2023

//defining vars
var max;
var current;
//finding our elements
var outputEl = $('#output');
var title = $('#comicTitle');
var next = $('#next');
var back = $('#back');

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
    max = data.num;
    current = max;  // setting current here
  },
  error: function(error){
    console.log("There was an error");
    console.log(error);
  }
});

function getAndPutData(num){
  $.ajax({
    url: "https://xkcd.com/"+num+"/info.0.json",
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
}

next.on("click", function(){
  if (current<max){
    current+=1;
  }
  getAndPutData(current);
});


back.on("click", function(){
  if (current>1){ // Xkcd comics start at 1, not 0
    current-=1;
  }
  getAndPutData(current);
});

