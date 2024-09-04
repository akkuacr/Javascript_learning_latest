<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <div> Top 5 Sigmas
    <ul>
      <li>Andrew Tate</li>
      <li id="good">Keanu Reeves</li>
      <li class="hero">Johnny Bravo</li>
      <li>Johnny Depp</li>
      <li>Shinchan</li>
      <li class="hero">Akash Chand</li>

    </ul>
  </div>


  <script>
     //selectors in html
     //byTagName
     var a =document.getElementsByTagName('li');
     console.log(a);
     
     //byId
    var b = document.getElementById("good");
    console.log(b);

    //byClassName

    var c= document.getElementsByClassName("hero");
    console.log(c);


    //querySelectorall
    var a= document.querySelectorAll("li");
    console.log(a);


  </script>


</body>

</html>
