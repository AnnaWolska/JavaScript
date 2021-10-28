

// ### Zadanie 1 - `js/task01.js`

// Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
// ``
// https://www.googleapis.com/books/v1/volumes?q=isbn:numerISBN
// ```
// Gdzie zamiast `numerISBN` podasz ISBN przekazany przez użytkownika.
// Otrzymasz w odpowiedzi JSON, a następnie obiekt, w którym interesuje Cię tablica pod kluczem `items`, 
// a w niej pierwszy element - obiekt z informacją o książce.
// Po pobraniu obiektu, dodaj do elementu `#book-info` w HTML'u `h1` z tytułem książki (jest w tym obiekcie pod kluczem `volumeInfo.title`).
// Przykładowy kod ISBN: 0345260791

let bookInfo = document.getElementById('book-info');
let numerISBN = '0345260791';
fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${numerISBN}`).then( resp => {
    if (resp.ok)
    return resp.json();
  else
    throw new Error('Błąd sieci!');
}).then( data => {
  let title = data.items[0].volumeInfo.title;
  console.log(title);
  let newH1 = document.createElement('h1');
  newH1.innerText = `title: ${title}`;
}).catch( err => {
  console.log('Błąd!', err);
  bookInfo.appendChild(newH1);
});



// let bookInfo = document.getElementById('book-info');
// let numerISBN = '0345260791';
// fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${numerISBN}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//         let title = data.items[0].volumeInfo.title;
//         console.log(title);
//         let newH1 = document.createElement('h1');
//         newH1.innerText = `title: ${title}`;
//         bookInfo.appendChild(newH1);

//     })
//     .catch((err) => {
//         console.log(err);
//     });
