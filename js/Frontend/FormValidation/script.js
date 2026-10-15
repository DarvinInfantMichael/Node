// Access the form
const form = document.getElementById("studentForm");

// Access all input fields
const nameInput = document.getElementById("studName");
const emailInput = document.getElementById("studEmail");
const mobileInput = document.getElementById("studMobile");
const courseInput = document.getElementById("studCourse");

// Access error-message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const courseError = document.getElementById("courseError");

// Access result container
const result = document.getElementById("result");

// Email and mobile patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^[0-9]{10}$/;


// Validate student name
function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Student name is required.";

        return false;

    }

    nameError.textContent = "";

    return true;
}


// Validate email
function validateEmail() {

    const email = emailInput.value.trim();

    if (email === "") {

        emailError.textContent = "Email is required.";

        return false;

    }

    if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";

        return false;

    }

    emailError.textContent = "";

    return true;
}


// Validate mobile number
function validateMobile() {

    const mobile = mobileInput.value.trim();

    if (mobile === "") {

        mobileError.textContent = "Mobile number is required.";

        return false;

    }

    if (!mobilePattern.test(mobile)) {

        mobileError.textContent = "Enter exactly 10 digits.";

        return false;

    }

    mobileError.textContent = "";

    return true;
}


// Validate course
function validateCourse() {

    const course = courseInput.value;

    if (course === "") {

        courseError.textContent = "Please select a course.";

        return false;

    }

    courseError.textContent = "";

    return true;
}


// Real-time name validation
nameInput.addEventListener("input", function () {

    validateName();

});


// Real-time email validation
emailInput.addEventListener("input", function () {

    validateEmail();

});


// Real-time mobile validation
mobileInput.addEventListener("input", function () {

    validateMobile();

});


// Course validation when selection changes
courseInput.addEventListener("change", function () {

    validateCourse();

});


// Handle form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Validate every field
    const isNameValid = validateName();

    const isEmailValid = validateEmail();

    const isMobileValid = validateMobile();

    const isCourseValid = validateCourse();

    // Stop if any field is invalid
    if (
        !isNameValid ||
        !isEmailValid ||
        !isMobileValid ||
        !isCourseValid
    ) {

        result.textContent = "Please correct the errors above.";

        result.style.color = "red";

        return;

    }

    // Read the validated values
    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const mobile = mobileInput.value.trim();

    const course = courseInput.value;

    // Display success message
    result.textContent =
        `Registration successful! Name: ${name}, Email: ${email}, Mobile: ${mobile}, Course: ${course}`;

    result.style.color = "green";

    // Display details in console
    console.log("Student Name:", name);

    console.log("Student Email:", email);

    console.log("Student Mobile:", mobile);

    console.log("Student Course:", course);

});



// const password = document.getElementById("password");

// const toggleButton = document.getElementById("togglePassword");

// const loginForm = document.getElementById("loginForm");

// const result = document.getElementById("result");


// // Password Show / Hide
// toggleButton.addEventListener("click", function () {

//     if (password.type === "password") {

//         password.type = "text";

//         toggleButton.textContent = "Hide";

//     } else {

//         password.type = "password";

//         toggleButton.textContent = "Show";

//     }

// });


// // Login form submission
// loginForm.addEventListener("submit", function (event) {

//     event.preventDefault();

//     result.textContent = "Form submitted successfully!";

//     result.style.color = "green";

// });

// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");
// const confirmBtn = document.getElementById("confirmBtn");
// const modal = document.getElementById("modal");
// const result = document.getElementById("result");

// // Open modal
// openBtn.addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     modal.classList.add("flex");
// });

// // Close modal
// closeBtn.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     modal.classList.remove("flex");
// });

// // Confirm action
// confirmBtn.addEventListener("click", function () {
//     result.textContent = "You confirmed successfully!";

//     modal.classList.add("hidden");
//     modal.classList.remove("flex");
// });