

const lista = document.querySelector('.wrapper');

function myFunction3() {
  var Status = localStorage.getItem("Status");
  if (Status==2){
      myFunction2()
  }
  if (Status==1){
      myFunction1()
}
  
}

function myFunction1() {
      deleteChild();
      localStorage.setItem("Status", 1);
      const template = document.querySelector('#template1').content
      const fragment = document.createDocumentFragment();
      const clone=template.cloneNode(true)
      fragment.appendChild(clone)
      lista.appendChild(fragment)
    }
    
    function myFunction2() {
      deleteChild();
      localStorage.setItem("Status", 2);
      const template = document.querySelector('#template2').content
      const fragment = document.createDocumentFragment();
      const clone=template.cloneNode(true)
      fragment.appendChild(clone)
      lista.appendChild(fragment)
    }
   
   function deleteChild() {
      var e = document.querySelector('.wrapper');  
      var child = e.lastElementChild; 
      while (child) {
          e.removeChild(child);
          child = e.lastElementChild;
      }
   }

