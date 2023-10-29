import { RISK } from "./Game.js";
import { RISK as TERRITORY } from "./Territory.js";
import { map } from "./map.js";
//import { lines } from "./lines.js";

RISK.board = class {

    constructor(board,players,maxHeight,maxWidth) {

        this.board = board;
        this.players = players;
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.territories = [];
    }


    firstTerritory(){

        for (let continents of map.continents){
            for (let findFirstTerritory of continents.territories){
                return findFirstTerritory.name;    
            }

        }
    }

    x () {

        let haveToVisit = [this.firstTerritory()];
        let territoryToVisit = haveToVisit.shift();

        do{
            
            for ( let continents of map.continents){
                for ( let territories of continents.territories){
                    if (territories.name == territoryToVisit && !this.territories.some(territory => territory.name === territoryToVisit)){
                        let creatingTerritory = new RISK.territory(territories.name,territories.color);
                        
                        for ( let neighbors of territories.neighbors){
                            creatingTerritory.addNeighbor(neighbors);
                            if (!this.territories.some(territory => territory.name === neighbors.name) && !haveToVisit.some(territory => territory.name === haveToVisit.name)){
                                haveToVisit.push(neighbors.name);
                            }
                        }
                        this.territories.push(creatingTerritory);
                        //draw territory
                        territoryToVisit = haveToVisit.shift(); 
                        console.log(haveToVisit);
                    }
                }
            }             
        } while (haveToVisit.length !=0);
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
    


    drawTerrainOnMap(SVG) {

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

            tspan.setAttribute("x", item.getX());
            tspan.setAttribute("dy", "1.2em"); 
            tspan.textContent = item.getArmy();

            SVG.appendChild(circle);
            //text.appendChild(tspan);
            SVG.appendChild(text);
        }         
    }
}

export { RISK };

