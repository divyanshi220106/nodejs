
// callbacks callling a function in a fuction as an argument 
//  function doSomething(Callback){
//    callback();

//  }
//  function SayHi(){
//     console.log("hi!");
 // }
//  doSomething(SayHi);
// function judge(grade){
//     switch(true){
//         case grade=="A":
//             console.log("You got A grade");
//             break;

//     case grade=="B":
//         console.log("You got B grade");
//         break;
//         case grade=="C":
//             console.log("You got C grade");
//             break;
//             case grade=="D":
//                 console.log("You got D grade");
//                 break;
//                 default:
//                     console .log("Grade,what?");

// }
// }
// function getGrade(score,callback){
//     let grade;
// //     switch(true){
// //         case score>=90:
// //             grade="A";
// //             break;
// //             case score>=80:
// //                 grade="B";
// //                 break;
// //                 case score>=70:
// //                     garde="C";
// //                     break;
// //                     case score>=60:
// //                         grade="D";
// //                         break;
// //                         default:
// //                             grade="F";
// //     }
// //     callback(grade);
// // }
// // getGrade(85,judge);

// //Promises :-it handles two paramaters and thses paramters are callbacks; 
// //resolve=successful code .then method ois called  annd reject cases =unsuccessful code .catch method is called

// let promise=new Promise(function (resolve, reject)  {
//     let x=10;
//     if(x>10){
//         resolve(x);

//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success",value);
//     },
//     function(error){
//         console.log("Error",error);
//     }

// );
// const promise=new Promise((resolve,reject)=>{
//   resolve("Success!");
// })
// .then(value=>{
//     console.log(value);
//     return "we";
// })
// .then(value=>{
//     console.log(value);
//     return "can";
// })
// .then(value=>{
//     console.log(value);
//     return "chain";
// })
// .then(value=>{
//     console.log(value);
//     return "prpmises";
// })
// .then(value=>{
//     console.log(value);
//     return "together";
// })
// .catch(value=>{
//     console.log(value);
// })
//async=return promises ie reject or resolve and  await=not wait for the code 

function saySomething(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Something"+x);
        },2000);
    });
}
async function talk(x){
    const words=await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);