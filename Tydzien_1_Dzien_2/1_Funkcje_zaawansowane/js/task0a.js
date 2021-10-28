const numbers = [4,12,23,76,4];

// ## Zadanie do wykonania z wykładowcą

// ### Zadanie 0a - `js/task0a.js`

// Napisz swoją implementację metody `reduce` ale pod nazwą `customReduce()`.
// Zasada działania ma być taka sama jak metody `reduce`.

// Następnie wykorzystaj nową metodę i mając do dyspozycji tablicę z liczbami:

// ```js
// const numbers = [4,12,23,76,4];
// ```

// Zwróć i wyświetl:
// - wynik dodawania wszystkich liczb z tablicy (suma liczb z tablicy: **119**)
// - wynik mnożenia wszystkich liczb z tablicy (iloczyn liczb z tablicy: **335616**)

Array.prototype.map = function (callback) {
    if (typeof callback !== "function") {
      console.log("To nie funkcja");
      return null;
    }
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback(this[i], i, this);
    }
    console.log(this);
    return newArray;
  };
  let resultArray = numbers.map(function (currentElement, index) {
    console.log(currentElement, index);
    console.log("WAT???", this);
    return currentElement * 2;
  });
  console.log(resultArray); //???




// Array.prototype.customReduce = function (callback, initialValue) {
//     if (typeof callback !== "function") {
//       return null;
//     }
//     let accumulator;
//     let startIndex;
//     if (typeof initialValue === "undefined") {
//       accumulator = this[0];
//       startIndex = 1;
//     } else {
//       accumulator = initialValue;
//       startIndex = 0;
//     }
//     for (let i = startIndex; i < this.length; i++) {
//       accumulator = callback(accumulator, this[i], this);
//     }
//     return accumulator;
//   };
//   let result = numbers.customReduce(function (acc, curr) {
//     return acc + curr;
//   });
//   console.log(result);
