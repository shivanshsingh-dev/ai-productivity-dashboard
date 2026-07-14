const panel = document.getElementById("settingsPanel");

document.getElementById("nav-settings").onclick = () => {
    panel.classList.add("show");
};

document.getElementById("closeSettings").onclick = () => {
    panel.classList.remove("show");
};

// Save City
document.getElementById("saveCity").onclick = () => {

    dashboard.city =
    document.getElementById("cityInput").value.trim();

    saveDashboard();

    alert("City Saved");

};

// Focus Duration
document.getElementById("focusDuration").addEventListener("change",(e)=>{

    dashboard.focusDuration =
    Number(e.target.value);

    saveDashboard();

});

// Clear Tasks
document.getElementById("clearTasks").onclick=()=>{

    if(confirm("Delete all tasks?")){

        localStorage.removeItem("tasks");

        location.reload();

    }

};

// Clear Completed
document.getElementById("clearCompleted").onclick=()=>{

    tasks = tasks.filter(task=>!task.completed);

    saveTasks();

    renderTasks();

};

// Clear Notes
document.getElementById("clearNotes").onclick=()=>{

    if(confirm("Clear notes?")){

        notes.value="";

        localStorage.removeItem("notes");

    }

};