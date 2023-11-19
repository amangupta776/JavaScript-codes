let arr=[25,36,49,64,81]

let newArr=arr.map((elem,index,array)=>{
return Math.sqrt(elem)
})

console.log(newArr)

let arr2=[2,3,4,6,8]
let newArr2=arr2.filter((elem,index,array)=>{
    return elem*2>=10
})

console.log(newArr2)