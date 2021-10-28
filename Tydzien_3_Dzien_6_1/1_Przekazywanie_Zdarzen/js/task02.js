import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent `Shop` oraz komponent `ShopItem`.
// `ShopItem` zawiera `div`, a w nim `h1`, którego zawartość jest pobierana z props `title`.
// W `div` znajduje się też przycisk z napisem "Kup". Po jego kliknięciu przesyła się 
// odpowiednią informację do callbacku, który pobiera ją z props pod nazwą `onBuy`. 
// Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i czy jest funkcją. 
// Wywołanie callbacku ma się odbyć za argumentem pobieranym z tytułu przekazanego 
// w props (`title`). Shop ma mieć następującą strukturę:
// ```html
// <div>
//   <ShopItem title="skarpetki" />
//   <ShopItem title="koszula" />
//   <ShopItem title="pończochy" />
//   <ul>
//     {list}
//   </ul>           
// </div>        
// ```
// Zamiast `list` ma się pojawić lista elementów `li` z wymienionymi elementami,
// na których użytkownik kliknął przycisk "Kup".


class Shop extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            list: [
                "skarpetki",
                "koszula",
                "pończochy",
            ],
            selectedList: []
        }
    }
       
    handleBuy = (item) => { 
        this.setState({
                //  selectedList: this.state.selectedList.append(item)
                selectedList: [...this.state.selectedList, item],
            }) 
        
        console.log("kupiełś")

    }

    render () {      
        return (
            <div>
                {this.state.list.map((item, i) => (
                 <ShopItem key = {i} title={item} onBuy = {this.handleBuy}/>
                ))}
                <h1>Twój koszyk:</h1>
                <ul>                
                    {this.state.selectedList.map((item, i) => (
                    <li key = {i}  >{item} </li>
                    ))}
                </ul>           
            </div>   
        )}
    };

class ShopItem extends Component {  
    handleClick = () => {
        if (typeof this.props.onBuy === "function")
        this.props.onBuy(this.props.title)  
    }
    render () {
        return (
            <div> 
                 <h1> {this.props.title}</h1>
                 <button onClick = {this.handleClick} >kup mnie:)</button> 
            </div>
        ) }  
        };

class App extends Component {
    render () {
        return (
            <div>
                < Shop />
            </div>
        ) }
        };

ReactDOM.render(<App />, document.getElementById("app"));

