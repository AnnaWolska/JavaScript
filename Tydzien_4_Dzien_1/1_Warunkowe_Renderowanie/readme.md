# Warunkowe renderowanie

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_4_Dzien_1/1_Warunkowe_Renderowanie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

Stwórz komponent `MyButton`.

Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". Po jego kliknięciu napis ma się zmienić na "TAK", po następnym kliknięciu z powrotem na "NIE" itd. **Aby wyświetlić odpowiedni tekst użyj operatora trójargumentowego bezpośrednio wewnętrz JSX.**

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i operatora logicznego `&& ` wyrenderuj w elemencie `ul` następujące elementy listy:

- Liczba
- Parzysta / nieparzysta
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:

- 1
- 2
- 5
- 7
- 10
- 16
