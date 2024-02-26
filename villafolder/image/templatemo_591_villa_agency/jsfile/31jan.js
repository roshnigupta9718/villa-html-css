// check which num is far from 100
// let num1=+prompt('enter any num')
// console.log(num1);
// console.log(typeof num1)
// let num2=+prompt('enter num2')
// console.log(num2)
// console.log(typeof num2)

// let num1=87
// let num2=78

// if(100-num1>100-num2){
//     console.log(`num 1 ${num1} is far`)
// }else  console.log(`num2 ${num2} is far`)
// if num is equal to num2 return same num else return difference
// let num1=+prompt('enter any number')
// let num2=+prompt('enter any num')
// if (num1===num2){
//     console.log(num1)
// }else console.log(`the differnce is ${Math.abs(num1-num2)}`)
// **************************************************************************************************
// nested ternary(sir ka topic)
// chatgpt ka solution

// let ra=4000;
// let ro=4000;
// (ro<ra)?console.log(ro):ro>ra?console.log("ro is greater"):console.log("ra  and ro is equal ")
// question 3
// nested ternary
// let salary=1;
// let balance=2;
// salary>balance?console.log(`${salary}`):salary<balance?console.log(`${salary}`):console.log(`${balance}`)
// let x = 10;
// let y = 5;

// let result = x > y
//   ? "x is greater than y"
//   : x < y
//     ? "x is less than y"
//     : "x is equal to y";

// console.log(result);
// loops
// let a=9
// console.log(a)
// console.log(a++);//post-increment
// console.log(a);
// console.log('****************************')
// let b=9
// console.log(b)
// console.log(++b)//pre-increment
// console.log(b);
// console.log("******************************************")
// let c=9
// console.log(c);
// console.log(c--)//post-decrement
// console.log(c)
// console.log("***********************")
// let d=6
// console.log(d)
// console.log(--d)//pre decrement
// console.log(d)
// console.log("**********************");
// loops
// for(st1:condition;st2){
// codes
//}
// for(var a=1;a<4;a++){
//     console.log(a);
// }
// var a=2
// for(;a<10;a++){
//     console.log(a)
// }
// const a=3
// for(;a<10;a++)console.log(a)
// //nested loop
// for(let a=1;a<3;a++){
//     console.log(`a says ${a}`)
// }
// nested loop
// for(let a=1;a<3;a++){
//     console.log(`a saya ${a}`)
//     for(let b=44;b<46;b++){
//         console.log(`b says ${b}`)
//         for(let c=77;c<79;c++){
//             console.log(`c says ${c}`)
//         }
//     }
// }
for (let a = 1; a <= 6; a++) {
  document.write(`a ${a}`)
  for(let b=1;b<a;b++){
  document.write(<span class="a">*</span>)
 document.write(` </br>`)}
  }

