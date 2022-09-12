// **************************** //
// Exercise Chapter 08 - Exercise 02 
// **************************** //
// 2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
//    Use only 1 timer/interval to control all three functions.
//    use of a central timer controller

// 8.2) Single interval/timeout
//      - the counter should be private
//      - The updateCounter shouldn’t know how the function needs to be executed, 
//        only that it should be executed. All of the logic should be placed within 
//        functions A, B, and C
//      - It would be nice if you could add functions to be executed at specified 
//        time intervals without hardcoding the values to the updateCount function


//*********************************************** */
//  function functionA (fr){
//      console.log(fr);
// }
//  function functionB (fr){
//      console.log(fr);
//  }
//  function functionC (fr){
//      console.log(fr);
//  }

// var count = -1;
//   function updateCount() {
//    count = count + 1;                // counter is increased each 15 sec 
//    if (count%2==0 && count>0){
//     functionA ('Function A executed each 30s');
//    }
//    if (count%4==0 && count>0){
//     functionB ('Function B executed each 60s');
//    }
//    if (count%5==0 && count>0){
//     functionC ('Function C executed each 75s');
//    }
//    setTimeout(updateCount, 15000);   // function executed each 15 sec
//   }

// updateCount();

//*********************************************** */

// This is the new part attending the feedback comments
// Actually, as you can see, there are not three functions using only 1 timer/interval. 
// The previous version did it, however, when trying to fulfill the feedback comment that 
// the counter should be private, doing it with a single timer was complicated for me.
// The timer is private, and I understand that the key is to use closures so that this 
// counter runs in a different context in each function, but all the configurations that 
// I have tried to that generate errors.
// This is a close version, however I understand that it does not meet all the requirements 
// stated in the feedback comments.

var tim;
var sec1;
var sec2;
var sec3;

function f1() {
    sec1 = 30;
    fn1=time;
    console.log("Function #1 (each 30 sec)");
    fn1()  
}

function f2() {
    sec2 = 60;
    fn2=time2;
    console.log("Function #2 (each 60 sec)");
    fn2()
}
function f3() {
    sec3 = 75;
    fn3=time3;
    console.log("Function #3 (each 75 sec)");
    fn3()
}

var time= function timer() {
    if (sec1 > 0) {
        sec1--;
        tim = setTimeout(timer, 1000);
    } else {
        return f1()
    }
}

var time2= function timer() {
    if (sec2 > 0) {
        sec2--;
        tim = setTimeout(timer, 1000);
    } else {
        return f2()
    }
}

var time3= function timer() {
    if (sec3 > 0) {
        sec3--;
        tim = setTimeout(timer, 1000);
    } else {
        return f3()
    }
}

f1()
f2()
f3()

//*********************************************** */




