import { Terrytory } from "./territory.js";

let Board = class {
    constructor(board) {
        this.territories = [];
        this.board = board;
        this.territories.push({
            "posX":0,
            "posY":0,
            "territory":new Terrytory("Spain")
        });
        this.territories.push({
            "posX":0,
            "posY":0,
            "territory":new Terrytory("French")
        });
        this.territories.push({
            "posX":0,
            "posY":0,
            "territory":new Terrytory("Italy")
        });
        this.territories.push({
            "posX":0,
            "posY":0,
            "territory":new Terrytory("Morroco")
        });
    }

    draw() {
        let r = 25;
        let pos = r;
        for (let item of this.territories) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos);
            circle.setAttribute('cy', r);
            circle.setAttribute('r', r);
            circle.setAttribute('fill', 'blue');
            circle.onclick = function () {
                console.log(item.territory.getName())
            }
            item.posX = pos;
            item.posY = r;
            this.board.appendChild(circle);
            pos += 60;
        }
    }
}

export { Board };