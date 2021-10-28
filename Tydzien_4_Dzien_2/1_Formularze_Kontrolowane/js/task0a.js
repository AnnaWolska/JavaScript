import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `Hello`.
// Ma wyświetlać element `form`, a w nim `input type="text"` oraz `h1`. W `h1` ma się wyświetlać "Hello, `{name}`".
//  `{name}` ma być na żywo tym, co wpisał użytkownik, a **domyślnie ma to być "Ty"**.
// Pamiętaj żeby `input` był komponentem **kontrolowanym**!


class Hello extends Component {
    state = {
      name: "Ty"
    };
  
    handleNameChange = e => {
      this.setState({
        name: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.name);
    };
  
    render() {
      return (
        <>
        <form onSubmit={this.handleSubmit}>
          <label>Imię i nazwisko:
            <input type="text"
                   name="name"
                   value={this.state.name}
                   onChange={this.handleNameChange}/>
          </label>
          <input type="submit" value="Wyślij"/>
        </form>
        <h1>"Hello, `{this.state.name}`"</h1>
        </>
      );
    }
  }
  
  function App() {
    return <Hello/>;
  }
  
  ReactDOM.render(<App/>, document.getElementById("app"));




// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));



// <form>
//   <label>Imię i nazwisko:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Wyślij" />
// </form>

// class FormExample extends Component {
//     //Pierwsza wartość inputa ustawiona na ""
//     state = {
//      name: ""
//     }
   
//     render() {
//       return (
//         <form>
//           <label>Imię i nazwisko:
//             <input type="text" name="name" value={this.state.name} />
//           </label>
//           <input type="submit" value="Wyślij" />
//         </form>
//       );
//     }
//   }


//   class FormExample extends Component {
//     //Pierwsza wartość inputa ustawiona na ""
//     state = {
//      name: ""
//     }
   
//     render() {
//       return (
//         <form>
//           <label>Imię i nazwisko:
//             <input type="text" name="name" value={this.state.name} />
//           </label>
//           <input type="submit" value="Wyślij" />
//         </form>
//       );
//     }
//   }


//   handleNameChange = e => {
//     this.setState({name: e.target.value});
//   };
//   //...
//   <input type="text"
//     value={this.state.name}
//     onChange={this.handleNameChange}
//   />


//   handleSubmit = e => {
//     e.preventDefault();
//     console.log('Your name is ' + this.state.name);
//   };
//   //...
//   <form onSubmit={this.handleSubmit}>

// handleChange = e => {
//   this.setState({
//     [e.tagret.name]: e.target.value
//   });
// }


// handleNameChange = e => {
//   const name = e.target.value.replace(/\d/g, '');
//   this.setState({
//     name
//   });
// };


// <select
//   value={this.state.title}
//   onChange={this.handleTitleChange}>
//   <option value="ms">Ms</option>
//   <option value="mrs">Mrs</option>
//   <option value="mr">Mr</option>
// </select>