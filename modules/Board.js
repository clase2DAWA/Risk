import { Territory } from "./Territories.js";
class Board {
    constructor (board){
        this.board = board;
        this.territories=[];

        
        this.territories.push({
            "posx": 0,
            "posy": 0,
            "Territory": new Territory("Portugal")
        });
        this.territories.push({
            "posx": 0,
            "posy": 0,
            "Territory": new Territory("Spain")
        });
        this.territories.push({
            "posx": 0,
            "posy": 0,
            "Territory": new Territory("Sudan del sur")
        });
        this.territories.push({
            "posx": 0,
            "posy": 0,
            "Territory": new Territory("Chad")
        });
    }
    draw(){
        let pos = 40;
        for(let item of this.territories){
            
            let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            circle.setAttribute("cx", pos);
            circle.setAttribute("cy", 40);
            circle.setAttribute("r", 40);
            circle.setAttribute("fill", "red");
            item.posx= pos;
            item.posy = 40;
            circle.addEventListener("click",function(){
                console.log(item.Territory.getName())
            })

            this.board.appendChild(circle);
            pos += 100;
        }
    }
}
export {Board};