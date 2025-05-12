"use strict";
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let btnElement = document.querySelector('#app button');
let listaSalva = localStorage.getItem("@listagem_tarefas");
// let tarefas: string[] = listaSalva!= null && JSON.parse(listaSalva) || [];
let tarefas = listaSalva != null ? JSON.parse(listaSalva) : [];
function listarTarefas() {
    listElement.innerHTML = "";
    tarefas.forEach((item, index) => {
        let ToDoElement = document.createElement('li');
        let tarefatxt = document.createTextNode(item.texto);
        // marcar como concluida
        let checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.checked = item.concluida; //estado do checkbox baseado em "concluida"
        checkboxElement.addEventListener('change', () => {
            item.concluida = checkboxElement.checked; //atualiza o valor de "concluida" com o estado da checkbox
            salvarDados();
            listarTarefas();
        });
        //editar a tarefa ao clicar no texto
        let textElement = document.createElement('span');
        textElement.textContent = item.texto;
        textElement.addEventListener('click', () => editarTarefa(index));
        //excluindo a tarefa
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `deletarTarefa(${index})`);
        let linkText = document.createTextNode("excluir");
        linkElement.appendChild(linkText);
        //adicionando os elementos na lista
        ToDoElement.appendChild(checkboxElement);
        ToDoElement.appendChild(textElement);
        ToDoElement.appendChild(linkElement);
        if (item.concluida)
            ToDoElement.classList.add('concluida'); // Marca como concluída
        listElement.appendChild(ToDoElement);
    });
}
listarTarefas();
function addtarefa() {
    if (inputElement.value === "") {
        alert('Digite uma tarefa');
        return;
    }
    let novaTarefa = { texto: inputElement.value, concluida: false };
    tarefas.push(novaTarefa);
    inputElement.value = "";
    listarTarefas();
    salvarDados();
}
function deletarTarefa(index) {
    tarefas.splice(index, 1);
    listarTarefas();
    salvarDados();
}
function editarTarefa(index) {
    let novaTarefaTexto = prompt('Edite sua tarefa:', tarefas[index].texto);
    if (novaTarefaTexto !== null) {
        tarefas[index].texto = novaTarefaTexto;
        listarTarefas();
        salvarDados();
    }
}
btnElement.onclick = addtarefa;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
