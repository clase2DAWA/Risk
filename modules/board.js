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
    this.map = {};
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

  draw2() {
    let circle;
    let x = 0;
    let y = 100;

    for (var continent in this.map) {
      for (let terr of this.map[continent].territories) {
        x += 150;

        circle = document.createElementNS(this.ns, "circle");
        circle.setAttribute("cx", x);
        terr.territory.posX = x;
        circle.setAttribute("cy", y);
        terr.territory.posY = y;
        circle.setAttribute("r", 40);
        circle.setAttribute("fill", this.map[continent].color);
        circle.addEventListener("click", function (e) {
          console.log(terr.territory.getName());
        });
        this.board.appendChild(circle);
      }
      y += 150;
      x = 0;
    }
  }

  setMap() {
    this.map = {
      Europe: {
        color: "#2c93c4",
        territories: [
          {
            x: 0,
            y: 0,
            territory: new Territory("Western Europe"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Northen Europe"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Southern Europe"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Scandinavia"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Iceland"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Russia"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Great Britain"),
          },
        ],
      },
      NorthAmerica: {
        color: "#cfcf51",
        territories: [
          {
            x: 0,
            y: 0,
            territory: new Territory("Central America"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Alaska"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Alberta"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Ontario"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Quebec"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Greenland"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Western US"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Eastern US"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Northwest Territory"),
          },
        ],
      },
      SouthAmerica: {
        color: "#a72452",
        territories: [
          {
            x: 0,
            y: 0,
            territory: new Territory("Venezuela"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Peru"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Brazil"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Argentina"),
          },
        ],
      },
      Africa: {
        color: "#b15901",
        territories: [
          {
            x: 0,
            y: 0,
            territory: new Territory("North Africa"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Egypt"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("East Africa"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Congo"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("South Africa"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Madagascar"),
          },
        ],
      },
      Australia: {
        color: "#972efb",
        territories: [
          {
            x: 0,
            y: 0,
            territory: new Territory("Indonesia"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("New Guinea"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Eastern Australia"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Western Australia"),
          },
        ],
      },
      Asia: {
        color: "#38b156",
        territories: [
          {
            x: 0,
            y: 0,
            territory: new Territory("Middle Eas"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Afghanistan"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("India"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("China"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Siam"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Ural"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Siberia"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Irkutsk"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Mongolia"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Japan"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Yakutsk"),
          },
          {
            x: 0,
            y: 0,
            territory: new Territory("Kamchatka"),
          },
        ],
      },
    };
  }
}

export { Board };
