import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
  constructor(board) {
    this.board = board;
    this.metaData = new Map();
    let territories = [];
    for (let item of map.continents) {
      for (let territory of item.territories) {
        let element = new Territory(territory.name);
        territories.push(element);
        this.metaData.set(element, {
          x: 0,
          y: 0,
          visited: false,
        });
      }
    }

    for (let item of map.continents) {
      for (let territory of item.territories) {
        for (let neighbor of territory.neighbors) {
          territories
            .find((element) => element.name === territory.name)
            .addNeighbor(neighbor,territories.find((element) => element.name === neighbor.name));
        }
      }
    }
    console.log(this.metaData);
    // Asignamos las posiciones de cada territorio
    this.asignarPosicion();
  }

  asignarPosicion() {
    let land = this.metaData.keys().next().value;
    let support = [land];
    let fatherData = this.metaData.get(land);
    fatherData.x = 500;
    fatherData.y = 500;
    fatherData.visited = true;

    while (support.length) {
      let territoryTemp = support.at(-1);
      // Guardamos la metaData del padre para usarla
      fatherData = this.metaData.get(territoryTemp)
      // console.log(fatherData);
      let a = territoryTemp.neighbors;
      support.pop();

      for (let item of a) {
        let c = this.metaData.get(item.territory);
        if (!c.visited) {
          c.visited = true;
          support.push(item.territory);
          // Asignamos la x e y a cada vecino
          let degrees = item.neighbor.degrees;
          c.x = Math.cos(degrees * (Math.PI / 180)) * 110 + fatherData.x;
          c.y = Math.sin(degrees * (Math.PI / 180)) * 110 + fatherData.y;
        }
      }
    }
  }

  draw() {
    let territories = Array.from(this.metaData.keys());
    console.log(territories);
    for (let item of territories) {
      console.log("HOLA");
      let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", this.metaData.get(item).x);
      circle.setAttribute("cy", this.metaData.get(item).y);
      circle.setAttribute("r", 40);
      circle.setAttribute("fill", "red");
      console.log(circle);
      this.board.appendChild(circle);
      circle.addEventListener("click", function () {
        console.log(item.getName());
      });
    }
  }
}

export { Board };
