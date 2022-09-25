//Specifications:

//  h. Items from template 1 should be numbered using CSS rules 
//  i. The data that will populate the templates should be read from a JSON file
//  j. The current view (template 1 or template 2) should be maintained even if the
//     browser is refreshed.
//  k. The user should be able to directly navigate to any of the page’s views

//  **************************************************************
// the URL's are /index.html#template2  or  /index.html#template1
//  **************************************************************


let counter=0;
let data=fetch("data.json")
         .then(response => response.json())
         .then(data =>  {
          checkStatus(data)
         });

function checkStatus(dat) {  
      data=dat; 
      console.log(data);
      len=data.length;                    // All is according to the number of articles
      let url =window.location.href;     // Get the url
      if (/(html#articleId1)/.test(url) ||/(index.html)/.test(url) ){toTemplate1()}
      let coincidence = /html#articleId2-\d+/.exec(url);  // If the url coincides with any of the detailed views 
      if (coincidence){
            let con=url.match(/-\d+/);    // Get the match to get the detailed view template
            con=con[0];                        
            con=Number(con.replace("-", ""));   // Get the number of detailed view template
            if (con<=len){                   
                  toTemplate2(con-1);         // render the right detailed view
            }     
      }
      
      let status = localStorage.getItem("Status");     // If there is a refresh, the number of view template is obtained.
      console.log(status);
      if (status==1){toTemplate1()}else if (status>=2){toTemplate2(status-2)}   // Its routed to the right view.
      
  }

  function toTemplate1() {                      // Render the main view
      deleteChild();                            // Delete the previous rendered elements
      localStorage.setItem("Status", 1);        // Set the current view in localStorage
      let element = document.getElementById('wrapper');
      let fragment = document.createDocumentFragment();
      let sum;      
      for (let i=0; i<len; i++){
            let template = document.querySelector('#articleId1').content;
            let a1 = template.getElementById('a1');
            sum=i+1;
            a1.href = '#articleId2-' + sum;           // Assign the reference
            let p1=template.querySelector('#p1');
            p1.textContent=data[i].text; 
            let t1=template.querySelector('#title1');
            t1.textContent=data[i].title;
            let img1 = template.querySelector('#img1')
            img1.src = data[i].url;
            let clone=template.cloneNode(true);
            fragment.appendChild(clone);
            element.appendChild(fragment);        
      }
      if (counter==0){
            element.addEventListener('click', function(event){
                  routeIdentifier(event);
                  counter++
            });
      }
  }

function routeIdentifier(event){
  let element1=event.target;       
  let parent;
  let index; 
  if ((element1.className==='img1') || (element1.className==='title1') || (element1.className==='h5') || (element1.className==='p1') || (element1.className==='div1')){
        if (element1.parentNode.parentNode.className==='a1'){
            parent=element1.parentNode.parentNode;  
        }else{
            parent= element1.parentNode.parentNode.parentNode;
        }
        if (parent.parentElement){
            index = Array.from(parent.parentElement.children).indexOf(parent);
                  toTemplate2(index);      // We get the numer of article selected
            }  
      }
}

function toTemplate2(index) {                            // render the rigth detailed view template
      deleteChild();
      localStorage.setItem("Status", index+2);           // Save the current view to the localStorage 
      let element = document.getElementById('wrapper');   
      let template = document.querySelector('#articleId2').content;
      let p2=template.querySelector('#p2');
      p2.textContent=data[index].detailedText;
      let t2=template.querySelector('#title2');
      t2.textContent=data[index].title;
      let im2 = template.querySelector('#img4');
      im2.src = data[index].url;
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