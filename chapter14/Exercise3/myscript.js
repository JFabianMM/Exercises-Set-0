//Specifications:

//  h. Items from template 1 should be numbered using CSS rules  (I THINK)
//  i. The data that will populate the templates should be read from a JSON file
//  j. The current view (template 1 or template 2) should be maintained even if the
//     browser is refreshed.
//  k. The user should be able to directly navigate to any of the page’s views


// The previous version used template tags in the HTML file but in the previous version 
// I did not take the information from a .jason file. However, in this version I bring 
// the information from a .json file, and I insert the information of templates 
// directly to an element (element.innerHTML = fragment) and this way does not accept 
// template tags, so when I take the data from .json file I add it as fragments and I 
// insert the content directly (element.innerHTML = fragment) utilizing "fragment1" and 
// "fragment2" for each template information (I never use template tags). However, when 
// using the templates, the process is exactly the same,  getting the templates content 
// and adding it as fragments as well.

// On the other hand, I could not navigate directly between templates. I didn't find 
// information to add different URLs for each template, unless I really use 2 html files 
// which defeats the purpose of templates. Is it possible to change the URL assigned to 
// each template without using different html files?
// Actually, that's the only thing left for me in this exercise.



let data=fetch("data.json")
         .then(response => response.json())
         .then(data =>  {
          addValues(data)
          checkStatus(data)
         });

let fragment1;
let fragment2;
function addValues (dat){
  let data=dat;
   fragment1=data[0].fra1;
   fragment2=data[0].fra2;   
}


function checkStatus() {
    var status = localStorage.getItem("Status");
    if (status!=2 && status!=1){
      toTemplate1()
    }
    if (status==2){
      toTemplate2()
    }
    if (status==1){
      toTemplate1()
    } 
  }


function toTemplate1() {
      deleteChild();
      localStorage.setItem("Status", 1);
      // const template = document.querySelector('#template1').content;
      // const fragment = document.createDocumentFragment();
      // const clone=template.cloneNode(true)
      // fragment.appendChild(clone)
      // list.appendChild(fragment)  // where list = document.querySelector('.wrapper');
      const element = document.getElementById('wrapper');   
      element.innerHTML = fragment1;

}
    
function toTemplate2() {
      deleteChild();
      localStorage.setItem("Status", 2);
      // const template = document.querySelector('#template2').content;
      // const fragment = document.createDocumentFragment();
      // const clone=template.cloneNode(true);
      // fragment.appendChild(clone)
      // list.appendChild(fragment)         // where list = document.querySelector('.wrapper');
      const element = document.getElementById('wrapper');   
      element.innerHTML = fragment2;
}
   
function deleteChild() {
      var e = document.querySelector('.wrapper');  
      var child = e.lastElementChild; 
      while (child) {
          e.removeChild(child);
          child = e.lastElementChild;
      }
}

