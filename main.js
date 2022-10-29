const form = document.getElementById("form");
const email = document.getElementById("email");
const invalid = document.querySelector(".invalid");
const input = document.querySelector(".input");
const error = document.querySelector(".error")
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g


form.addEventListener("submit", function(e) {
    if(email.value === "" || email.value === null || regex.test(email.value) === false) {
        e.preventDefault()
        invalid.innerText = "Please provide a valid email";
        input.style.border = "2px solid hsl(0, 93%, 68%)"; 
        error.classList.add("icon");
        email.focus();
    } 
})


email.addEventListener("keypress", function(e) {
    input.style.borderColor = "hsl(0, 80%, 86%)";
    error.classList.remove("icon");
    invalid.innerText = ""
})


