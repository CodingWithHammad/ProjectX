// let username="Hammad";
// let Password="12345"



// if ((username="Hammad")) {

// } else {

// }

let user = document.getElementsByClassName("name").value
let password = document.getElementsByClassName("password").value

let Ouser = "hammad" || "Hammad" || "HAMMAD"
let Opassword = 12345

if (user == "" || password == "") {
    let Userresult = document.getElementById("passwordFailure").innerText = "Username is not correct ..."
    Userresult.style.color = "red"
}

if (user === Ouser && password === Opassword) {
     document.getElementById("submit").addEventListener("click", (e) => {

    })
}

// if (password === Opassword) {

// } else {
//     let Userresult = document.getElementById("passwordFailure").innerText = "Username is not correct ..."
//     Userresult.style.color = "red"
// }