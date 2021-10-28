// ### Zadanie 2 - `js/task02.js`

// Stwórz obiekt ```slider```, taki jak poniżej:

// ```JavaScript
// const slider = {
//   type: "infinite",
//   numberOfItems: 10,
//   center: true,
//   autoStart: true
// }
// ```

// Podstaw do zmiennych ```type``` oraz ```autoStart``` odpowiednie wartości z obiektu ```slider```.

const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}

const {type, autoStart} = slider;
console.log(type);
console.log(autoStart);