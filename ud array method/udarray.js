// slice(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*let arr = [2, 4, 8, 9, 6, 11, 55, 89];
console.log(arr.slice(1));
console.log(arr.slice(2, 5));
console.log(arr.slice(-2));
console.log(arr.slice(3, -1));
console.log(arr.slice());*/



//splice(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// this mimutate the old array

/*let arr = [2, 4, 8, 9, 6, 11, 55, 89];

//console.log(arr.splice(3));
//console.log(arr);
console.log(arr.splice(4, 3));
console.log(arr);*/

// reverse(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// this mimutate the old array

/*let arr = [2, 4, 8, 9, 6, 11, 55, 89];
let arr3 = [ 'd', 'c', 'b', 'a'];

console.log(arr.reverse());
console.log(arr);

console.log(arr3.reverse());
console.log(arr3);*/

// concat(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*let arr = [2, 4, 8, 9, 6, 11, 55, 89];
let arr3 = [ 'd', 'c', 'b', 'a'];

console.log(arr.concat(arr3));
console.log(arr3.concat(arr3));*/


// join(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*let arr = [2, 4, 8, 9, 6, 11, 55, 89];
let arr3 = [ 'd', 'c', 'b', 'a'];

console.log(arr.join('/'));
console.log(arr3.join('||'))*/


// forEach(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*let arr = [2, 4, -8, 9, 6, -11, 55, -89];
let arr3 = [ 'd', 'c', 'b', 'a'];

arr3.forEach(function(item, index, arr) {
    let res = `yuo have ${item} in ${index + 1} course`;
    //console.log(res);
});

arr.forEach(function (val, ind, arr) {
    let anw;
    if (val > 0){
         anw = `${ind + 1}: you have deposite ${val}`;
    }else{
         anw = `${ind + 1}: you have withdraw ${Math.abs(val)} `;
    }

    console.log(anw);
})*/


//map(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


/*let arr = [2, 4, -8, 9, 6, -11, 55, -89];
let arr3 = [ 'd', 'c', 'b', 'a'];

let newval = arr.map(function(item) {
    let result = item *2;
    return result;
})

console.log(arr);
console.log(newval);


// old method
let arr4 = [];

for (const item of arr) {
    let items = item * 2;
    arr4.push(items);
}

console.log(arr4);*/

// filter(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*let arr = [2, 4, -8, 9, 6, -11, 55, -89];
let arr3 = [ 'd', 'c', 'b', 'a'];

let filter = arr.filter(function(item) {
    let fil = item > 0;
    return fil;
})

console.log(filter);
console.log(arr);

// old method

let arr4 = [];

for (let item of arr) {
    let val;
    if(item > 0){
        val = item;
        arr4.push(val);
    }

    
}

console.log(arr4);*/

// reduce(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*let arr = [2, 4, 8, 9, 6, 11, 55, 89];
let arr2 = [4, 8, 18, 10];

let redu = arr.reduce(function(a, b) {
    let result = a + b;
    return result;
}, 0);

console.log(redu);




let redu2 = arr2.reduce(function(a, b, c, d) {
    let result = a + b;
    return result;
}, 0) / arr2.length;

console.log(redu2);



// old mehod
let avg;
let sum = 0;

for (const val of arr2) {
  sum += val;  
}

avg = sum/arr2.length;
console.log(avg);



let max = arr2.reduce(function(a, b, c, d) {
    
    if(a > b){
        return a;
    }else{
        return b;
    }

}, arr2[0]);

console.log(max);


// old method
let maxs =  arr2[0]
for (const val of arr2) {
    if(val > maxs){
        maxs = val;
    }
}

console.log(maxs);*/




// find(),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

let arr = [2, 4, 8, 9, 6, 11, 55, 89];
let arr2 = [4, -8, 18, -10];

let fin = arr2.find(function(val) {
    let result = val < 0;
    return result;
})

console.log(fin);