'use strict'
let again = document.querySelector('.again');
let guss = document.querySelector('.guss');
let input = document.querySelector('.input');
let check = document.querySelector('.check');
let meg = document.querySelector('.meg');
let score = document.querySelector('.score');
let high = document.querySelector('.highest');
let body = document.querySelector('body');

let secret = Math.trunc(Math.random() * 20) + 1;
//onsole.log(secret);
//guss.textContent = secret;

let result = 20;
let highScore = 0;

check.addEventListener('click', function(){
    let val = Number(input.value);
    
    if (!val){
        meg.textContent = 'pls put number';
    }else if(val > secret){
        if(result >= 1){
            meg.textContent = 'number too large';
            result--;
            score.textContent = result;
        }else{
            meg.textContent = 'you loose' 
        }
    }else if(val < secret){
        if(result >= 0){
            meg.textContent = 'number too small';
            result--;
            score.textContent = result;
        }else{
            meg.textContent = 'you loose';
        }
    }else if(val === secret){
        meg.textContent = 'you win';
        score.textContent = result;
        guss.textContent = secret; 
        body.style.backgroundColor = 'green';

        if(result > highScore){
            highScore = result;
            high.textContent = highScore;
        }
    }

})

again.addEventListener('click', function(){
    secret = Math.trunc(Math.random() * 20) + 1;
    guss.textContent = '?';
    result = 20;
    input.value = '';
    meg.textContent = 'start gussing'
    score.textContent = result;
    body.style.backgroundColor = '#000';
    //guss.textContent = secret;

})