//Specifications:

//  h. Items from template 1 should be numbered using CSS rules 
//  i. The data that will populate the templates should be read from a JSON file
//  j. The current view (template 1 or template 2) should be maintained even if the
//     browser is refreshed.
//  k. The user should be able to directly navigate to any of the page’s views

//  **************************************************************
// the URL's are /index.html#template2  or  /index.html#template1
//  **************************************************************

// If you use standard property names, you wouldn’t have so much trouble getting the data from each element. 
// Try to simplify the routing. There are two views: the main list and the detailed article view. Your routing should render the right one based 
// on the URL information and get the data needed to populate each one.

let data=fetch("data.json")
         .then(response => response.json())
         .then(data =>  {
          addValues(data)
          checkStatus(data)
         });

function addValues (dat){
   data=dat;
   textId1=data[0].text;
   textId2=data[1].text;
   textId3=data[2].text;
   textId4=data[3].text;
   textId5=data[4].text;
   textId6=data[5].text;
   titleId1=data[0].title;
   titleId2=data[1].title;
   titleId3=data[2].title;
   titleId4=data[3].title;
   titleId5=data[4].title;
   titleId6=data[5].title;
   urlId1=data[0].url;
   urlId2=data[1].url;
   urlId3=data[2].url;
   urlId4=data[3].url;
   urlId5=data[4].url;
   urlId6=data[5].url;
}

function checkStatus() {
      // There are two views: the main list (Template1) and 3 detailed article views (Template21, Template22, Template23). 
      // The routing render the right one based on the URL information and get the data needed to populate each one. 
      // But, when we open the index.html for the first time, first its reviewed if there is information in localStorage
      // with the last page position before closing the window. If there is no information, then redirect to the default 
      // page "index.html" (Template1)   
      let url =window.location.href;
      if (/(html#articleId1)/.test(url)){toTemplate1()}else if (/(html#articleId2-1)/.test(url)){toTemplate21()}else if (/(html#articleId2-2)/.test(url)){toTemplate22()}else if (/(html#articleId2-3)/.test(url)){toTemplate23()}

      // The last else is the default "toTemplate1()"
      let status = localStorage.getItem("Status");
      if (status==1){toTemplate1()}else if (status==2){toTemplate21()}else if (status==3){toTemplate22()}else if(status==4){toTemplate23()}else {toTemplate1()} 

  }

function toTemplate1() {
      deleteChild();
      localStorage.setItem("Status", 1);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#articleId1').content;
      let p1=template.querySelector('#p1');
      p1.textContent=textId1;
      let p2=template.querySelector('#p2');
      p2.textContent=textId2;
      let p3=template.querySelector('#p3');
      p3.textContent=textId3;
      let t1=template.querySelector('#title1');
      t1.textContent=titleId1;
      let t2=template.querySelector('#title2');
      t2.textContent=titleId2;
      let t3=template.querySelector('#title3');
      t3.textContent=titleId3;
      let im1 = template.querySelector('#img1')
      im1.src = urlId1;
      let im2 = template.querySelector('#img2')
      im2.src = urlId2;
      let im3 = template.querySelector('#img3')
      im3.src = urlId3;

      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true)
      fragment.appendChild(clone)
      element.appendChild(fragment)  
}
    
function toTemplate21() {
      deleteChild();
      localStorage.setItem("Status", 2);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#articleId2-1').content;
      let p4=template.querySelector('#p4');
      p4.textContent=textId4;
      let t4=template.querySelector('#title4');
      t4.textContent=titleId4;
      let im4 = template.querySelector('#img4');
      im4.src = urlId1;
      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true);
      fragment.appendChild(clone)
      element.appendChild(fragment)       
}
function toTemplate22() {
      deleteChild();
      localStorage.setItem("Status", 3);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#articleId2-2').content;
      let p5=template.querySelector('#p5');
      p5.textContent=textId5;
      let t5=template.querySelector('#title5');
      t5.textContent=titleId5;
      let im5 = template.querySelector('#img5');
      im5.src = urlId2;
      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true);
      fragment.appendChild(clone)
      element.appendChild(fragment)       
}
 
function toTemplate23() {
      deleteChild();
      localStorage.setItem("Status", 4);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#articleId2-3').content;
      let p6=template.querySelector('#p6');
      p6.textContent=textId6;
      let t6=template.querySelector('#title6');
      t6.textContent=titleId6;
      let im6 = template.querySelector('#img6');
      im6.src = urlId3;
      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true);
      fragment.appendChild(clone)
      element.appendChild(fragment)       
}

function deleteChild() {
      let e = document.querySelector('.wrapper');  
      let child = e.lastElementChild; 
      while (child) {
          e.removeChild(child);
          child = e.lastElementChild;
      }
}
