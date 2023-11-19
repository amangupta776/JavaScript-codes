// const fun2=()=>{
// console.log("function 2 is called")
// } 
// const fun1=()=>{
//     console.log("function 1 is called")
//     fun2()
//     console.log("function 1 is called")
// }
// fun1()

const fun2=()=>{
    setTimeout(()=>{
        console.log("Function 2 is called")
    },2000)
}
const fun1=()=>{
    console.log("function 1 is called")
    fun2()
    console.log("function 1 is called")
}
fun1()