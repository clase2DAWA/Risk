class tablero {
    constructor(territorios, ancho, alto) {
        this.territorios = territorios;
        this.ancho = ancho;
        this.alto = alto;
    }

    crearTablero() {
        let tablero = document.createElement("div");
        tablero.setAttribute("width", this.ancho);
        tablero.setAttribute("height", this.alto);

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", 1000);
        svg.setAttribute("heigth", 1000);

        this.territorios.forEach(function (territorio) {
            let circulo = document.createAttributeNS("http://www.w3.org/2000/svg", "circle")
            circulo.setAttributeNS(null, "cx", territorio.x);
            circulo.setAttributeNS(null, "cy", territorio.y);
            circulo.setAttributeNS(null, "r", territorio.radio);

            circulo.addEventListener("click", function (){
                console.log(territorio.id);
            });
            svg.appendChild(circulo);
        });

        tablero.appendChild(svg);
        document.body.appendChil(tablero);
    }
}

export { Tablero }