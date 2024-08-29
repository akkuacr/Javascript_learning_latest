 //async and await in javascript

 //  //Asynchronous nature of javascript

// console.log("This");
// console.log("Synchronous ");
// console.log("Is");
//  //Js is Synchronous

//  //example of asynchronous
// //  console.log("this");
// //  setTimeout(()=>{
// //   console.log("Synchronous");
// //  },1000)
// //  console.log("Is");
// // here output will be this is synchronous

//  //one more example will display the same result
//  setTimeout(fun,5000)

//  setTimeout(()=>{
//     console.log("Is");
//  },4000);
// console.log("This");
//  function fun(){
//    console.log(" Asynchronous");
//  }

//  //output will be
// //  This
// // Is
// //  Asynchronous
// //agr hum setTimeout m agr 0 second de toh
// //tb v same hi output aega

// //*********************************************************Callback functions*******************************************************************//
// function fun(val){
//     console.log(val);
// }

// function add(a,b,callback){
//     let sum=a+b;
//     callback(a+b);
// }

// add(5,10,fun);

// function loadingData(callback) {
//     setTimeout(()=>{
//     console.log("1) Loading Data...")
//     collectingData()
//     approvingData()
//     approved()
// },4000);
// }
// function collectingData(){
//     console.log("1) Collecting Data...");
// }

// function approvingData() {
//     console.log("3) Approving Data...");

// }

// function approved(){
//     console.log("4) Approved");
// }

//loadingData()

//This is called callback hell example
// loadingData(function(){
//     collectingData(function(){
//         approvingData(function(){
//            approved()
//         })
//     });
// });

//ab iss situation m kese promise use kr skte h

function loadingData() {
   return new Promise((resolved, reject) => {
     setTimeout(() => {
       console.log("1) Loading Data...");
        resolved("bdiya chl gya")
        
     }, 2000);
   });
 }
 function collectingData() {
     return new Promise((resolved,reject)=>{
     setTimeout(() => {
         console.log("2) Collecting Data...");
          resolved("yes")
       }, 2000);})
 }
 
 function approvingData() {
     return new Promise((resolved,reject)=>{
         setTimeout(() => {
             console.log("3) Approving Data...");
              resolved("3) Approving") 
             //reject("Approving data m error ayi")
           }, 2000);})
 }
 
 function approved() {
   console.log("4) Approved");
 }
 
//  loadingData().then((data)=>console.log(data)).then(collectingData).then(approvingData).then(approved).catch((data)=>{
//      console.log(data);
//  });
 
//  //so by using promise we can domlike this


//  //Async await to handle promises

//  function loadingdata(){
//    console.log("1) loading data");
//  }
//  function loadingdata(){
//    console.log("1) loading data");
//  }
//  function collectingdata(){
//    console.log("2) Collecting data");
//  }
//  function approvingdata(){
//    console.log("3) approving data");
//  }

//  function Approved() {

//    console.log("4) approved data");
//  }



//it will also give the similar output same as above

 async function ex(){
   await  loadingData();
   await collectingData();
   await  approvingData();
   await approved();

 }

ex().catch((err)=>{console.log(err);})
