let addMessage = document.querySelector('.myInput'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo'),
    deleteButton = document.querySelector('.delete')

let todoList = [];

addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
    };

    todoList.push(newTodo);
    displayMessages();
});

function deleteFromList(index) {
    todoList.splice(index, 1);
    displayMessages()
}

function FromList(i) {
    document.getElementsByClassName("asd")[i].style.textDecoration = "line-through";
}

function displayMessages() {
    let displayMessage = '';
    todoList.forEach((item, i) => {
        displayMessage += `
        <li>
            <input type='checkbox'  id='item_${i}' onclick="FromList(${i})">
            <label for='item_${i}' class='asd' >${item.todo}</label>
            <button id='item_${i}' onclick="deleteFromList(${i})"></button>
        </li>
        `;
    });

    todo.innerHTML = displayMessage;
};

deleteButton.addEventListener('click', () => {
    let newTodo = {
        todo: deleteButton.value,
        checked: false,
        important: false,
    };

    todoList.splice(newTodo);
    displayDeleted();
})

function displayDeleted() {
    let displayDelete = '';
    if (todoList.length > 0) {
        return displayDelete;
    }
    todo.innerHTML = displayDelete;
}
