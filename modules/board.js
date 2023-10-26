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
          posx: 0,
          posy: 0,
          // Usamos el nombre de cada territorio que tenemos dentro del mapa
          territory: new Territory(territory.name),
        });
      }
    }
    // Creamos los vecinos de cada territorio
    for (let continent of map.continents) {
      for (let territory of continent.territories) {
        for (let neighbor of territory.neighbors) {
          this.search(territory.name).territory.addNeighbor(neighbor);
        }
      }
    }
  }

  search(name) {
    let result = null;
    for (let item of this.territories) {
      if (item.territory.getName() === name) {
        result = item;
      }
    }
    return result;
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

  // Pintar vecinos con algoritmo recursivo
  x() {
    let posX = 0;
    let posY = 0;
    let visited = [];

    // Cogemos el primer elemento del array de territorios
    let firstTerritory = this.territories.slice(0, 1).shift();
    // Pintamos el primer elemento diciendo que si la posicion es 0 la inicializamos a 300
    if (firstTerritory.posx === 0) {
      posX = 300;
      if (firstTerritory.posy === 0) {
        posY = 300;
      }
    }
    // Añadimos este territorio a la lista de visitados
    if (!visited.includes(firstTerritory)) {
      // Pintamos en el lienzo el primer elemento
      var circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      circle.setAttribute("cx", posX);
      circle.setAttribute("cy", posY);
      circle.setAttribute("r", 40);
      circle.setAttribute("fill", "#a80083");
      this.board.appendChild(circle);
      firstTerritory.posx = posX;
      firstTerritory.posy = posY;
      circle.addEventListener("click", function () {
        console.log(firstTerritory.territory.getName());
      });
      // Añadimos a la lista de visitados
      visited.push(firstTerritory);
    }
    console.log(visited);
    console.log("-----------------------------------------------");
    console.log(firstTerritory.territory.name);
    // Declaramos variables
    let obtain,
      terr,
      neighbor,
      neighborData,
      neighborX,
      neighborY,
      offsetX,
      offsetY;
    // Preguntamos a este territorio si tiene vecinos
    while (visited.length > 0) {
      // Cogemos el ultimo elemento del array de visitados
      terr = visited[visited.length - 1];
      if (terr.territory.neighbors.length > 0) {
        obtain = false;
        for (const neighborIt of terr.territory.neighbors) {
          if (
            this.search(neighborIt.name) != null &&
            this.search(neighborIt.name).posx == 0
          ) {
            neighbor = this.search(neighborIt.name);
            neighborData = neighborIt;
            console.log("PASA POR LA SELECCION DE VECINO");
            obtain = true;
          }
        }
        if (!obtain) {
          visited.pop();
        } else {
          // Aqui pintaremos el vecino
          // Establecemos el aumento de las coordenadas del padre
          neighborX = Math.cos(neighborData.degrees * (Math.PI / 180)) * 40;
          neighborY = Math.sin(neighborData.degrees * (Math.PI / 180)) * 40;
          // console.log(neighborData.degrees);
          console.log("X = " + neighborX + " Y = " + neighborY);
          // Calculamos offsets
          console.log(
            terr.territory.name + ": " + terr.posx + " --- " + terr.posy
          );
          // Controlamos que si los grados son hacia la derecha sumanos la x y si son para la izq los restamos
          if (neighborData.degrees > 0 && neighborData.degrees < 180) {
            neighborX += terr.posx + 100;
          } else if (neighborData.degrees == 0 || neighborData.degrees == 180) {
            neighborX = terr.posx;
          } else {
            neighborX = terr.posx - 100;
          }
          if (neighborData.degrees > 90 && neighborData.degrees < 270) {
            neighborY += terr.posy + 100;
          } else if (
            neighborData.degrees == 90 ||
            neighborData.degrees == 270
          ) {
            neighborY = terr.posy;
          } else {
            neighborY = terr.posy - 100;
          }

          neighbor.posx = neighborX;
          neighbor.posy = neighborY;
          console.log(neighbor);
          // Pintamos
          console.log("Antes del evento: " + neighbor.territory.name);

          this.generateCircle(
            neighborX,
            neighborY,
            40,
            "#a80083",
            neighbor.territory.getName()
          );

          console.log("Despues del evento: " + neighbor.territory.name);
          // Lo metemos a la lista de visitados
          visited.push(neighbor);
        }
      } else {
        visited.pop();
      }
    }
  }

  generateCircle(x, y, r, fill, name) {
    let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    circle.addEventListener("click", function () {
      console.log(name);
    });
    this.board.appendChild(circle);
  }
}

export { Board };
