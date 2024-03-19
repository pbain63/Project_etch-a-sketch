let gridChangeBtn = document.querySelector("#gridChangeBtn");

const mainContainer = document.createElement("div");
const container = document.createElement("div");

container.setAttribute("id", "container");
mainContainer.setAttribute("id", "mainContainer");

let containerWidth = (container.style.width = "500px");
let containerHeight = (container.style.height = "500px");

document.body.appendChild(mainContainer);

mainContainer.appendChild(container);
// let gridReset = document.querySelector("#gridReset");
// gridReset.addEventListener("click", changeGrid);
// function drawGrid() {
// }
for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.setAttribute("style", "width: 30px; height: 30px"); //fill whole container
  container.appendChild(grid);
}

gridChangeBtn.addEventListener("click", changeGrid);

function changeGrid(e) {
  let userGridSize = Number(
    prompt("Enter a preferred size for grid up to 100: ")
  );
  if (userGridSize > 100) {
    alert("Please enter grid size between 100!");
  } else {
    let gridShape = userGridSize * userGridSize;

    let containerSize = Number(500);
    let gridWidth = 500 / userGridSize;
    let gridHeight = 500 / userGridSize;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < gridShape; i++) {
      const grid = document.createElement("div");
      grid.classList.add("gridBox");

      grid.style.width = gridWidth + "px";
      grid.style.height = gridHeight + "px";
      console.log(grid.style.height);

      container.appendChild(grid);
    }

    const mouseMoves = document.querySelectorAll(".gridBox");

    mouseMoves.forEach((mouseMove) => {
      mouseMove.addEventListener("dragover", sketch); //dragover//click//mousedown
    });
    function sketch(e) {
      e.target.style.backgroundColor = "orange";
    }
  }
}
