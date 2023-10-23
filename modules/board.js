import { Territory } from "./territory.js";

class Board {
    constructor(board) {
        this.board = board;
        this.territories = [];
        
        this.territories.push({
            "posx": 0,
            "posy": 0,
            "territory": new Territory ("Spain")
        });

        this.territories.push ({
            "posx": 0,
            "posy": 0,
            "territory": new Territory ("Portugal")
        });

        
    }

    drawBoard() {
        let pos = 40;
        for (let item of this.territories) {
            
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos);
            circle.setAttribute('cy', 40);
            circle.setAttribute('r', 40)
            item.posx = 40;
            item.posy = 40;
            circle.addEventListener('click', function(){
                console.log(item.territory.getName());
            })
            this.board.appendChild(circle);
            pos += 100;
        }
    }
}


export {Board}