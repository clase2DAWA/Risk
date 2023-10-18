class Territory{
    constructor(name){
        this.name = name
        this.army = 0;
    }

    getName() {
        return this.name;
    }

    setArmy(army) {
        this.army = army;
    }
}

export {Territory};