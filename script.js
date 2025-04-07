// function sayHello(){
//     let you=prompt("What's your name?");
//     console.log("Hello",you + " ! ");
// }
// sayHello();
// let varContainingFunction=function(){
//     let varInFunction="I 'm in a function .";
//     console.log("hi there!", varInFunction);
// };
// varContainingFunction();
// function tester(para1,para2){
//     return para1 + " "+ para2;
// }
// const arg1="argument 1";
// const arg2="Argument 2";
// tester(arg1,arg2);
// console.log(arg1,arg2);
// let x=parseInt(prompt("Enter First number"));
// let y=parseInt(prompt("Enter second number"));
// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// let doingArrowStuff=x=> console.log(x);
// doingArrowStuff("Great!");

//spread operator 
// let spread=["so","much","fun"];
// let message=["javaScript","is", spread,"and","very","powerful"];
// console.log(message);
// let spread=["so","much","fun"];
// let message=["javaScript","is",...spread,"and","very","powerful"];
// console.log(message);
// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[6,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2);

//Rest parameter
// function someFunction(param1, ...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","hello");

//Returning function values
// function addTwoNumbers(x=4,y=5){
//     return sum=x+y;
// }

// let result=addTwoNumbers(4,5);
// console.log(result);
// let resultarr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i);
//     resultarr.push(result);
// }
// console.log(resultarr);
// let  addTwoNumbers=(x,y)=>x+y;
// let result=addTwoNumbers(12,15);
// console.log(result);
// let addTwoNumbers=(x,y)=>{
//    console.log("Adding...");
//    return x+y;
// }
// console.log(addTwoNumbers=(9,8));

//variable scope
// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("Hi!");
// console.log("not available here:",x);
// function testAvailability(){
//     let y="I'll return";
//     console.log("Available here:",y);
//     return y;
// }
// let z=testAvailability();
// console.log("Outside the function:",z);
// console.log("not available here:",y);


// function doingStuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();
// function doingStuff(){
//     if(true){
//         console.log(x)
//         let x="local";
//     }
    
// }
// doingStuff();

//constant scope
// function doingStuff(){
//     if(true){
//         const x="local";
//     }
//     console.log(x);
// }
// doingStuff();

//global variable: variables at top
// let globalVar="Accessible everywhere!";
// console.log("Outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("access to global vars inside function.", globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);
// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
let x="global";
function doingStuff(x){
    console.log(x);
}
doingStuff("param");

