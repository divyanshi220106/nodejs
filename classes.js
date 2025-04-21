//classes are blueprint for object creation
//classes and objects
//objects are collection of properties and methods.//this keyword refers to the object it belongs to ,so its is the forst priority of the instance of ClassName
//constructoe is a special method that we use to initialize objects
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log (obj.prop1);
// console.log (obj.prop2);

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.Weight=weight;
//         this.color=color;
//         this.breed=breed;

//     }
// }
// let dog=new Dog("Jvascripyt",2.4,"browm","retreiver");
// console.log(dog.dogName,"is a",dog.breed,"and weighs",dog.weight,"kg.");
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
        

//     }
// }
// let p1 =new  Person("Naina");
// console.log("hi",p1.firstname,p1.lastname);
// class Person{
//     constructor(firstname,lastname="Doe"){
//         this.firstname=firstname;
//         this.lastname=lastname;
        

//     }
// }
// let p1 =new  Person("Naina");
// console.log("hi",p1.firstname,p1.lastname);

//methods
//functions on a class are called methods,when defining these,we don't use function keyword.
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
        

//     }
//     greet(){
//         console.log("Hi there!",this.firstname)
//     }
// }
// let p=new Person("Naina","Agarwal");
// p.greet();
// class Person{
    // constructor(firstname,lastname){
    //     this.firstname=firstname;
    //     this.lastname=lastname;
        

//     }
//     greet(){
//         console.log("Hi there!")
//     }
//     compliment(name,object){
//         return"That's wonderful"+ object +","+ name;
//     }
// }
// let p=new Person("Naina","Agarwal");
// let compliment=p.compliment("Naina","Agarwal");
// console.log(compliment);
// let x=p.greet();
// console.log(x);
//properties sometimes called fields,holds the data of class
// class Person{//#indicates private specifier
//     #firstname;
//     #lastname;

// constructor(firstname,lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
// }
// }
// let p=new Person("Maria","Sga");
// console.log(p.firstname);
// // 
//getter and setter
//inheritance reusability of code
// class Person
//   {
//     //#indicates private specifier
//     #firstname;
//     #lastname;

// constructor(firstname,lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
// }
// get firstname(){
//    return  this.#firstname;

// }
// set firstname(firstname){
//      return this.#firstname;

// }
// get lastname(){
//     return  this.#lastname;
 
//  }
//  set lastname(lastname){
//     return  this.#lastname;
 
//  }
// }
// let p=new Person("Maria","Sga");
// console.log(p.firstname);
// p.firstname="divyanshi";
// console.log(p.firstname);
class Vehicle{
    constructor(color,currentSpeed,maxSpeed){
        this.color=color;//attributes
        this.currentSpeed=currentSpeed;//attribute
        this.maxSpeed=maxSpeed;//attribute
    }
    move(){//methods
        console.log("moving at",this.currentSpeed);
    }
    accelerate(amount){//methods
        this.currentSpeed+=amount;
    }
}
class Motorcycle extends Vehicle{
      constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);//super is used to invoke parent class constructor
        this.fuel=fuel;
      }
      doWheelie(){
console.log("Driving o one wheel!");
      }
}
let motor=new Motorcycle("Red",0,250,"gasoline");
console.log(motor.color);
motor.accelerate(50)
;
motor.move();