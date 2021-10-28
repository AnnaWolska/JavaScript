import React, {Component} from "react";
import ReactDOM from "react-dom";

// ## Zadanie dodatkowe
// ### Zadanie 3 - `js/task03.js`
// To zadanie pozwoli Ci stworzyć własną listę rzeczy do zrobienia.
// Stwórz komponent `ToDoList`. Przechowuje on w swoim state listę 
// rzeczy do zrobienia jako tablicę obiektów w takiej formie:
// ```js
// {
//   id: 1,
//   name: "Rzecz do zrobienia",
//   done: false
// }
// ```
// Oto przykładowa struktura komponentu (przykład, HTML):
// ```HTML
// <div class="toDoList">
//   <form class="header">
//     <h2>Twoja lista zadań</h2>
//     <input type="text" placeholder="np. Zrobić zakupy" />
//     <button class="btn-add">Dodaj</button>
//   </form>
//   <ul>
//     <li>Kupić mleko</li>
//     <li class="done">Zrobić prezentację</li>
//   </ul>
// </div>
// ```
// Po wpisaniu do elementu `input` dowolnego tekstu i kliknięciu na przycisk "Dodaj", 
// powinna się zaktualizować wewnętrzna tablica z rzeczami do zrobienia. 
// Wstaw wtedy nowy obiekt na jej końcu, ustawiając `done` na `false`. 
// W praktyce wymaga to pobrania tablicy ze state, **stworzenia jej kopii**, 
// dodania obiektu i zaktualizowania state z całą nową tablicą. 
// Po dodaniu wyczyść `input` (po prostu ręcznie ustawiając stan powiązany z `input` na pusty string).
// Po kliknięciu na dowolny element `li` z listy, należy przeszukać tablicę 
// i znaleźć tam element odpowiadający konkretnemu **id**, 
// a następnie zmienić mu `done` na odwrotny. 
// Jeżeli element był oznaczony jako zakończony, to ma nie być zakończony, 
// a jeżeli był niezakończony, to ma być zakończony.
// Podczas renderowania nadawaj klasę CSS `done` elementom `li`, 
// które są oznaczone jako zakończone. Pamiętaj o odpowiednich kluczach dla elementów listy.

class ToDoList extends Component {  
    state = {
        tasks: [
            {id: 1, title: "Zrobić zakupy"},
            {id: 2, title: "Obejrzeć nowy sezon"},
            {id: 3, title: "Zrobić zadania domowe"}
        ],
        newTask: {},
        };

    handleTaskDone = id => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id;
        }); 
        this.setState({
            tasks
          });
        };

    handleInput = e => {
        let newT = {
            id:id,
            title:title
            }
        this.setState({
            [event.target.name]: event.target.value,
            // [event.target.id]: event.target.id
            newTask: newT
        });
    };

   
    handleSubmit = (event) => {
        event.preventDefault()
        const {task, tasks, newTask, title, id} = this.state
        
        if (typeof this.props.onDone === "function") {

            this.setState((state,callback) => ({ 
                // [event.target.name]: event.target.value,
                // newTask: newT,
                // task: task,
                // tasks: [...tasks,newTask],
                tasks: [...tasks,newT]
            }, () => {
                console.log(tasks);

            } ));   
    };
};

    render() {
        const {tasks, id} = this.state;
        return(
            <>
                <div className="toDoList">
                <form className="header">
                    <h2>Twoja lista zadań  zadanie nr - {id}:</h2>
                    <input type="text" placeholder="np. Zrobić zakupy" name="title" id="id" onChange={this.handleInput}/>
                    <button className="btn-add" onClick={this.handleSubmit} >Dodaj</button>
                </form>
                <ul>
                    {tasks.map(task => (
                    <ToDoItem
                    key={task.id}
                    task={task}
                    onDone={this.handleTaskDone}/>
                    ))}
                </ul>
                </div>
            </>
        )
    };
};

class ToDoItem extends Component {
    handleDoneClick = () => {
      if (typeof this.props.onDone === "function") {
        this.props.onDone(this.props.task.id);
      }
    };

    render() {
        return (
          <li>
            <h2>{this.props.task.title} - zadanie nr {this.props.task.id} </h2>
            <button onClick={this.handleDoneClick}>Zakończone </button>
          </li>
        );
      }
    }

function App() {
    return <ToDoList />;
};

ReactDOM.render(<App />, document.getElementById("app"));

