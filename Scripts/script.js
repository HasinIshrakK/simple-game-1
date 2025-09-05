let r = 1;
let c = 1;

inputKey = document.getElementById("input");
inputKey.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "a") {
        if (c > 1) {
            c = c - 1;
        }
    }
    else if (event.key.toLowerCase() === "d") {
        if (c < 5) {
            c = c + 1;
        }
    }
    else if (event.key.toLowerCase() === "w") {
        if (r > 1) {
            r = r - 1;
        }
    }
    else if (event.key.toLowerCase() === "s") {
        if (r < 5) {
            r = r + 1;
        }
    }
    const d = document.querySelectorAll(".box");
    d.forEach((f) => {
        f.classList.remove("selector");
    })
    selector = document.getElementById(`r${r}-c${c}`);

    selector.classList.add("selector");
}
)

