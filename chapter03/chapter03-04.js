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
function Image (data, x, y, name) {
        this.width = x;          
        this.height = y;
        this.name = name; 
        this.data=data;
} 

// I added the method to obtain the information of a given pixel
Image.prototype.pixelData = function (x, y){        // x= column and y=row
      let pixel=(x*this.width-this.width)+(y-1); 
      try{
        if(this.width<0 || this.height<0) throw "Negative values of width or height in the Image definition are not allowed";
        if(this.width==0 || this.height==0) throw "The height or width in the Image definition must be higher than 0";
        if(this.data.length != this.width*this.height) throw "Data size doesn't correspond to the width and height size";
        if(x<0 || y<0) throw "Negative values are not allowed";
        if(x==0 || y==0) throw "The height or width must be higher";
        if(x>this.width || y>this.height) throw "The pixel selection does not correspond to the image size";
      }catch(err){
        return err;
      }
      let result= data[pixel];
      return result;
}

var img = new Image (data, 40, 40, 'myImage');
console.log(img.width) // 40
console.log(img.height) // 40
console.log(img.name) // ‘myImage’
console.log(img.pixelData(40,40))
