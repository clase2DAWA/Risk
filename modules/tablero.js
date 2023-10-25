import { Territory } from "./territorio.js";
import { map } from "./map.js"

class Tablero {

    constructor(board) {
        this.board = board;
        this.territories = [];
        this.prueba = [];
        for (let item of map.continents) {
            for (let territory of item.territories) {
                console.log(territory.name);
                this.territories.push({
                    "posx": 0,
                    "posy": 0,
                    "territory": new Territory(territory.name),
                    "visitado": false
                });
            }
        }

        for (let item of map.continents) {
            for (let territory of item.territories) {
                for (let neighbor of territory.neighbors) {
                    this.search(territory.name).territory.addNeighbor(neighbor);
                }
            }
        }
        console.log(this.territories)

    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item;
            }
        }
    }

    neighborAvailable(territory) {
        let pais = null;
        for (let neighbor of territory.neighbors) {
            console.log(neighbor)
            console.log(this.search(neighbor.name));
            console.log(!this.search(neighbor.name).visitado);
            
            if (!this.search(neighbor.name).visitado) {
                pais = this.search(neighbor.name);
            }
        }
        return pais;

    }
    draw() {

        let territoriosDibujar = [];
        this.territories[0].posx=300;
        this.territories[0].posy=300;
        territoriosDibujar.push(this.territories[0]);
        let pruebas=[];

        let territory;
        let neighbor;
        let degrees;
        while (territoriosDibujar != 0) {
            territory = territoriosDibujar.at(-1);
            neighbor = this.neighborAvailable(territory.territory);
            territory.visitado = true;

            if (neighbor != null) {
                for(let vecinos of territory.territory.neighbors){
                    if(vecinos.name===neighbor.territory.getName()){
                        degrees=vecinos.degrees;
                    }
                }
                
                neighbor.posx=(Math.cos(degrees*(Math.PI/180))*120)+(territory.posx);
                neighbor.posy=(Math.sin(degrees*(Math.PI/180))*120)+(territory.posy);
                console.log("x:",neighbor.posx,"y:", neighbor.posy,"NameCalculos:",territory.territory.getName());
                pruebas.push(neighbor);
                territoriosDibujar.push(neighbor);

            } else {
                territoriosDibujar.pop();
            }
        }


        for (let item of this.territories) {
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', item.posx);
            circle.setAttribute('cy', item.posy);
            circle.setAttribute('r', 40);
            circle.setAttribute('fill', 'red');
            this.board.appendChild(circle);
            circle.addEventListener("click", function () {
                console.log(item.territory.getName());
            });
        }

    }




}



export { Tablero };