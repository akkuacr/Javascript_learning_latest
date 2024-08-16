let marks = Array(6);
var marks1 = Array(20,292,292,4,37);
console.log(marks1);

var marks2 =[20,40,35,12,37,100];

console.log(marks2[2]);

console.log(marks.length);

//to append  new element in a array
marks2.push(65);
console.log(marks2);

//to delete the elements from last
marks2.pop();

//to insert element from beginning
marks2.unshift(12);
console.log(marks2);


//index of - it gives the index of the element in which it is located
console.log(marks2.indexOf(100));

//for creating the subarray

submask = marks2.slice(2,5);
console.log(submask);

var sum =0;
for(let i=0;i<marks2.length;i++)
{
    sum+=marks2[i];
}
console.log(sum);


//reduce , filter , map
//reduce function is used to apply reduce method in all elements of array which returns the accummulated result of the operation u have done in array
// // let total = marks2.reduce(function(sum1,mark){
// //     return sum1+mark;

// // },initialValue);


// console.log(total);


//filter function

evenMarks = marks2.filter((score)=>{
    if(score%2==0)
    {
        return score;
    }

})

console.log(evenMarks);


//map is used to modify each element in array
doubleElements= marks2.map((mark)=>{
    return 2*mark;
})

console.log(doubleElements);


//integrating all the three methods

let valuesScore= marks2.filter((mark)=>mark%2==0).map((mark)=>mark/2).reduce((sum,mark)=>sum+mark);
console.log(valuesScore);


//sort function in array
let fruits=["Apple","Bnanana","Pomegranate","Apple"];
let sorted_fruits=fruits.sort();
console.log(sorted_fruits.reverse());

var scores1 =[12,300,19,16,14];
console.log(scores1.sort((a,b)=>a-b));




 let arr=[1,2,2,3,3,4,3]
 console.log(arr);

 let arr1=["John","Jane","Cena"]
 console.log(arr1[0]+arr1[2]);

//length methods in array
console.log(arr.length); 

//to push element from last
arr.push("Äkash")
//to push element form beginning
arr.unshift("chand")
console.log(arr);

let name =[10,20,30,35,19,25,60]
console.log(name);

//splice method yeh array m se element remove krne k kaam ata h aur agr apko remove krke dusra element dalna ho toh aap element ko third parameter m bhej skte ho  element ko
name.splice(1,1,'cena')

//to print the array elements
for(let i=0;i<name.length;i++)
{
   console.log(name[i]);
}

//array methods
console.log("For each method suru ho gya");
//forEach method ki khaas baat yeh h ki yeh array ko modify krne k kaam m ata h naki koi naya array return krne ke 
//eg
//for each method koi value return ni krta it will always return undefined 
name.forEach((element,index,array) => {
 console.log(`the element is ${element} and the index is ${index}`);
   name[index]=index%2;
});

console.log(name);


//map method
//map method original array m kuch chang nahi krta balki ek nya array return krta h
const arr2=name.map((element,index)=>{
   return (element+1)
})
console.log(arr2);



//concatenate two arrays
//it doesnot change the original array
let arr3=name.concat(arr2);
console.log(name.concat(arr2));
console.log(name);

//array ko tum ese v mutate kr skte h 
name[0]=10;
console.log(name);

//index of return the index of array
console.log(name.indexOf(10));

//to return the reverse of array it will  change the original array
let arr4=name.reverse();
console.log(arr4);
console.log(name);
//it will change and also return the sorted array 
const arr5=name.sort();
console.log(name);
console.log(arr5);


let a=name.slice(1,4)
console.log(a);

console.log(a.toString());


let arr6=name.filter((val,index,arr)=>{
     if(val%2)
     {
      return val;
     }
})

console.log(arr6);


let num='10,20,30'
let arr7 = num.split(',');
arr7.forEach((element)=>{
   console.log(element);
})

let jo=arr7.join("and")
console.log(jo);




























