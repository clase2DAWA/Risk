import { Territory } from "./Territories.js";
class Board {
    constructor(board) {
        this.board = board;
        this.Map = {};
        this.Andalucia = [];


        this.Map = {
            Andalucia: {
                territories: [
                    {
                        "posx": 50,
                        "posy": 50,
                        "Territory": new Territory("Huelva"),
                        neighbor:[]
                    },
                    {
                        "posx": 150,
                        "posy": 50,
                        "Territory": new Territory("Sevilla"),
                        neighbor:[]
                    },

                    {
                        "posx": 250,
                        "posy": 50,
                        "Territory": new Territory("Cadíz"),
                        neighbor:[]
                    },
                    {
                        "posx": 50,
                        "posy": 150,
                        "Territory": new Territory("Malaga"),
                        neighbor:[]
                    },
                    {
                        "posx": 150,
                        "posy": 150,
                        "Territory": new Territory("Cordoba"),
                        neighbor:[]
                    },
                    {
                        "posx": 250,
                        "posy": 150,
                        "Territory": new Territory("Jaen"),
                        neighbor:[]
                    },
                    {
                        "posx": 50,
                        "posy": 250,
                        "Territory": new Territory("Granada"),
                        neighbor:[]
                    },
                    {
                        "posx": 150,
                        "posy": 250,
                        "Territory": new Territory("Almeria"),
                         neighbor:[]
                    },
                    {
                        "posx": 250,
                        "posy": 250,
                        "Territory": new Territory("Salobreña"),
                         neighbor:[]
                    },

                ]
            }
        };
        this.setNeighbor();
    }
    
    draw() {
     
        let self = this; // Guarda una referencia a "this"

    for (let item in this.Map) {
        for (let provincia of this.Map[item].territories) {
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute("cx", provincia.posx);
            circle.setAttribute("cy", provincia.posy);
            circle.setAttribute("r", 40);
            circle.setAttribute("fill", "green");

            this.board.appendChild(circle);

            circle.addEventListener("click", () => {
                if (provincia && provincia.Territory) {
                    console.log(`This territory is ${provincia.Territory.getName()} and its neighbors are : ${provincia.neighbor.map(index => self.Map[item].territories[index].Territory.getName()).join(', ')}`);
                } else {
                    console.log("Territory information is missing.");
                }
            });
        }
    }
        
    }
    setNeighbor() {
        let numfilas = 3;
        let numcolum = 3;
        for (let item in this.Map) {
            for (let provincia of this.Map[item].territories) {
                let id = this.Map[item].territories.indexOf(provincia);
    
                let row = Math.floor(id / numfilas);
                let col = id % numcolum;
    
                let neighbors = [];
                if (row > 0) neighbors.push(id - numfilas);
                if (col < numcolum - 1) neighbors.push(id + 1);
                if (row < numfilas - 1) neighbors.push(id + numfilas);
                if (col > 0) neighbors.push(id - 1);
    
                provincia.neighbor = neighbors;
            }
        }
    }
    
}
export { Board };
/*
MAL
{
    "posx": 0,
    "posy": 0,
    "andalucia": {
        "huelva": {
            "posx": 0,
            "posy": 0,
            "Territory": huelva,
            "neighbor": {"sevilla": sevilla,"cadiz": cadiz}
        },
        "sevilla": {
            "posx": 0,
            "posy": 0,
            "Territory": sevilla,
            "neighbor": {"huelva": huelva,"cadiz": cadiz,"cordoba": cordoba,"malaga":malaga}
        },

        "cadiz": {
            "posx": 0,
            "posy": 0,
            "Territory": cadiz,
            "neighbor": {"sevilla": sevilla,"malaga":malaga}
        },
        "malaga": {
            "posx": 0,
            "posy": 0,
            "Territory": malaga,
            "neighbor": {"cadiz":cadiz, "sevilla":sevilla, "cordoba":cordoba, "granada":granada}
        },
        "cordoba": {
            "posx": 0,
            "posy": 0,
            "Territory": cordoba,
            "neighbor": {"sevilla":sevilla, "malaga":malaga,"granada":granada,"jaen":jaen}
        },
        "jaen": {
            "posx": 0,
            "posy": 0,
            "Territory": jaen,
            "neighbor": {"cordoba":cordoba,"granada": granada}
        },
        "granada": {
            "posx": 0,
            "posy": 0,
            "Territory": granada,
            "neighbor": {"jaen":jaen,"almeria": almeria}
        },
        "almeria": {
            "posx": 0,
            "posy": 0,
            "Territory": almeria,
            "neighbor":{ "granada":granada}
        },
    }

}*/