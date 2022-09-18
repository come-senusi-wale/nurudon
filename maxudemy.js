let arr = [5, 25, 82, 23, 71,];

// sum of number in array

let sum = 0;

for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}


console.log(sum);

// find max number in array

let max = arr[0];

for (let i = 0; i<arr.length; i++){
    if(arr[i] > max) max =arr[i];
}
console.log(max);



// find min number in array

let min = arr[0];

for (let i = 0; i<arr.length; i++){
    if(arr[i] < min) min =arr[i];
}
console.log(min);

// using function  for calculation above

let calcMin = function (arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }

    return `maximum number is ${max} and the minimum number is ${min}`;
}

let result = calcMin(arr);

console.log(result);


