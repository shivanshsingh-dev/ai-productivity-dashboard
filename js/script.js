

// Calendar

const today = new Date();

document.getElementById("date").innerHTML =
today.toDateString();

// Notes

const notes = document.getElementById("notes");

notes.value = localStorage.getItem("notes") || "";

notes.addEventListener("input", () => {

    localStorage.setItem("notes", notes.value);

});
// Sidebar Navigation

document.getElementById("nav-dashboard").onclick = () => {
    document.getElementById("dashboard").scrollIntoView({
        behavior: "smooth"
    });
};

document.getElementById("nav-tasks").onclick = () => {
    document.getElementById("tasks").scrollIntoView({
        behavior: "smooth"
    });
};

document.getElementById("nav-weather").onclick = () => {
    document.getElementById("weather").scrollIntoView({
        behavior: "smooth"
    });
};

document.getElementById("nav-calendar").onclick = () => {
    document.getElementById("calendar").scrollIntoView({
        behavior: "smooth"
    });
};

document.getElementById("nav-notes").onclick = () => {
    document.getElementById("notes").scrollIntoView({
        behavior: "smooth"
    });
};

document.getElementById("nav-settings").onclick = () => {
    alert("Settings panel coming soon 🚀");
};
// Dashboard Statistics

function updateDashboardStats(tasks) {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(task => task.completed).length;

    const pendingTasks = totalTasks - completedTasks;

    const productivity =
        totalTasks === 0
        ? 0
        : Math.round((completedTasks / totalTasks) * 100);

    document.getElementById("todayTasks").textContent = pendingTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
    document.getElementById("productivity").textContent = productivity + "%";
}