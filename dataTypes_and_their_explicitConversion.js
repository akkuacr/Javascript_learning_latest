//primitive data types 
// number
let number=10;
console.log(typeof number);

let str='Hello';
console.log(typeof str);

let bool = false;
console.log(bool);

let a = null;
console.log(typeof a);

let b;
console.log(typeof b);


//implicit type conversion

result ='3'+2;
console.log(result); //32
console.log(typeof result);

result ='3'+undefined;
console.log(result); //32
console.log(typeof result);

//means '+' operator implicitly convert krta h string m k humesa concatenation krta h

result = '3'+null
console.log(result); //32
console.log(typeof result);

result ='3'+'2';
console.log(result); //32
console.log(typeof result);

//for explicitly convrsion

result = '3';
result = Number(result);
console.log(result);
result=parseInt('3');
console.log(result);





