var a = [1, 33, 42, 98, 31];

function sqr(x) {
    return x * x;
}

var mapResults = [
    'My array is: ' + a,
    '2 squared is: ' + sqr(2),
    '4 squared is: ' + sqr(4),
    'My array squared: ' + a.map(sqr),
    'My array squared: ' + a.map(sqr),
].join('<br>');

var result = a.map(function (x) {
    return x % 2 !== 0;
});

var outputEl = document.getElementById('output');
outputEl.innerHTML = mapResults + '<br>These numbers in my array were odd: ' + result;



function numAddition(num1,num2,func){
    res=num1+num2;
    func(res)

}

function praise(result){
    console.log('Amazing! the result was: ',res)
}

console.log(numAddition(3,4,praise));