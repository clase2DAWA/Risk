class Territory {
  constructor(name, jsonData) {
    this.name = name;
    this.army = 0;
    this.jsonData = jsonData;
  }

  getname() {
    return this.name;
  }

  getJsonData() {
    return this.jsonData;
  }

  setArmy(army) {
    this.army = army;
  }
}

export { Territory };
