// **************************** //
// Exercise Chapter 03 - Exercise 04
// **************************** //
 
// 4. Create a custom object that will hold an image’s mock information such as 
//    *  pixel color data, 
//    *  image size, and 
//    *  name.

//    It must be able to return the information.
//    Example:
//    var data = new Array (1600); // 40 x 40 px dummy image data 
//    var img  = new Image (data, 40, 40, ‘myImage’);
//    img.width; // 40
//    img.height; // 40
//    img.name; // ‘myImage’
//    img.pixelData (20, 4); // returns the color of the pixel at that position.

// Estimated Time: 1 hour.

// first I create a  40 x 40 px array (1600) with dummy image data (data) 
var data = new Array (1600);
for (var i=0; i<data.length; i++){
  data[i] = Math.random() * 10;     // I add dummy image data
}

// I create the object  
function image (data, x, y, name) {
      try{
        if(x<0 || y<0) throw "Negative values are not allowed";
        if(x==0 || y==0) throw "The height or width must be higher";
        if(data.length != x*y) throw "Data size doesn't correspond to the x ans y size";
        this.width = x;          
        this.height = y;
        this.name = name; 
        this.data=data;
      }catch(err) {
        console.error(err);
      }   
} 

// I added the method to obtain the information of a given pixel
image.prototype.pixelData = function (x, y){        // x= column and y=row
      let pixel=(x*this.width-this.width)+(y-1); 
      try{
        if (pixel> data.length) throw "The pixel do not correspond to the image size";
        if(x<0 || y<0) throw "Negative values are not allowed";
        if(x==0 || y==0) throw "The height or width must be higher";
      }catch(err){
        console.error(err);
      }
      result= data[pixel];
      return result;
}

var img = new image (data, 40, 40, 'myImage');
console.log(img.width) // 40
console.log(img.height) // 40
console.log(img.name) // ‘myImage’
console.log(img.pixelData(1,6))
