{
    const welcome() => {
        console.log("Hejka!")
    }

    const onChangeBackgroundClick = () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            themeName.innerText = "JASNY";
        } else {
            themeName.innerText = "CIEMNY";
        }
    };
    const init = () => {
        const button = document.querySelector(".button");
        const body = document.querySelector(".background");
        const themeName = document.querySelector(".themeName");

        button.addEventListener("click", onChangeBackgroundClick);
        welcome();
    };

    init();
}
