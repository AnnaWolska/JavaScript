const asyncAction = async () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100) + 1;

    setTimeout(() => {
      if (random <= 50) {
        resolve({
          value: random,
          status: "OK"
        });
      } else {
        reject({
          value: random,
          status: "ERROR",
          errorMsg: "Value is greater then 50"
        });
      }
    }, 1250);
  });
};




// ### Zadanie 1 - `js/task01.js`

// W pliku jest stworzona funkcja `asyncAction` która zwraca obiekt typu `Promise`. 
// Twoim zadaniem jest z użyciem `async/await` uruchomić tego Promisa i obsłużyć błędy które może on generować. 

// Wartość powinna zostać wpisana do elementu HTML `#random-value` 
// a w przypadku błędu, informacja o tym ma zostać wpisana do elementu `#message` w sekcji `#task01`.

// // ---
// async function getUsers() {
//   const users = await fetch("/users.json");
//   console.log(users);
// }