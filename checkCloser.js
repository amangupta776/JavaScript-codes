const outerFun=(a)=>{
let b=10
const innerFun=()=>{
    console.log(`the sum of two number ${a+b}`)
}
return innerFun
}
let checkClousure=outerFun(8)
checkClousure()
