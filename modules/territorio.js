var TABLERO = TABLERO || {};
TABLERO.Crear = class territorio {
    constructor() {
        this.x = Math.floor(Math.random() * 900);
        this.y = Math.floor(Math.random() * 900);
    }

    GeneraCirculo(num) {
        var svg1 = document.getElementById("svg");
        var circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
        if (num == 1) {
            circles.setAttribute("fill", "red");
            var foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
            foreignObject.setAttribute("x", this.x); // Posición x del foreignObject
            foreignObject.setAttribute("y", this.y); // Posición y del foreignObject
            foreignObject.setAttribute("width", 50); // Ancho del foreignObject
            foreignObject.setAttribute("height", 50); // Altura del foreignObject
            circles.setAttribute("color","white");
            // Crear un elemento h1 dentro del foreignObject
            var h1 = document.createElement("h4");
            h1.textContent = "1";
            h1.style.textAlign = "center"; // Alineación del texto en el centro
            foreignObject.appendChild(h1);
            svg1.appendChild(foreignObject);
        } else if (num == 2) {
            circles.setAttribute("fill", "blue");
            var foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
            foreignObject.setAttribute("x", this.x); // Posición x del foreignObject
            foreignObject.setAttribute("y", this.y); // Posición y del foreignObject
            foreignObject.setAttribute("width", 50); // Ancho del foreignObject
            foreignObject.setAttribute("height", 50); // Altura del foreignObject
            circles.setAttribute("color","white");
            // Crear un elemento h1 dentro del foreignObject
            var h1 = document.createElement("h4");
            h1.textContent = "2";
            h1.style.textAlign = "center"; // Alineación del texto en el centro
            foreignObject.appendChild(h1);
            svg1.appendChild(foreignObject);
        } else if (num == 3) {
            circles.setAttribute("fill", "green");
            var foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
            foreignObject.setAttribute("x", this.x); // Posición x del foreignObject
            foreignObject.setAttribute("y", this.y); // Posición y del foreignObject
            foreignObject.setAttribute("width", 50); // Ancho del foreignObject
            foreignObject.setAttribute("height", 50); // Altura del foreignObject
            circles.setAttribute("color","white");
            // Crear un elemento h1 dentro del foreignObject
            var h1 = document.createElement("h4");
            h1.textContent = "3";
            h1.style.textAlign = "center"; // Alineación del texto en el centro
            foreignObject.appendChild(h1);
            svg1.appendChild(foreignObject);

        }else if (num == 4) {
            circles.setAttribute("fill", "purple");
            var foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
            foreignObject.setAttribute("x", this.x); // Posición x del foreignObject
            foreignObject.setAttribute("y", this.y); // Posición y del foreignObject
            foreignObject.setAttribute("width", 50); // Ancho del foreignObject
            foreignObject.setAttribute("height", 50); // Altura del foreignObject
            circles.setAttribute("color","white");
            // Crear un elemento h1 dentro del foreignObject
            var h1 = document.createElement("h4");
            h1.textContent = "4";
            h1.style.textAlign = "center"; // Alineación del texto en el centro
            foreignObject.appendChild(h1);
            svg1.appendChild(foreignObject);
        }
           circles.setAttribute("cx", this.x);
        circles.setAttribute("cy", this.y);
        circles.setAttribute("r", 20);

        svg1.appendChild(circles);
       
    }
    getx() {
        return this.x
    }
    gety() {
        return this.y
    }
}


export { TABLERO };