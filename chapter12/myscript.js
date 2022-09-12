// 1. Given the following HTML markup, create a JS function that can print out the attributes of the DOM elements:
// <div id=’a’ class=’square’ style=’display:inline-block’ val=’something important’></div>
// Example:
// printAttr (el, [‘id’, ‘class’, ‘style’, ‘val’]); // should print out:
// a
// square
// display:inline-block
// something important
// Use of built in JS functionality for attribute retrieval

const element = document.getElementById('a');

// Get all attribute names
const attrNames = element.getAttributeNames();

// Get array of all attribute values
const attrValues = element.getAttributeNames().map(name => element.getAttribute(name));

for (let i=0; i<attrNames.length; i++){
   let at=attrNames[i];
   let va=attrValues[i];   
   document.write(`${at} : ${va}` + "<br>");
}

