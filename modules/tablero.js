import { Territorios } from "./territorios.js";

class Tablero {
  constructor(board) {
    this.territorios = ["Spain","Portugal","France","Italy","UK","Germany"];
    this.board = board;

    for (let name of territorios) {
      this.territories.push({
        "posx": posx,
        "posy": posy,
        "territory": new Territorios(name),
        "vecinos": [] 
      });
      posx += 100;
    }
  }

  drawTerritorios() {

    const self = this;
    for (let item of this.territorios) {

      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', item.posx);
      circle.setAttribute('cy', item.posy);
      circle.setAttribute('r', 40);
      circle.setAttribute('fill', 'red');
      this.board.appendChild(circle);

      circle.addEventListener("click", function () {
        console.log(Territorios.getName());
      })
    }
  }
}

export { Tablero };