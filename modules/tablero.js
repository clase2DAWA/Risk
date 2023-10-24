import { Territory } from "./territorio.js";
import { map } from "./map.js"
class Tablero {
    constructor(board) {

        this.board = board;
        this.territories = [];

        for (let item of map.continent) {
            for (let territory of item.territories) {
                this.territories.push(
                    {
                        "posX": 0,
                        "posY": 0,
                        "territory": new Territory(territory.name),
                        "continentColor":item.color
                    }
                );

            }
        }

        for (let item of map.continent) {
            for (let territory of item.territories) {
                this.search(territory.name).top=this.search(territory.top);
                this.search(territory.name).topLeft=this.search(territory.topLeft);
                this.search(territory.name).topRight=this.search(territory.topRight);
                this.search(territory.name).left=this.search(territory.left);
                this.search(territory.name).right=this.search(territory.right);
                this.search(territory.name).bottomLeft=this.search(territory.bottomLeft);
                this.search(territory.name).bottomRight=this.search(territory.bottomRight);
                this.search(territory.name).bottom=this.search(territory.bottom);
            }
        }
        console.log(this.territories)



    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item.territory;
            }
        }
    }


    dibujaMapa() {
        let posX = 60;
        let posY = 60;
        for (let item of this.territories) {
            let circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circulo.setAttributeNS(null, "cx", posX);
            circulo.setAttributeNS(null, "cy", posY);
            circulo.setAttributeNS(null, "r", 40);
            circulo.setAttributeNS(null, "fill", item.continentColor);

            circulo.addEventListener("click", function () {
                console.log(item.territory.getName());
            });

            item.posX = posX;
            item.posY = posY;

            posX += 100;
            this.board.appendChild(circulo);
        }
    }

}
export { Tablero }