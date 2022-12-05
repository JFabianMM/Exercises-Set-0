// **************************** //
// Exercise Chapter 07 - Exercise 01 
// **************************** //

// 1. Create a function that will transform a hex number into an rgb format.
//     Example:
//     “#3020ff” → “rgb ( 48, 32, 255)”
//     Use of regular expressions
//     Estimated Time: 30 min<.


function hexRgb(hexnum) {
    let hextorgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexnum);
    let rgb = [parseInt(hextorgb[1], 16), parseInt(hextorgb[2], 16), parseInt(hextorgb[3], 16)]; 
    rgb=rgb.join(', ')
    let myString = '"rgb ( ';
    myString += rgb;
    myString += ')"';
    return myString; 
  }

  console.log(hexRgb("#3020ff"));

