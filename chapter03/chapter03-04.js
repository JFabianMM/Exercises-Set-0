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

// - You should  make sure that the data is compatible with the stated width and height.
// - The data is expected to be a 1-dimensional array    ((READY))
// - You are not making use of the data object passed to the Image constructor.

// first I create a  40 x 40 px array (1600) with dummy image data (data) 
var data = new Array (1600);
for (var i=0; i<data.length; i++){
  data[i] = Math.random() * 10;     // I add dummy image data
}

// I create the object  
function image (data, x, y, name) {
      if (data.length== x*y){
        this.width = x;          
        this.height = y;
        this.name = name; 
        this.data=data;
      }else{
          console.log('The data dimension is not compatible with stated width and height')
      }
      
} 
// I added the method to obtain the information of a given pixel
image.prototype.pixelData = function (x, y){        // x= column and y=row 
        let pixel=(x*this.width-this.width)+(y-1);   
        if (pixel> data.length){
            console.log('The pixel do not correspond to the image size')
        } 
        result= data[pixel];
        return result;
}

 //console.log(data)
 var img = new image (data, 40, 40, 'myImage');
console.log(img.width) // 40
console.log(img.height) // 40
console.log(img.name) // ‘myImage’
console.log(img.pixelData(41,6))
