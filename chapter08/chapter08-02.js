// **************************** //
// Exercise Chapter 08 - Exercise 02 
// **************************** //
// 2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
//    Use only 1 timer/interval to control all three functions.
//    use of a central timer controller 

let setFunction = (function () {
    let count =0;
    let timer= function set(f, time) {
        let interval = setInterval(() => {
        f()
        if(count >= 1) {clearInterval(interval)}
        }, time)
        return set
    };
    return {
            timer: timer,
          }
})();

function A() {
    console.log("Function A, executed each 30 sec's");
}
function B() {
    console.log("Function B, executed each 60 sec's");
}
function C() {
    console.log("Function C, executed each 75 sec's");
}
setFunction.timer(A,30000)
setFunction.timer(B,60000)
setFunction.timer(C,75000)
