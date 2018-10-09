
// la solution est developpé avec un test.
// ouvrez le terminal , aller au répertoire , exécuté  la   commande "node solution.js"

//test 1
function f1 (a , b ) {
    var array_result = [] ; 
      for (i=0;i<a.length  ; i++)     {
        var counter = 0 ; 
         for( j=0 ;j< b.length;j++) {
            if (a[i] === b[j] ) {
                 counter += 1; 
            }
         array_result[i]= counter ;    
         }
      }
return array_result ; 
}

//run function f1 
//example 1 
var array_a  = ["aba", "xzxb", "ab"];
var array_b =["aba", "baba", "aba", "xzxb"];

console.log(array_a) ; 
console.log(array_b) ; 
console.log("run f1 with example 1") ; 
console.log( f1(array_a ,array_b)) ; 
//example 2
var  array_d = ["bb","ab","aba","cc","j"] ;
var  array_x = ["aba" ,"ba","aa","aba","aa","ab","bb","bb","aba"];
console.log(array_d) ; 
console.log(array_x) ; 
console.log("run f1 with example 2") ; 
console.log( f1(array_d ,array_x)) ; 



// test 2 
function f2 (a) {
  var array_result = [] ; 
 
  var nbr = a;
  patt1 =  /-\d*\.\d+|\d+/g; 
  array_result = nbr.match(patt1);
  for (ii=0 ; ii<array_a.length ;ii++ ) {
    array_result [ii] =  parseFloat(array_result[ii]);
  }

return array_result ; 
}
var array_a2 = "a1 12 13.b -14.5+2";
var res = [Float32Array];
res=f2(array_a2);
console.log("\n") ; 
console.log("test 2 ") ; 
console.log( array_a2) ; 
console.log("run function  f2") ;
console.log( res) ; 


// test3

function f3 (ob) {
  const  result=[Object];
  result[0].a = ob[0].a+1;
  result[0].b = ob[0].b+1;
return result  ;
}

console.log("\n");
console.log("test3");
const a = [{a: 1, b: "str"}]
const b = f3(a);

console.log("run function  f3") ;
console.log(a[0]==b[0]);
console.log(a[0].a);
console.log(b[0].a);

// test4 
console.log("\n");
console.log("test4");

var  myVar = setInterval(f4, 1)
var  i = 0 ; 
var t0 =cb = new Date().getTime();
function f4(  cb = new Date().getTime())
{
  if (cb-t0 >= 300){
    console.log("cd is called");  
    t0=cb;
    i++;
  }else if ( cb-t0 < 300 && cb-t0>280 ){
    console.log("it’s ignored and cb isn’t called") 
  }
  // stop the loop after 2 cd calls
  if(i == 2 ){
    clearInterval(myVar);
  }
}



