const btn = document.querySelectorAll('.btn');
const model = document.querySelector('.model-page');
const close = document.querySelector('.close');
const body = document.querySelector('body');

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        model.classList.add('hidden');
    })
}

close.addEventListener('click', function() {
    model.classList.remove('hidden');
})

document.addEventListener('keydown', function (e) {
//console.log(e);

if(e.key === 'Escape' && model.classList.contains('hidden')) {
    
        model.classList.remove('hidden');
    
}
})