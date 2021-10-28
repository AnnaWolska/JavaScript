# Warunkowe blokowanie wyświetlania

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_4_Dzien_1/2_Warunkowe_Blokowanie_Wyswietlania`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

Stwórz komponent `AccountData`. Niech przechowuje w stanie wewnętrznym pod nazwą `data` wartość `false`.

W pliku `js/data/fakeAPI.js` znajduje się obiekt pozwalający udawać zapytanie do zewnętrznego API. Zaimportujcie go do pliku `js/task01.js`:

```js
import FakeAPI from "./data/fakeAPI.js";
```

Jego użycie wygląda następująco (całość musi być w funkcji `async`):
```js
try {
  const data = await FakeAPI;
  // Teraz w zmiennej data mamy dostęp do konkretnych danych

} catch (e) {}
```


Wywołanie to, potrwa kilka sekund a następnie dane zostaną zwrócone do zmiennej `data`. Sprawdź w konsoli, jak wyglądają te dane żeby wiedzieć, jak je później zrenderować.

Wywołanie tej metody powinna znaleźć się w `componentDidMount`. Metoda ta musi być oznaczona jako `async`.

Po odczycie danych uruchom funkcję, która zmieni stan wewnętrzny `data` na dane otrzymane z API.

Dopóki w `this.state.data` jest `false`, **zablokuj renderowanie komponentu**.

Jeżeli posiadasz dane, to wygeneruj je w formie tabeli 3 kolumny na 12 wierszy.
