let TERRITORIO = {};

TERRITORIO.territorio = class {
    constructor(name){
        this.name = name;
        this.neighbor = [];
        this.site = null;
    }
    assignNeighbor(territorio){
        this.neighbor.push(territorio.getName());
    }
    getName(){
        return this.name;
    }
}

export { TERRITORIO };