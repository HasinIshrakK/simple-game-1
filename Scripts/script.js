let r = 1;
let c = 1;
let count = 0;

function lost() {
    document.getElementById("my_modal_5").children[0].children[0].innerText = "Oops! Game Over!";
    document.getElementById("my_modal_5").children[0].children[1].innerText = "Mission not accomplished.";
    document.getElementById("reload").innerText = "Retry";
    document.getElementById("my_modal_5").showModal();
}

function goal() {
    const f = document.querySelectorAll(".box");
    f.forEach(element => {
        const t = [...element.classList];
        if (t.includes("star") && t.includes("selector") == true) {
            if (count == 1) {
                document.getElementById("my_modal_5").showModal();
                g = document.getElementById("redirect");
                g.classList.remove("hidden");
                g.addEventListener('click', event => {
                    window.location.href = "level2.html";
                })
            }
        }
        else if (count > 1) {
            lost();
        }
        document.getElementById("reload").addEventListener('click', event => {
            location.reload();
        })
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
    count += 1;
}

function left() {
    if (c > 1) {
        c = c - 1;
    }
    else {
        c = 5;
    }
    count += 1;
}

function right() {
    if (c < 5) {
        c = c + 1;
    }
    else {
        c = 1;
    }
    count += 1;
}

function down() {
    if (r < 5) {
        r = r + 1;
    }
    else {
        r = 1;
    }
    count += 1;
}

inputKey = document.getElementById("input");
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "a" || event.key === "ArrowLeft") {
        left();
    }
    else if (event.key.toLowerCase() === "d" || event.key === "ArrowRight") {
        right();
    }
    else if (event.key.toLowerCase() === "w" || event.key === "ArrowUp") {
        up();
    }
    else if (event.key.toLowerCase() === "s" || event.key === "ArrowDown") {
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


console.log("Hey, what are you doing here? It's not a playground.")