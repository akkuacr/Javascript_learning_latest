 
 var x=7;

 //function without parameter
 function getName(){
    console.log("Namaste Javascript");
 }
 
 
 getName();
 console.log(x);
 //yeh print kr dega
 //[Function: getName]

 console.log(getName);


 //function with parameter

 function add(a,b)
 {
   return (a+b);
 }
  

 let y=add(9,10);
 console.log(y);

//hum kisi variable ko v function assign kr skte  h javascript ki khaas baat 
 let y1=function add1( a,b)
{
   console.log(a+b);
}

y1(9,10)


let y2=(a,b)=>{

   console.log("bharat mata ki jay "+(a+b));

}






y2(10,19)

y2=19
console.log(y2);


//self invoked function example
(
   function(){

      console.log("hindustan amar rahe");

   }
)();


//arrow function

let a=()=>{
   console.log("ann jaha ka humne khaya ");
}

a();


