import React, {Component} from "react";
import ReactDOM from "react-dom";

// ## Zadania do samodzielnego wykonania
// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent z elementem `div` z kolorem tła ustawionym na zielony, 
// szerokością `500px` i wysokością `200px`.
// Po najechaniu na `div` ma się zmieniać jego tło na niebieskie, a wysokość na 400px.
// Gdy kursor odjedzie, komponent ma wrócić do pierwotnego **stanu**.

class GreenDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '500px',
            height: '200px',
            backgroundColor: 'green',
        };
    }

    handleBlue = (e) => {
        e.preventDefault();
        this.setState({
            width: '400px',
            height: '200px',
            backgroundColor: 'blue',
    });
    };

    handleGreen = (e) => 
        this.setState({
            width: '500px',
            height: '200px',
            backgroundColor: 'green',
    });
    
    render () {
        return (
            <div style = {this.state} onMouseEnter = {this.handleBlue} onMouseLeave = {this.handleGreen} > taki właśnie jest mój div </div>
        )};
}

const App = () => <GreenDiv />;
ReactDOM.render(<App />, document.getElementById("app")); 






// const App = () => {
//     const styleDefault = {
//         width: '500px',
//         height: '200px',
//         backgroundColor: 'green',
//     }

//     const styleIn = {
//         width: '500px',
//         height: '400px',
//         backgroundColor: 'blue',
//     }

//     const [style, setStyle] = React.useState(styleDefault)


//     const handleMouseIn = () => {
//         console.log('Entered')
//         setStyle(styleIn)
//     }

//     return <div style={style} onMouseEnter={handleMouseIn} onMouseOut={() => setStyle(styleDefault)} />

// }

// ReactDOM.render(<App />, document.getElementById("app"));