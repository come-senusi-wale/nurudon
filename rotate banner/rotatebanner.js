'use strict';
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let container = document.querySelector('.container');


let status = 1;

window.addEventListener('load', function(){

    banner();
})



let interval = setInterval(() => {
    banner();
}, 4000);



container.addEventListener('mouseenter', function(){
    clearInterval(interval);
})


container.addEventListener('mouseleave', function(){
    interval = setInterval(() => {
        banner();
    }, 4000);
})




btnLeft.addEventListener('click', function() {
   
    if(status === 1){
        status = 3;
        banner();
    }else if(status === 3){
        status = 2;
        banner();
    }else if (status === 2){
        status = 1;
        banner();
    }else{
        status = 1;
    }

   
})


btnRight.addEventListener('click', function() {
    banner();
})



function banner () {

    if(status === 1){
        img2.style.opacity = '0';
        //img3.style.opacity = '0';

        setTimeout(function (){
            img1.style.transform = 'translateX(0%)'
            img2.style.transform = 'translateX(100%)'
            img3.style.transform = 'translateX(-100%)'
        }, 500);

        setTimeout(function(){
            img2.style.opacity = '1';
            img3.style.opacity = '1';
        }, 1000);

        status = 2;


    }else if(status === 2){
       //img1.style.opacity = '0';
        img3.style.opacity = '0';

        setTimeout(function (){
            img2.style.transform = 'translateX(0%)'
            img3.style.transform = 'translateX(100%)'
            img1.style.transform = 'translateX(-100%)'
        }, 500);

        setTimeout(function(){
            img1.style.opacity = '1';
            img3.style.opacity = '1';
        }, 1000);

        status = 3;


    }else if(status === 3){
        //img2.style.opacity = '0';
        img1.style.opacity = '0';

        setTimeout(function (){
            img3.style.transform = 'translateX(0%)'
            img1.style.transform = 'translateX(100%)'
            img2.style.transform = 'translateX(-100%)'
        }, 500);

        setTimeout(function(){
            img2.style.opacity = '1';
            img1.style.opacity = '1';
        }, 1000);

        status = 1;
    }
}
