const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save Tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update Dashboard Cards
function updateDashboard() {

    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    const productivity =
        total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.getElementById("todayTasks").textContent = pending;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("productivity").textContent = productivity + "%";
}

// Render Tasks
function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
<div style="display:flex;justify-content:space-between;align-items:flex-start;width:100%;gap:15px;">

    <div>

        <label style="display:flex;align-items:center;gap:10px;">

            <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${index})">

            <span style="
            ${task.completed ? "text-decoration:line-through;opacity:.6;" : ""}
            ">
                ${task.text}
            </span>

        </label>

        <small style="opacity:.6;display:block;margin-top:6px;">
            🕒 ${task.createdAt}
        </small>

        <small style="display:block;margin-top:4px;">
            ${task.completed ? "✅ Completed" : "🟢 Pending"}
        </small>

    </div>
    <button onclick="editTask(${index})">
    ✏️
</button>

<button onclick="deleteTask(${index})">
    ❌
</button>

    <button onclick="deleteTask(${index})">
        ❌
    </button>

</div>
`;

        taskList.appendChild(li);

    });

    updateDashboard();
    updateDashboardStats(tasks);
}

// Add Task
function addTask() {

    const text = taskInput.value.trim();

    if(text === "") return;

    tasks.push({
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString()
});

    taskInput.value = "";

    saveTasks();
    renderTasks();
}

// Toggle Complete
function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

// Delete Task
function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}
function editTask(index){

    const updatedTask = prompt(
        "Edit your task:",
        tasks[index].text
    );

    if(updatedTask === null) return;

    const newText = updatedTask.trim();

    if(newText === "") return;

    tasks[index].text = newText;

    saveTasks();

    renderTasks();

}

// Enter Key Support
taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addTask();
    }

});

// Load Tasks
renderTasks();