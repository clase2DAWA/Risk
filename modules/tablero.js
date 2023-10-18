import { Territory } from "./territorio.js";

class Tablero {
    constructor(board) {

        this.board = board;
        this.territories = [];

        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": new Territory("Spain")

        });
        this.territories.push({
            "posX": 0,
            "posY": 0,
            "territory": new Territory("Portugal")

        });




    }


    dibujaMapa() {
        let posX = 60;
        let posY = 60;
        for (let item of this.territories) {
            let circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circulo.setAttributeNS(null, "cx", posX);
            circulo.setAttributeNS(null, "cy", posY);
            circulo.setAttributeNS(null, "r", 40);
            circulo.setAttributeNS(null, "fill", "red");

            circulo.addEventListener("click", function () {
                console.log(item.territory.getName());
            });

            item.posX=posX;
            item.posY=posY;

            posX += 100;
            this.board.appendChild(circulo);
        }
    }

}
export { Tablero }