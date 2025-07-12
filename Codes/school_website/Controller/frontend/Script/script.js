// js/script.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    // Dummy login
    if ((username === "admin" && password === "admin123") ||
        (username === "student" && password === "student123")) {
        // Redirect to dashboard
        window.location.href = "student_result.html";
    } else {
        errorMsg.textContent = "Invalid username or password.";
    }
});

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${username}&password=${password}`
    });

    if (response.ok) {
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Invalid username or password.";
    }
});
