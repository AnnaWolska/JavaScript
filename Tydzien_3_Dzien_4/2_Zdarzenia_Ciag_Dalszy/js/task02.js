import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, 
// wysokość i szerokość `100px` oraz `position` ustawione na `absolute`.
// Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` 
// na dwie losowe wartości z przedziału 0 - 1000px.

class CrazyDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '100px',
            height: '100px',
            position: 'absolute',
            backgroundColor: 'red',
        };
    }
    
    handleRandom = (e) => {
        this.setState({
            width: '150px',
            height: '150px',
            // position: 'absolute',
            backgroundColor: 'red',
            left: randomNumber(),
            top: randomNumber(),

    });

    function randomNumber() {
        let num = `${Math.floor(Math.random() * 1000)}px`
        console.log(num)
        return num
    }

    };
    
    render () {
        return (
            <div style = {this.state} onMouseEnter = {this.handleRandom} > taki właśnie jest mój div </div>
        )};
}


const App = () => <CrazyDiv />;
ReactDOM.render(<App />, document.getElementById("app")); 




// const [style, setStyle] = React.useState({
//     height: '100px',
//     width: '100px',
//     backgroundColor: 'red',
//     position: 'absolute',   
//     }
// )

// const styleNew = {
//     height: '100px',
//     width: '100px',
//     backgroundColor: 'red',
//     position: 'absolute',
//     top: randomNumber(),
//     left: randomNumber()
// }

// function randomNumber() {
//     let num = `${Math.floor(Math.random() * 1000)}px`
//     console.log(num)
//     return num
// }

// const handleDiv= () => {
//     setStyle(styleNew)
// }
// return <div style={style} onMouseEnter={handleDiv} />
// }

// const App = () => <CrazyDiv />;

// ReactDOM.render(<App />, document.getElementById("app")); 


