'use strict';


// old way of doing sticky header
/*let nav = document.querySelector('.nav');
let section = document.querySelector('.section');

let intialCoodinate = section.getBoundingClientRect();
//console.log(intialCoodinate);

window.addEventListener('scroll', function() {
    //console.log(window.scrollY)

    if(window.scrollY > intialCoodinate.top){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
})*/





// perfect way of doing header

let nav = document.querySelector('.nav');
let red = document.querySelector('.red');

let navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);

function navLook (entries, observer) {
    //console.log(entries);
    let [entry] = entries;
    //console.log(entry);
    if(!entry.isIntersecting){
        nav.classList.add('sticky');

    }else{
        nav.classList.remove('sticky');
    }
}

let option = {
    root: null,
    threshold: 0,
    rootMargin: `${-navHeight}px`
}

let navObserver = new IntersectionObserver(navLook, option)

navObserver.observe(red);
