import { Territory } from "./territory.js";

class Board {
  constructor(board) {
    this.board = board;
    this.ns = "http://www.w3.org/2000/svg";
    this.territories = [];
    this.territories.push({
      posX: 0,
      posY: 0,
      territory: new Territory("Spain"),
    });
    this.territories.push({
      posX: 0,
      posY: 0,
      territory: new Territory("Portugal"),
    });
  }

  draw() {
    let terr;
    let x, y, max, min;
    for (let item of this.territories) {
      max = 400;
      min = 40;
      x = Math.floor(min + Math.random() * max);
      min = 40;
      y = Math.floor(min + Math.random() * max);

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
