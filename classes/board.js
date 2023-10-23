import { Territory } from "./territory.js";
class Board {
    constructor(boardElement) {
        this.board = boardElement;
        this.miObjeto = {
            continents: [
                {
                    continent: "Europa",
                    color: "Blue",
                    territories: [
                        {
                            name: new Territory("Western Europe"),
                            neighbours: [
                                "North Africa",
                                "Great Britain",
                                "Northern Europe",
                                "Southern Europe"
                            ]
                        },
                        {
                            name: new Territory("Great Britain"),
                            neighbours: [
                                "Western Europe",
                                "Iceland",
                                "Scandinavia",
                                "Norhern Europe"
                            ]
                        },
                        {
                            name: new Territory("Iceland"),
                            neighbours: [
                                "Great Britain",
                                "Greenland",
                                "Scandinavia"
                            ]
                        },
                        {
                            name: new Territory("Scandinavia"),
                            neighbours: [
                                "Northern Europe",
                                "Great Britain",
                                "Iceland",
                                "Ukraine"
                            ]
                        },
                        {
                            name: new Territory("Ukraine"),
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
                            name: new Territory("Southern Europe"),
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
                            name: new Territory("Northern Europe"),
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
                            name: new Territory("Prueba"),
                            neighbours: [

                            ]
                        }
                    ]
                }
            ]
        };
    }

    drawBoard() {
        let pos = 40;
        for (let continent of this.miObjeto.continents) {
            for (let territory of continent.territories) {
                console.log(continent, territory);
                let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", pos);
                circle.setAttribute("cy", 40);
                circle.setAttribute("r", 40);
                circle.setAttribute("fill", continent.color);
                territory.positionX = 40;
                territory.positionY = 40;

                circle.addEventListener("click", function () {
                    console.log(territory.name.getName());
                });

                pos += 100;
                this.board.appendChild(circle);
            }
        }
    }
}

export { Board }