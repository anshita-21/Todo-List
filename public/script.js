document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskText = taskInput.value.trim();

        // Add task to the front-end
        const newTaskElement = document.createElement("li");
        newTaskElement.textContent = taskText;
        taskList.appendChild(newTaskElement);

        // Clear the input field
        taskInput.value = "";

        // Save tasks to the back-end
        saveTask(taskText);
    }
}

function loadTasks() {
    // You can fetch tasks from the back-end here (not implemented in this example)
}

function saveTask(taskText) {
    // You can send a request to the back-end to save the task (not implemented in this example)
}
