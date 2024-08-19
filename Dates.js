 //Date in javascript
 let myDate=new Date();

 console.log(myDate);

 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());

//output for the above commands are 
// 2024-08-18T13:37:36.081Z
// Sun Aug 18 2024 19:07:36 GMT+0530 (India Standard Time)
// Sun Aug 18 2024
// 8/18/2024, 7:07:36 PM

//isse humne apne hisab se date bna di
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

//agr time v include and show krna ho toh
let myCreatedDate2 = new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString());

//syntax is yyyy-mm-dd
let myCreatedDate3= new Date("2023-01-14")
console.log(myCreatedDate3);

let myTimeStamp=Date.now();
//yeh time dega avi tak ka milli second m 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());





