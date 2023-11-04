import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
  constructor(board) {
    this.board = board;
    this.territories = [];
    for (let item of map.continents) {
      for (let territory of item.territories) {
        let landDataInformation = {
          posx: 0,
          posy: 0,
          visited: false,
          territory: null,
        };
        let land = new Territory(territory.name, landDataInformation);
        landDataInformation.territory = land;
        this.territories.push(landDataInformation);
      }
    }

    for (let item of map.continents) {
      for (let territory of item.territories) {
        for (let neighbor of territory.neighbors) {
          this.search(territory.name).territory.addNeighbor(
            this.search(neighbor.name)
          );
        }
      }
    }

    console.log(this.territories);
  }

  search(name) {
    // Revisando el codigo hemos encontrado que el método search podia ser mejorado haciendo uso de la función find de los Arrays.
    return this.territories.find((item) => item.territory.getName() === name);
  }

  setTerritories() {
    // Cogemos el primer territorio del array de territories
    let land = this.territories.find((item) => item.visited == false);
    land.posx = 300;
    land.posy = 300;
    land.visited = true;

    let visited = [];
    visited.push(land);

    console.log(land.territory.getName());

    while (visited.length) {
      let neighborData = visited
        .at(-1)
        .territory.neighbors.find((item) => item.visited == false);

      if (neighborData != null) {
        let neighbor = neighborData.territory;
        neighborData.posx = land.posx + 150;
        neighborData.posy = land.posy;
        neighborData.visited = true;

        console.log(neighbor.getName());

        visited.push(neighborData);

        land = neighborData;
      } else {
        // Borra el ultimo de visited
        visited.pop();
      }
    }
  }

  draw() {
    for (let item of this.territories) {
      let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", item.posx);
      circle.setAttribute("cy", item.posy);
      circle.setAttribute("r", 40);
      circle.setAttribute("fill", "red");
      this.board.appendChild(circle);
      circle.addEventListener("click", function () {
        console.log(item.territory.getName());
      });
    }
  }
}

export { Board };
