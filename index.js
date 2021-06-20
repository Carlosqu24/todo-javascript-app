
const $input = document.querySelector('.input');
const $addBtn = document.querySelector('.add');
const $template = document.querySelector('#template').content;
const $tasksList = document.querySelector('.tasks-list');
const $fragment = document.createDocumentFragment();


const addTask = () => {
    let taskName = $input.value;

    $template.querySelector('.task-title').textContent = taskName;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

    // Saber si contiene algo adentro
    if ($tasksList.querySelector('.ad')) {
        $tasksList.innerHTML = "";
        
    }
    $tasksList.appendChild($fragment);
}

const totalTasks = () => {
    let totalTasks = $tasksList.children.length;

    console.log(`Total de tareas: ${totalTasks}`)
}




document.addEventListener('click', e => {

    if (e.target === $addBtn) {
        e.preventDefault();

        addTask();
        totalTasks();
    }

    if (e.target.matches('#done-btn')) {
        console.log(e.target.parentElement.parentElement.classList)

        e.target.parentElement.parentElement.classList.add('done');
    }

    if (e.target.matches('#delete-btn')) {
        e.target.parentElement.parentElement.remove();

        totalTasks();   
    }

});




