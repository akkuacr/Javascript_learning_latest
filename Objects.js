//you can put integers , strings,methods ,arrays as values in the object

let person={
    firstName:"Tim",
    lastName:"Joe",
    age:24,
    fullName : function(){
           console.log(this.firstName+this.lastName);
    }
}

console.log(person.lastName);
//using them as array notations
console.log(person['lastName']);


//here property is added
person.gender='male';
console.log(person);
delete person.gender;

//to check whether property exist in object

console.log('gender' in person);
//iterating through every property
for(let key in person){
    console.log(person[key]);
}

person.fullName();



 let obj ={
    name:'Bravo',
    age:21,
    'last_name':'Dj',
    func:function (){
        console.log("I am function");
    }
    ,
    arr:[20,30,40,50 ,60]
 }


console.log(obj['name']);
console.log(obj.name);
console.log(obj.last_name);
console.log(obj.arr);

//if you want to enter new key value pair
obj.key='item1';
console.log(obj);

//similar thing you can do as 
let a ='key2';
obj[a]='value2';
console.log(obj);

//loop in object

for(let i in obj){
    //i m key hogi
    console.log(`keys are ${i} and values are ${obj[i]}`);
}
//similar things you can do with of method als

for( let  i of Object.keys(obj)){
    console.log(`keys are ${i} and values are ${obj[i]}`);
}









