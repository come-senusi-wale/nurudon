'use strict';

let btn = document.querySelectorAll('.btn');
let content = document.querySelectorAll('.content');
let content1 = document.querySelector('.content-1');
let content2 = document.querySelector('.content-2');
let content3 = document.querySelector('.content-3');

//console.log(btn);
//console.log(content);

btn.forEach(function(link){
    link.addEventListener('click', function(e) {

        //console.log(e.target)
        if(e.target.classList.contains('btn-1')){
            //console.log(this)
            concel();
            this.classList.add('btn-active');
            //console.log(content1)
            content1.classList.add('content-active');


        }else if(e.target.classList.contains('btn-2')){

            concel();
            this.classList.add('btn-active');
            //console.log(content2)
            content2.classList.add('content-active');
        }else{

            concel();
            this.classList.add('btn-active');
            //console.log(content3)
            content3.classList.add('content-active');
        }
    })
})


//function to remove class list
function concel (){
    btn.forEach(function(item) {
        item.classList.remove('btn-active');
    });

    content.forEach(function(item) {
        //console.log(item);
        item.classList.remove('content-active'); 
    });
}