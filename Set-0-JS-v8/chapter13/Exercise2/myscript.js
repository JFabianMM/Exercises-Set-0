
//  Create a button that can only be used 3 times. Indicate the usage of the button using the
//  meter element. Once the button has been pressed three times, it must not activate
//  again.

 let addUp = (function() {
   let count = 0;
 
   return function () { 
      let element = document.getElementById("usage");
      if (element){
          element.value = ++count;
          counter.innerHTML = count;
      } 
      if (count==3){
          document.querySelector('button').removeEventListener('click', addUp, false); 
      }
   }
 }());
 
 document.querySelector('button').addEventListener('click', addUp, false);





