
//Javascript Maps:- Map holds key-value pairs where the keys can be any datatype.
const fruit=new Map([
    ["apples",500],
   ["banana",300],
   ["oranges",200]
 ]);
// console.log(fruits);
// Map.delete()
// fruits.delete()
// fruits.has("apples");
// fruits.has("apples");
// let text="";
// fruits.forEach(function(value,key){
//     text+=key +'='+value;
// })
// console.log(text);
// )
// let text="";
// for(const x of fruits .values)

//objects as keys
// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const fruits=new Map();
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.get("apples");
// console.log(fruit.get(apples));
// //destructuring:- unpack object properties

// let{firstname,lastname}=person;
// const person={
//     firstName:"john",
//     lastname:"Doe",
//     age:50
// };
// //destructuring
// let{firstName,lastName}=person;
// console.log(firstName);
// console.log(lastName);
// destructuring is not desructive
//it does not change value
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{firstName,lastName,country="US"}=person;
// console.log(country);
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{lastName:name}=person;
// console.log(name);
// let name="Divyanshi";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1+a2+a3+a4+a5);
//exponention operator
// let x=5;
// let z=x**2;//or Math.pow(x,2);
// console.log(z);
//javascript  array includes
// const fruits=["Banana","Orange","Apple","Mango"];
// fruits.includes("Mango",3);
// console.log(fruits);

//trailing commas:-dangling comma don't cretae two commas at the end as it results in undefined array
// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr.length);
//it's important to remember that the value of length property doesn't always indicate the number of elements in the array.
const person=
{
    firstName:"John",
    ,
    age:30
}







