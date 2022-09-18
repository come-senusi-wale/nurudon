'use strict';

// function construction,,,,,,,,,,,,,,,,,,,,,

function Person (name, age, birth) {
    this.name = name;
    this.age = age;
    this.birth = birth;
    this.cal = function() {
        console.log(birth - 20);
    }
}

let wale = new Person ('wale', 40, 60);
console.log(wale);
wale.cal();



// function construction prototype,,,,,,,,,,,,,,,,,,,,,,,
function Student (name, clas, age ){
    this.name = name;
    this.clas = clas;
    this.age = age;
}

Student.prototype.description = function () {
    let des = `i am ${this.name} of ${this.school} in ${this.clas}`;
    console.log(des);
}

Student.prototype.school = 'Aleka';

let saheed = new Student('saheed', 'ss1', 29)
console.log(saheed);
saheed.description();