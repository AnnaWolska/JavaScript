// ### Zadanie 2 - `js/task02.js`
// > To zadanie pozwoli Ci stworzyć grę matematyczną.
// > Do wykonania zadania będzie Ci potrzebne kilka rzeczy:
// > Losowanie dowolnego elementu z tablicy:
// > items[Math.floor(Math.random()*items.length)]
// > Losowanie losowej liczby całkowitej z przedziału:
// > Math.floor(Math.random() * (max - min) + min )
// > Funkcja do losowego układania kolejności w tablicy (shuffle):
// > function shuffle(a) {
// >   for (let i = a.length; i; i--) {
// >     let j = Math.floor(Math.random() * i);
// >     [a[i - 1], a[j]] = [a[j], a[i - 1]];
// >   }
// > }
// > Użycie: przekazujesz tablicę, zostanie ona zmodyfikowana - 
// elementy będą w losowych miejscach.
// Stwórz komponent `MathQuestionGame`.
// Na początku wylosuj jedno z działań: **dodawanie, odejmowanie lub mnożenie**. 
// Wylosuj również **dwie liczby całkowite z przedziału 1-10**. Wykonaj wylosowane 
// działanie matematyczne pomiędzy dwoma wylosowanymi liczbami, przechowaj wynik.
// Wygeneruj 4 przyciski które będą osobnymi komponentami `Button`, w tym 3 z losowymi 
// liczbami **innymi niż poprawny wynik** (możesz użyć np. pętli while by upewnić się, 
// że nie zostanie wysolowany poprawny wynik) oraz 1 przycisk z poprawną odpowiedzią. 
// Przyciski przechowuj w formie tablicy, którą następnie przetasujesz 
// (zob. wyżej funkcję shuffle) i wyrenderujesz w komponencie.
// Pamiętaj o przekazaniu do komponentu `Button` odpowiedniej funkcji 
// dzięki której rozpoznasz co nacisnął użytkownik!
// Gra wyświetlać się ma w takiej strukturze (przykład):
// ```
// <div>
//   <h1>2 * 3 =</h1>
//   <div>
//     <button>3</button>
//     <button>6</button>
//     <button>8</button>
//     <button>7</button>
//   </div>
//   <h3>00:08</h3>
// </div>
// ```
// Gracz ma mieć 10 sekund na udzielenie prawidłowej odpowiedzi. Uruchom timer / interval. 
// **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.**
// Zasady:
// - Po kliknięciu na prawidłowy przycisk element `h1` zamieni napis na "Gratulacje!";
// - Po kliknięciu na nieprawidłowy przycisk element `h1` zamieni napis na "Błędna odpowiedź :(";
// - Jeśli czas minie zanim zostanie kliknięty jakiś przycisk, 
// element `h1` zamieni napis na "Czas minął!". 
// Zabezpiecz też przyciski aby nie można ich było klikać po czasie.
import React, {Component} from "react";
import ReactDOM from "react-dom";

class MathQuestionGame extends Component {   
    
    constructor(props) {
        super(props);
        const items = ["+", "-", "*", "/"]
        this.state = {
            firstNumber: Math.floor(Math.random() * (10 - 1) + 1 ),
            secondNumber: Math.floor(Math.random() * (10 - 1) + 1 ),
            mathOperation: items[Math.floor(Math.random()*items.length)],
                stateAnswers: [],
                firstAnswer: null,
                secondAnswer: null,
                thirthAnswer:  null,
                fourthAnswer: null,
                goodAnswer: null,
                playerChoice: null,
                newDate: new Date(),
                timer: 10000,
                endingSentence: "Powodzenia!",
        };
    }

    componentDidMount(){

        const randomNumber1 = Math.floor(Math.random() * (81 - (-1)) + (-1) )
        const randomNumber2 = Math.floor(Math.random() * (81 - (-1)) + (-1) )
        const randomNumber3 = Math.floor(Math.random() * (81 - (-1)) + (-1) )
        console.log("wylosowane liczby: " + randomNumber1, randomNumber2, randomNumber3)

        function shuffle(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
                }
        };

        const goodAnswer1 = eval(`${this.state.firstNumber} ${this.state.mathOperation} ${this.state.secondNumber}`)
        console.log("dobra odpoweidż działa: " + goodAnswer1)   
        const possibleAnswer = [randomNumber1, randomNumber2, randomNumber3, goodAnswer1];
        shuffle(possibleAnswer);
        console.log("odpowiedzi: " + possibleAnswer)

        this.setState({
            goodAnswer: goodAnswer1,
            firstAnswer: possibleAnswer[0],
            secondAnswer: possibleAnswer[1],
            thirthAnswer: possibleAnswer[2],
            fourthAnswer: possibleAnswer[3],
            
        })
        this.intervalDate = setInterval( () => {
            this.setState({
                newDate : new Date()
            });                                                                                                
        }, 100);
        console.log(this.state.newDate)

        this.intervalTimer = setInterval( () => {
            this.setState({
                timer : this.state.timer > 0 ? this.state.timer - 100 : "Koniec czasu"
            });                                                                                                
        }, 100); 
    };

    handleClick = (e) => {
        console.log("działa handleclick")
        this.setState({
            playerChoice: e.target.value,
            endingSentence: this.state.playerChoice == this.state.goodAnswer ? "Brawo, wygrałeś!" : "Niestety, to zła odpowiedź...",
          });
        console.log("kliknięto: " + e.target.value)
        console.log("odpowiedź: " + this.state.goodAnswer)
        console.log("a teraz wybór gracza ze stanu: " + this.state.playerChoice)
    }

    // componentDidUpdate(){
    //     this.setState({
    //         playerChoice: this.state.playerChoice,
    //         endingSentence: this.state.endingSentence,
    //       });
    //     console.log('component did update')
    // }

    componentWillUnmount(){
        clearInterval(this.intervalDate);
        clearInterval(this.intervalTimer);
        console.log("komponent odmontowywany"); 
    } 

    render () {  
        return (
            <div>
                <h1>{this.state.firstNumber} {this.state.mathOperation} {this.state.secondNumber} = ?   Wybierz dobrą odpowiedź: {this.state.playerChoice}</h1>
                <h1>
                <div>
                    <button onClick = {this.handleClick} value = {this.state.firstAnswer} > {this.state.firstAnswer} </button>
                    <button onClick = {this.handleClick} value = {this.state.secondAnswer} >{this.state.secondAnswer}</button>
                    <button onClick = {this.handleClick} value = {this.state.thirthAnswer} >{this.state.thirthAnswer}</button>
                    <button onClick = {this.handleClick} value = {this.state.fourthAnswer} >{this.state.fourthAnswer}</button>
                </div>
                </h1>
                <h1>{this.state.endingSentence}</h1>
                <h1>{this.state.timer}</h1>
                <h3>{this.state.newDate.toLocaleDateString()}</h3>
                <h3>{this.state.newDate.toLocaleTimeString()}</h3>
            </div>
        )
    };
};

class App extends Component {
    render () {
        return  < MathQuestionGame />
         }
        };

ReactDOM.render(<App />, document.getElementById("app"));

