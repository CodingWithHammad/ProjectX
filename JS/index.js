// function Login() {
//     // Retrieve input values
//     let user = document.querySelector(".name").value;
//     let password = document.querySelector(".password").value;

//     // Define valid credentials
//     let validUsers = ["hammad", "Hammad", "HAMMAD"];
//     let validPassword = "12345"; // Password should be a string for comparison

//     // Input validation
//     if (user === "" || password === "") {
//         let result = document.getElementById("passwordFailure");
//         result.innerText = "Please fill out both username and password.";
//         result.style.color = "red";
//         return; // Exit to prevent further checks
//     }

//     // Check credentials
//     if (validUsers.includes(user) && password === validPassword) {
//         document.getElementById("passwordFailure").innerText = ""; // Clear error message
//         document.getElementById("passwordSuccess").innerText = "Login Successful!";
//         document.getElementById("passwordSuccess").style.color = "green";

//         // Redirect to another page after 2 seconds
//         setTimeout(() => {
//             window.location.href = "./demo.html"; // Replace 'success.html' with your desired page URL
//         }, 2000); // 2000 ms = 2 seconds
//     } else {
//         let result = document.getElementById("passwordFailure");
//         result.innerText = "Invalid username or password.";
//         result.style.color = "red";
//     }
// }


// document.getElementById("submit").addEventListener("click", (e) => {
//     e.preventDefault()
//     Login()
// })


function Login() {
    // Retrieve input values
    let user = document.querySelector(".name")?.value || ""; // Use optional chaining to avoid null reference errors
    let password = document.querySelector(".password")?.value || "";

    console.log("Username:", user);
    console.log("Password:", password);

    // Define valid credentials
    let validUsers = ["hammad", "Hammad", "HAMMAD"];
    let validPassword = "12345"; // Password should be a string for comparison

    // Input validation
    if (user === "" || password === "") {
        let result = document.getElementById("passwordFailure");
        result.innerText = "Please fill out both username and password.";
        result.style.color = "red";
        return; // Exit to prevent further checks
    }

    // Check credentials
    if (validUsers.includes(user) && password === validPassword) {
        document.getElementById("passwordFailure").innerText = ""; // Clear error message
        let success = document.getElementById("passwordSuccess");
        success.innerText = "Login Successful!";
        success.style.color = "green";

        console.log("Redirecting to: ./demo.html");

        // Redirect to another page after 2 seconds
        setTimeout(() => {
            window.location.href = "./demo.html";
        }, 2000); // 2000 ms = 2 seconds
    } else {
        let result = document.getElementById("passwordFailure");
        result.innerText = "Invalid username or password.";
        result.style.color = "red";
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Submit clicked"); // Confirm button click
    Login();
});
