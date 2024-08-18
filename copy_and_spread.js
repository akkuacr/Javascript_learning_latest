 arr1=["John",202,true]
 arr2=[];
 arr2.push(arr1);
 console.log(arr2);
 //This is how you copy the array
 arr2=arr1;
 console.log(arr1);
 console.log(arr2);

 arr3=arr1.slice(1).concat("Item");
 console.log(arr3);


 //spread operator in array
 arr4=[...arr1]
 console.log(arr4);
