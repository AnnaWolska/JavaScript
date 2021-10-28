# Warsztat

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_4_Dzien_6_2/1_Warsztat`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `app.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


Na dzisiejszym warsztacie wykonacie ponownie aplikację **ToDo**, w oparciu React-a.

W katalogu `js` macie już przygotowaną konfigurację oraz szkielety komponentów do stworzenia aplikacji.

### Podstawowa funkcjonalność
- dodawanie zadań do wykonania
- ustawianie statusu zadania ***open / closed***
- zliczanie czasu spędzonego nad zadaniem

### Dodatkowa funkcjonalność - dla chętnych
- dodawanie operacji do zadania
- rejestracja czasu operacji - wtedy czas dla zadania jest sumą czasów operacji

### Przechowywanie danych
Do zapisywania danych wykorzystacie już znany Wam **json-server**, który uruchamia serwer REST-owy, dlatego do komunkacji z nim wykorzystacie ***fetch-a***.
 Dane startowe macie zapisane w katalogu **data** w pliku **db.json**, tam też możecie zobaczyć podstawową strukturę pojedynczego zadania.

Aby uruchomić json-server wpiszcie w terminalu: `json-server data/db.json`

