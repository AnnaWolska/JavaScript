class Duck {
    constructor() {
      this.type = "zwykła kaczka";
    }
    quack() {
      console.log("kwa kwa");
    }
    swim() {
      console.log("płynę....");
    }
    print() {
      console.log(`Wygląda jak ${this.type}`);
    }
  }
  const duck = new Duck();
  console.log(duck);
  duck.quack();
  duck.swim();
  duck.print();


// ### Zadanie 1 - `js/app.js`

// Na bazie klasy `Duck` stwórz kolejną o nazwie `WildDuck`.
// Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody `print()` typ kaczki zmienił się na "dzika".
// Stwórz obiekt `wildDuck`.
// Wywołaj dla niego wszystkie metody.

class WildDuck extends Duck{
    constructor(){
       super();
      this.type = "dzika kaczka";
    }

}

const wildDuck = new WildDuck();
console.log(wildDuck);
wildDuck.quack();
wildDuck.swim();
wildDuck.print();


// ### Zadanie 2 - `js/app.js`

// Z klasy Duck mogą dziedziczyć wszytkie kaczki.
// Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody `fly()`.
// Metoda ma wypisywać w konsoli tekst `Kaczka ${type} leci`.


