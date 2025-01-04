// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const task = taskInput.value.trim(); // Get the task input value and trim any extra spaces

    if (task !== "") {
        // Create list item (task)
        const listItem = document.createElement('li');
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        
        // Create task text
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.classList.add('task-text');
        
        // Append checkbox and task text to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        
        // Add the list item to the task list
        taskList.appendChild(listItem);
        
        // Clear the input field after adding the task
        taskInput.value = "";

        // Add an event listener to mark task as complete when checkbox is checked
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'line-through'; // Mark the task as complete by crossing it out
                taskText.textContent += " - Task complete"; // Append "Task complete" message
                
                // Move completed task to the top
                taskList.prepend(listItem); // Move the task to the top
            } else {
                taskText.style.textDecoration = 'none'; // Remove the line-through when unchecked
                taskText.textContent = task; // Reset task text
                
                // Move the task back to the bottom
                taskList.appendChild(listItem); // Move it back to the bottom
            }
        });
    }
}

// Add event listener to the button
addButton.addEventListener('click', addTask);
