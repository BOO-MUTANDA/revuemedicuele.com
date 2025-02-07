document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Vérifie si le mode sombre était activé précédemment
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Mode clair";
    }

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            themeToggle.textContent = "🌙 Mode sombre";
            localStorage.setItem("theme", "light");
        } else {
            body.classList.add("dark-mode");
            themeToggle.textContent = "☀️ Mode clair";
            localStorage.setItem("theme", "dark");
        }
    });
});
