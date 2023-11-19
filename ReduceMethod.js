//Reduce method take four arguments: Accumulator.current value,current index,source Array 
let arr=[5,6,2]

let sum=arr.reduce((accumulator,elem,index,array)=>{
    debugger;
    return accumulator+elem
})

console.log(sum)
