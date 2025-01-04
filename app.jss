function addTask() {
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value;
    if (taskText) {
        let todoList = document.getElementById('todo-list');
        let listItem = document.createElement('li');
        listItem.textContent = taskText;
        todoList.appendChild(listItem);
        taskInput.value = '';  // Clear the input field after adding the task
    }
}
