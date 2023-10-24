import { RISK } from "./Game.js"
    RISK.territory = class {

        constructor (name,color,top,right,bottom,left,topLeft,topRight,bottomLeft,bottomRight) {

            this.name = name;
            this.color = color;
            //this.army = army;
            this.top = null;
            this.right = null;
            this.bottom = null;
            this.left = null;
            this.topLeft = null;
            this.topRight = null;
            this.bottomLeft = null;
            this.bottomRight = null;
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
        getR() {
            return this.r;
        }
        setArmy(army) {
            this.army = army;
        }
    }

export { RISK };