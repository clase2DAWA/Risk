territorio = class {
    constructor(name){
        this.name = name;
        this.neighbor = [];
    }
    assignNeighbor(territorio){
        this.neighbor.push(territorio.getName());
    }
    getName(){
        return this.name;
    }
}

let españa = new territorio(españa);
let gibraltar = new territorio(gibraltar);
let italia = new territorio(italia);
let inglaterra = new territorio(inglaterra);
