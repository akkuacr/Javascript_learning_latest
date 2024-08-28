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

// loadingData()

// //This is called callback hell example
// // loadingData(function(){
// //     collectingData(function(){
// //         approvingData(function(){
// //            approved()
// //         })
// //     });
// // });

// //ab iss situation m kese promise use kr skte h

function loadingData() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      console.log("1) Loading Data...");
       resolved()
    }, 2000);
  });
}
function collectingData() {
    return new Promise((resolved,reject)=>{
    setTimeout(() => {
        console.log("2) Collecting Data...");
         resolved()
      }, 2000);})
}

function approvingData() {
    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            console.log("3) Approving Data...");
             resolved()
          }, 2000);})
}

function approved() {
  console.log("4) Approved");
}

loadingData().then(collectingData).then(approvingData).then(approved).catch(()=>{
    if(1){
        console.log("if any error happens");
    }
});

//so by using promise we can domlike this
