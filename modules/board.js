import { map } from "./map.js";

class Board {

  constructor(board) {
    this.board = board;
    this.territories = [];
    for (let item of map.continents) {
      for (let territory of item.territories) {
        this.territories.push(
          {
            "posx": 0,
            "posy": 0,
            "name": territory.name,
            "color": item.color
          }
        );
      }
    }
    for (let item of map.continents) {
      for (let territory of item.territories) {
          this.search(territory.name).top = this.search(territory.top);
          this.search(territory.name).topLeft = this.search(territory.topLeft);
          this.search(territory.name).topRight = this.search(territory.topRight);
          this.search(territory.name).left = this.search(territory.left);
          this.search(territory.name).right = this.search(territory.right);
          this.search(territory.name).bottomLeft = this.search(territory.bottomLeft);
          this.search(territory.name).bottomRight = this.search(territory.bottomRight);
          this.search(territory.name).bottom = this.search(territory.bottom);
      }
    }
    console.log(this.territories);
  }

  search(name) {
    for (let item of this.territories) {
      if (item.name === name) {
        return item;
      }
    }
  }

  draw() {
    let posx = 50;
    let posy = 50;
    for (let item of this.territories) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', posx);
      circle.setAttribute('cy', posy);
      circle.setAttribute('r', 40);
      circle.setAttribute('fill', item.color);

      circle.addEventListener("click", function () {
        console.log(item.name);
      });
      this.board.appendChild(circle);
      posx += 90;
    }
  }

}

export { Board };