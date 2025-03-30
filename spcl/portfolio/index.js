document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const content = document.getElementById('content');
    const pageSections = document.querySelectorAll('.page-section');

    // Simulate loading time (remove this in a real application)
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
        content.classList.remove('hidden');
        // Animate page sections on load
        pageSections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('show');
            }, 1000 * index); // Stagger the animations
        });
    }, 3000); // Adjust the time as needed

});



document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    let phone = document.getElementById("phone").value.trim();
            let phonePattern = /^[0-9]{10,15}$/;  // Accepts only numbers (10-15 digits)

            if (phone === "") {
                document.getElementById("phoneError").textContent = "Phone number is required";
                isValid = false;
            } else if (!phonePattern.test(phone)) {
                document.getElementById("phoneError").textContent = "Enter a valid phone number (10-15 digits)";
                isValid = false;
            } else {
                document.getElementById("phoneError").textContent = "";
            }

    // Message Validation
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    // Prevent form submission if not valid
    if (!isValid) {
        event.preventDefault();
    }
});