'use strict';

let images = document.querySelectorAll('.img');
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let dotContainer = document.querySelector('.dot-container');
let dots = document.querySelectorAll('.dot');
//console.log(images);
let counter = 0;



//first translate the image
images.forEach(function(img, i) {
    img.style.transform = `translateX(${100 * i}%)`;
})


let act = document.querySelector(`.dot[data-slide="0"]`);
        //console.log(act);
        act.classList.add('active-dot');



// add event listener on right button
rightBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(counter >= images.length - 1){
        counter = 0;
    }else{
        counter++;
    }
    
    images.forEach(function(img, i) {
        img.style.transform = `translateX(${100 * (i - counter)}%)`
    })


     // remove active class from all dot
     dots.forEach(function(dot) {
        dot.classList.remove('active-dot');
    })


    //adding active class to active dot
    let act = document.querySelector(`.dot[data-slide="${counter}"]`);
    //console.log(act);
    act.classList.add('active-dot');
})





// adding event listener on left button
leftBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(counter === 0){
        counter = images.length - 1
    }else{
        counter--;
    }
    
    images.forEach(function(img, i) {
        img.style.transform = `translateX(${100 * (i - counter)}%)`
    })

     // remove active class from all dot
     dots.forEach(function(dot) {
        dot.classList.remove('active-dot');
    })


    //adding active class to active dot
    let act = document.querySelector(`.dot[data-slide="${counter}"]`);
    //console.log(act);
    act.classList.add('active-dot');
})




// adding eventlistener to key on keyboard
document.addEventListener('keydown', function(e) {
   // console.log(e);


    if(e.key === 'ArrowLeft'){

        if(counter === 0){
            counter = images.length - 1
        }else{
            counter--;
        }
        
        images.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - counter)}%)`
        })
    }

    

    if(e.key ==='ArrowRight'){

        if(counter >= images.length - 1){
            counter = 0;
        }else{
            counter++;
        }
        
        images.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - counter)}%)`
        })
    }

     // remove active class from all dot
     dots.forEach(function(dot) {
        dot.classList.remove('active-dot');
    })


    //adding active class to active dot
    let act = document.querySelector(`.dot[data-slide="${counter}"]`);
    //console.log(act);
    act.classList.add('active-dot');
})





// adding event listener to dots
dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dot')){
        let data = e.target.getAttribute('data-slide');

        images.forEach(function(img, i) {
            img.style.transform = `translateX(${100 * (i - data)}%)`
        })

        // remove active class from all dot
        dots.forEach(function(dot) {
            dot.classList.remove('active-dot');
        })


        //adding active class to active dot
        let act = document.querySelector(`.dot[data-slide="${data}"]`);
        //console.log(act);
        act.classList.add('active-dot');
        
    }
})

