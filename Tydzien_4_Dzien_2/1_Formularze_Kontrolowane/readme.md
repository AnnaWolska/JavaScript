# Fromularze kontrolowane

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_4_Dzien_2/1_Formularze_Kontrolowane`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `Hello`.

Ma wyświetlać element `form`, a w nim `input type="text"` oraz `h1`. W `h1` ma się wyświetlać "Hello, `{name}`". `{name}` ma być na żywo tym, co wpisał użytkownik, a **domyślnie ma to być "Ty"**.

Pamiętaj żeby `input` był komponentem **kontrolowanym**!

---

### Zadanie 0b - `js/task0b.js`

Zaimportuj do pliku `js/task0b.js` plik `data/fakeAPI.js`:

```js
import FakeAPI from "./data/fakeAPI";
```

W obiekcie tym znajduje się metoda `login`. Gdy przesyłamy do niej obiekt o następującej strukturze:

```js
{
  username: jakiś login
  password: jakieś hasło
}
```

zwraca informacje o tym czy taki użytkownik istnieje wraz z jego danymi. W przypadku błędych danych logowania, zwraca informację o błędzie. Poprawny login i hasło to: `coderslab`, `qwerty`.

Sposób skorzystania z metody `login`:

```js
const user = {
  username: tutaj_podaj_login,
  password: tutaj_podaj_haslo
}

try {
  const result = await FakeAPI.login(user)
  // pod zmienną result mamy dostęp do informacji o zalogowanym użytkowniku
} catch(err) {
  // pod zmienną err mamy dostęp do informacji o błędzie
}
```

Celem zadania jest stworzenie komponentu `Form`, który będzie składał się z formularza. Ma on zawierać dwa pola: **Login** i **Hasło**, a także przycisk **Zaloguj!**.

W trakcie wysyłania formualrza należy zwalidować pola. Oto warunki:

- Login musi być dłuższy niż 2 znaki
- Hasło musi być dłuższe niż 4 znaki

Jeżeli któryś z warunków nie jest spełniony, należy wyświetlić użytkownikowi na ekranie informaję o tym, gdzie popełnił błąd. Z kolei gdy walidacja została przeprowadzona prawdiłowo, uruchamiamy metodę `login` z obiektu `FakeAPI` i czekamy na odpowiedź czy podane dane logowania są prawdiłowe.

Jeżeli tak, to należy przestać renderować formualarz i wyświetlić powitanie użytkownika (skorzystaj z danych, które dostajesz w metodzie `login`).

Jeżeli nie uda się zalogować ze względu na źle podany login i hasło, to wyświetlamy użytkownikowi taką informację na ekranie.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent `TextField`.

Ma renderować element `div`, a w nim elementy `p` i `select` oraz `span`.

Podczas wybierania opcji z elementu `select` ma się ona na żywo pokazywać w `p`, a w elemencie `span` liczba znaków wybranego elementu.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `AddTwoNumbers`.

Ma renderować `form`, a w nim dwa `input type="text"` oraz `h1`. W `h1` ma się na żywo wyświetlać wynik dodawania dwóch liczb. Pobieraj je z elementów `input` pamiętając o konwersji na typ `Number`.

Jeżeli któraś dana z elementów `input` po konwersji da NaN (użyj `isNaN()`), to wypisz w `h1` "Podaj dwie liczby.".

---

### Zadanie 3 - `js/task03.js`

Stwórz komponent `InteractiveDiv`.

Ma renderować `div`, a w nim `input type="`**`number`**`"` oraz wewnętrzny `div`. Ten wewnętrzny `div` ma mieć następujące style:
- Wysokość: `100px`,
- Szerokość: z elementu `input` `+'px'`,
- Kolor tła: czerwony.

Przy zmianie wartości inputa powinna się zmieniać automatycznie szerokość wewnętrznego elementu `div`. Pamiętaj o konwersji na typ `Number`.
