import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
  constructor(board) {
    this.board = board;
    this.ns = "http://www.w3.org/2000/svg";
    this.territories = [];
    // Hacemos un bucle forof para recorrer la lista de continentes
    for (let continent of map.continents) {
      // Con una segunda vuelda recorremos todos los territorios de cada continente
      for (let territory of continent.territories) {
        // Vamos a crear los distintos territorios
        this.territories.push({
          posX: 0,
          posY: 0,
          // Usamos el nombre de cada territorio que tenemos dentro del mapa
          territory: new Territory(territory.name),
        });
      }
    }
    // Creamos los vecinos de cada territorio
    for (let continent of map.continents) {
      for (let territory of continent.territories) {
        // Recogemos la referencia a cada país y establecemos los vecinos de cada uno con la información del map
        this.search(territory.name).top = this.search(territory.top);
        this.search(territory.name).bottom = this.search(territory.bottom);
        this.search(territory.name).left = this.search(territory.left);
        this.search(territory.name).right = this.search(territory.right);
        this.search(territory.name).topLeft = this.search(territory.topLeft);
        this.search(territory.name).topRight = this.search(territory.topRight);
        this.search(territory.name).bottomLeft = this.search(
          territory.bottomLeft
        );
        this.search(territory.name).bottomRight = this.search(
          territory.bottomRight
        );
      }
    }
    console.log(this.territories);
    /* Codigo antiguo
    this.territories.push({
      posX: 0,
      posY: 0,
      territory: new Territory("Spain"),
    });
    this.territories.push({
      posX: 0,
      posY: 0,
      territory: new Territory("Portugal"),
    });*/
  }

  search(name) {
    for (const item of this.territories) {
      if (item.territory.getName() === name) {
        return item.territory;
      }
    }
  }

  draw() {
    let terr;
    let x = 40;
    let y;
    for (let item of this.territories) {
      x += 150;
      y = 50;

      terr = document.createElementNS(this.ns, "circle");
      terr.setAttribute("cx", x);
      item.territory.posX = x;
      terr.setAttribute("cy", y);
      item.territory.posY = y;
      terr.setAttribute("r", 40);
      terr.setAttribute("fill", "red");
      terr.addEventListener("click", function (e) {
        console.log(item.territory.getName());
      });
      this.board.appendChild(terr);
    }
  }
}

export { Board };
