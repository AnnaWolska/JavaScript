import React, {Component} from "react";
import ReactDOM from "react-dom";
import FakeAPI from "./data/fakeAPI";

class App extends Component {
  state = {
    data: false
  };

  async componentDidMount() {
    try {
      const data = await FakeAPI;
      // Teraz w zmiennej data mamy dostęp do konkretnych danych

      console.log(data);

    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return <h1>test</h1>;
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
