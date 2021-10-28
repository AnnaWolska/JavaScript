# Zdarzenia - ciąg dalszy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_3_Dzien_4/2_Zdarzenia_Ciag_Dalszy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, szerokością i wysokością 100px. W elemencie `div` umieść przycisk `button` z napisem "On".

Kliknięcie na przycisk zmienia stan żarówki: jeżeli tło `div` było białe, to zmienia je na żółte, a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe, a napis na "On".

---

### Zadanie 0b - `js/task0b.js`

Stwórz komponent `MobileMenu`.

Komponent ma mieć następującą strukturę (stwórz dokładnie taką strukturę w React pamiętając o klasach CSS):

```html
<section class="mobile">
  <header class="mobile-menu">
    <a href="#" class="open-menu"></a>
    <nav>
      <ul>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Zespół</a></li>
        <li><a href="#">Produkty</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
      <a href="#" class="close-menu">Zamknij menu</a>
    </nav>
  </header>
</section>
```

Na początku powinna być widoczna tylko klasa `.open-menu`. Po kliknięciu na ikonę menu (`.open-menu`), powinien się pojawić element `nav`.

Po kliknięciu na "Schowaj menu" (`.close-menu`) wracamy do stanu początkowego - `nav` znika.

Możesz skorzystać z klasy `.hide`, która jest przygotowana w pliku `CSS`.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent z elementem `div` z kolorem tła ustawionym na zielony, szerokością `500px` i wysokością `200px`.

Po najechaniu na `div` ma się zmieniać jego tło na niebieskie, a wysokość na 400px.

Gdy kursor odjedzie, komponent ma wrócić do pierwotnego **stanu**.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość `100px` oraz `position` ustawione na `absolute`.

Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości z przedziału 0 - 1000px.
