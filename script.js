const buttons = document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click' , function(ev){
    console.log(ev);
    console.log(ev.target);
    if(ev.target.id === 'grey'){
        body.style.backgroundColor = ev.target.id;
    }
    if(ev.target.id === 'white'){
        body.style.backgroundColor = ev.target.id;
    }
    if(ev.target.id === 'blue'){
        body.style.backgroundColor = ev.target.id;
    }
    if(ev.target.id === 'green'){
        body.style.backgroundColor = ev.target.id;
    }
    if(ev.target.id === 'red'){
        body.style.backgroundColor = ev.target.id;
    }
    if(ev.target.id === 'orange'){
        body.style.backgroundColor = ev.target.id;
    }
        });
        
    });

