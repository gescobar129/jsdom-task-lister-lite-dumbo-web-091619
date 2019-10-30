document.addEventListener("DOMContentLoaded", () => {
    const newTaskForm = document.getElementById("create-task-form")
    newTaskForm.addEventListener("submit", createNewTask)
});

const createNewTask = event => {
    event.preventDefault();

    const newTaskName = document.getElementById("new-task-description")
    const newTask = document.createElement("li")

    newTask.innerText = newTaskName.value;
    appendNewTask(newTask);
    event.target.reset();
};

const appendNewTask = task => {
    document.getElementById("tasks").append(task);
}




