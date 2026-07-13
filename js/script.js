

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