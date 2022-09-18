// number operations,,,,,,,,,,,,,,,,,,,,,,


//Number()
/*let num = '36';
let num2 = '37.9';
console.log(num);
console.log(Number('4'));
console.log(Number(num));
console.log(Number(num2));*/



// parsing i.e  Number.parseInt()

/*let num = 36.5;
let num2 = '40px';

console.log(num2);
console.log(parseInt(num2));
console.log(parseInt(num));
console.log(Number.parseInt(num));*/



// Number.parseFloat()

/*let num = 36.5;
let num2 = '40px';

console.log(parseFloat(num));
console.log(parseFloat(num2));*/





// check if a value is number i.e isFinite()

/*let num = 36.5;
let num2 = '40px';

console.log(isFinite(num));
console.log(isFinite(num2));
console.log(isFinite(0));*/


// check if a value is an integer i.e isInteger()

/*let num = 36.5;
let num2 = '40px';

console.log(Number.isInteger(num));
console.log(Number.isInteger(num2));
console.log(Number.isInteger(67));*/



// math operation,,,,,,,,,,,,,,,,,,,,,

/*console.log(Math.sqrt(25));
console.log(25**(1/2));



console.log(Math.max(2, 67, 88, 9, 2));
console.log(Math.min(2, 67, 88, 9, 2));

// to calculate area of circle

let are = Math.PI * parseFloat('5px') ** 2;
console.log(are);


console.log(Math.round(2.9));

console.log(Math.random());

console.log(Math.ceil(33.4));
console.log(Math.ceil(33.7));

console.log(Math.floor(46.9));
console.log(Math.floor(46.1));

console.log(Math.trunc(46.9));
console.log(Math.trunc(46.1));

let num4 = 36.93993;
console.log(num4.toFixed(2));
console.log(num4.toFixed(0));
console.log(num4.toFixed(4));
console.log(num4.toFixed(1));



// function to find number between min and max number

function findNum (max, min){
    let num = Math.floor(Math.random() * (max - min) + 1) + min;
    console.log(num);
}

 findNum(5, 2);
 findNum(10, 2);
 findNum(2, 5);*/





 // new Date(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

 /*let date = new Date();
 console.log(date);
 let year = date.getFullYear();
 let month = date.getMonth() + 1;
 let day = date.getDate();
 let days = date.getDay();
 let hour = date.getHours();
 let minute = date.getMinutes();
 let second = date.getSeconds();

 console.log( year, month, day);

 


   
setInterval(function() {
    let date = new Date();
    let hour = date.getHours();
 let minute = date.getMinutes();
 let second = date.getSeconds();
    let time = `${hour}:${minute}:${second}`
    console.log(time);
 }, 1000);*/




 // internation of date and number,,,,,,,,,,,,,,,,,,

 // date format
 let now = new Date();
 let iter = new Intl.DateTimeFormat('en-US').format(now);
 console.log(iter);

 let option = {
     hour: 'numeric',
     minute: 'numeric',
     year: 'numeric',
     month: 'long',
     day: 'numeric',
     weekday: 'long'
 }

 let inter = new Intl.DateTimeFormat('en-US', option).format(now);
 console.log(inter);

 // number format

 let num = 4782073028320;
 let interNum = new Intl.NumberFormat('en-US').format(num);
 console.log(interNum);
 let opt = {
     style: 'currency',
     currency: 'EUR'
 }

 let interNum2 = new Intl.NumberFormat('en-US', opt).format(num);
 console.log(interNum2);







 // set timer,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

 let time = 3600;

    function times() {
        inte = setInterval(function () {
            
            let min = time/60;
            let mins = Math.trunc(min);

            let sec = time%60;
            let secs = Math.trunc(sec);

            document.querySelector('.time').textContent = `the page will close in ${mins}:${secs} time`;
            //console.log(mins, secs)
            if (time === 0){

                document.querySelector('body').style.backgroundColor = '#000';
                //console.log('time off')
                clearInterval(inte)
            }
            time--;    
        }, 1000)

    }

    times();


