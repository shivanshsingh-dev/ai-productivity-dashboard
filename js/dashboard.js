const defaultDashboard = {
    tasks: [],
    notes: "",
    focusTime: 25,
    productivity: 0,
    theme: "dark",
    city: "Ghaziabad",
    focusDuration: 25
};

let dashboard = loadDashboard();

function loadDashboard() {
    const saved = localStorage.getItem("dashboard");

    if (saved) {
        return JSON.parse(saved);
    }

    return { ...defaultDashboard };
}

function saveDashboard() {
    localStorage.setItem("dashboard", JSON.stringify(dashboard));
}