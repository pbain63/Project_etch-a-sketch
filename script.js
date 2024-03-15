const container = document.createElement("div");

container.setAttribute("id", "container");

// container.textContent = "THis is testing"; 


document.body.appendChild(container);


let htmlElements = "";

for (let i = 0; i < 256; i++) {
    htmlElements += "<div class = 'grid'></div>";
    
    
}

container.innerHTML = htmlElements;
// console.log(htmlElements);