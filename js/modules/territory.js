/*
class Territorio {
    constructor(x, y, radio, id, fondo) {
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.id = id;
    }
}
*/
class Territory {

    constructor(name) {
        this.name = name;
        this.army = 0;
    }

    getName() {
        return this.name;
    }

    setArmy(army) {
        this.army = army;
    }
}

export { Territory }