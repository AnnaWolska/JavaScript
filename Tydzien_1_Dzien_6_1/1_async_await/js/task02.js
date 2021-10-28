
// ### Zadanie 2 - `js/task02.js`

// Skorzystaj z API:

// ```
// https://randomuser.me/api/
// ```

// i na podstawie jego wyniku, w sekcji `#task02` i elemencie `.content` wpisz kilka informacji o danej osobie:

// - Imię i Nazwisko,
// - Zdjęcie
// - Email


const result = async () => {
    const personData = await fetch("https://randomuser.me/api/");
    console.log(personData);
  }

  