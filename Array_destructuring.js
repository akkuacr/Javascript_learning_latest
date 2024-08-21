 //array destructing 
 let array1=["Thomas","Chad","Neo","Akash ","Chand"];
 //ek tarika toh yeh h
 let item1=array1[0];
 let item2=array1[1];

 console.log(item1);
 console.log(item2);


 //dusra tarika h yeh h
//isme first 2 elements assign ho jaenge
 let [item3,item4] = array1;


 //aur agr mujhe baki k 3 ek hi array m daalne ho toh


 let [item5,item6,...arr2]=array1;

 console.log(item5);
 console.log(item6);
 console.log(arr2);
