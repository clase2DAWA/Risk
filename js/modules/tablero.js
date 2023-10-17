import { Territorio } from "./territorio.js";

class Tablero {
    constructor(territorios, ancho, alto) {
        this.territorios = territorios;
        this.ancho = ancho;
        this.alto = alto;
    }

    crearTablero() {
        let tablero = document.createElement("div");
        tablero.style.width = this.ancho + "px";
        tablero.style.height = this.alto + "px";

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%"); 
        svg.setAttribute("height", "100%");

        this.territorios.forEach(function (territorio) {
            let circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle")
            circulo.setAttributeNS(null, "cx", territorio.x);
            circulo.setAttributeNS(null, "cy", territorio.y);
            circulo.setAttributeNS(null, "r", territorio.radio);
            circulo.setAttributeNS(null, "fill", territorio.fondo);

            circulo.addEventListener("click", function () {
                console.log(territorio.id);
            });
            svg.appendChild(circulo);
        });
        tablero.appendChild(svg);
        document.body.appendChild(tablero);
    }
}

export { Tablero }