import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
  constructor(board) {
    this.board = board;
    this.territories = [];
    for (let item of map.continents) {
      for (let territory of item.territories) {
        let landMetaInformation = {
          posx: 0,
          posy: 0,
          visited: false,
          territory: null,
        };
        let land = new Territory(territory.name, landMetaInformation);
        landMetaInformation.territory = land;
        this.territories.push(landMetaInformation);
      }
    }

    for (let item of map.continents) {
      for (let territory of item.territories) {
        for (let neighbor of territory.neighbors) {
          this.search(territory.territory.name).territory.addNeighbor(
            this.search(neighbor.name)
          );
        }
      }
    }

    console.log(this.territories);
  }

  search(name) {
    for (let item of this.territories) {
      if (item.territory.getName() === name) {
        return item;
      }
    }
  }

  x() {
    // Cogemos el promer territorio del array de territories
    let land = this.territories.find((item) => item.visited == false);
    land.posx = 300;
    land.posy = 300;
    land.visited = true;
    let visited = [];
    visited.push(land);
  }

  draw() {
    let pos = 40;
    for (let item of this.territories) {
      let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", pos);
      circle.setAttribute("cy", 40);
      circle.setAttribute("r", 40);
      circle.setAttribute("fill", "red");
      this.board.appendChild(circle);
      item.posx = pos;
      item.posy = 40;
      circle.addEventListener("click", function () {
        console.log(item.territory.getName());
      });

      pos += 100;
    }
  }
}
export { Board };
