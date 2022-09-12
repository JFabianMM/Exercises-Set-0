
// 1. Create a 5 x 5 grid (use tables or divs.) Each element of the grid will be 
//    sequentially numbered and each element must respond to a click event by 
//    alerting its corresponding number.

document.querySelector('.container').addEventListener('click', function(event){
   alert(`You clicked on div ${event.target.innerText}`);
  });