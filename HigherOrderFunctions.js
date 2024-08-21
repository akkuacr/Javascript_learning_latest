 //function inside function

 function fun(){
    console.log("i am function 1");
      
    //fun2 ka scope kewal fun k andar tak hi h

    function fun2() {
        console.log("I am function 2");
    }
    fun2()


 }
 //fun ka global scope h

 fun();


 //high order functions in javascript

 const powerTwo = (n)=>{
    return n ** 2;
 }

 //function is passes as argument
 function powerCube(powerTwo,n){
    return powerTwo(n)*n;


 }
//here we are using function as a variable
 console.log(powerCube(powerTwo,10));




 //function can be return as a .result of another function

 function sayHello(){
    return ()=>{
        console.log("Hello World");
    }
 }

 const guessValue = sayHello();

 guessValue()


 const higherOrder = (n)=>{
    const onefun = m =>{
        const twofun = p=>{
            return m+n+p;
        }
        return twofun
    }
    return onefun


}

//to run this kind of function 
//syntax would be
console.log(higherOrder(9)(10)(11));


const sumArray = arr=>{
    let total=0;
    arr.forEach(element => {
        total+=element;
    });

    return total;
}

console.log(sumArray([1,2,3,4,5,6,7]));

function oneMoreHello(){
    console.log("Hello Akash");
}

//similar type use hota h 
//setInterval(oneMoreHello,1000);
setTimeout(oneMoreHello,2000);



//scope in javascript
 function fun(){
    var a=1;
    console.log(`This is function 1 ${a}` );
    function fun2(){
    //    var a=2;
        console.log(`This is function 2 ${a}`);

    }


    fun2()
 }

 fun()


