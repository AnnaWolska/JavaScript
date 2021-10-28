import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, 
// szerokością i wysokością 100px. W elemencie `div` umieść przycisk `button` z napisem "On".
// Kliknięcie na przycisk zmienia stan żarówki: jeżeli tło `div` było białe, 
// to zmienia je na żółte, a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe,
// a napis na "On".

class Bulb extends Component {
    state = {
        isOn: true,
    }
    handleClick = () => {
        this.setState({
            isOn: !this.state.isOn
        })
    }
    render () {
        const bulbStyle = {
            backgroundColor: this.state.isOn ? 'yellow' : 'white',
            width: '100px',
            height: '100px'
        }
        return (
            <div style = {bulbStyle}> 
                <button onClick={this.handleClick}> {this.state.isOn ? 'On' : "Off"}  </button>
            </div>
        )
    }
}

const App = () => 
<>
<Bulb />

<Bulb />    
<Bulb />  

</>
ReactDOM.render(<App />, document.getElementById("app"));