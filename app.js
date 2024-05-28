document.getElementById('add-todo').addEventListener('click', function() {
    const newTodoText = document.getElementById('new-todo').value;
    if (newTodoText.trim() !== "") {
        const todoList = document.getElementById('todo-list');
        const newTodoItem = document.createElement('li');
        newTodoItem.textContent = newTodoText;

        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', function() {
            todoList.removeChild(newTodoItem);
        });
        newTodoItem.appendChild(removeButton);

        todoList.appendChild(newTodoItem);
        document.getElementById('new-todo').value = "";
    }
});