import { RISK } from "./Game.js"
    RISK.territory = class {

        constructor (name,y,x,color,army) {

            this.name = name;
            this.y = y;
            this.x = x;
            this.color = color;
            this.army = army;
            this.neighbors = [];
            this.r=50;
        }

        getName() {
            return this.name;
        }

        getNeighbors () {
            return this.neighbors;
        }   
        getY() {
            return this.y;
        }

        getX() {
            return this.x;
        }
        getColor() {
            return this.color;
        }

        getArmy() {
            return this.army;
        }
        getR() {
            return this.r;
        }

        setArmy(army) {
            this.army = army;
        }
    }

export { RISK };