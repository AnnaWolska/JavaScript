<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# Obiektowość

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_4/1_Obiektowosc`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `app.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie do wykonania z wykładowcą

### Zadanie 0a - `js/app.js`

Stwórz klasę `Duck`.
Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki.
Stwórz wewnątrz tej klasy konstruktor i metody:
- `constuctor` - którego zadaniem będzie ustawienie typu kaczki na “zwykła kaczka” np. `this.type = “zwykla”`
- `quack()` - wypisuje “kwa kwa”
- `swim()` - wypisuje “płynę…"”
- `print()` - wypisuje "Wygląda jak zwykla kaczka". Skorzystaj z ustawienia type do wypisania typu kaczki.

Stwórz obiekt `duck`. Wywołaj dla niego wszystkie metody.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/app.js`

Na bazie klasy `Duck` stwórz kolejną o nazwie `WildDuck`.

Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody `print()` typ kaczki zmienił się na "dzika".
Stwórz obiekt `wildDuck`.

Wywołaj dla niego wszystkie metody.

---

### Zadanie 2 - `js/app.js`

Z klasy Duck mogą dziedziczyć wszytkie kaczki.
Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody `fly()`.
Metoda ma wypisywać w konsoli tekst `Kaczka ${type} leci`.

