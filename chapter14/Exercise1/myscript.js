
// 1. Create a function that will populate a containing div with a grid of NxM size. The size
//    must be user defined through a GUI. Every time a new size is selected, any information
//    already on the container should be reset.
//    Dom manipulation through user input
//    Estimated Time: 4 hr.

function addElements(fra,num) {
   let fragment=fra;
   let numberGrid=num;
   for (let i=0; i<numberGrid; i++){
      var elementDiv = document.createElement("div");
      elementDiv.appendChild(document.createTextNode(''));
      fragment.appendChild(elementDiv);
   }
  return fragment 
}

function deleteChild(ele) {
   element=ele;
   var child = element.lastElementChild; 
   while (child) {
       element.removeChild(child);
       child = element.lastElementChild;
   }
}

function setGrid() {
   var element = document.getElementById('container');
   fragment = document.createDocumentFragment();
   let numberColumns= document.getElementById("N").value; 
   let numberRows= document.getElementById("M").value;
   let numberGrid = numberColumns * numberRows;
   deleteChild(element);
   fragment=addElements(fragment,numberGrid)
   element.appendChild(fragment);

   let aa=100/numberRows;
   for (let j=0; j<numberGrid; j++){
      element.childNodes[j+1].style.flexBasis = `${aa}%`;    
   }
 }
