let nameEl = document.getElementById("name");
let nameErrorEl = document.getElementById("nameErrMsg");
let errorMsg = "*Required";

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorEl.textContent = errorMsg;
    } else {
        nameErrorEl.textContent = ''
    }
});

let emailEl = document.getElementById("email");
let emailErrorEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = errorMsg;
    } else {
        emailErrorEl.textContent = "";
    }
});

let subscribeFormEl = document.getElementById("subscribeForm");
subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});