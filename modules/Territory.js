import { RISK } from "./Game.js"
    RISK.territory = class {

        constructor (name,color) {

            this.name = name;
            this.color = color;
            //this.army = army;
            this.x = null;
            this.y = null;
            this.neighbors=[];

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
        getX(){
            return this.x;
        }
        getY(){
            return this.y;
        }

        setY(y){
            this.y=y;
        }
        setX(x){
            this.x=x
        }
    }

export { RISK };