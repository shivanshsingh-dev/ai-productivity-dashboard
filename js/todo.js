const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display all saved tasks
function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">❌</button>
        `;

        taskList.appendChild(li);

    });

}

// Add new task
function addTask() {

    const task = taskInput.value.trim();

    if(task === "") return;

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    renderTasks();

}

// Delete task
function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

}

// Show tasks when page loads
renderTasks();