// **************************** //
// Exercise Chapter 06 - 01 
// **************************** //

// 1. Create a set of object types that describe a series of related objects that may share behavior 
//     and/or attributes. Code the example and another set of classes different from the example. 
//     Add properties/methods as needed.

//Example:
//     Shape { pEdges, fnDisplay }
//     Quadrilateral is Shape { fnArea, fnPerimeter} 
//     Square is Quadrilateral { }
//     Triangle is Shape {fnArea, fnPerimeter}

// ***************************************************

function shape(pEdges, EdgesSize){     // Shape object with pEdges that is the number of edges and size of each edge
   this.pEdges=pEdges; 
   this.EdgesSize=EdgesSize;
};

shape.prototype.fnDisplay = function(){    // I add the function fnDisplay that prints its parameters
   console.log(this.pEdges);
   console.log(this.EdgesSize);
};

shape.prototype.fnPerimeter = function(){
      var val=this.pEdges;
      var size=this.EdgesSize;
      var res;
      res=val*size;
      console.log(res)
      return res;
}; 

var shape1 = new shape(4,4);
shape1.fnDisplay();
shape1.fnPerimeter();

var quadrilateral = new shape(4, 7);

var Square = Object.create(quadrilateral);        //     Square is Quadrilateral { }
Square.fnDisplay();
var Triangle = new shape(3,7);                    //     Triangle is Shape {fnArea, fnPerimeter}

// ANOTHER EXAMPLE
// ***************************************************

//Example 2:
//     automobile {nTires, cilinders}
//     car is an Automobile { }
//     sportcar is a car { }
//     bus is anAutomobile  { }
//     moto is an automobile {}


 function automobile(nTyres, cilinders){     // Automobile with nTyres that is the number of tyres and number of cilinders
    this.nTyres=nTyres; 
    this.cilinders=cilinders;
};

 automobile.prototype.fnDisplay = function(){    // I add the function fnDisplay that prints its parameters
    console.log(this.nTyres);
    console.log(this.cilinders);
 }; 

 var moto = new automobile(2,1);          //     moto is an automobile { }
 moto.fnDisplay();

var car = new automobile(4);
var sportCar = Object.create(car);        //     sportcar is a car { }

var motocross = Object.create(moto);      //     motocross is a moto { }
motocross.fnDisplay();

 var bus = new automobile(8, 12);
 var sportcar = new automobile(4, 8);
