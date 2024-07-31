let tasks = []
if (localStorage.getItem("tasks")) {
    tasks = localStorage.getItem("tasks")
    tasks = JSON.parse(tasks)
}console.log(JSON.parse(localStorage.getItem("task")));

let list = document.querySelector(`#to-do-list-container`);
function createArticle(task=null) {
    if (task == null) {
        task = {
            tache: document.getElementById('tache').value,
            descritpion: document.getElementById('description').value,
        }
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    let article = document.createElement("article");
    article.classList.add("mainArticle")
    let paraOne = document.createElement("p");
    paraOne.innerHTML = task.tache
    article.appendChild(paraOne);
    let paraTwo = document.createElement("p");
    paraTwo.innerHTML = task.descritpion
    article.appendChild(paraTwo);
    let div = document.createElement('div');
    article.appendChild(div);
    if(onclick="createArticle()"===true){
        tache="";
        descritpion=""
    }
    let btnSupprimer = document.createElement('button');
    article.remove();
    let index=tasks.indexOf(task)
        if(index!==-1){
            tasks.splice(index,1)
            localStorage.setItem("tasks",JSON.stringify(tasks))
        }

    let crossImage = document.createElement(`img`)
    crossImage.src = `./assets/imgs/cross.png`
    crossImage.alt = `Supprimer`
    crossImage.width = 30;
    crossImage.height = 30;
    btnSupprimer.appendChild(crossImage)
    btnSupprimer.classList.add("truc");
    btnSupprimer.addEventListener('click', function () {
        article.remove();
    });
    div.appendChild(btnSupprimer);
    list.appendChild(article);
    document.getElementById('description').value = ""
        document.getElementById('tache').value = ""
}
let input=document.getElementById('description')
function displayTasks() {
    console.log(tasks);
    tasks.forEach(el => {
        createArticle(el)
    });
}
displayTasks()