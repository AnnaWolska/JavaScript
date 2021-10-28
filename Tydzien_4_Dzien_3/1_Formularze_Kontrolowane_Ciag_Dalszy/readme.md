# Fromularze kontrolowane - Ciąg dalszy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_4_Dzien_3/1_Formularze_Kontrolowane_Ciag_Dalszy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

Stwórz komponent o nazwie `PeselInput`.
Ma on wyświetlać w elemencie `form` elementy `input` oraz drugi `div`.

`input` ma być kontrolowanym elementem formularza. Podczas wpisywania sprawdzaj czy wpisany tekst ma 11 znaków i czy są to same cyfry:

- Jeżeli tak, to w wewnętrznym elemencie `div` wyświetl `input type="submit"` z napisem "Prześlij" (póki co nie ma nic robić);
- Jeżeli nie, to w wewnętrznym elemencie `div` wyświetl informację "Niepoprawny numer PESEL".

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `Register`. Komponent ma składać się z formularza `form`, przycisku `Zapisz` i szeregu pól:

Dane osobowe

- Imię i Nazwisko `input[text]` (min. 5 znaków)
- Email `input[email]` (min. 3 znaki i znak `@`)
- Hasło `input[password]` (min. 4 znaki)
- Powtórz hasło `input[password]` (min. 4 znaki, takie samo jak pierwsze hasło)
- Płeć `select`

Dane do wysyłki

- Adres `input[text]` (min. 3 znaki)
- Kod pocztowy `input[text]` (5 znaków (bez myślnika - wtedy same cyfry) lub 6 znaków z myślnikiem jako trzecim znakiem)
- Miasto `input[text]` (min. 2 znaki)

Każde z tych pól należy zwalidować po klknięciu Wyślij zgodnie z regułami, które są podane.

Jeżeli nie ma błędów, należy wyświetlić podsumowanie wszystkich danych pod lub obok formualrza.

Jeżeli pojawiły się błędy, należy je wyświetlić użytkownikowi na ekranie (nie w konsoli) i nie renderować podsumowania.



## Zadanie dodatkowe

### Zadanie 3 - `js/task03.js`

To zadanie pozwoli Ci stworzyć własną listę rzeczy do zrobienia.

Stwórz komponent `ToDoList`. Przechowuje on w swoim state listę rzeczy do zrobienia jako tablicę obiektów w takiej formie:
```js
{
  id: 1,
  name: "Rzecz do zrobienia",
  done: false
}
```

Oto przykładowa struktura komponentu (przykład, HTML):
```HTML
<div class="toDoList">
  <form class="header">
    <h2>Twoja lista zadań</h2>
    <input type="text" placeholder="np. Zrobić zakupy" />
    <button class="btn-add">Dodaj</button>
  </form>

  <ul>
    <li>Kupić mleko</li>
    <li class="done">Zrobić prezentację</li>
  </ul>
</div>
```

Po wpisaniu do elementu `input` dowolnego tekstu i kliknięciu na przycisk "Dodaj", powinna się zaktualizować wewnętrzna tablica z rzeczami do zrobienia. Wstaw wtedy nowy obiekt na jej końcu, ustawiając `done` na `false`. W praktyce wymaga to pobrania tablicy ze state, **stworzenia jej kopii**, dodania obiektu i zaktualizowania state z całą nową tablicą. Po dodaniu wyczyść `input` (po prostu ręcznie ustawiając stan powiązany z `input` na pusty string).

Po kliknięciu na dowolny element `li` z listy, należy przeszukać tablicę i znaleźć tam element odpowiadający konkretnemu **id**, a następnie zmienić mu `done` na odwrotny. Jeżeli element był oznaczony jako zakończony, to ma nie być zakończony, a jeżeli był niezakończony, to ma być zakończony.

Podczas renderowania nadawaj klasę CSS `done` elementom `li`, które są oznaczone jako zakończone. Pamiętaj o odpowiednich kluczach dla elementów listy.