import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent `Register`. Komponent ma składać się z formularza `form`, 
// przycisku `Zapisz` i szeregu pól:
// Dane osobowe
// - Imię i Nazwisko `input[text]` (min. 5 znaków)
// - Email `input[email]` (min. 3 znaki i znak `@`)
// - Hasło `input[password]` (min. 4 znaki)
// - Powtórz hasło `input[password]` (min. 4 znaki, takie samo jak pierwsze hasło)
// - Płeć `select`
// Dane do wysyłki
// - Adres `input[text]` (min. 3 znaki)
// - Kod pocztowy `input[text]` (5 znaków (bez myślnika - 
//     wtedy same cyfry) lub 6 znaków z myślnikiem jako trzecim znakiem)
// - Miasto `input[text]` (min. 2 znaki)
// Każde z tych pól należy zwalidować po klknięciu Wyślij zgodnie z regułami, które są podane.
// Jeżeli nie ma błędów, należy wyświetlić podsumowanie wszystkich danych pod lub obok formualrza.
// Jeżeli pojawiły się błędy, należy je wyświetlić użytkownikowi 
// na ekranie (nie w konsoli) i nie renderować podsumowania.

class Register extends Component {
    state = {
        name: '',
        ifName: '',
        email: '',
        ifEmail: '',
        password: '',
        ifPassword: '',
        passwordRepeat: '',
        ifPasswordRepeat: '',
        sex: 'Female',
        address: '',
        ifAddress: '',
        code: '',
        ifCode: '',
        city: '',
        ifCity: '',
    };

    handleInput = e => {

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const {name,ifName,email,ifEmail,password,ifPassword,passwordRepeat,ifPasswordRepeat,address,ifAddress,code,ifCode,city,ifCity} = this.state

            this.setState({ 
                ifName: name.length >= 5,
                ifEmail: email.length >= 3 && email.indexOf('@') > 0,
                ifPassword: password.length >= 4,
                ifPasswordRepeat: passwordRepeat === password && passwordRepeat.length >= 4,
                ifAddress: address.length >= 3,
                ifCode: code.length === 6 && code.indexOf('-') === 2,
                ifCity: city.length >= 2,
            }) 
        }

    render() {
        const {name,ifName,email,ifEmail,password,ifPassword,passwordRepeat,ifPasswordRepeat,address,ifAddress,code,ifCode,city,ifCity} = this.state
        let ifMatch = (ifName && ifPassword &&  ifPasswordRepeat && ifAddress && ifEmail && ifCode && ifCity) ? true : false

        if (ifMatch == false){

            return (<>
                <form>
                    <h1>dane osobowe:</h1>
                    <input type="text" placeholder={'imię i nazwisko (min. 5 znaków)'} name={'name'} onChange={this.handleInput}></input>
                    <input type="email" placeholder={'email'} name={'email'} onChange={this.handleInput}></input>
                    <input type="password" placeholder={'hasło'} name={'password'} onChange={this.handleInput}></input>
                    <input type="password"placeholder={'powtórz hasło'} name={'passwordRepeat'} onChange={this.handleInput}></input>
                    <select placeholder={'płeć'} name={'sex'} onChange={this.handleInput}>
                        <option>kobieta</option>
                        <option>mężczyzna</option>
                        <option>inna</option>
                    </select>
                    <h1>Dane do wysyłki:</h1>
                    <input type="text" placeholder={'adres'} name={'address'} onChange={this.handleInput}></input>
                    <input type="text" placeholder={'kod (z myślnikiem)'} name={'code'} onChange={this.handleInput}></input>
                    <input type="text"placeholder={'miasto'} name={'city'} onChange={this.handleInput}></input>
                    <input type='submit' value='Zapisz' onClick={this.handleSubmit} />
                </form>
                <p>Twoje dane to:</p>
                <ul>
                    <li>{ifName == true ? name : "uzupełnij (min. 5 znaków)" }</li>
                    <li>{ifEmail == true ? email: "uzupełnij (min. 3 znaki i znak `@`)"}</li>
                    <li>{ifPassword == true ? password: "uzupełnij (min. 4 znaki)"}</li>
                    <li>{ifPasswordRepeat == true ?  passwordRepeat: "uzupełnij (takie samo jak hasło)"}</li>
                    <li>{ifAddress == true ? address: "uzupełnij (min. 3 znaki)"}</li>
                    <li>{ifCode == true ? code: "uzupełnij (sześć zanków, trzeci znak to myślnik)"}</li>
                    <li>{ifCity == true ? city: "uzupełnij (min. 2 znaki)"}</li>
                </ul>
            </>)
            } else {
            return (<>
                <p>Twoje dane to:</p>
        
                <ul>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{password}</li>
                    <li>{passwordRepeat}</li>
                    <li>{address}</li>
                    <li>{code}</li>
                    <li>{city}</li>
                </ul>
                <p>dziękujemy za rejestrację</p>
            </>)
        }
        };
};

function App() {
    return <Register />;
};

ReactDOM.render(<App />, document.getElementById("app"));


