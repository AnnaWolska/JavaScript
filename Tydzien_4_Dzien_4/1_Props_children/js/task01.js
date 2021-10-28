import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01js`
// Stwórz komponent `ShowMore`. Działa on tak, że wyświetla link `a` z napisem "Pokaż więcej".
// Po kliknięciu na element `a`, znika on (przestań go w ogóle renderować), 
// a zamiast niego pojawia się treść. Treścią są dzieci tego komponentu.
// Wyrenderuj i przetestuj swój komponent używając takiej konstrukcji:
// ```js
// <ShowMore>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
// </ShowMore>
// ```

class ShowMore extends Component {
    state = {
        isClicked: false
    };

    handleClick = () => {
        event.preventDefault()
        this.setState({
            isClicked: true
        }) 
        };
      

    render () {
        return (
            <>
            {!this.state.isClicked && <a href= '' onClick={this.handleClick}> Pokaż więcej </a>}
            {this.state.isClicked && this.props.children }
            </>
        )
    };
};

class Article extends Component {
    render () {
        return (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
        )
    }
};


function App() {
    return (
        <ShowMore>
            <Article/>
        </ShowMore>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));

