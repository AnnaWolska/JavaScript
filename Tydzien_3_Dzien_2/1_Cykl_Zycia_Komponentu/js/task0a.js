import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `LifeCyclesTester`.
// Komponent ma wypisywać w konsoli : "constructor", "komponent zaktualizowany", 
// "komponent został zamontowany", "komponent odmontowywany", "renderowanie", 
// itp., dla odpowiednich typów metod cyklu życia.
// Wyrenderuj swój komponent bezpośrednio korzystając z `ReactDOM.render()`.
// Spójrz do konsoli. Jakie metody cyklu życia zostały uruchomione, a jakie nie? Dlaczego?

class LifeCyclesTester extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        seconds: 0,
        likes: 0,
      };
    console.log("constructor ok");
    console.log("komponent zaktualizowany");
  }

  handleClick = () => {
      this.setState({
        likes: this.state.likes + 1
      });
    }
  
  componentDidMount(){
    this.intervalId = setInterval(() => {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }, 3000);
    console.log("komponent zamontowany");
  }

  componentDidUpdate(){
    console.log('component did update')
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
    console.log("komponent odmontowywany"); 
  } 

  render () {
    console.log("renderowanie");
    return (
      <header>
        <h1>Minęło {this.state.seconds} sekund.   Ilość polubień {this.state.likes}</h1>  
        <button onClick={this.handleClick}>Next</button>
        <h5>{this.props.star}</h5>  
      </header>
    );
  }

}


ReactDOM.render(<LifeCyclesTester  star = "Madonna"/>, document.getElementById("app"));
