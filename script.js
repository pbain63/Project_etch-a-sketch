const container = document.createElement("div");

container.setAttribute("id", "container");

document.body.appendChild(container);

let htmlElements = "";

for (let i = 0; i < 256; i++) {
  htmlElements += '<div class = "grid"></div>';
}

container.innerHTML = htmlElements;

// -

const mouseMoves = document.querySelectorAll(".grid");

mouseMoves.forEach((mouseMove) => {
  mouseMove.addEventListener("mouseenter", () => {
    //("mouseenter", sketch)
    mouseMove.style.backgroundColor = "orange";
  });
});

// function sketch(e) {
//   // e.target.style.backgroundColor = "orange";  //
// }
// -
