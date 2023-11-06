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

    start(SVG){
        this.generateDatabase();
        this.setData();
        //this.draw(SVG);
    }

    generateDatabase () {

        for (let item of map.continents) {
            for (let territory of item.territories) {
                let jsonData = {
                posx: 0,
                posy: 0,
                visited: false,
                territory: null,
                };
            let newTerritory = new RISK.territory(territory.name, jsonData);
            jsonData.territory = newTerritory;
            this.territories.push(jsonData);
            }
        }

        for (let item of map.continents) {
            for (let territory of item.territories) {
                for (let neighbor of territory.neighbors) {
                    this.search(territory.name).territory.addNeighbor(
                    this.search(neighbor.name)
                )};
            } 
        }
    }

    search(name) {
        return this.territories.find(item => item.territory.getName() === name);
    }

    setData(){

        while (this.territories.filter(territory => !territory.visited).length > 0 ){ //filter

            let territory = this.nextUnvisitedTerritory();
            territory.posx = 250;
            territory.posy = 250;

            if ( territory.territory.neighbors !=null){
                for ( let visitNeighbors of territory.territory.neighbors){
                    if (this.territories.includes(visitNeighbors) && !this.checkVisited(visitNeighbors.territory.name)){
                        //condiciones draw
                        this.markAsVisited(visitNeighbors);
                        
                    }
                }
            }
            this.markAsVisited(territory);
        }
        console.log(this.territories);
    }


    nextUnvisitedTerritory(){
        return this.territories.find(territory => !territory.visited);
    }

    checkVisited(territory){
        return this.search(territory).visited;
    }

    markAsVisited(territory){
        
        let markTerritoryAs = this.search(territory.territory.name);
        markTerritoryAs.visited = true;
    }

    draw(SVG){

    }


    


/*
generateAndDraw(SVG) {
    let haveToVisit = [this.firstTerritory()];
    let visitedTerritories = {};

    while (haveToVisit.length > 0) {
        let territoryToVisit = haveToVisit.shift();

        if (!visitedTerritories[territoryToVisit]) {
            visitedTerritories[territoryToVisit] = true;
            let continent = this.findContinentByTerritoryName(territoryToVisit);

            if (continent) {
                for (let territory of continent.territories) {
                    if (territory.name !== territoryToVisit) {
                        let creatingTerritory = new RISK.territory(territory.name, territory.color);
                        creatingTerritory.neighbors = this.getNeighborsRecursively(territory);
                        haveToVisit.push(creatingTerritory.name);
                        console.log(creatingTerritory);
                    }
                }
            }
        }
    }
}

findTerritoryByName(name) {
    for (let continent of map.continents) {
        for (let territory of continent.territories) {
            if (territory.name === name) {
                return new RISK.territory(territory.name, territory.color);
            }
        }
    }
    return null;
}
    
        /*
        do{
            for ( let continents of map.continents){
                for ( let territories of continents.territories){
                    if (territories.name == territoryToVisit && !this.territories.includes(territories.name)) {
                        let creatingTerritory = new RISK.territory(territories.name, territories.color, element);
                        this.assignNeighbors(creatingTerritory, territories.neighbors);
                        console.log(creatingTerritory);


                        creatingTerritory.setY(y);
                        creatingTerritory.setX(x);
                        this.assignNeighbors(creatingTerritory);
                    }
                    for ( let neighbors of territories.neighbors){
                        creatingTerritory.addNeighbor(neighbors);
                        if (!this.territories.some(territory => territory.name === neighbors.name) && !haveToVisit.includes(neighbors.name)){
                            haveToVisit.push(neighbors.name);
                        
                    }
                    this.territories.push(creatingTerritory);
                    this.draw(SVG,creatingTerritory);

                    territoryToVisit = haveToVisit.shift(); 
                    for (let reference of this.territories){
                        for ( let neighborReference of reference.neighbors){
                            if (neighborReference.name==territoryToVisit){
                                let sax = reference.x;
                                let say = reference.y;
                                console.log(sax);
                                console.log(say);
                                // con esto saco la referencia de la posicion territorio que le toque
                                x += this.recalculateCx(x) + 50;
                                y += this.recalculateCy(y) + 50;
                                break;
                                //hay que sacar la referencia de X e Y para reposicionarse.
                            }
                        }
                        //Debemos redibujar en condiciones
                    }
                }
            }
        }             
    } while (haveToVisit.length !=0);
}
*/

    assignNeighbors(creatingTerritory,foundTerritory) {

        for (let assignNeighbors of foundTerritory){
            creatingTerritory.addNeighbor(assignNeighbors);
        }
    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item;
            }
        }
    }
    
    recalculateCx(degrees){
        
        let x = Math.cos(degrees * (Math.PI / 180)) * 40;
        return x;
    }

    recalculateCy(degrees){

        let y = Math.sin(degrees * (Math.PI / 180)) * 40;
        return y;
    }
    
    draw(SVG,creatingTerritory){

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

