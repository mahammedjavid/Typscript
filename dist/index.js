"use strict";
var newVar;
newVar = 10;
newVar = "string";
let arr = [1, 2, 3, 4];
let array = [];
array[0] = 23;
array[1] = 25;
let ar = [];
ar[0] = 1;
ar[1] = "string";
let newArr = [1, 2, true, "hi"];
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
let mysize = size.medium;
console.log(mysize);
function userInfo(sal, age = 22) {
    var nine = 100;
    console.log(nine);
    if (sal < 100) {
        return 100;
    }
    return age * 200;
}
console.log(userInfo(99, 2));
let obj = {
    name: "Javid",
    age: 22,
    func: (date) => {
        console.log(date);
    }
};
console.log(obj);
let user = {
    id: 22,
    name: 'Mahammed',
    Married: false
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs("2000kg"));
let newObject = {
    funcOne: () => console.log("hi"),
    functwo: () => console.log("Bye")
};
let z = 50;
let y = 60;
let literals = 90;
function newFunction(name) {
    if (name) {
        console.log(`you have entered ${name}`);
    }
    else {
        console.log(`you have entered null or undefined`);
    }
}
newFunction(undefined);
function swap(num1, num2) {
    return [num2, num1];
}
let swapAns = swap(10, 20);
console.log(swapAns[0]);
class UserInfo {
    constructor(name, age, place) {
        this.name = name,
            this.age = age,
            this.place = place;
    }
    getter() {
        return `${this.name} is from ${this.place}`;
    }
    setter(newAge) {
        return this.age = newAge;
    }
}
let newUser = new UserInfo("javid", 22, "Kaup");
newUser.setter(23);
console.log(newUser);
class profile {
    constructor(name, age, place, adress) {
        this.newName = "string";
        this.name = name;
        this.age = age;
        this.place = place;
        this.adress = adress;
    }
    getPlace() {
        return `${this.place}`;
    }
}
let newProfile = new profile("Mahammed", 22, "Kaup", { pincode: 574106, street: "majoor", landmark: "circle" });
console.log(newProfile);
//# sourceMappingURL=index.js.map