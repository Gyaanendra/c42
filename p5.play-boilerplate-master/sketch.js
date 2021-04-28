/*
data types = string, number,boolean,null,undefined

*/
//string 

 var a = "gyaanendra";
 console.log(a);

 // number
 var v =  12; 
 console.log(v);

 //boolean
 var c =  false ;
 console.log(c)

 // undefined
 var d ;
 console.log(d)

 //null
 d = null;
 console.log(d)

 console.log(a.toUpperCase());

 // arithmetic operators 
 console.log(123-62);
 console.log(456*65);
 console.log(3123/0);
 console.log(874655645651511113546+49899999995);
 console.log(9%22);

 //comparitine operators
 console.log(7<9);
 console.log(54>65);
 console.log(21!= 21);
 console.log(12 === 12 );

 if( 3 > 2){
   console.log(true);
   
 }
 else{
  console.log(false);
 }

 // for loop
 for(var i = 1; i <= 10; i+= 1){
  console.log(i)
 }

 for(var z = 30; z>=12; z-=1 ){
  console.log(z);
 }

 // while loop
 var x = 75 ;
 while(x <= 95){
  console.log(x);
  x += 1;
 }

  //arrays 

var colors =["green","orange","red","black","blue"];
console.log(colors);
console.log(colors.length);
console.log(colors[2]);

colors.pop()
console.log(colors);

function add(n1,n2){
  var sum = n1  + n2 ;
  return sum ;


}

console.log(add(1 ,34));

function cube(n){
var cube2 = n*n*n;
return cube2;
}

console.log(cube(54));



