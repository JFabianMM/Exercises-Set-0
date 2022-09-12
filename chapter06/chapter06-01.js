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

// 6.1) OOP classes 
//      You did not create a Square subtype

// This is the first example 
function Shape(name) {                                         // Shape is the root constructor with (name, getName(), clone())
  this.name = name; 
}
Shape.prototype.getName = function() {       
  return this.name;
}
Shape.prototype.clone = function() {
  return new this.constructor(this.name);
}

function Triangle(name, side1, side2, side3) {    
  Shape.call(this, name);
  this.category=Triangle;
  this.side1=side1;
  this.side2=side2;
  this.side3=side3;
}
Triangle.prototype = Object.create(Shape.prototype);           // Is copied the prototype
Triangle.prototype.constructor = Triangle;                     // The constructor is changed 

Triangle.prototype.perimeter = function() {                    // IS added the method perimeter
  return this.side1 + this.side2 + this.side3;
}

Triangle.prototype.area = function() {                         // IS added the method area
  let result;
  let sem;
  if (this.side1==this.side2 && this.side1==this.side3){       // Equilaterial
      result=(Math.pow(this.side1,2)* Math.sqrt(3))/4; 
      return result;
  }
  if (this.side1==this.side2 && this.side1!=this.side3){       // Isosceles1 first combination
      result=(this.side3 * Math.sqrt(Math.pow(this.side1, 2)-Math.pow(this.side3, 2)/4))/2; 
      return result;
  }
  if (this.side1==this.side3 && this.side1!=this.side2){       // Isosceles1 second combination
      result=(this.side2 * Math.sqrt(Math.pow(this.side1, 2)-Math.pow(this.side2, 2)/4))/2; 
      return result;
  }
  if (this.side3==this.side2 && this.side3!=this.side1){       // Isosceles1 third combination
      result=(this.side1 * Math.sqrt(Math.pow(this.side2, 2)-Math.pow(this.side1, 2)/4))/2; 
      return result;
  }
  if (this.side1!=this.side2 && this.side1!=this.side3){       // Scalene
    sem=(this.side1+this.side2+this.side3)/2;
    result=Math.sqrt(sem*(sem-this.side1)*(sem-this.side2)*(sem-this.side3));    
    return result;
  } 
}

Triangle.prototype.clone = function(name, side1, side2, side3) {   // Is added the constructor
  return new this.constructor(name, side1, side2, side3);
}

var equilaterial = new Triangle('equilateral', 5, 5, 5);      // Is created by the Triangle constructor
var equilaterial2 = equilaterial.clone('equilateral2', 7, 7, 7);   // Is created and instance of Trianglre

console.log(equilaterial2 instanceof Triangle)    // Only to confirm that the constructor is Triangle
console.log(equilaterial.getName())               // Method getName
console.log(equilaterial.perimeter())             // Method perimeter
console.log(equilaterial.area())                  // Method area

console.log(equilaterial2.getName())              // Method getName
console.log(equilaterial2.perimeter())            // Method perimeter
console.log(equilaterial2.area())                 // Method area


function Quadrilateral(name, side1, side2, side3, side4) {        
  Shape.call(this, name);
  this.category=Quadrilateral;
  this.side1=side1;
  this.side2=side2;
  this.side3=side3;
  this.side4=side4;
}

Quadrilateral.prototype = Object.create(Shape.prototype);     // Is copied the prototype
Quadrilateral.prototype.constructor = Quadrilateral;          // The constructor is changed

Quadrilateral.prototype.perimeter = function() {              // The method perimeter is added
  return this.side1 + this.side2 + this.side3 + this.side4;
}

Quadrilateral.prototype.clone = function(name, side1, side2, side3, side4) {   // Is added the constructor
  return new this.constructor(name, side1, side2, side3, side4);
}

var square = new Quadrilateral('square', 5, 5, 5, 5 );
var square2 = square.clone('square2', 8, 8, 8, 8 );

console.log(square instanceof Quadrilateral)
console.log(square.getName())
console.log(square.side1)
console.log(square2.getName())
console.log(square2.side1)

