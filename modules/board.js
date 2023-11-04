import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
  constructor(board) {
    this.board = board;
    this.territories = [];
    for (let item of map.continents) {
      for (let territory of item.territories) {
        let element = {
          posx: 0,
          posy: 0,
          visited: false,
          territory: null,
        };
        let elementTerritory = new Territory(territory.name, element);
        element.territory = elementTerritory;
        this.territories.push(element);
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
  }

  search(name) {
    for (let item of this.territories) {
      if (item.territory.getName() === name) {
        return item;
      }
    }
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
