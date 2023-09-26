const btnAdicionar = document.querySelector('.btn-adicionar');
const inputTarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');
const numeroTasks = document.querySelector('.taks-number');
let listaDeTarefas = []; // Armazena as tarefas

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function atualizaNumeroDeTarefas() {
    numeroTasks.innerText = `Número de Tasks: ${listaDeTarefas.length}`;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'X';
    botaoApagar.setAttribute('class', 'btn-apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    listaDeTarefas.push(textoInput); // Adiciona a tarefa à lista
    armazenaTarefas();
    atualizaNumeroDeTarefas(); // Atualiza o número de tarefas
}

btnAdicionar.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('btn-apagar')) {
        const tarefaRemovida = el.parentElement.innerText.trim();
        const index = listaDeTarefas.indexOf(tarefaRemovida);
        if (index !== -1) {
            listaDeTarefas.splice(index, 1); // Remove a tarefa da lista
            armazenaTarefas();
            atualizaNumeroDeTarefas(); // Atualiza o número de tarefas
        }
        el.parentElement.remove();
    }
});

function armazenaTarefas() {
    // Armazena as tarefas no localStorage ou em outra fonte de armazenamento, se necessário.
    // Por enquanto, estamos apenas armazenando na variável listaDeTarefas.
    console.log(listaDeTarefas);
}
