document.getElementById("signupForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const signupData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        role: document.getElementById("role").value,
    };

    try {
        // Send a POST request to the signup API
        const response = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
        });

        if (response.ok) {
            alert("Sign up successful!");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            const errorMessage = await response.text();
            alert(`Sign up failed: ${errorMessage || "Please try again."}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
