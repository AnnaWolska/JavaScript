import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent `MobileMenu`.
// Komponent ma mieć następującą strukturę 
// (stwórz dokładnie taką strukturę w React pamiętając o klasach CSS):
// ```html
// <section class="mobile">
//   <header class="mobile-menu">
//     <a href="#" class="open-menu"></a>
//     <nav>
//       <ul>
//         <li><a href="#">O nas</a></li>
//         <li><a href="#">Zespół</a></li>
//         <li><a href="#">Produkty</a></li>
//         <li><a href="#">Kontakt</a></li>
//       </ul>
//       <a href="#" class="close-menu">Zamknij menu</a>
//     </nav>
//   </header>
// </section>
// ```
// Na początku powinna być widoczna tylko klasa `.open-menu`. 
// Po kliknięciu na ikonę menu (`.open-menu`), powinien się pojawić element `nav`.
// Po kliknięciu na "Schowaj menu" (`.close-menu`) wracamy do stanu początkowego - `nav` znika.
// Możesz skorzystać z klasy `.hide`, która jest przygotowana w pliku `CSS`.


class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    handleMenu = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen,
        });
        };
        
    render () {
        const { isOpen } = this.state; 
        return (
            <section className = "mobile">
                <header className = "mobile-menu">
                    <a href="#" className="open-menu" onClick={this.handleMenu} ></a>
                    <nav className={isOpen ? "" : "hide"}>
                         <ul>
                             <li><a href="#">O nas</a></li>
                            <li><a href="#">Zespół</a></li>
                            <li><a href="#">Produkty</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                        <a href="#" className="close-menu" onClick={this.handleMenu}>Zamknij menu</a>
                     </nav> 
                </header> 
            </section>
        )
    }
}

const App = () => <MobileMenu />;

ReactDOM.render(<App />, document.getElementById("app")); 


