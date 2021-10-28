import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 01 - `js/task01.js`
// Modyfikacja zadania z zegarem - kompozycja: **Przekopiuj wykonane zadanie z wykładowcą 
// do pliku `js/task01.js` i wykonuj je w tamtym miejscu.**
// Zmodyfikuj komponenty `ClockTime` i `ClockDate` z zadania z wykładowcą.
// Zwiększ podział tych komponentów na następujące:
// - `ClockTimeHour` - wyświetla godzinę za pomocą `Date.getHours()`
// - `ClockTimeMinute` - wyświetla minuty za pomocą `Date.getMinutes()`
// - `ClockTimeSecond` - wyświetla sekundy za pomocą `Date.getSeconds()`
// - `ClockDateYear` - wyświetla rok za pomocą `Date.getFullYear()`
// - `ClockDateMonth` - wyświetla miesiąc za pomocą `Date.getMonth()` 
// (uwaga, ta metoda zwraca 0 jako styczeń, 1 jako luty itd. Dodaj 1 aby wyświetlić prawidłowo)
// - `ClockDateDay` - wyświetla dzień za pomocą `Date.getDate()`
// Zmodyfikuj `ClockTime` i `ClockDate` tak aby korzystały z nowych subkomponentów.

class  ClockTimeHour extends Component {
    render () {
        return <h1>{this.props.date.getHours()}</h1>
    }}

class ClockTimeMinute  extends Component {
    render () {
        return <h1>{this.props.date.getMinutes()}</h1>
    }}

class ClockTimeSecond extends Component {
    render () {
        return <h1>{this.props.date.getSeconds()}</h1>
    }}

class ClockDateYear extends Component {
    render () {
        return <h1>{this.props.date.getFullYear()}</h1>
    }}

class ClockDateMonth extends Component {
    render () {
        return <h1>{this.props.date.getMonth() + 1}</h1>
    }}

class ClockDateDay extends Component {
    render () {
        return <h1>{this.props.date.getDate()}</h1>
        }}

class ClockDate extends Component {
    render () {
        return (
            <>
                <ClockDateYear date = {this.props.anotherDate} />
                <ClockDateMonth date = {this.props.anotherDate} />
                <ClockDateDay date = {this.props.anotherDate} />
            </>
    )}}

class ClockTime extends Component {
    render () {
        
        return (
            <>
                <ClockTimeHour date = {this.props.anotherDate} />
                <ClockTimeMinute date = {this.props.anotherDate} />
                <ClockTimeSecond date = {this.props.anotherDate}/>
            </>
    )}}

class ClockToShow extends Component {
constructor(props) {
    super(props);
    this.state = {
        newDate: new Date(),
    }}

componentDidMount(){
    this.intervalDate = setInterval( () => {
            this.setState({
                newDate : new Date()
            });                                                                                                
  }, 1000);
}

  componentWillUnmount(){
    clearInterval(this.intervalDate);
  } 
  render () {
    return (
        <>
        <ClockDate anotherDate = {this.state.newDate}/>
        <ClockTime anotherDate = {this.state.newDate} />
        </>
    )}}

class App extends Component {
render () {
return (
    <ClockToShow />
)}}

ReactDOM.render(<App />, document.getElementById("app"));



