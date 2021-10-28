const task0a = document.querySelector("#task0a");
const $title = task0a.querySelector("#title");
const $completed = task0a.querySelector("#completed");
const $author = task0a.querySelector("#author");

(async () => {
  const api = "https://jsonplaceholder.typicode.com/";

  try {
    let todo = await fetch(`${api}todos/1`);
    todo = await todo.json();

    let user = await fetch(`${api}users/${todo.userId}`);
    user = await user.json();


    $title.innerHTML = todo.title;
    $completed.innerHTML = todo.completed ? "Zrobione" : "Nie zrobione";
    $completed.classList.add(todo.completed ? "badge-success" : "badge-danger");
    $author.innerHTML = user.name;
  } catch (e) {
  }

})();
