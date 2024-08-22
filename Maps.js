 const map = new Map()
 map['a'] = "Akash"
 map['b'] = [1,2,3,4,5,5]
 console.log(map);
 console.log(map.has('a'));

 var map1 = new Map([[1,"one"],["fname","Mickey"],["whole number ",[0,12,2,3,3]],["y","YES"]])
 console.log(map1);
//if you want to access any values 
console.log(map1.get("fname"));
//yeh method se output ni aega wrong method
//console.log(map1["fname"]);

var map2 = new Map()
map2.set("fname","Mouse")
console.log(map2);

 //it will store key value pair but slight difference hota h isme aur object m

 //it will give all keys
 var k = map1.keys();

 for(var key of k)
 {
    console.log(`there keys are ${key}`);
 }

 console.log(map1);
