// **************************** //
// Exercise Chapter 08 - Exercise 02 
// **************************** //
// 2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
//    Use only 1 timer/interval to control all three functions.
//    use of a central timer controller 

let setFunction = (function () {
    let count =0;
    function funcA() {
        console.log("Function A, executed each 30 sec's");
    }
    function funcB() {
        console.log("Function B, executed each 60 sec's");
    }
    function funcC() {
        console.log("Function C, executed each 75 sec's");
    }
    function funcAll(count) {
        if (count%30==0){funcA();}
        if (count%60==0){funcB();}
        if (count%75==0){funcC();}
    }
    function invokeAll() {
        count=count+1;
        funcAll(count);
        setTimeout(invokeAll, 1000);
    }
    return {
            invokeAll: invokeAll
          }
})();

setFunction.invokeAll();