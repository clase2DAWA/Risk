import { RISK } from "./Game.js";
import { RISK as TERRITORY } from "./Territory.js";
import { map } from "./map.js";
//import { lines } from "./lines.js";

RISK.board = class {
        constructor() {
            this.metaData = new Map();
            let territories = [];
            for (let item of map.continents) {
                for (let territory of item.territories) {
                    let element = new RISK.territory(territory.name);
                    territories.push(element);
                    this.metaData.set(element, {
                        "x": 0,
                        "y": 0,
                        "visited": false
                    })
                }
            }
    
            for (let item of map.continents) {
                for (let territory of item.territories) {
                    for (let neighbor of territory.neighbors) {
                        territories.find((element) => element.name === territory.name)
                            .addNeighbor(neighbor, territories.find(
                                (element) => element.name === neighbor.name
                            ));
                    }
                }
            }
        }
    
        asignarPosicion() {
            let landData = this.metaData.keys().next().value;
            let support = [landData];
            this.metaData.get(landData).visited = true;
            let territory,element;
            
            while (support.length >0) {
                territory = support.at(-1);
                this.metaData.get(territory).visited = true;
                element = territory.neighbors.find(item=> !this.metaData.get(item.territory).visited);
                element !=null
                ? support.push(element.territory)
                : support.pop();
            }
        }
    
    /*draw(SVG,createTerritory){

        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let text = document.createElementNS("http://www.w3.org/2000/svg","text")

        circle.setAttribute("cy", creatingTerritory.y); 
        circle.setAttribute("cx", creatingTerritory.x); 
        circle.setAttribute("r", 50);   
        circle.setAttribute("fill", creatingTerritory.getColor()); 
        circle.setAttribute("stroke", "Black");
        circle.setAttribute("stroke-width", "0.1rem");
        circle.setAttribute("name", creatingTerritory.getName());

        circle.addEventListener('click', function (){
            console.log(item.getName())
        });

        text.setAttribute("y", creatingTerritory.y); 
        text.setAttribute("x", creatingTerritory.x); 
        text.setAttribute("text-anchor", "middle"); 
        text.setAttribute("dy", ".1em");
        text.setAttribute("fill", creatingTerritory.getColor());
        text.textContent = creatingTerritory.getName(); 
        text.classList.add("countryName");
        
        SVG.appendChild(circle);
        SVG.appendChild(text);
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

}

export { RISK };

