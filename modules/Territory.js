import { RISK } from "./Game.js"
    RISK.territory = class {

        constructor (name,color) {

            this.name = name;
            this.color = color;
            //this.army = army;
            this.neighbors=[];
            this.x = 0;
            this.y = 0;
        }

        getName() {
            return this.name;
        }
        getNeighbors () {
            return this.neighbors;
        }   
        getColor() {
            return this.color;
        }
        /*getArmy() {
            return this.army;
        }*/
        setArmy(army) {
            this.army = army;
        }
        addNeighbor(neighbor){
            this.neighbors.push(neighbor);
        }
        setY(y){
            this.y=y;
        }
        setX(x){
            this.x=x
        }
    }

export { RISK };