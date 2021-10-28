// ### Zadanie 2 - `js/task02.js`

// Zadanie polega na wczytaniu danych z adresu: 

// ```
// https://swapi.co/api/films/
// ```

// Po pobraniu obiektu typu JSON, należy wyświetlić tytuły filmów jako elementy listy `ul` w sekcji `#movies-list`.


// fetch('https://swapi.co/api/films/').then( resp.json() ).than( result => {
//     console.log( result );
// });


fetch('https://swapi.co/api/films/').then( resp => {
    if (resp.ok)
    return resp.json();
  else
    throw new Error('Błąd sieci!');
}).then( result => {
  console.log(result);
}).catch( err => {
  console.log('Błąd!', err);
});



