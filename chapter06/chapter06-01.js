// **************************** //
// Exercise Chapter 06 - Exercise 01 
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


class Shape {
   constructor(name) {
     this.name = name;
   }
   present() {
     return 'I have a ' + this.name;
   }
 }
 
 class Type extends Shape {
   constructor(name, pEdges, size) {
     super(name);
     this.pEdges = pEdges;
     this.size = size;
   }
   perimeter() {
     //let result= 
     return this.present() + ' with perimeter: ' + this.pEdges* this.size;
   }
 }

let polygon =new Shape('polygon');
let hexagon =new Type('polygon', 6, 5);
let octagon = new Type('polygon', 8, 32);
console.log(polygon.present())
console.log(hexagon.perimeter());
console.log(octagon.perimeter());



// ANOTHER EXAMPLE
// ***************************************************

//Example 2:
//     automobile {kind}
//     bus is an Automobile {kind,tyres}
//     schoolbus is a bus {kind,tyres}
//     moto is anAutomobile  {kind }
//     tricycle is a moto {kind,tyres}


// class Automobile {
//    constructor(kind) {
//      this.kind = kind;
//    }
//    present() {
//      return 'I have a ' + this.kind;
//    }
//  }
 
//  class Type extends Automobile {
//    constructor(kind, tyres) {
//      super(kind);
//      this.tyres = tyres;
//    }
//    show() {
//      return this.present() + ', and has ' + this.tyres + ' tyres ';
//    }
//  }

// let moto =new Automobile('moto');
// let bus =new Automobile('bus');
// let tricycle = new Type('moto',3);
// let motocross= new Type('moto',2);
// let schoolbus= new Type('bus',10);

// console.log(moto.present())
// console.log(bus.present()) 
// console.log(tricycle.show());
// console.log(motocross.show());
// console.log(schoolbus.show());
