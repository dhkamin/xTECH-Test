function f1 (a , b ) {  
  let counter = 0 ; 
 return a.map( string_a => { 
            counter = 0;
            b.map( string_b => {
            if(string_a === string_b)  counter +=1; 
        });
       return counter ;
     });
}
//uncommented the test 1 and  run  node solution.js in the terminal

// var array_a  = ["aba", "xzxb", "ab"];
// var array_b =["aba", "baba", "aba", "xzxb"];
// console.log(array_a) ; 
// console.log(array_b) ; 
// console.log("run f1(array_a ,array_b)") ; 
// console.log( f1(array_a ,array_b)) ; 

function f2 (a) {
    return  a.match(/-\d*\.\d+|\d+/g).map( value => parseFloat(value));
  }
// uncommented the test 2 and run node solution.js in the terminal

// var array_a2 = "a1 12 13.b -14.5+2";
// console.log("\n") ; 
// console.log( array_a2) ; 
// console.log ("run f2(array_a2)") ;
// console.log( f2(array_a2)) ; 

function f3 (o) { 
   return  o.map(value => {  Object.freeze(value);
           return Object.assign({ a: value.a += 1, b: value.b += "str"});      
 }); 
}   

//uncommented the test 3 and run node solution.js in the terminal
// console.log("\n");
// const a = [{a: 1, b: "str"}]
// const b = f3(a);
// console.log(a);
// console.log("run  b = f3(a)");
// console.log(f3(a));
// console.log(a[0]==b[0]);
// console.log(a[0].a);
// console.log(b[0].a);  
  
const f = function f4 (cb = (()=>console.log("cb  is called "))){
            let  i =0 ;  
            cb(); 
              setInterval(()=>  {
              i += 100; //increment  100   
              console.log('cb is not  called after 100 ms');
              if( i === 300){   // condition  i =300 matches  with cb call affter 300ms
              cb(); 
              i=0; 
              }},100) // cb called after 100 ms
     }

//  uncommented the test 4 and run  node solution.js  in the terminal
//  for test 4 you have to cut the loop manually  with  Ctlr + c 
//  console.log("\n");   
//  console.log(" run  f();");
//  f();
    
    