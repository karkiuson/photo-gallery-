
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Demo credentials only
    if (username === "yushan" && password === "demo123") {
        loginPage.classList.add("hidden");
        dashboard.classList.remove("hidden");
    } else {
        message.textContent = "Incorrect username or password!";
        message.style.color = "#ff6b6b";
    }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function() {
    dashboard.classList.add("hidden");
    loginPage.classList.remove("hidden");
    loginForm.reset();
});

// Photo preview
document.getElementById("photoInput").addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    const imageURL = URL.createObjectURL(file);
    const preview = document.getElementById("preview");

    preview.src = imageURL;
    preview.classList.remove("hidden");
});

