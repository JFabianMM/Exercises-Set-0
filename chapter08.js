// **************************** //
// Exercise Chapter 08 - Exercise 01 
// **************************** //

//  Create a function that will display a random sentence to the console every minute.
//  Basic use of timers
//  Estimated Time: 10 min <.


//     let fr=['All you have is now.','Thank God it’s Friday!','Ready to party.','Let’s just be who we really are.',
//             'Life is way too short for bad vibes.','Paradise found!','I followed my heart and it led me to the beach.',
//             'Time spent at the beach is never wasted.','Saltwater heals everything.','Let the countdown to the beach begin!'];     
//    function frase() {
//         let num=Math.floor(fr.length*Math.random()) ; 
//         console.log(fr[num]);
//     }  
//   setInterval(frase, 60000);


// **************************** //
// Exercise Chapter 08 - Exercise 02 
// **************************** //
// 2. Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
//    Use only 1 timer/interval to control all three functions.
//    use of a central timer controller

// function functionA (fr){
//     console.log(fr);
// }
// function functionB (fr){
//     console.log(fr);
// }
// function functionC (fr){
//     console.log(fr);
// }
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


