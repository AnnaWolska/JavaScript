// const $ulList = document.querySelector("ul");

// const getNames = function () {
//   const names = ["Jan", "Piotr", "Anna"];

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(names);
//     }, 2000);
//   });
// };



// ## Zadanie do wykonania z wykładowcą
// ### Zadanie 0a - `js/app.js`
// W pliku z zadaniem mamy zdefiniowaną metodę, `getNames`, która wykorzystuje `Promise` i zwraca tablicę imion.
// Wykorzystaj tę metodę i po jej wykonaniu, wstaw imiona do listy `ul` w pliku `index.html`.

const $ulList = document.querySelector("ul");

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};

getNames().then((names) => {
  console.log(names);
  names.forEach((name) => {
    const newLi = document.createElement("li");
    newLi.innerText = name;
    $ulList.appendChild(newLi);
  });
});

// wyrenderuj listę todo

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  