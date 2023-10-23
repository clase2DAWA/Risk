import { Territory } from "./territory.js";
/*
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
*/
class Board {

    constructor(board) {
        this.board = board;
        /*
        this.territories = [];
        //añadimos un objeto con atributos al array (JSON)
        let territory = new Territory("Spain")
        let objeto = {
            "positionX": 0,
            "positionY": 0,
            "territory": territory
        }
        this.territories.push(objeto)

        //mejor forma para añadir un objeto con atributos al array (JSON)
        this.territories.push({
            "positionX": 0,
            "positionY": 0,
            "territory": new Territory("Portugal")
        })
        */
        const miObjeto = {
            continents: [
                {
                    continent: "Europa",
                    color: "Blue",
                    territories: [
                        {
                            territory: new Territory("Western Europe"),
                            neighbours: [
                                "North Africa",
                                "Great Britain",
                                "Northern Europe",
                                "Southern Europe"
                            ]
                        },
                        {
                            territory: new Territory("Great Britain"),
                            neighbours: [
                                "Western Europe",
                                "Iceland",
                                "Scandinavia",
                                "Norhern Europe"
                            ]
                        },
                        {
                            territory: new Territory("Iceland"),
                            neighbours: [
                                "Great Britain",
                                "Greenland",
                                "Scandinavia"
                            ]
                        },
                        {
                            territory: new Territory("Scandinavia"),
                            neighbours: [
                                "Northern Europe",
                                "Great Britain",
                                "Iceland",
                                "Ukraine"
                            ]
                        },
                        {
                            territory: new Territory("Ukraine"),
                            neighbours: [
                                "Southern Europe",
                                "Northern Europe",
                                "Scandinavia",
                                "Ural",
                                "Afghanistan",
                                "Middle East"
                            ]
                        },
                        {
                            territory: new Territory("Southern Europe"),
                            neighbours: [
                                "Egypt",
                                "North Africa",
                                "Western Europe",
                                "Northern Europe",
                                "Ukraine",
                                "Middle East"
                            ]
                        },
                        {
                            territory: new Territory("Northern Europe"),
                            neighbours: [
                                "Southern Europe",
                                "Western Europe",
                                "Great Britain",
                                "Scandinavia",
                                "Ukraine"
                            ]
                        }
                    ]
                },
                {
                    continent: "Asia",
                    color: "Green",
                    territories: [
                        {

                        }
                    ]
                }
            ]
        };
    }

    drawBoard() {
        let pos = 40;
        for (let continent of miObjeto.continents) {
            for (let territory of continent.territories) {
                let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", pos);
                circle.setAttribute("cy", 40);
                circle.setAttribute("r", 40);
                circle.setAttribute("fill", continent.color);
                territory.positionX = 40;
                territory.positionY = 40;

                circle.addEventListener("click", function () {
                    console.log(territory.territory.getName());
                });

                pos += 100;
                this.board.appendChild(circle);
            }
        }
    }
}

export { Board }