document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const bookingData = {
        vehicle: document.getElementById("vehicleType").value,
        issue: document.getElementById("issueDescription").value,
        location: document.getElementById("location").value,
    };

    try {
        // Send a POST request to the booking API
        const response = await fetch("http://localhost:8080/api/bookService", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        });

        if (response.ok) {
            alert("Service booked successfully!");
            document.getElementById("bookingForm").reset(); // Reset the form after submission
        } else {
            const errorMessage = await response.text();
            alert(`Booking failed: ${errorMessage || "Please try again."}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
