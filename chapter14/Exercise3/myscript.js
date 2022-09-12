//Specifications:

//  h. Items from template 1 should be numbered using CSS rules 
//  i. The data that will populate the templates should be read from a JSON file
//  j. The current view (template 1 or template 2) should be maintained even if the
//     browser is refreshed.
//  k. The user should be able to directly navigate to any of the page’s views

//  **************************************************************
// the URL's are /index.html#template2  or  /index.html#template1
//  **************************************************************

let data=fetch("data.json")
         .then(response => response.json())
         .then(data =>  {
          addValues(data)
          checkStatus(data)
         });

function addValues (dat){
  let data=dat;
   text1=data[0].text1;
   text2=data[0].text2;
   text3=data[0].text3;
   title1=data[0].title1;
   title2=data[0].title2;
   title3=data[0].title3;
   url1=data[0].url1;
   url2=data[0].url2;
   url3=data[0].url3;
}

function checkStatus() {
    let url =window.location.href;   
    if (/(html#template1)/.test(url)){toTemplate1()}  
    if (/(html#template2)/.test(url)){toTemplate2()}
      
    var status = localStorage.getItem("Status");
    if (status!=2 && status!=1){toTemplate1()}
    if (status==2){toTemplate2()}
    if (status==1){toTemplate1()} 
  }

function toTemplate1() {
      deleteChild();
      localStorage.setItem("Status", 1);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#template1').content;
      let p1=template.querySelector('#p1');
      p1.textContent=text1;
      let p2=template.querySelector('#p2');
      p2.textContent=text2;
      let t1=template.querySelector('#title1');
      t1.textContent=title1;
      let t2=template.querySelector('#title2');
      t2.textContent=title2;
      const im1 = template.querySelector('#img1')
      im1.src = url1;
      const im2 = template.querySelector('#img2')
      im2.src = url2;

      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true)
      fragment.appendChild(clone)
      element.appendChild(fragment)  
}
    
function toTemplate2() {
      deleteChild();
      localStorage.setItem("Status", 2);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#template2').content;
      let p3=template.querySelector('#p3');
      p3.textContent=text3;
      let t3=template.querySelector('#title3');
      t3.textContent=title3;
      const im3 = template.querySelector('#img3')
      im3.src = url3;

      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true);
      fragment.appendChild(clone)
      element.appendChild(fragment)       
}
   
function deleteChild() {
      var e = document.querySelector('.wrapper');  
      var child = e.lastElementChild; 
      while (child) {
          e.removeChild(child);
          child = e.lastElementChild;
      }
}
