import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {

    constructor(board) {
        this.board = board;
        this.territories = [];
        for(let item of map.continents ){
            for(let territory of item.territories){  
                let elemento = {
                    "posx":0,
                    "posy":0,
                    "visited":false,
                    "territory": null
                };
                let elementTerritory = new Territory(territory.name, elemento);
                elemento.territory = elementTerritory;
                this.territories.push(elemento);
                /*this.territories.push({
                    "posx":0,
                    "posy":0,
                    "visited":false,
                    "territory": new Territory(territory.name)
                });*/
            }
        }

        for( let item of map.continents){
            for(let territory of item.territories){
                for(let neighbor of territory.neighbors){
                    this.search(territory.name).territory.addNeighbor(neighbor, 
                        this.search(neighbor.name));
                }
            }
        }
       
        console.log(this.territories);
    }

    search( name ){
        for( let item of this.territories){
            if( item.territory.getName() === name){
                return item;
            }
        }
    }

    asignarPosicion() {
        let visited = [];
        let land = this.territories.find((item) => item.visited == false);
        land.visited = true;
        land.posx = 500;
        land.posy = 500;
        visited.push(land);
        while(visited.length){
            let tupla = land.territory.neighbors.find((item)=> 
            item.territory.territory.getJsonData().visited == false);
            land = tupla.territory;
        }
        
    }

    draw() {
        let posX = 0;
        let posY = 0;
        for (let item of this.territories) {
            if( item.posx === 0){
                posX = 400;
                if( item.posy === 0){
                    posY = 400;
                }
            }else {
                posX = item.posx;
                posY = item.posy;
            }
            let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
            circle.setAttribute('cx',posX);
            circle.setAttribute('cy',posY);
            circle.setAttribute('r',40);
            circle.setAttribute('fill','red');
            this.board.appendChild(circle); 
            item.posx = posX;
            item.posy = posY;
            circle.addEventListener("click", function () {
                console.log( item.territory.getName() );
            });
            for (let neighbor of item.territory.neighbors){
                let degrees = neighbor.degrees;
                let territory = this.search(neighbor.name);
                var y = (Math.sin(degrees * (Math.PI / 180)) * 40) + posY + 250;
                var x = (Math.cos(degrees * (Math.PI / 180)) * 40) + posX + 250;
                let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                circle.setAttribute('cx',x);
                circle.setAttribute('cy',y);
                circle.setAttribute('r',40);
                circle.setAttribute('fill','red');
                this.board.appendChild(circle); 
                territory.posx = x;
                territory.posy = y;
            }
        }
    }


}
export {Board};