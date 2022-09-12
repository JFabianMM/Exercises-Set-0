// **************************** //
// Exercise Chapter 10 - Exercise 01 
// **************************** //

// 1. Given the object structure bellow, do the following:
//    a. simplify the function calls by using the with statement; and
//    b. simplify the function calls without using the with statement.
// ***************************************************  

var myLib = {
     math: {
          real: {
              add: function (a, b){return a + b;},    // Accept only real numbers 
              sub: function (a, b){return a - b;},    // Accept only real numbers
              mul: function (a, b){return a * b;}     // Accept only real numbers
          },
          complex: {
              Num: function (real, img){let num=[]; num.push(real); num.push(img); return num;},  // Return a format num=[real,img]
              add: function (a, b){   // Accept numer formats num = 1; or num= [1], or num=[real,img], returns num= num=[real,img] 
                      let num=[0,0]; 
                      let aa=[0,0]; 
                      let bb=[0,0]; 
                      if  (a.length==2){
                              aa[0]=a[0];
                              aa[1]=a[1];
                      }
                      if  (a.length!=2){
                              aa[0]=a;
                      }
                      if  (b.length==2){
                              bb[0]=b[0];
                              bb[1]=b[1];
                      }
                      if  (b.length!=2){
                              bb[0]=b;
                      } 
                      num[0]=aa[0]+bb[0]; 
                      num[1]=aa[1]+bb[1];  
                      return num;
                    },
              sub: function (a, b){ // Accept numer formats num = 1; or num= [1], or num=[real,img], returns num= num=[real,img]
                    let num=[0,0]; 
                    let aa=[0,0]; 
                    let bb=[0,0]; 
                    if  (a.length==2){
                        aa[0]=a[0];
                        aa[1]=a[1];
                    }
                    if  (a.length!=2){
                        aa[0]=a;
                    }
                    if  (b.length==2){
                        bb[0]=b[0];
                        bb[1]=b[1];
                    }
                    if  (b.length!=2){
                        bb[0]=b;
                    } 
                    num[0]=aa[0]-bb[0]; 
                    num[1]=aa[1]-bb[1];  
                    return num;
              },
              mul: function (a, b){  // Accept numer formats num = 1; or num= [1], or num=[real,img], returns num= num=[real,img]
                let num=[0,0]; 
                let aa=[0,0]; 
                let bb=[0,0]; 
                if  (a.length==2){
                  aa[0]=a[0];
                  aa[1]=a[1];
                }
                if  (a.length!=2){
                  aa[0]=a;
                }
                if  (b.length==2){
                  bb[0]=b[0];
                  bb[1]=b[1];
                }
                if  (b.length!=2){
                  bb[0]=b;
                } 
                 num[0]=aa[0]*bb[0]-aa[1]*bb[1]; 
                 num[1]=aa[0]*bb[1]+aa[1]*bb[0];  
                 return num;
                }
          },
          matrix: {
              add: function (a, b){    // Elements must be 2 matrices(arrays) of the same size (they can contail complex numbers)
                var c=a;
                for(let i=0; i<=a.length-1; i++){
                      for (let j=0; j<=a[0].length-1; j++){
                           if  (a[i][j].length==2 && b[i][j].length==2){
                               let aa=[0,0];
                               aa[0]= a[i][j][0] +b[i][j][0];
                               aa[1]= a[i][j][1] +b[i][j][1];
                               c[i][j]=aa;      
                           }
                           if  (a[i][j].length==2 && b[i][j].length!=2){
                            let aa=[0,0];
                            aa[0]= a[i][j][0] +b[i][j];
                            aa[1]= a[i][j][1];
                            c[i][j]=aa;
                            console.log(aa)
                           }
                           if  (a[i][j].length!=2 && b[i][j].length==2){
                            let aa=[0,0];
                            aa[0]= a[i][j] +b[i][j][0];
                            aa[1]= b[i][j][1];
                            c[i][j]=aa;
                           }
                           if  (a[i][j].length!=2 && b[i][j].length!=2){
                            c[i][j]=a[i][j] +b[i][j];
                           }
                        }
                      }
                return c;
              },
                    sub: function (a, b){  // Elements must be 2 matrices(arrays) of the same size (they can contail complex numbers) 
                      var c=a;
                      for(let i=0; i<=a.length-1; i++){
                            for (let j=0; j<=a[0].length-1; j++){
                                 if  (a[i][j].length==2 && b[i][j].length==2){
                                     let aa=[0,0];
                                     aa[0]= a[i][j][0] -b[i][j][0];
                                     aa[1]= a[i][j][1] -b[i][j][1];
                                     c[i][j]=aa;      
                                 }
                                 if  (a[i][j].length==2 && b[i][j].length!=2){
                                  let aa=[0,0];
                                  aa[0]= a[i][j][0] -b[i][j];
                                  aa[1]= a[i][j][1];
                                  c[i][j]=aa;
                                  console.log(aa)
                                 }
                                 if  (a[i][j].length!=2 && b[i][j].length==2){
                                  let aa=[0,0];
                                  aa[0]= a[i][j] -b[i][j][0];
                                  aa[1]= -b[i][j][1];
                                  c[i][j]=aa;
                                 }
                                 if  (a[i][j].length!=2 && b[i][j].length!=2){
                                  c[i][j]=a[i][j] -b[i][j];
                                 }
                              }
                            }
                      return c;
                    },  
              mul: function (a, b){     // Elements of rows of a must coincide with number of columns of B (can contain complex numbers)  
                var c = new Array(a.length).fill(0);   
                for (var i = 0; i <= b[0].length; i++) {
                    c[i] = new Array(b[0].length).fill(0);
                }
                for(let i=0; i<a.length; i++){
                    for(let k=0; k<b[0].length; k++){  
                       for (let j=0; j<a[0].length; j++){
                            let num=[0,0]; 
                            let aa=[0,0]; 
                            let bb=[0,0]; 
                            if  (a[i][j].length==2){
                                 aa[0]=a[i][j][0];
                                 aa[1]=a[i][j][1];
                             }
                            if  (a[i][j].length!=2){
                                aa[0]=a[i][j];
                             }
                            if  (b[j][k].length==2){
                                bb[0]=b[j][k][0];
                                bb[1]=b[j][k][1];
                             }
                             if  (b[j][k].length!=2){
                                 bb[0]=b[j][k];
                              } 
                             num[0]=aa[0]*bb[0]-aa[1]*bb[1]; 
                             num[1]=aa[0]*bb[1]+aa[1]*bb[0]; 
                             
                             //  ********************************************
                             // c[i][k]=c[i][k]+ num;  //
                              let num2=[0,0]; 
                              let aa2=[0,0]; 
                              let bb2=[0,0]; 
                              if  (c[i][k].length==2){
                                      aa2[0]=c[i][k][0];
                                      aa2[1]=c[i][k][1];
                              }
                              if  (c[i][k].length!=2){
                                      aa2[0]=c[i][k];
                              }
                              if  (num.length==2){
                                      bb2[0]=num[0];
                                      bb2[1]=num[1];
                              }
                              if  (num.length!=2){
                                      bb2[0]=num;
                              } 
                              num2[0]=aa2[0]+bb2[0]; 
                              num2[1]=aa2[1]+bb2[1];  
        
                              c[i][k]=num2;
                             //  ********************************************
                             }
                        }
                      }
        return c;
        },
              eye: function (size){    
                        var c = new Array(size).fill(0);   
                        for (var i = 0; i < size; i++) {
                            c[i] = new Array(size).fill(0);
                        }
                        for(let i=0; i<=size-1; i++){
                            for (let j=0; j<=size-1; j++){
                                if (i==j){c[i][j]=1;}
                            }
                        }
                    return c;  
                    },
              dot: function (m, a){  // Elements must be 2 vectors of the same size (real numbers)  
                      var c = 0; 
                      for (let j=0; j<m.length; j++){
                          c=c+ m[j]*a[j];
                      }
                      return c;
              },
              times:function(a, b){   // Elements must be 2 matrices of the same size (can contain complex numbers inside) 
                      var c=a;
                      for(let i=0; i<a.length; i++){
                          for (let j=0; j<a[0].length; j++){
                                let num=[0,0]; 
                                let aa=[0,0]; 
                                let bb=[0,0]; 
                                if  (a[i][j].length==2){
                                     aa[0]=a[i][j][0];
                                     aa[1]=a[i][j][1];
                                }
                                if  (a[i][j].length!=2){
                                    aa[0]=a[i][j];
                                }
                                if  (b[i][j].length==2){
                                    bb[0]=b[i][j][0];
                                    bb[1]=b[i][j][1];
                                }
                                if  (b[i][j].length!=2){
                                    bb[0]=b[i][j];
                                } 
                                num[0]=aa[0]*bb[0]-aa[1]*bb[1]; 
                                num[1]=aa[0]*bb[1]+aa[1]*bb[0];  
                                c[i][j]=num;
                                }
                      }
              return c;
              }
          }
      }
};

