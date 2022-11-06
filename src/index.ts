// primitive data type
// let age:number = 22;
// if(age<40){
//     age+=10
//     console.log(age)
// }

// !any
var newVar ;

newVar = 10;
newVar = "string";

// !Arrray
let arr: number[] = [1,2,3,4]

let array:number[] = []
array[0] = 23
array[1] = 25

let ar = []
ar[0] = 1
ar[1] = "string"

let newArr:[number,number,boolean,string] = [1,2,true,"hi"]

// !Enum

// in javascript we are using like
// const a = 100;
// const b = 200;

// here we have enum feature so we can initialize once

enum size {small = 1, medium,large}
// in the cae of string we need to define for all like for medium and large
//  if i define using const code will be more optimized

let mysize:size = size.medium
console.log(mysize)

// !Function

function userInfo(sal:number , age = 22):number{  //if i dont use arguments nonUsedParameter
    var nine:number = 100; //nonUsedLocal if i dont use this var
    console.log(nine)

    if(sal<100){
        return 100 
    }
    return age * 200 //nonImpliciteReturn if i dont return this  
}
console.log(userInfo(99,2))


// !Objects

let obj : {
    name:string,
    age:number,
    func : (date:Date) => void
} = {
    name : "Javid",
    age : 22,
    func : (date) => {
        console.log(date)
    }
}
console.log(obj)

// !Type Aliases

type User = {
    id : number,
    name : string,
    Married : boolean
}

let user:User = {
    id : 22,
    name : 'Mahammed',
    Married : false
}

// ! Union Types 

function kgToLbs(weight:number | string):number{
    
    // Handle both number and string --- Narrowing
    if(typeof weight ==="number"){
        return weight * 2.2
    }
    else{
        return parseInt(weight) * 2.2
    }
}

console.log(kgToLbs("2000kg"))

// 

// !Intersection types

type objectOne = {
    funcOne : () => void
}

type objectTwo = {
    functwo : () => void
}

type UIWidget = objectOne & objectTwo

let newObject:UIWidget = {
    funcOne : () => console.log("hi"),
    functwo : () => console.log("Bye")
}

// !Literals 

let z:50 = 50;  // anotating z must be 50 ano any number  let z:50 = 51 --gives error.

// using union Types

let y:60 | 70 = 60  // here value can be 60 or 70 not other number it can in string or other cases also

// using Aliases

type Quantity = 80 | 90;

let literals:Quantity = 90;  //it can be 80 or 90



// !Nullable Types 
// passing arguments as null or undefined or string or number

function newFunction(name:string | null | undefined){
    if(name){
        console.log(`you have entered ${name}`)
    }
    else {
        console.log(`you have entered null or undefined`)
    }
}
newFunction(undefined)

// !Tuples

type tup = [number , number]

function swap(num1:number , num2:number):tup{
    return [num2,num1]
}

let swapAns = swap(10,20)

console.log(swapAns[0])  // here we can access only the number we have. if we access index that is not in the array it will give compile error

// !Class

class UserInfo{
    constructor(name:string,age:number,place:string){
        this.name = name,
        this.age = age,
        this.place = place
    }
    name:string;
    age:number;
    place:string;

    getter () :string{
        return `${this.name} is from ${this.place}`
    }

    setter (newAge:number) :number{
        return this.age = newAge
    }
}
let newUser = new UserInfo("javid",22,"Kaup")
// console.log(newUser.getter())
newUser.setter(23)
console.log(newUser)

//static method only called by the class not by their instances
// we can make property protected by using keyword protected
//we can make property private by added # keyword to the property and also in contructor


// !Interfaces : User defined dataTypes
// when i want my own datatypes to use , in many places.  "Reuse" concept

interface Adress{
    pincode : number;
    street : string;
    landmark : string;
}


class profile{
    constructor(name:string,age:number,place:string,adress:Adress){
        this.name = name;
        this.age = age;
        this.place = place;
        this.adress = adress;
    }

    name:string;
    age:number;
    place:string
    adress : Adress

    //i want one property as my own defined 

    newName = "string"
    getPlace():string {
        return `${this.place}`
    }
}

let newProfile = new profile("Mahammed",22,"Kaup",{pincode:574106,street:"majoor",landmark:"circle"})
console.log(newProfile)

