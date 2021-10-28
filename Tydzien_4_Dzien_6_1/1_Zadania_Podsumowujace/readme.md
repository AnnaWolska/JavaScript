# Zadania podsumowujące

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_4_Dzien_6_1/1_Zadania_Podsumowujace`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

Stwórz komponent **funkcyjny** `UserCard`. Ma on przez `prop` przyjmować:

- Imię `name`
- Nazwisko `surname`
- Adres ``address``
- Kod Pocztowy `postcode`
- Miejscowość `city`


Komponent ma renderować (przykład w `HTML`):
```html
<div class="card">
  <div>
    <h5>{Imię} {Nazwisko}</h5>
    <div>{Adres}</div>
    <div>{Kod Pocztowy} {Miejscowość}</div>
  </div>
</div>
```

Imię, nazwisko, adres, i miejscowość mają być **niepustymi stringami**. Kod pocztowy ma się składać z **dokładne 5 lub 6 znaków**. Jeżeli którykolwiek z warunków nie jest spełniony, to wyrenderuj (przykład w `HTML`):

```html
<div class="alert alert-danger">
  Dane są nieprawidłowe!
</div>
```

Wyrenderuj ten komponent dla dowolnych danych.

**Pamiętaj o stworzeniu również funkcyjnego komponentu `App`, który będzie renderował komponent do tego zadania.**

---

### Zadanie 2 - `js/task02.js` 

Stwórz komponent `Shop`. Ma on renderować dwa komponenty: `Products` i `Cart`.
Ma on również wywołać zapytanie poprzez metodę `fetch` po listę produktów. Znajdują się one w `database/products.json`. Należy uruchomić `json-server` podając ten plik jako bazę danych.

Komponent `Shop` ma następnie przekazywać pobraną tablicę produktów dalej do komponentu `Products`.

Komponent `Products` ma renderować nagłówek `h2` "Produkty" i listę `ul` z danymi produktami wraz z przyciskiem (`<button class="btn btn-primary">`) `Kup!` przy każdym z nich.

Komponent `Cart` ma wyświetlać nagłówek `h2` "Koszyk", a w liście `ul` tylko te produkty, które zostały wybrane w komponencie `Products`. Nie powinno być możliwości dodania wielokrotnie tego samego produktu.

---

### Zadanie 3 - `js/task03.js` 

Stwórz komponent `LoadingData`. Ma on renderować element (przykład `HTML`):

```html
<div class="progress">
  <div class="progress-bar" style="width: 0%"></div>
</div>
```

Pasek postępu `.progress-bar` ma być aktualizowany co `100ms` o `1%`.

Po 10 sekundach wartość `width` powinna wynosić już `100%`, cały element `.progress` ma zniknąć a w jego miejsce pojawić się napis w elemencie `h1`: "Dane załadowane!".

---

### Zadanie 4 - `js/task04.js`

Stwórz komponent `ContactForm`. Ma on zawierać formularz z następującymi (kontrolowanymi) elementami:

- `input class="form-control"` na imię,
- `input class="form-control" type=email` na adres email,
- `textarea class="form-control"` na treść wiadomości,
- `button class="btn btn-primary" type="submit"` przycisk wysłania.

Kiedy formularz zostanie przesłany, ma zostać wykonana **walidacja**:

* imię ma być **co najmniej 2-znakowym stringiem** - jeśli warunek nie jest spełniony, nad fomularzem wypisz informację: "Pole imię musi zawierać co najmniej 2 znaki"

* e-mail ma **zawierać znak "@" i co najmniej 3 znaki** - jeśli warunek nie jest spełniony, nad fomularzem wypisz informację: "Pole email musi zawierać znak @ i co najmniej 3 znaki"

* wiadomość ma być **niepustym stringiem** - jeśli warunek nie jest spełniony, nad fomularzem wypisz informację: "Pole wiadomość musi zostać uzupełnione"

Jeżeli wszystkie warunki są spełnione, wyświetl nad formularzem na zielono informację "Dziękujemy za wiadomość".