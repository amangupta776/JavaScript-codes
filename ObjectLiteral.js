
//1st way to create an object
let bioData={
    Name:"Aman Gupta",
    Age:26,
    // getData:function(){
    //     console.log(`My name is ${bioData.Name} and My age is ${bioData.Age}`)
    // } 
    //2nd way no need to write function as well after es6
    getData(){
        console.log(`My name is ${bioData.Name} and My age is ${bioData.Age}`)
    } 
}
// console.log(bioData.Name)
// bioData.getData();

let bioData2={
    Name:{
        RName:"Aman",
        LastName:"Gupta"
    },
    Age:26,
    // getData:function(){
    //     console.log(`My name is ${bioData.Name} and My age is ${bioData.Age}`)
    // } 
    //2nd way no need to write function as well after es6
    getData(){
        console.log(`My name is ${bioData.Name} and My age is ${bioData.Age}`)
    } 
}
console.log(bioData2.Name.RName)

//what is this object
//The definition of "this" object is that it contain the current context.
//The this pbject can have different values depending on where it is placed
// console.log(this)
// function myName(){
//     console.log(this)
// }
// myName()
// let myNames='Aman'
// function myName(){
//     console.log(this.myNames)
// }
// myName()
const obj={
    myage:12,
myName:()=>{
console.log(this.myage)
}
}
obj.myName()