const form = document.getElementById("studentForm");

const result = document.getElementById("result");

form.addEventListener("submit",function(event){

    event.preventDefault();

    const name = document.getElementById("studName").value.trim();

    const email = document.getElementById("studEmail").value.trim();

    const course = document.getElementById("studCourse").value.trim();

    if (name === "" || email === "" || course === "") {

        result.textContent = "Please fill all the fields";

        result.style.color = "red";

        return;
    }

    result.textContent =
        `Registration Successful!  
         Name: ${name},
         Email: ${email},
         Course: ${course}`;

    result.style.color = "green";

    // Print details in console
    console.log("Student Name:", name);

    console.log("Student Email:", email);

    console.log("Student Course:", course);

    // Clear the form
    form.reset();

});