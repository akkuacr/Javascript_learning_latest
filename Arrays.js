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


