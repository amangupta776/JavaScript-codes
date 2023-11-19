const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>a*b;
const div=(a,b)=>a/b; //these four are callbackfunction

const calculator=(a,b,oper)=>{ //calculator is high order function
return oper(a,b);
}
console.log(calculator(1,2,add))