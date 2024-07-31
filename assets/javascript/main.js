
let tasks =  []
if (localStorage.getItem("tasks")) {
    tasks = localStorage.getItem("tasks")
    tasks = JSON.parse(tasks)
}
console.log(JSON.parse(localStorage.getItem("task")));
let todo = document.querySelector(`#ToDoListContainer`);
function createArticle(task= null,) {
    if (task == null) {
        task = {
            title: document.getElementById('title').value,
            descritpion: document.getElementById('description').value,
        }
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    let article = document.createElement("article");
    let paraOne = document.createElement("p");
    paraOne.innerHTML = task.title
    article.appendChild(paraOne);
    let paraTwo = document.createElement("p");
    paraTwo.innerHTML = task.descritpion
    article.appendChild(paraTwo);
    let div = document.createElement('div');
    article.appendChild(div);
    if(onclick="createArticle()"===true){
        title="";
        descritpion=""
    }
    let btnSupprimer = document.createElement('button');
    btnSupprimer.style.backgroundColor = "teal";
    btnSupprimer.innerHTML = "Supprimer";
    btnSupprimer.classList.add("truc");
    btnSupprimer.addEventListener('click', function () {
        article.remove();
        let index=tasks.indexOf(task)
        if(index!==-1){
            tasks.splice(index,1)
            localStorage.setItem("tasks",JSON.stringify(tasks))
        }
    });
    div.appendChild(btnSupprimer);
    todo.appendChild(article);
    document.getElementById('description').value = ""
        document.getElementById('title').value = ""
}
let input=document.getElementById('description')
function displayTasks() {
    console.log(tasks);
    tasks.forEach(el => {
        createArticle(el)
    });
}
displayTasks()