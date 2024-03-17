let gridChangeBtn = document.querySelector("#gridChangeBtn");

const container = document.createElement("div");

container.setAttribute("id", "container");

document.body.appendChild(container);

gridChangeBtn.addEventListener("click", changeGrid);

function changeGrid(e) {
  let userInputHeight = Number(prompt("Enter a preferred height for grid: "));
  let userInputWidth = Number(prompt("Enter a preferred width for grid: "));
  let gridShape = userInputHeight * userInputWidth;

  let htmlElements = "";

  for (let i = 0; i < gridShape; i++) {
    htmlElements += '<div class = "grid"></div>';
  }

  container.innerHTML = htmlElements;

  const mouseMoves = document.querySelectorAll(".grid");

  mouseMoves.forEach((mouseMove) => {
    mouseMove.addEventListener("mouseenter", () => {
      //("mouseenter", sketch)
      mouseMove.style.backgroundColor = "orange";
    });
  });
  //   // function sketch(e) {
  //   //   // e.target.style.backgroundColor = "orange";  //
  //   // }
}

// //
