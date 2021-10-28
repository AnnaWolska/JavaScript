
// ### Zadanie 2 - `js/task02.ja`

// Stwórz funkcję strzałkową `randomize`, która jako parametry przyjmuje:
// * Dowolne dwie liczby (`param1`, `param2`) -  określające przedział między jakim będziemy losować liczbę
// * funkcje anonimową (`callback`, której zadaniem jest wypisanie wylosowanej liczby.
// * niech funkcja `randomize()` sprawdza przed wywołaniem czy `callback` rzeczywiście jest funkcją.

randomize = (param1, param2, callback) => {
    if (typeof callback !== "function") {
        console.log("To nie funkcja");
        return null;
        }
    else{
        param1 = Math.ceil(param1);
        param2 = Math.ceil(param2);
        randomizeResoult = Math.floor(Math.random() * (param2 - param1 + 1)) + min;
        return randomizeResoult;
        console.log(randomizeResoult);
    }
}
 


 