//****************************************************************
// a. Simplify the function calls by using the with statement
//****************************************************************
// var answer = myLib.math.real.sub(
// myLib.math.real.add (20, 22),
// myLib.math.real.mul(2,5));

// with (myLib.math.real){       // This is simplified expretion with "with statements" 
//   answer=sub(add (20, 22),mul(2,5));
// }
// console.log(answer);  

// //  This example doesn't work due to the las operation (myLib.math.matrix.times) must have as arguments 2 matrices of the same size.   
// var ans = myLib.math.matrix.times(
//      myLib.math.matrix.eye (4),
//      myLib.math.complex.sub (
//        new myLib.math.complex.Num (
//          myLib.math.real.add(5,2),
//          -3),
//          new myLib.math.complex.Num (3,4)
//          )
//          );

// //  This example doesn't work due to the las operation (myLib.math.matrix.times) must have as arguments 2 matrices of the same size.

// with (myLib.math){       // This is simplified expretion with "with statements" 
//   ans=matrix.times(matrix.eye (4),complex.sub (new complex.Num (real.add(5,2),-3),new complex.Num (3,4)));
// }
// console.log(ans); 

//****************************************************************
// b. simplify the function calls without using the with statement.
//****************************************************************
// This is simplified expresion with NO "with statements"
// var base=myLib.math.real;
// var answer= base.sub(base.add(20, 22),base.mul(2,5));
// console.log(answer)
  
//   This example doesn't work due to the las operation (myLib.math.matrix.times) must have as arguments 2 matrices of the same size.   
// var matrix = myLib.math.matrix;
// var complex = myLib.math.complex;
// var real = myLib.math.real;
// var answer= matrix.times(matrix.eye(4),complex.sub(complex.Num(real.add(5,2),-3),complex.Num(3,4)));
