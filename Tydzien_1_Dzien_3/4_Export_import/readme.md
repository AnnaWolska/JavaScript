<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# Export i import 

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Tydzien_1_Dzien_3/4_Export_import`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `app.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 1 - `js/task01.js`

W folderze ```js``` znajdziesz 3 pliki:
* ```polygon.js``` - zawierający klasę opisującą figurę geometryczną (wielokąt)
* ```square.js``` - zawierający klasę dziedziczącą po klasie polygon
* ```app.js``` - w którym towrzony jest obiekt na bazie klasy Square.

Twoim zadaniem jest połączenie plików w taki sposób, aby `Square` widział `Polygon`, a plik app.js widział klasę `Square`.

