
function setColumns() {   
   let numberColumns= document.getElementById("columns").value;
   var element = document.getElementById("text");
   var text= element.textContent;
   element.innerHTML= '';     // I introduced this two lines in order to take effect the changes
   element.innerHTML= text;   // I introduced this two lines in order to take effect the changes
   element.style.columns = `${numberColumns}`; 
 }