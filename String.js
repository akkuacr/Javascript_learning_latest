//Strings are immutable in javascript
//and methoods you can see here


let day='tuesday  ';
console.log(day.length);
let subDay = day.slice(0,4);
console.log(subDay);
console.log(day[1]);

let splitDay = day.split("s");
console.log(splitDay[0]);
console.log(splitDay[1].trim().length);

let date ='23';
let nextDate = '27';
let diff = parseInt(nextDate)-parseInt(date);
console.log(diff);

//to concatenate two strings
let new1=day+"this is the final day , Sunday";
console.log(new1);

//second argument here is optional
//it gives the starting index for the string
let val=new1.indexOf("day");
let count=0;
while (val!==-1) {
    count++;
    val=new1.indexOf("day",val+1);
}

console.log(count);


