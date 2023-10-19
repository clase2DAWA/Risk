import { RISK } from "./Game.js"
    RISK.country = class {

        constructor (name) {

            this.name = name;
            this.army = 0;
            //this.radio = radio;
            //this.gotNeighbors = false;
        }

        getName() {
            return this.name;
        }

        getArmy() {
            return this.army;
        }

        setArmy(army) {
            this.army = army;
        }
    }

export { RISK };