// Now I create a new subtype of square
function Cube(name, side, higth) {        
  Quadrilateral.call(this, name);
  this.category=Cube;
  this.side1=side;
  this.side2=higth;
}
Cube.prototype = Object.create(Quadrilateral.prototype);     // Is copied the prototype
Cube.prototype.constructor = Cube;                           // The constructor is changed
Cube.prototype.volume = function() {                         // The method perimeter is added
  return this.side1 * this.side1 * this.side2;
}

var cube1 = new Cube('cube1', 5, 4);
console.log(cube1 instanceof Quadrilateral)
console.log(cube1.getName())
console.log(cube1.side1)
console.log(cube1.getName())
console.log(cube1.side2)
console.log(cube1.volume())


// THIS IS A SECOND EXAMPLE
// ***************************************************

//Example 2:

function Employee(first_name,last_name, age) {                                         // Shape is the root constructor with (name, getName(), clone())
  this.first_name = first_name; 
  this.last_name = last_name;
  this.age = age;
}
Employee.prototype.getName = function() {       
  return [this.first_name, this.last_name];
}
Employee.prototype.clone = function() {
  return new this.constructor(this.first_name, this.last_name, this.age);
}

function Engineer(first_name,last_name, age, salary) {    
  Employee.call(this, first_name, last_name, age);
  this.category=Engineer;
  this.salary=salary;
}

Engineer.prototype = Object.create(Employee.prototype);           // Is copied the prototype
Engineer.prototype.constructor = Engineer;                     // The constructor is changed 

Engineer.prototype.getHollydays = function() {                    // IS added the method hollydays
  if (this.age<30){
    return '2 weeks';
  }
  if (this.age>=30 && this.age<60 ){
    return '3 weeks';
  }else{
    return '4 weeks';
  }
}

Engineer.prototype.clone = function(first_name,last_name, age, salary) {   // Is added the constructor
  return new this.constructor(first_name,last_name, age, salary);
}

var engineer1 = new Engineer('Jesus', 'Mendoza', 29, 1000);      // Is created by the Engineer constructor
var chemical_eng1 = engineer1.clone('Jose', 'Smith', 55, 2000);      // Is created and instance of Engineer

console.log(engineer1 instanceof Engineer)        // Only to confirm that the constructor is Engineer
console.log(engineer1.getName())               // Method getName
console.log(engineer1.getHollydays())                  // Method area

console.log(chemical_eng1.getName())              // Method getName
console.log(chemical_eng1.getHollydays())                 // Method area


function Laborer(first_name,last_name, age, salary, productivity) {    
  Employee.call(this, first_name, last_name, age);
  this.category=Engineer;
  this.salary=salary;
  this.productivity=productivity;
}

Laborer.prototype = Object.create(Employee.prototype);           // Is copied the prototype
Laborer.prototype.constructor = Laborer;                     // The constructor is changed 

Laborer.prototype.getHollydays = function() {                    // IS added the method hollydays
  if (this.age<30){
    return '1 weeks';
  }
  if (this.age>=30 && this.age<60 ){
    return '2 weeks';
  }else{
    return '3 weeks';
  }
}

Laborer.prototype.getBonus = function() {                    // IS added the method hollydays
  if (this.productivity<500){
    return 0;
  }
  if (this.productivity>=500 && this.productivity<800 ){
    return this.salary * 0.1;
  }else{
    return this.salary * 0.2;
  }
}

Laborer.prototype.clone = function(first_name,last_name, age, salary, productivity) {   // Is added the constructor
  return new this.constructor(first_name,last_name, age, salary, productivity);
}

var worker1 = new Laborer('Josue', 'Ortiz', 30, 500, 400);      // Is created by the Laborer constructor
var worker2 = worker1.clone('Alma', 'Castro', 50, 500, 900);      // Is created and instance of Engineer

console.log(worker1 instanceof Laborer)        // Only to confirm that the constructor is Engineer
console.log(worker1.getName())               // Method getName
console.log(worker1.getBonus())                  // Method getBonus

console.log(worker2.getName())              // Method getName
console.log(worker2.getBonus())                 // Method getBonus