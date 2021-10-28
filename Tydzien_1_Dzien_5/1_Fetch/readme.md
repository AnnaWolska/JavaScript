<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# Fetch

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_5/1_Fetch`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `app.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
```
https://www.googleapis.com/books/v1/volumes?q=isbn:numerISBN
```

Gdzie zamiast `numerISBN` podasz ISBN przekazany przez użytkownika.

Otrzymasz w odpowiedzi JSON, a następnie obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

Po pobraniu obiektu, dodaj do elementu `#book-info` w HTML'u `h1` z tytułem książki (jest w tym obiekcie pod kluczem `volumeInfo.title`).

Przykładowy kod ISBN: 0345260791

---

### Zadanie 2 - `js/task02.js`

Zadanie polega na wczytaniu danych z adresu: 

```
https://swapi.co/api/films/
```

Po pobraniu obiektu typu JSON, należy wyświetlić tytuły filmów jako elementy listy `ul` w sekcji `#movies-list`.

