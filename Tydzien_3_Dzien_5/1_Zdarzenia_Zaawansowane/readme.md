# Zdarzenia - ciąg dalszy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_3_Dzien_5/1_Zdarzenia_Zaawansowane`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

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

---

### Zadanie 2 - `js/task02.js`

> Do wykonania tego zadania możesz potrzebować przekazywać w evencie pewną własną unikalną informację.
> Wystarczy zrobić to w wyrażeniu JSX bezpośrednio podczas tworzenia elementu.
> Zobacz na przykładzie, jak możesz to zrobić:
> ```js
> <button onClick={e => this.handleClick( e, index );}/>
> ```

Stwórz komponent z 15 przyciskami z napisem "Klik!". Każdy z przycisków musi mieć swój własny `state`. Aby szybko stworzyć tyle przycisków możesz posłużyć się tym kodem:

```js
/**
* Każdy z elementów tablicy będzie miał wartość
* false - czyli nie kliknięty
*/
state: {
  buttons: Array(15).fill(false)
}
```

Po kliknięciu na dowolny przycisk zmienia on (**ten konkretnie wciśnięty przycisk**) swój tekst na "Kliknięty". Możemy zmieniać stan danego przycisku z `false` na `true`.

---

### Zadanie 3 - `js/task03.js`

> Poniższe zadanie pozwoli Ci stworzyć minigrę, w której gracz ma określony czas by jak najszybciej klikać na przycisk. Czas biegnie coraz szybciej i należy kliknąć tyle razy, ile się uda, zanim czasu między kolejnymi kliknięciami będzie go za mało.

Stwórz komponent `SpeedClickGame`. Ma on przyjmować czas do odliczania w ms przez props `time` i przechowywać go w stanie lokalnym.

Komponent składa się z przycisku z napisem "Click me!", elementu `h1` i elementu `h2` w elemencie `div`. W elemencie `h1` wyświetlaj aktualny czas, w `h2` będzie przechowywana liczba punktów (póki co 0).

Uruchom interval wykonywany co 50ms. **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.** W funkcji intervala zmniejszaj aktualny czas o `50ms` i sprawdzaj czy czas się nie skończył. Jeżeli czas się skończył, zablokuj przycisk (`disabled={true}`).

Po kliknięciu na przycisk dodawany jest punkt a czas zostaje zresetowany, ale jest o `50ms` krótszy niż poprzedni.

Np. jeżeli atrybut `time` tego komponentu był ustawiony na **1000** to:
- Brak kliknięć, czas początkowy: 1000ms,
- Pierwsze kliknięcie, czas początkowy: **950ms**,
- Drugie kliknięcie, czas początkowy: **900ms**,
- Trzecie kliknięcie, czas początkowy: **850ms**...

Wyrenderuj komponent dla props `time` ustawionego na 2000.