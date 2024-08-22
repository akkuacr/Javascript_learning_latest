 function fun(){
    let fname="John"

     this.fname=fname;
     //return this.fname
 }
var obj = new fun()
//yha pe humne function naam ka object bna dia aur usse ab hum obj.fname access kar pare h
 console.log(obj.fname);


 //constructor 
 //technically are regualr functions
 //there are two conventions though

 //they are name with capital letter first
 //they should be executed only with new operator

 function User(name){
    if(!new.target){
        //means call krte time agr new keyword ka use ni hua h toh tum ese v new ka use krke
        //return kr skte ho
        return new User(name)
    }
    this.name=name;
 }

 let person = new User("Jack");
 console.log(person.name);
