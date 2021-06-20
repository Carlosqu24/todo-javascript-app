
const $input = document.querySelector('.input');
const $addBtn = document.querySelector('.add');
const $template = document.querySelector('#template').content;
const $tasksList = document.querySelector('.tasks-list');
const $fragment = document.createDocumentFragment();

const clearInput = () => $input.value = "";

const addTask = () => {

    if ($input.value == "") {
        alert("NO")
    } else {
        $template.querySelector('.task-title').textContent = $input.value;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);

        // Saber si contiene algo adentro
        if ($tasksList.querySelector('.ad')) $tasksList.innerHTML = "";
        $tasksList.appendChild($fragment);

        clearInput();
    }

    
    
}

const totalTasks = () => {
    let totalTasks = $tasksList.querySelectorAll('.task').length;

    // console.log(`Total de tareas: ${totalTasks}`);
};

function verifyInfoAd() {
    if (!($tasksList.querySelector('.ad')) && !($tasksList.querySelector('.task'))) {
        let $ad = document.createElement('p');
        $ad.classList.add('ad');
        $ad.textContent = "Sin tareas pendientes";

        $tasksList.appendChild($ad)
    }
}

function doneTask(e) {
    e.target.parentElement.parentElement.classList.toggle('done');
}

function deleteTask(e) {
    e.target.parentElement.parentElement.remove();

    verifyInfoAd();
    totalTasks();   
}




document.addEventListener('click', e => {

    if (e.target === $addBtn) {
        e.preventDefault();

        addTask();
        totalTasks();
    }

    if (e.target.matches('#done-btn')) doneTask(e);

    if (e.target.matches('#delete-btn')) deleteTask(e);
});




