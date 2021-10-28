const Square = require("./square");


const square = new Square(2);
square.sayName();
console.log(square.area());
console.log(new Square().area());


// ### Zadanie 1 - `js/task01.js`

// W folderze ```js``` znajdziesz 3 pliki:
// * ```polygon.js``` - zawierający klasę opisującą figurę geometryczną (wielokąt)
// * ```square.js``` - zawierający klasę dziedziczącą po klasie polygon
// * ```app.js``` - w którym towrzony jest obiekt na bazie klasy Square.

// Twoim zadaniem jest połączenie plików w taki sposób, aby `Square` widział `Polygon`, a plik app.js widział klasę `Square`.

