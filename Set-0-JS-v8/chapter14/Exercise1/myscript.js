
// 1. Create a function that will populate a containing div with a grid of NxM size. The size
//    must be user defined through a GUI. Every time a new size is selected, any information
//    already on the container should be reset.
//    Dom manipulation through user input
//    Estimated Time: 4 hr.


"use strict";
function addElements(fragment,numberGrid) {
   for (let i=0; i<numberGrid; i++){
      let elementDiv = document.createElement("div");
      elementDiv.appendChild(document.createTextNode(''));
      fragment.appendChild(elementDiv);
   }
  return fragment 
}

function deleteChild(element) {
   let child = element.lastElementChild; 
   while (child) {
       element.removeChild(child);
       child = element.lastElementChild;
   }
}

function setGrid() {
   let element = document.getElementById('container');
   let fragment = document.createDocumentFragment();
   let numberColumns= document.getElementById("N").value; 
   let numberRows= document.getElementById("M").value;
   let numberGrid = numberColumns * numberRows;
   deleteChild(element);
   fragment=addElements(fragment,numberGrid)
   element.appendChild(fragment);

   let width=100/numberRows;   // width in percentage
   for (let j=0; j<numberGrid; j++){
      element.childNodes[j+1].style.flexBasis = `${width}%`;    
   }
 }
