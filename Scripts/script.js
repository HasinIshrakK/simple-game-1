let r = 1;
let c = 1;

function goal() {
    const f = document.querySelectorAll(".box");
    f.forEach(element => {
        const t = [...element.classList];
        if (t.includes("star") && t.includes("selector") == true) {
            document.getElementById("my_modal_5").showModal();
        }
    });
}

function select() {
    const d = document.querySelectorAll(".box");
    d.forEach((f) => {
        f.classList.remove("selector");
    })
    let selector = document.getElementById(`r${r}-c${c}`);

    selector.classList.add("selector");
}

function up() {
    if (r > 1) {
        r = r - 1;
    }
    else {
        r = 5;
    }
}

function left() {
    if (c > 1) {
        c = c - 1;
    }
    else {
        c = 5;
    }
}

function right() {
    if (c < 5) {
        c = c + 1;
    }
    else {
        c = 1;
    }
}

function down() {
    if (r < 5) {
        r = r + 1;
    }
    else {
        r = 1;
    }
}

inputKey = document.getElementById("input");
inputKey.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "a") {
        left();
    }
    else if (event.key.toLowerCase() === "d") {
        right();
    }
    else if (event.key.toLowerCase() === "w") {
        up();
    }
    else if (event.key.toLowerCase() === "s") {
        down();
    }
    select();
    goal();
}
)

document.getElementById("up").addEventListener('click', () => {
    up();
    select();
    goal();
})
document.getElementById("left").addEventListener('click', () => {
    left();
    select();
    goal();
})
document.getElementById("right").addEventListener('click', () => {
    right();
    select();
    goal();
})
document.getElementById("down").addEventListener('click', () => {
    down();
    select();
    goal();
})