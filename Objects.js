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










