
function setColumns() {   
   let numberColumns= document.getElementById("columns").value;
   let element = document.getElementById("text");
   let text= element.textContent;
   element.innerHTML= '';     // I introduced this two lines in order to take effect the changes
   element.innerHTML= text;   // I introduced this two lines in order to take effect the changes
   element.style.columns = `${numberColumns}`; 
 }