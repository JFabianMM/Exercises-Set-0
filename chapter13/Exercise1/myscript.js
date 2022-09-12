
// 1. Create a 5 x 5 grid (use tables or divs.) Each element of the grid will be 
//    sequentially numbered and each element must respond to a click event by 
//    alerting its corresponding number.

 document.querySelector('.container').addEventListener('click', function(event){
   if (event.target.className==='Divs'){
      alert(`You clicked on div ${event.target.innerText}`);
   }
   
   });

  var container = document.getElementById('container');
   for (let i=0; i<25; i++){
       var element = document.createElement("div");
       element.classList.add("Divs");
       element.appendChild(document.createTextNode(`${i+1}`));
       container.appendChild(element);
   }

