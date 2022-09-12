// **************************** //
// Exercise Chapter 07 - Exercise 01 
// **************************** //

// 1. Create a function that will transform a hex number into an rgb format.
//     Example:
//     “#3020ff” → “rgb ( 48, 32, 255)”
//     Use of regular expressions
//     Estimated Time: 30 min<.

//  - The function does not provide the result in the expected format. 
//    Follow the instructions more carefully 

function hexRgb(hexnum) {
    var hextorgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexnum);
    let rgb = [parseInt(hextorgb[1], 16), parseInt(hextorgb[2], 16), parseInt(hextorgb[3], 16)]; 
    rgb=rgb.join(', ')
    var myString = '"rgb ( ';
    myString += rgb;
    myString += ')"';
    return myString; 
  }

  console.log(hexRgb("#3020ff"));

