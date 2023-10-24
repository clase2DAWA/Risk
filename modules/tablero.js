import { Territorios } from "./territorio.js";
import { map } from "./map.js";

class Tablero {
  constructor(tablero) {
  this.tablero = tablero;
  this.territorios = [];
  for (let item of map.continents) {
    for (let territorio of item.territorios) {
      this.territorios.push(
        {
          "name": territorio.name,
        }
      );
    }
  }
  for (let item of map.continents) {
    for (let territorio of item.territorios) {
        this.search(territorio.name).top = this.search(territorio.top);
        this.search(territorio.name).topLeft = this.search(territorio.topLeft);
        this.search(territorio.name).topRight = this.search(territorio.topRight);
        this.search(territorio.name).left = this.search(territorio.left);
        this.search(territorio.name).right = this.search(territorio.right);
        this.search(territorio.name).bottomLeft = this.search(territorio.bottomLeft);
        this.search(territorio.name).bottomRight = this.search(territorio.bottomRight);
        this.search(territorio.name).bottom = this.search(territorio.bottom);
    }
  }
  console.log(this.territorios);
}

search(name) {
  for (let item of this.territorios) {
    if (item.name === name) {
      return item;
    }
  }
}

  drawTerritorios() {
    let posx = 50;
    let posy = 50;
    for (let item of this.territorios) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', posx);
      circle.setAttribute('cy', posy);
      circle.setAttribute('r', 40);
      circle.setAttribute('fill', "red");

      circle.addEventListener("click", function () {
        console.log(item.name);
      });
      this.board.appendChild(circle);
      posx += 90;
    }
  }

}

export { Tablero };