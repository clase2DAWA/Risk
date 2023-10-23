import { Territory } from "./territory.js";

class Board {
  constructor(board) {
    this.board = board;
    this.territories = [];

    // Creamos un array de nombres de territorios
    let territoryNames = ["Spain", "Portugal", "France", "Germany", "Italy", "Netherlands", "Belgium", "Switzerland", "Austria"];

    let posx = 50;
    let posy = 50;

    for (let name of territoryNames) {
      this.territories.push({
        "posx": posx,
        "posy": posy,
        "territory": new Territory(name)
      });

      posx += 100;

      // Si ya hemos alcanzado 3 círculos en una fila, pasamos a la siguiente fila
      if (posx === 350) {
        posx = 50;
        posy += 100;
      }
    }
  }

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
}

export { Board };