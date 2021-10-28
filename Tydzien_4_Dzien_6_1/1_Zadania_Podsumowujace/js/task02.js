import React, { Component } from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js` 
// Stwórz komponent `Shop`. Ma on renderować dwa komponenty: `Products` i `Cart`.
// Ma on również wywołać zapytanie poprzez metodę `fetch` po listę produktów. 
// Znajdują się one w `database/products.json`. Należy uruchomić `json-server` 
// podając ten plik jako bazę danych. Komponent `Shop` ma następnie przekazywać 
// pobraną tablicę produktów dalej do komponentu `Products`.
// Komponent `Products` ma renderować nagłówek `h2` "Produkty" i listę `ul` z danymi 
// produktami wraz z przyciskiem (`<button class="btn btn-primary">`) `Kup!` przy każdym z nich.
// Komponent `Cart` ma wyświetlać nagłówek `h2` "Koszyk", a w liście `ul` tylko te produkty, 
// które zostały wybrane w komponencie `Products`. 
// Nie powinno być możliwości dodania wielokrotnie tego samego produktu.

// class Shop extends Component {
//   state = {
//     products: false,
//     productsInCart: false,
//   };

//   async componentDidMount() {
//     try {
//       const url = `database/products.json/products`;
//       const response = await fetch(url);
//       const data = await response.json();
//       this.setState({
//         products: data
//       });
//       console.log(products)
//       console.log(products.item[0])

//     } catch(err) {
//       console.log(err);
//     }
//   }

//   render () {
//     return (
//       <>
//         <Products></Products>
//         <Cart></Cart>
//       </>
//     )
//   }
// }

// class Products extends Component {
//   render () {
//     const{products, id} = this.state;
//     if (!this.state.products) {
//       return <h1>Szukam czegoś dla Ciebie...</h1>
//     } else {
//       return (
//         <>
//           <h2>Produkty:</h2>
//           <ul>{products.map(product => (
//             <li key={product.id}> 
//               <button onClick = {this.handleBuy}> Kup </button>
//             </li>
//           ))}
//           </ul>
//         </> 
//         )
//       }
//     }
// }

// class Cart extends Component {
//   render () {
//     return (
//       <>
//         <h2>Koszyk:</h2>
//         <ul>

//         </ul>
//       </>
//     )
//     }
// }

// function App() {
//   return <Shop />;
// };


// /**
//  * Nie modyfikuj kodu poniżej!
//  */
// ReactDOM.render(<App/>, document.getElementById("app"));
// export {
//   App,
//   // UserCard
// };



// // json-server --watch nazwa-pliku.json




class FetchExample extends Component {
  state = {
    data: false
  };
 
  async componentDidMount() {
    try {
      const url = 'database/products.json/products';
      const data = await fetch(url);
 
      this.setState({
        data
      });
 
    } catch(err) {}
  }
 
  render() {
    if (!this.state.data)
      return <h1>Ustalam adres IP...</h1>
 
    return <h1> {this.state.data[0]}</h1>
  }
}

ReactDOM.render(<FetchExample/>, document.getElementById("app"));
