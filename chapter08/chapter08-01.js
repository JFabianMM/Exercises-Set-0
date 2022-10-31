// **************************** //
// Exercise Chapter 08 - Exercise 01 
// **************************** //

//  Create a function that will display a random sentence to the console every minute.
//  Basic use of timers
//  Estimated Time: 10 min <.


  let phrases=['All you have is now.','Thank God it’s Friday!','Ready to party.','Let’s just be who we really are.',
            'Life is way too short for bad vibes.','Paradise found!','I followed my heart and it led me to the beach.',
            'Time spent at the beach is never wasted.','Saltwater heals everything.','Let the countdown to the beach begin!'];     
  function phrase() {
      let num=Math.floor(phrases.length*Math.random()) ; 
      console.log(phrases[num]);
  }  
  setInterval(phrase, 60000);

