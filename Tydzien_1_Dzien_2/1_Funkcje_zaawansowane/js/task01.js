/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
const isArrayIncludeValue = (value, array) => array.includes(value);


const sum = (num1, num2) => num1 + num2;


// const printArray = function (array) {
//   array.forEach(function (element) {
//     console.log(element);
//   });
// };

const printArray = function (array) {
  array.forEach = (element) => console.log(element);
};


const filterNumbersFromArray = function (array) {
  return array.filter = (el) => typeof el === "number";
};


/**
 * Wywołania
 * Nie zmieniaj kodu poniżej!
 */
console.log("--- isArrayIncludeValue ---");
const result1 = isArrayIncludeValue(2, [1, 2, 3, 5, 3, 2, 5]);
console.log(result1);

console.log("\n--- sum ---"); 
const result2 = sum(2, 3);
console.log(result2);

console.log("\n--- printArray ---");
printArray(["Ala", "Zosia", "Ewa", "Piotr", "Darek"]);

console.log("\n--- filterNumbersFromArray ---");
const filteredArray = filterNumbersFromArray(["Ala", 5, "Ewa", "Piotr", 2, "Adam", 19]);
console.log(filteredArray);

// ### Zadanie 1 - `js/task01.ja`

// W pliku `js/task01.js` znajdują się funkcje napisane w standardowy sposób. Twoim zadaniem jest przerobienie ich na **funkcje strzałkowe**, tak aby ich wywołania nie powodowały błędów.

// ---

