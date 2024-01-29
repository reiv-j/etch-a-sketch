const boxesContainer = document.querySelector(".boxes-container");
const button = document.querySelector("button");
const sizeDisplay = document.querySelector("p");

button.addEventListener("click", function () {
    const size = prompt("Please choose the size of the grid (4 - 32): ");
    createGrid(Number(size));
})

function createGrid(size) {
    if (size < 4 || size > 64) {
        alert("Size must be between 4 and 64");
        return;
    }

    boxesContainer.innerHTML = "";
    sizeDisplay.textContent = size + " x " + size;

    for (let i = 0; i < size*size; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        const pxSize = 600 / size;
        newBox.style.width = pxSize + "px";

        newBox.addEventListener("mouseover", function (e) {
            newBox.style.backgroundColor = "black";
        })

        boxesContainer.appendChild(newBox);
    }
}

createGrid(16);