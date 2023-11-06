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

    //Función que inicia las principales funciones para generar la base de datos, introducir datos y dibujar los territorios

    start(SVG){
        this.generateDatabase();
        this.setData();
        //this.draw(SVG);
    }

    //Generamos un objeto jsonData para aplicarselo a los territorios creados y conseguir la recursividad.

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

        // se recorren los territorios para asignar los vecinos a dichos territorios (este trozo de código lo hemos cogido prestado)

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

    //Trabajamos directamente sobre el array de this.territories

    setData(){

        while (this.territories.filter(territory => !territory.visited).length > 0 ){ 

            let territory = this.nextUnvisitedTerritory();
            territory.posx = 250;
            territory.posy = 250;

            if ( territory.territory.neighbors !=null){
                for ( let visitNeighbors of territory.territory.neighbors){
                    if (this.territories.includes(visitNeighbors) && !this.checkVisited(visitNeighbors.territory.name)){
                        //condiciones draw sin determinar 
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

