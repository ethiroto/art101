// index.js - Arrays and Objects
// Author: Ethan Christian and Aaron Rodriguez
// Date: 5/1/2023

myTransport= ['car','bike','bus','train']

var myMainRide = {
    make: "Honda",
    model: "Fit",
    color: "Silver",
    year: 2013,
    age: function() {
        return 2022 - this.year;
    }
}

myMainRide.model
myTransport[2]
console.log(myTransport[0],myMainRide.make,myMainRide.model)

document.writeln("I use these kinds of transport: ",myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");