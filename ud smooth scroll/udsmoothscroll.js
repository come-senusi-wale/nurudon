'use strict'

let links = document.querySelectorAll('.link-btn');
let home = document.querySelector('#home');
let contact = document.querySelector('#contact');
let about = document.querySelector('#about');

//console.log(links);

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        //console.log(e.target);
        e.preventDefault();

        if(e.target.classList.contains('link-home')) {

           /* // old ways of smooth scroll,,,,,,,,,,,,,,,,,,
            let homePro = home.getBoundingClientRect();
            console.log(homePro);

            console.log(e.target.getBoundingClientRect())

            console.log('current scrollx/y', window.pageXOffset, window.pageYOffset)

            console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)

            //window.scrollTo(homePro.left, homePro.top);

            window.scrollTo({
                left: homePro.left + window.pageXOffset,
                top: homePro.top + window.pageYOffset,
                behavior: 'smooth'
            })*/


            // new way of smooth scroll...............
            home.scrollIntoView({behavior: 'smooth'});

        }else if (e.target.classList.contains('link-contact')) {
            contact.scrollIntoView({behavior: 'smooth'});
        }else{
            about.scrollIntoView({behavior: 'smooth'});
        }
    })
})