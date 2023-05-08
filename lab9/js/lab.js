a=[1,33,42,98,31];
console.log('My array is ',a);

function sqr(x){
    return x*x;
}

console.log('2 squared is ',sqr(2));

console.log('4 squared is ',sqr(4));

console.log('my array squared: ',a.map(sqr));

console.log('my array squared: ',a.map(sqr));

var result =a.map(function(x){
    return x%2 !=0;
})

console.log('These numbers in my array were odd: ',result);

