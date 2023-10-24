import { RISK } from "./Game.js";
import { RISK as TERRITORY } from "./Territory.js";
import { territoriesData } from "./territoriesData.js";
//import { lines } from "./lines.js";

RISK.board = class {

    constructor(board,players,maxHeight,maxWidth) {

        this.board = board;
        this.players = players;
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.territories = [];
    }


    assignTerritories() {
        for (let continent of territoriesData.continents){
            for (let item of continent.territories) {
            
                let territory = new RISK.territory(item.name,item.top,item.right,item.bottom,item.left,item.topLeft,item.topRight,item.bottomLeft,item.bottomRight);
                this.territories.push(territory);
                console.log(territory);
            }
        }

    }

    /*drawLinesOnMap(SVG) {

        for (let item of lines){

            let line = document.createElementNS("http://www.w3.org/2000/svg" , "line");
                        
            line.setAttribute("x1", item.x1); 
            line.setAttribute("y1", item.y1); 
            line.setAttribute("x2", item.x2); 
            line.setAttribute("y2", item.y2); 

            line.setAttribute("stroke", "black"); 
            line.setAttribute("stroke-width", "2");
            
            SVG.appendChild(line);
        }
    }*/
    
    /*determinateDirection(item){

        for (let key in item) {
            if (key !== "name" && key !== "color" && item[key] !== null) {
                if (key === ){}
                ??? How to determina the position?
            }
        }
    }*/

    drawTerrainOnMap(SVG) {

        let visitedCountries = [];

        let cy = 800;
        let cx = 800;

        for (let item of this.territories) {
            
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            let text = document.createElementNS("http://www.w3.org/2000/svg","text")
            let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            


            circle.setAttribute("cy", cy); 
            circle.setAttribute("cx", cx); 
            circle.setAttribute("r", 50);   
            circle.setAttribute("fill", item.getColor()); 
            circle.setAttribute("stroke", "Black");
            circle.setAttribute("stroke-width", "0.1rem");

            circle.addEventListener('click', function (){
                console.log(item.getName())
            });

            text.setAttribute("y", cy); 
            text.setAttribute("x", cx); 
            text.setAttribute("text-anchor", "middle"); 
            text.setAttribute("dy", ".1em");
            text.setAttribute("fill", "White");
            text.textContent = item.getName(); 
            text.classList.add("countryName");

        /*  tspan.setAttribute("x", item.getX());
            tspan.setAttribute("dy", "1.2em"); 
            tspan.textContent = item.getArmy();*/

            SVG.appendChild(circle);
            //text.appendChild(tspan);
            SVG.appendChild(text);
        }         
    }
}

export { RISK };

