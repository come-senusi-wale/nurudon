'use strict';

let container = document.querySelector('.container');
let imgs = document.querySelectorAll('.img');
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let dotContainer = document.querySelector('.dot-container');

//console.log(imgs)

imgs.forEach(function(img, i) {
    let points = `<div class="dot" data-slide="${i}"></div>`;
    dotContainer.insertAdjacentHTML('beforeend', points);
})

let dots = document.querySelectorAll('.dot');


let status = 0;

imgs.forEach(function(img, i) {
    img.style.transform = `translateX(${100 * (i - status)}%)`;
    //console.log(imgs[1])
})



// adding event listener to right button
btnRight.addEventListener('click', function() {

    if(status >= imgs.length - 1 ){
        status = 0;
    }else{

        status++;
    }


    imgs.forEach(function(img, i) {
        img.style.transform = `translateX(${100 * (i - status)}%)`;
    })

    dots.forEach(function(dot){
        dot.classList.remove('active-dot')
    })


    let act = document.querySelector(`.dot[data-slide="${status}"]`);
    //console.log(act);

    act.classList.add('active-dot');


    
})



// add event listen to left button
btnLeft.addEventListener('click', function() {

    if(status === 0 ){
        status = imgs.length - 1;
    }else{

    status--;

    }

    imgs.forEach(function(img, i) {
        img.style.transform = `translateX(${100 * (i - status)}%)`;
    })

    dots.forEach(function(dot){
        dot.classList.remove('active-dot')
    })


    let act = document.querySelector(`.dot[data-slide="${status}"]`);
    //console.log(act);

    act.classList.add('active-dot');

    
})



let interver = setInterval(function() {
    banner();
}, 3000);



container.addEventListener('mouseenter', function(){
    clearInterval(interver);
})


container.addEventListener('mouseleave', function(){
    interver = setInterval(function() {
        banner();
    }, 3000);
})


function banner () {
    if(status === 0){
        imgs.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - status)}%)`;
        }) 

        dots.forEach(function(dot){
            dot.classList.remove('active-dot')
        })
    
    
        let act = document.querySelector(`.dot[data-slide="${status}"]`);
        //console.log(act);
    
        act.classList.add('active-dot');
    

        status = 1;
        
    }else if(status === 1){
        imgs.forEach(function(img, i){
            imgs[1].style.opacity = '1';
            imgs[2].style.opacity = '1';
            imgs[3].style.opacity = '1';
        })
        imgs.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - status)}%)`;
        })

        dots.forEach(function(dot){
            dot.classList.remove('active-dot')
        })
    
    
        let act = document.querySelector(`.dot[data-slide="${status}"]`);
        //console.log(act);
    
        act.classList.add('active-dot');
    

        status = 2;
    }else if(status === 2){
        imgs.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - status)}%)`;
        })

        dots.forEach(function(dot){
            dot.classList.remove('active-dot')
        })
    
    
        let act = document.querySelector(`.dot[data-slide="${status}"]`);
        //console.log(act);
    
        act.classList.add('active-dot');
    

        status = 3;
    }else if(status === 3){
        imgs.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - status)}%)`;
        })

        dots.forEach(function(dot){
            dot.classList.remove('active-dot')
        })
    
    
        let act = document.querySelector(`.dot[data-slide="${status}"]`);
        //console.log(act);
    
        act.classList.add('active-dot');
    
        
        status = 0;

        setTimeout(function(){
            imgs.forEach(function(img, i){
                imgs[1].style.opacity = '0';
                imgs[2].style.opacity = '0';
                imgs[3].style.opacity = '0';
                imgs[0].style.transform = 'translateX(0%)';
            })
    
        }, 2000);
        

    }
}






// add event listener to dot
dotContainer.addEventListener('click', function(e){
    let en = e.target.classList.contains('dot');
    if(en){
        let attr = e.target.getAttribute('data-slide');
        //console.log(attr)
       
        dots.forEach(function(dot){
            dot.classList.remove('active-dot')
        })


        imgs.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - attr)}%)`;
        })

        let act = document.querySelector(`.dot[data-slide="${attr}"]`);
        //console.log(act);

        act.classList.add('active-dot');

    }
})
