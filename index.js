
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



document.addEventListener('click', e => {

    if (e.target === $addBtn) {
        e.preventDefault();

        addTask();
    }
        

})

