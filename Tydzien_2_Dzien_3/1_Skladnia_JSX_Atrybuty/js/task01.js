import React from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Przechowaj adres zdjęcia w zmiennej dodając poniższy kod:

//  ```js
// const imageUrl = "https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg";
// ```
// Następnie za pomocą React wyrenderuj w elemencie o id `app` element `img`, 
// którego atrybut `src` ustawisz w JSX na wartość zmiennej `imageUrl`.
// Pamiętaj o zamknięciu tagu `img`.


const imageUrl = "https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg";


ReactDOM.render(
  <h1>
    <img src = {imageUrl} ></img>
  </h1>,
  document.getElementById("app")
);