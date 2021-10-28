// ### Zadanie 2 - `js/task02.js`

// Stwórz dwie tablicę ```fruits``` i ```vegetables```. Następnie stwórz trzecią tablicę ```mix```, 
// która będzie połączeniem obu poprzednich tablic. Użyj **operator rozproszenia**.


const fruits = ["truskawki", "maliny", "arbuzy", "czereśnie"];
const vegetables = ["marchewki", "papryki", "pomidory"];
const mix = [...fruits, ...vegetables];
console.log(mix);

