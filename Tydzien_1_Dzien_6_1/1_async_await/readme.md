<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# async/await

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_6_1/1_async_await`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task0a.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie do wykonania z wykładowcą

### Zadanie 0a - `js/task0a.js`

Wykorzystując `async/await` i `fetch` wykonaj zapytanie na adres otwartego API:
```
https://jsonplaceholder.typicode.com/todos/1
```

W odpowiedzi otrzymasz obiekt zawierający klucze `userId`, `id`, `title` i `completed`.

Na podstawie tej odpowiedzi i klucza `userId` pobierz wszystkie informacje o użytkowniku który stworzył dane todo:

```
https://jsonplaceholder.typicode.com/user/:userId
```

Do odpowiednich elementów w HTML dodaj następujące informacje na podstawie pobranych danych:

- `title` - dodaj jako tekst do `$title`
- `completed` - na podstawie wartości (`true`/`false`) do elementu `$completed` wpisz tekst "Zrobione" lub "Nie zrobione" a także dodaj klasę `badge-success` lub `badge-danger`
- `name` z obiektu użytkownika dodaj jako tekst elementu `$author`


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

W pliku jest stworzona funkcja `asyncAction` która zwraca obiekt typu `Promise`. Twoim zadaniem jest z użyciem `async/await` uruchomić tego Promisa i obsłużyć błędy które może on generować. 

Wartość powinna zostać wpisana do elementu HTML `#random-value` a w przypadku błędu, informacja o tym ma zostać wpisana do elementu `#message` w sekcji `#task01`.

---

### Zadanie 2 - `js/task02.js`

Skorzystaj z API:

```
https://randomuser.me/api/
```

i na podstawie jego wyniku, w sekcji `#task02` i elemencie `.content` wpisz kilka informacji o danej osobie:

- Imię i Nazwisko,
- Zdjęcie
- Email


