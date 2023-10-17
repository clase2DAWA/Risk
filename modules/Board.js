import { CONTINENT } from './Continent.js';

var BOARD = BOARD || {};

BOARD.board = class {

    constructor(players,maxHeight,maxWidth) {

        this.players = players;
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.continent = new CONTINENT.continent;

    }

    drawOnMap(SVG) {
        

        for (let i = 0; i < this.continent.countries.length; i++) {
        
            
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            circle.setAttribute("cy", this.getRandomMapHeight()); 
            circle.setAttribute("cx", this.getRandomMapWidth()); 
            circle.setAttribute("r", this.continent.countries[i].radio);   
            circle.setAttribute("fill", "brown"); 
            circle.setAttribute("stroke","brown");
            circle.setAttribute("stroke-width", 3);
            
            SVG.appendChild(circle);
        }
        
    }

    getRandomMapHeight(){
        return Math.floor(Math.random() * this.maxHeight);
    }

    getRandomMapWidth(){
        return Math.floor(Math.random () * this.maxWidth);
    }

}
export { BOARD }; 