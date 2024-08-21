 function fun(){
    debugger;
    for(let i=0;i<=5;i++)
    {
        console.log(i);
    }
 }

 fun()


 //sets in javascript
 //it will contains only unique values
 const arr=[10,191,89,78,87];
 console.log(arr);
 const s= new Set([10,20,30,40,50,30])
 console.log(s);
 //to push new value
 s.add(19)
 s.add("Hello")

 let length=0;
 for(let element of s)
 {
    length++;
 }

 console.log(length);
 //set k paas method ni hota h .length krke 
//baki set ki property aap mdn docs se explore kr skte ho

