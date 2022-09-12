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
   text1=data[0].article1[0].text1;
   text2=data[0].article2[0].text2;
   text3=data[0].article3[0].text3;
   text4=data[0].article4[0].text4;
   text5=data[0].article5[0].text5;
   text6=data[0].article6[0].text6;
   title1=data[0].article1[0].title1;
   title2=data[0].article2[0].title2;
   title3=data[0].article3[0].title3;
   title4=data[0].article4[0].title4;
   title5=data[0].article5[0].title5;
   title6=data[0].article6[0].title6;
   url1=data[0].article1[0].url1;
   url2=data[0].article2[0].url2;
   url3=data[0].article3[0].url3;
   url4=data[0].article4[0].url4;
   url5=data[0].article5[0].url5;
   url6=data[0].article6[0].url6;
}

function checkStatus() {
    let url =window.location.href;   
    if (/(html#template1)/.test(url)){toTemplate1()}  
    if (/(html#template21)/.test(url)){toTemplate21()}
    if (/(html#template22)/.test(url)){toTemplate22()}
    if (/(html#template23)/.test(url)){toTemplate23()}
      
    var status = localStorage.getItem("Status");
    if (status!=2 && status!=1 && status!=3 && status!=4){toTemplate1()}
    if (status==2){toTemplate21()}
    if (status==3){toTemplate22()}
    if (status==4){toTemplate23()}
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
      let p3=template.querySelector('#p3');
      p3.textContent=text3;
      let t1=template.querySelector('#title1');
      t1.textContent=title1;
      let t2=template.querySelector('#title2');
      t2.textContent=title2;
      let t3=template.querySelector('#title3');
      t3.textContent=title3;
      let im1 = template.querySelector('#img1')
      im1.src = url1;
      let im2 = template.querySelector('#img2')
      im2.src = url2;
      let im3 = template.querySelector('#img3')
      im3.src = url3;

      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true)
      fragment.appendChild(clone)
      element.appendChild(fragment)  
}
    
function toTemplate21() {
      deleteChild();
      localStorage.setItem("Status", 2);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#template21').content;
      let p4=template.querySelector('#p4');
      p4.textContent=text4;
      let t4=template.querySelector('#title4');
      t4.textContent=title4;
      let im4 = template.querySelector('#img4');
      im4.src = url1;
      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true);
      fragment.appendChild(clone)
      element.appendChild(fragment)       
}
function toTemplate22() {
      deleteChild();
      localStorage.setItem("Status", 3);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#template22').content;
      let p5=template.querySelector('#p5');
      p5.textContent=text5;
      let t5=template.querySelector('#title5');
      t5.textContent=title5;
      let im5 = template.querySelector('#img5');
      im5.src = url2;
      let fragment = document.createDocumentFragment();
      let clone=template.cloneNode(true);
      fragment.appendChild(clone)
      element.appendChild(fragment)       
}
 
function toTemplate23() {
      deleteChild();
      localStorage.setItem("Status", 4);
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#template23').content;
      let p6=template.querySelector('#p6');
      p6.textContent=text6;
      let t6=template.querySelector('#title6');
      t6.textContent=title6;
      let im6 = template.querySelector('#img6');
      im6.src = url3;
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
