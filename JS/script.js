console.log("Hejka!")

let button = document.querySelector(".button");
let body = document.querySelector(".background");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "JASNY";
    } else {
        themeName.innerText = "CIEMNY";
    }
});
