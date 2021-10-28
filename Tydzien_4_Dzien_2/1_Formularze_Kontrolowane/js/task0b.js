import React, {Component} from "react";
import ReactDOM from "react-dom";
import FakeAPI from "./data/fakeAPI";

// ### Zadanie 0b - `js/task0b.js`
// Zaimportuj do pliku `js/task0b.js` plik `data/fakeAPI.js`:
// ```js
// import FakeAPI from "./data/fakeAPI";
// ```
// W obiekcie tym znajduje się metoda `login`. Gdy przesyłamy do niej obiekt o następującej strukturze:
// ```js
// {
//   username: jakiś login
//   password: jakieś hasło
// }
// ```
// zwraca informacje o tym czy taki użytkownik istnieje wraz z jego danymi. 
// W przypadku błędych danych logowania, zwraca informację o błędzie. 
// Poprawny login i hasło to: `coderslab`, `qwerty`.
// Sposób skorzystania z metody `login`:
// ```js
// const user = {
//   username: tutaj_podaj_login,
//   password: tutaj_podaj_haslo
// }

// try {
//   const result = await FakeAPI.login(user)
//   // pod zmienną result mamy dostęp do informacji o zalogowanym użytkowniku
// } catch(err) {
//   // pod zmienną err mamy dostęp do informacji o błędzie
// }
// ```
// Celem zadania jest stworzenie komponentu `Form`, który będzie składał się z formularza. 
// Ma on zawierać dwa pola: **Login** i **Hasło**, a także przycisk **Zaloguj!**.
// W trakcie wysyłania formualrza należy zwalidować pola. Oto warunki:
// - Login musi być dłuższy niż 2 znaki
// - Hasło musi być dłuższe niż 4 znaki
// Jeżeli któryś z warunków nie jest spełniony, należy wyświetlić użytkownikowi na ekranie informaję o tym, 
// gdzie popełnił błąd. Z kolei gdy walidacja została przeprowadzona prawdiłowo, 
// uruchamiamy metodę `login` z obiektu `FakeAPI` i czekamy na odpowiedź czy podane dane logowania są prawdiłowe.
// Jeżeli tak, to należy przestać renderować formualarz i wyświetlić powitanie użytkownika 
// (skorzystaj z danych, które dostajesz w metodzie `login`).
// Jeżeli nie uda się zalogować ze względu na źle podany login i hasło, 
// to wyświetlamy użytkownikowi taką informację na ekranie.

class Form extends Component {
    state = {
      login: "",
      password: "",
      message: "",
      isLoggedIn: false,
    };
  
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value,   //tu zawsze name a potem name login i password
      });
    };
  
    handleSubmit = async (e) => {
      e.preventDefault();
      const {login,password} = this.state;    //destrukturyzacja?
      let message;
      if(login.length <= 2){
          message += " za krótki login"
        }
      if(password.length <= 4){
        message += "  hasło jest za krótkie"
      }
      console.log(`login: ${this.state.login}`);
      console.log(`Hasło: ${this.state.password}`); 
      this.setState({ message })
      const user = {
        username: login,
        password: password,
      };

      try {
        const result = await FakeAPI.login(user);
        this.setState({
          isLoggedIn: true,
        });
      } catch (err) {
        console.log(err);
      }


      }
    
    render() {
      const {login, password, message, isLoggedIn} = this.state;
  
      if(isLoggedIn){
        return  <p>Zalogowano</p> 
      }else{
        return(
          <>
          {message != "" && <p>{message}</p>}
         <form onSubmit={this.handleSubmit}>
          <input type="text"
                 name="login"                                    //tu name to login
                 value={login}
                 onChange={this.handleChange}/>
  
  
          <input type="password"
                 name="password"
                 value={password}
                 onChange={this.handleChange}/>
  
          <input type="submit" value="Wyślij"/>
        </form>
        </>
        )
      }
    }
  }
  
  
  
  function App() {
    return <Form/>;
  }
  
  ReactDOM.render(<App/>, document.getElementById("app"));


