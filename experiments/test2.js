var buttonEl=document.getElementById('my-button');


buttonEl.addEventListener("click",function(){
    var inputEl=document.getElementById('my-field');
    var value = inputEl.value;
    console.log(value);
    var newEl=document.createElement('p');
    newEl.innerHTML=value;
    document.body.appendChild(newEl);

    inputEl.value='';


})

var inputEl=document.getElementById('my-field');

inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {  // 'Enter' for most modern browsers, 13 for older ones
        console.log('Enter key was pressed');
        var inputEl=document.getElementById('my-field');
        var value = inputEl.value;
        console.log(value);
        var newEl=document.createElement('p');
        newEl.innerHTML=value;
        document.body.appendChild(newEl);
    
        inputEl.value='';    
    }
});

