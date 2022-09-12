
// 1. Create a function that will populate a containing div with a grid of NxM size. The size
//    must be user defined through a GUI. Every time a new size is selected, any information
//    already on the container should be reset.
//    Dom manipulation through user input
//    Estimated Time: 4 hr.

function test() {
   var element = document.createElement("div");
   element.appendChild(document.createTextNode(''));
   document.getElementById('container').appendChild(element);
}

function deleteChild() {
   var e = document.getElementById('container');  
   //e.firstElementChild can be used.
   var child = e.lastElementChild; 
   while (child) {
       e.removeChild(child);
       child = e.lastElementChild;
   }
}

function myFunction() {
   deleteChild();
   let nn= document.getElementById("N").value; 
   let mm= document.getElementById("M").value;
   let mn = nn * mm;
   for (let i=0; i<mn; i++){
      test()
   }

   const element = document.getElementById('container');
   //let numb = element.childNodes.length;
   let aa=100/mm;
   for (let j=0; j<mn; j++){
      element.childNodes[j+1].style.flexBasis = `${aa}%`;    
   }
 }
