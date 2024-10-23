// script.js

const toggleCheckbox = document.getElementById("toggle");

// Appliquer le thème sauvegardé lors du chargement de la page
if (localStorage.getItem("theme") === "night") {
    document.body.classList.add("night-mode");
    toggleCheckbox.checked = true;
} else {
    document.body.classList.remove("night-mode");
}

// Changer le thème en fonction du checkbox
toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
        document.body.classList.add("night-mode");
        localStorage.setItem("theme", "night");
    } else {
        document.body.classList.remove("night-mode");
        localStorage.setItem("theme", "day");
    }
});
