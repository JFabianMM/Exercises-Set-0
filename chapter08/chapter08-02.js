// **************************** //
// Exercise Chapter 08 - Exercise 02 
// **************************** //
// 2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
//    Use only 1 timer/interval to control all three functions.
//    use of a central timer controller 

let setFunction = (function () {
    let count =0;
    let funcA= function set1() {
        console.log("Function A, executed each 30 sec's");
        return set1;
    }
    let funcB= function set2() {
        console.log("Function B, executed each 60 sec's");
        return set2;
    }
    let funcC= function set3() {
        console.log("Function C, executed each 75 sec's");
        return set3;
    }
    let funcAll= function set(count) {
        if (count%30==0){funcA();}
        if (count%60==0){funcB();}
        if (count%75==0){funcC();}
        return set;
    }
    let time= function updateClock() {
        count=count+1;
        funcAll(count);
        setTimeout(updateClock, 1000);
    }
    let invokeAll= function invoke() {
        time();
    }

    return {
            invokeAll: invokeAll
          }
})();

setFunction.invokeAll();
