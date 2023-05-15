buttonEl=document.createElement('button');

buttonEl.innerHTML='sup';

helloEl=document.getElementById('hello');

helloEl.appendChild(buttonEl);

buttonEl.addEventListener('click',function(){
    username=prompt('input your name');
    helloEl.innerHTML="Hello, "+username;
})