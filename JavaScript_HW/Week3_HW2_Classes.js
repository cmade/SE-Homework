// OOP: Classes

// Let's create shaped objects

// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object.
// Write a function total_sides that returns the number of sides of the object.
// Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// Write a function called rectangle_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
// Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// Write a function called square_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
class Circle {
  area(x) {
    var area = Math.floor(Math.PI * Math.pow(x, 2));
    return 'The circle has an area of ' + area;
  }
  total_sides() {
    return 'Based on the geometric definition of a polygon, a circle has no sides or infinite sides.';
  }
}

let cirlce = new Circle();
console.log(cirlce.area(3));

class Rectangle {
  rectangle_area(w, h) {
    var area = w * h;
    return 'The rectangle has an area of ' + area;
  }
  total_sides() {
    return 'Rectangles have 4 sides.';
  }
}

let rectangle = new Rectangle();
console.log(rectangle.rectangle_area(3, 4));

class Square {
  square_area(a) {
    var area = Math.pow(a, 2);
    return 'The square has an area of ' + area;
  }
  total_sides() {
    return 'Squares have 4 sides.';
  }
}

let square = new Square();
console.log(square.square_area(3));
console.log(square.total_sides());
