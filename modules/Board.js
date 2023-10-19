import { RISK } from "./Game.js";
import { RISK as COUNTRY } from "./Country.js";

RISK.board = class {

    constructor(board,players,maxHeight,maxWidth) {

        this.board = board;
        this.players = players;
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.territories = [];
        this.territories.push ({
            "posX": 0,
            "posY": 0,
            "territory": new COUNTRY.country("Spain")
        });
        this.territories.push ({
            "posX": 0,
            "posY": 0,
            "territory": new COUNTRY.country("Portugal")
        });
    }

    drawOnMap(SVG) {
        
        let pos = 40;

        for (let item of this.territories) {
            
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            circle.setAttribute("cy", 40); 
            circle.setAttribute("cx", pos); 
            circle.setAttribute("r", 40);   
            circle.setAttribute("fill", "brown"); 
            circle.addEventListener ("click" , () =>{
                console.log(item.territory.getName());
            });

            item.posX = pos;
            SVG.appendChild(circle);
            pos += 100;
        }
                
    }

    getRandomMapHeight(){
        return Math.floor(Math.random() * this.maxHeight);
    }

    getRandomMapWidth(){
        return Math.floor(Math.random () * this.maxWidth);
    }

}

export { RISK };

