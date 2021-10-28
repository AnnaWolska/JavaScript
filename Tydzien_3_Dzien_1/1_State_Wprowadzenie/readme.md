# Dzień 2 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_3_Dzien_1/1_State_Wprowadzenie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1

Stwórz komponent `SateTest`, który w swoim konstruktorze ma mieć zdeklarowany stan wewnętrzny:

```js
this.state = {
  currentChapter: "Wprowadzenie do state",
  page: 87
}
```

Następnie w metodzie `render`, wygeneruj element `header` a w nim `h3` z wartością spod `currentChapter` a także `h4` z wartością `page`. Wartości mają być pobrane ze `state` komponentu.

Stwórzcie również komponent `App` który ma renderować komponent `StateTest`.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `ProductsList` który ma składać się ze stanu wewnętrznego komponentu: 

```js
{
  products: ["banana", "orange", "apple", "peach"]
}
```

Celem zadania jest wyświetlenie listy produktów w formacie `ul > li` korzystając ze stanu wewnętrznego `this.state`.
