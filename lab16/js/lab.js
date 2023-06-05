// index.js - AJAX
// Author: Ethan Christian and Aaron Rodriguez
// Date: 6/5/2023

//finding our elements
outputEl=$('#output');
title=$('#comicTitle');
next=$('#next');
back=$('#back');

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


function getAndPutData(){
  $.ajax({
    url: "https://xkcd.com/"+current+"/info.0.json",
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

current=2784;
next.on("click", function(){
  if (current<2784){
    current+=1;
  }
  getAndPutData();
});


back.on("click", function(){
  if (current>0){
    current-=1;
  }
  getAndPutData();
});

