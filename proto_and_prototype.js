 var obj ={
    fname:"John",
 };

 var obj2={
    lname:"Smith",
 }
//yha humne obj ka reference obj2 ko de diya jo uske proto field m jake store ho gya
//means ki hum obj ki properties obj2 ke through access kr skte h
 obj2.__proto__ = obj
 console.log(obj2.fname);

//iske through humne ek empty object bnaya jiske paas obj ka reference h
 const obj3 = Object.create(obj) ;
//yha yeh empty object show krega 
 console.log(obj3);
 //but whenever you do 
 //it will show output qki obj uske proto field m set ho chuka h 
 console.log(obj3.fname);



 //Toh yha toh humne proto se inherit krwaya then uske function ka use kr paare h
 function Person(name, age){
   let person = Object.create(obj);
   person.name = name;
   person.age= age;
   
   return person  
 }

 var obj = {
    greet(){
        console.log(`Hello ${this.name}`);

    }
 }

 let user = Person("John",8)
 user.greet()
 console.log(user);


 //similar chije hum ese v kr skte h
  



 function Person1(name, age){
    let person = Object.create(Person1.prototype);
    person.name = name;
    person.age= age;
    
    return person  
  }


  Person1.prototype.greet1= function (){
    console.log(`Hello this is second greet isme v inherit hua ${this.name}`);
 }
 
 let user1 = Person1("John",8)
 user1.greet1()
 console.log(user1);



 //similarly jo new keyword hota h woh function ka nya object bna deta h jo humne isse pehle sikha tha
 //so jo upar wala kaam tha hu ese v kr skte h
 function person2(name,age){
    this.name = name,
    this.age = age 
 }


 person2.prototype.greet2= function (){
    console.log(`Hello this is third greet isme v inherit hua ${this.name}`);
 }

 let user2 = new person2("John",8)
 user2.greet2() 



 //similarly agar hum class ka use krre toh 

 class Person4{

    constructor(name,age){
        this.name=name,
        this.age=age
    }

    greet(){
        console.log(`hello ${this.name} this greet is from class `);
    }


 }

 let user4 = new Person4("John",4)

 console.log(user4.name);
 user4.greet()


 //toh yha e humne ek chij sikhi ki "proto" keyword reference create krne k kaam ata h jo ki ek object ka reference
 //similar reference aap ek function aur v kisi chij ka reference by using prototype keyword v kr skte h
 


