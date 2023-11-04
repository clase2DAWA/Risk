class Territory {
  constructor(name, jsonData) {
    this.name = name;
    this.army = 0;
    this.neighbors = [];
    this.jsonData = jsonData;
  }

  getName() {
    return this.name;
  }

  getJsonData() {
    return this.jsonData;
  }

  setArmy(army) {
    this.army = army;
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}

export { Territory };
