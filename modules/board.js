import { map } from "./map.js";

class Board {

  constructor(board) {
    this.board = board;
    this.territories = [];
    for (let item of map.continents) {
      for (let territory of item.territories) {
        this.territories.push({
          "name": territory.name
        });
      }
    }
    console.log(map);
  }

  search(name) {
    for (let item of this.territories) {
      if (item.territory().getName() === name) {
        return item.territory;
      }
    }
  }

  /*
  draw() {
    for (let item of this.territories) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', item.posx);
      circle.setAttribute('cy', item.posy);
      circle.setAttribute('r', 40);
      circle.setAttribute('fill', 'red');
      this.board.appendChild(circle);

      circle.addEventListener("click", function () {
        console.log(item.territory.getName());
      });
    }
  }
*/

}

export { Board };