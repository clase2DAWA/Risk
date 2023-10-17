import { Territorio } from "./territorio.js";

class Tablero {
    constructor(territorios, ancho, alto) {

        this.territorios = territorios;
        this.ancho = ancho;
        this.alto = alto;

    }


    dibujaMapa() {
        let mapa = document.createElement("div");
        mapa.setAttribute("width", this.ancho);
        mapa.setAttribute("height", this.alto);

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "300");
        svg.setAttribute("height", "300");
       


        this.territorios.forEach(function (territorio) {
            let circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circulo.setAttributeNS(null, "cx", territorio.x);
            circulo.setAttributeNS(null, "cy", territorio.y);
            circulo.setAttributeNS(null, "r", territorio.radio);
            circulo.setAttributeNS(null, "fill", territorio.fondo);

            circulo.addEventListener("click", function () {
                console.log(territorio.id);


            })

            svg.appendChild(circulo);


        });
        mapa.appendChild(svg);
        document.body.appendChild(mapa);
    }

}
export { Tablero }