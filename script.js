// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const task = taskInput.value.trim(); // Get the task input value and trim any extra spaces

    if (task !== "") {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = task; // Set the text of the list item to the task

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
}

// Add event listener to the button
addButton.addEventListener('click', addTask);
