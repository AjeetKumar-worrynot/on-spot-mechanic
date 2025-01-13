document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
        // Send a POST request to the login API
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (response.ok) {
            alert("Login successful!");
            window.location.href = "booking.html"; // Redirect to dashboard
        } else {
            const errorMessage = await response.text();
            alert(`Login failed: ${errorMessage || "Please try again."}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
