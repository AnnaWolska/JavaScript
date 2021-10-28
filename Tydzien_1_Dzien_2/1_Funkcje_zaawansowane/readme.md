<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# Funkcje Zaawansowane

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_2/1_Funkcje_zaawansowane`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie do wykonania z wykładowcą

### Zadanie 0a - `js/task0a.js`

Napisz swoją implementację metody `reduce` ale pod nazwą `customReduce()`.
Zasada działania ma być taka sama jak metody `reduce`.

Następnie wykorzystaj nową metodę i mając do dyspozycji tablicę z liczbami:

```js
const numbers = [4,12,23,76,4];
```

Zwróć i wyświetl:
- wynik dodawania wszystkich liczb z tablicy (suma liczb z tablicy: **119**)
- wynik mnożenia wszystkich liczb z tablicy (iloczyn liczb z tablicy: **335616**)


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.ja`

W pliku `js/task01.js` znajdują się funkcje napisane w standardowy sposób. Twoim zadaniem jest przerobienie ich na **funkcje strzałkowe**, tak aby ich wywołania nie powodowały błędów.

---

### Zadanie 2 - `js/task02.ja`

Stwórz funkcję strzałkową `randomize`, która jako parametry przyjmuje:
* Dowolne dwie liczby (`param1`, `param2`) -  określające przedział między jakim będziemy losować liczbę
* funkcje anonimową (`callback`, której zadaniem jest wypisanie wylosowanej liczby.
* niech funkcja `randomize()` sprawdza przed wywołaniem czy `callback` rzeczywiście jest funkcją.

