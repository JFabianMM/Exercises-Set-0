// **************************** //
// Exercise Chapter 08 - Exercise 02 
// **************************** //
// 2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
//    Use only 1 timer/interval to control all three functions.
//    use of a central timer controller

function setCounter(f, time){
    let count = 0;
    let interval = setInterval(() => {
      f()
    if(count >= 1) clearInterval(interval)
    }, time) 
  }

function A() {
    console.log("This Function A is executed each 30 sec's");
}
function B() {
    console.log("This Function B is executed each 60 sec's");
}
function C() {
    console.log("This Function C is executed each 75 sec's");
}
setCounter(A,30000)
setCounter(B,60000)
setCounter(C,75000)
