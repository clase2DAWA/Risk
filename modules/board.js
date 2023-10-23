import { Territory } from "./territory.js";

class Board {
  constructor(board) {
    this.board = board;
    this.territories = [];

    // Creamos un array de nombres de territorios
    let territoryNames = ["Portugal", "Spain", "France", "Germany", "Italy", "Netherlands", "Belgium", "Switzerland", "Austria"];

    let posx = 50;
    let posy = 50;

    for (let name of territoryNames) {
      this.territories.push({
        "posx": posx,
        "posy": posy,
        "territory": new Territory(name),
        "neighbors": [] // Inicialmente, no tiene vecinos
      });

      posx += 100;

      // Si ya hemos alcanzado 3 territorios en una fila, pasamos a la siguiente fila
      if (posx === 350) {
        posx = 50;
        posy += 100;
      }

      // Luego, podemos definir los territorios vecinos para cada territorio
      this.defineNeighbors();
    }
  }

  // Función para definir los territorios vecinos
  defineNeighbors() {
    // Define los índices de los territorios en el array
    let numRows = 3;
    let numCols = 3;
    for (let item of this.territories) {
      let i = this.territories.indexOf(item); // Obtén el índice del elemento actual

      let row = Math.floor(i / numRows);
      let col = i % numCols;

      // Busca los vecinos en las direcciones arriba, abajo, izquierda y derecha
      let neighbors = [];
      if (row > 0) neighbors.push(i - numRows); // Vecino arriba
      if (col < numCols - 1) neighbors.push(i + 1); // Vecino derecha
      if (row < numRows - 1) neighbors.push(i + numRows); // Vecino abajo
      if (col > 0) neighbors.push(i - 1); // Vecino izquierda

      item.neighbors = neighbors;
    }
  }

  draw() {
    const self = this;
    for (let item of this.territories) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', item.posx);
      circle.setAttribute('cy', item.posy);
      circle.setAttribute('r', 40);
      circle.setAttribute('fill', 'red');
      this.board.appendChild(circle);

      circle.addEventListener("click", function () {
        console.log(`This territory is ${item.territory.getName()} and its neighbors are : ${item.neighbors.map(index => self.territories[index].territory.getName()).join(', ')}`);
      });
    }
  }
}

export { Board };