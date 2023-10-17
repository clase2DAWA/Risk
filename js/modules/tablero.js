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
        svg.setAttribute("width",1000);
        svg.setAttribute("heigth",1000);

        document.body.appendChil(tablero);
    }
}

export { Tablero }