'use strict';

/*// destruction of array,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

let arrOne = ['come', 'about', 'home', ['house', 'school'], 34, 74,];

let [c, , h] = arrOne;
console.log(c, h);
let [a, d, f, g ]= arrOne;
console.log(g);

let hou = g[0];
console.log(hou);*/




/*// destruction of object,,,,,,,,,,,,,,,,,

let obj = {
    firstName: 'Akinyemi',
    otherName: 'Saheed',
    age: 34,
    favourite: ['houese', 'farm', 'work', 'school'],
    car: {
        model: 2004,
        type: 'toyota',
        maker: 'wale'
    }
};

let {firstName: a, age: b, favourite: c} = obj;
let {age: r, car:{model: e, type: t}} = obj;

//console.log(firstName, age);
//console.log(a, b);
//console.log(c);
//console.log(c[0]);
console.log(t);*/



/*// spread operator,,,,,,,,,,,,,,,,,,,,,

let arrTow = [23, 'home', 'job', 87, 98];


console.log(...arrTow);

let arrTre = ['job', 'house', 'qww', 45, 82, ...arrTow];
console.log(arrTre);

let str = 'amoeba';
console.log(...str);


//application spreaad operator
function calcu (m, n, p) {
    let sum = m + n + p;
    return sum;
}

let val = [3, 8, 5];
let result = calcu(...val);
console.log(result);*/



/*// Rest pattern and parameter,,,,,,,,,,,,,,,,,,,,

let arr = [45, 67, 78, 64, 63, 90, 'house', 'about', 'joy'];
let arrTwo = [1, 4, 8, 9, 21];

let [a, b, ...was] = arr;
console.log(a);
console.log(b);
console.log(was);
console.log(a, b, was);

let [c, d,  ...other] = [...arr, ...arrTwo];
console.log(c, d, other);

// application rest pattern and parameter

function calAvg (...was) {
    let avg = 0;
    for (let i = 0; i < was.length; i++) {
        avg += was[i];
       
    }

    avg /= was.length;
    console.log(avg);
}
calAvg(2, 3, 7, 8);
calAvg(10, 10, 10);*/


/*//looping array with for of,,,,,,,,,,,,,,,,,,,,,

let arr = [3, 6, 4, 5, 2];

let sum = 0;
for( let item of arr){
   // console.log(item);
    sum += item;
    
}

//console.log(sum);

for (const val of arr.entries()) {
   //console.log(val);
   console.log(val[0]);

}

for (let [x, y] of arr.entries()) {
    //console.log(x);
    //console.log(y);
    console.log(x);
}*/


/*// object for for loop ,,,,,,,,,,,,,,,,,,,,,,,,,,

let obj = {
    firstName: 'Akinyemi',
    lastName: 'Saheed',
    age: 35,
    addr: 'ojede',
    sch: 'futminna'
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

for (const item of Object.keys(obj)) {
    console.log(item);
    
}

for (const item of Object.values(obj)) {
    console.log(item);
    
}

let enter = Object.entries(obj);
console.log(enter);


for (const [x, y]of Object.entries(obj)) {
    //console.log(x);
    //console.log(y);
    console.log(x, y);

}*/


/*//set ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

let arr = [3, 4, 3, 2, 3, 8, 4];
let arrTow = ['house', 'come', 'about', 'house', 'about', 'joy'];

let neArr = new Set(arr);
let neArrTwo = new Set(arrTow);
console.log(neArr);
console.log(neArrTwo);
console.log(neArr.has(3));
console.log(neArr.has(20));
console.log(neArrTwo.has('house'));
console.log(neArrTwo.has('minna'));
console.log(neArrTwo.size);
neArrTwo.delete('house');
console.log(neArrTwo);*/


//working with string,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// string length

/*let sre = 'house';
let hom = 'i am coming home to see my to wife';

console.log(sre.length);
console.log('about us'.length);

console.log(sre[0]);
console.log('juggle'[3]);

console.log(sre.indexOf('u'));
console.log('akinyemi'.indexOf('y'));
console.log(hom.indexOf('home'));
console.log(hom.lastIndexOf('to'));

console.log(sre.slice(2));
console.log(hom.slice(3, 10));
console.log(hom.slice(hom.indexOf('t'), hom.lastIndexOf('e') +1));

// application of slice()

function check (item) {
    let cor = item.slice(item.length - 1);
    console.log(cor);
    if(cor === 'b'){
        console.log('correct');
    }else{
        console.log('fail');
    }
}

let anw = '2677b'
check(anw);
check('sgsu66c')*/

// replace()

/*let curr = '436838$';
let word = 'i am going to aleka school the name of the school is aleka';


console.log(curr.replace('$', '#'));
console.log(word.replace(/aleka/g, 'globa'));

console.log(word.includes('going'));
console.log(curr.includes(6));

console.log(curr.startsWith(23));
console.log(word.endsWith('aleka'));


//application of endWith() and startWith()
if (curr.startsWith(43) && curr.endsWith('$')) {
    console.log('currect enter');
}else{
    console.log('fail stay at home');
}


//application of includes()
function check (item) {
    let val = item.toLowerCase();
    if (val.includes('gun') || val.includes('knife')) {
        console.log("fail don't enter" );
    }else{
        console.log('nice one have a sit');
    }
}


check('my bag contain book, knife and pen');
check('my dad bag contain Gun shirt and bucket');
check('i have Pen Bag and laptop');*/


//split()

/*let word = 'aboro is a good man';

console.log(word.split(' '));

let words = word.split(' ');

for (const item of words) {
    console.log(item.toUpperCase());
    //console.log(item.slice(1));
    console.log(item[0].toUpperCase() + item.slice(1));
}

console.log(...word);*/

// padStart() and padEnd()

let meg = 'wale oma akin';
let num = '4322128';
console.log(meg.padStart(20, '+'));
console.log(meg.padEnd(18, '#'));

let pads = meg.padStart(17, '-');
let pade = pads.padEnd(22, '-') + '  ' ;
console.log(pade);

let slec = num.slice(4);
let rel = slec.padStart(num.length, '*');
console.log(rel);

//repeat()

let rep = 'be inform! '

console.log(rep.repeat(3));
console.log(pade.repeat(5));

//application of repeat();

function numb (x) {
    console.log(`there are ${x} star in the atmosphere ${'*'.repeat(x)}`);
}

numb(3);
numb(10);
