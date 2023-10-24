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
    // Dibujamos primero las lineas que unen los territorios para que no hayan problemas  con el evento de "click"
    this.linkNeighbors();
    // Dibujamos los territorios en su posicion correspondiente
    for (var continent in this.map) {
      for (let terr of this.map[continent].territories) {
        if (terr.x != 0) {
          circle = document.createElementNS(this.ns, "circle");
          circle.setAttribute("cx", terr.x);
          // terr.x = x;
          circle.setAttribute("cy", terr.y);
          // terr.y = y;
          circle.setAttribute("r", 40);
          circle.setAttribute("fill", this.map[continent].color);
          circle.addEventListener("click", function (e) {
            console.log(terr.territory.getName());
          });
          this.board.appendChild(circle);
        }
      }
    }
  }

  linkNeighbors() {
    let link;
    for (var continent in this.map) {
      // console.log(continent);
      for (var terr of this.map[continent].territories) {
        if (terr.neighbors != null) {
          // console.log(terr.territory.getName());
          this.paintLinks(this.generateLinks(terr.x, terr.y, terr.neighbors));
        }
      }
    }
  }

  generateLinks(x, y, neighbors) {
    let linesList = [];
    if (neighbors != null) {
      for (var cont in this.map) {
        for (var terr of this.map[cont].territories) {
          if (neighbors.includes(terr.territory.getName())) {
            let line = document.createElementNS(this.ns, "line");
            line.setAttribute("x1", x);
            line.setAttribute("y1", y);
            line.setAttribute("x2", terr.x);
            line.setAttribute("y2", terr.y);
            line.setAttribute("stroke", this.map[cont].color);
            line.setAttribute("stroke-width", "2");
            linesList.push(line);
          }
        }
      }
    }
    return linesList;
  }

  paintLinks(linesList) {
    for (let item of linesList) {
      this.board.appendChild(item);
    }
  }

  setMap() {
    this.map = {
      Europe: {
        color: "#2c93c4",
        territories: [
          {
            x: 560,
            y: 390,
            territory: new Territory("Western Europe"),
            neighbors: [
              "North Africa",
              "Southern Europe",
              "Northen Europe",
              "Great Britain",
            ],
          },
          {
            x: 640,
            y: 260,
            territory: new Territory("Northen Europe"),
            neighbors: [
              "Southern Europe",
              "Western Europe",
              "Russia",
              "Scandinavia",
              "Great Britain",
            ],
          },
          {
            x: 690,
            y: 360,
            territory: new Territory("Southern Europe"),
            neighbors: [
              "Egypt",
              "North Africa",
              "Western Europe",
              "Northen Europe",
              "Russia",
              "Middle East",
            ],
          },
          {
            x: 650,
            y: 150,
            territory: new Territory("Scandinavia"),
            neighbors: ["Russia", "Great Britain", "Iceland", "Northen Europe"],
          },
          {
            x: 525,
            y: 175,
            territory: new Territory("Iceland"),
            neighbors: ["Greenland", "Great Britain", "Scandinavia"],
          },
          {
            x: 750,
            y: 230,
            territory: new Territory("Russia"),
            neighbors: [
              "Ural",
              "Afghanistan",
              "Scandinavia",
              "Northen Europe",
              "Southern Europe",
              "Middle East",
            ],
          },
          {
            x: 510,
            y: 275,
            territory: new Territory("Great Britain"),
            neighbors: [
              "Western Europe",
              "Scandinavia",
              "Iceland",
              "Northen Europe",
            ],
          },
        ],
      },
      NorthAmerica: {
        color: "#cfcf51",
        territories: [
          {
            x: 175,
            y: 400,
            territory: new Territory("Central America"),
            neighbors: ["Venezuela", "Western US", "Eastern US"],
          },
          {
            x: 100,
            y: 100,
            territory: new Territory("Alaska"),
            neighbors: ["Kamchatka", "Northwest Territory", "Alberta"],
          },
          {
            x: 175,
            y: 200,
            territory: new Territory("Alberta"),
            neighbors: [
              "Ontario",
              "Western US",
              "Alaska",
              "Northwest Territory",
            ],
          },
          {
            x: 275,
            y: 200,
            territory: new Territory("Ontario"),
            neighbors: [
              "Quebec",
              "Greenland",
              "Eastern US",
              "Alberta",
              "Western US",
              "Northwest Territory",
            ],
          },
          {
            x: 375,
            y: 200,
            territory: new Territory("Quebec"),
            neighbors: ["Greenland", "Eastern US", "Ontario"],
          },
          {
            x: 400,
            y: 75,
            territory: new Territory("Greenland"),
            neighbors: ["Iceland", "Quebec", "Northwest Territory", "Ontario"],
          },
          {
            x: 175,
            y: 300,
            territory: new Territory("Western US"),
            neighbors: ["Alberta", "Eastern US", "Central America", "Ontario"],
          },
          {
            x: 275,
            y: 300,
            territory: new Territory("Eastern US"),
            neighbors: ["Quebec", "Ontario", "Central America", "Western US"],
          },
          {
            x: 230,
            y: 100,
            territory: new Territory("Northwest Territory"),
            neighbors: ["Alaska", "Greenland", "Ontario", "Alberta"],
          },
        ],
      },
      SouthAmerica: {
        color: "#a72452",
        territories: [
          {
            x: 275,
            y: 500,
            territory: new Territory("Venezuela"),
            neighbors: ["Central America", "Peru", "Brazil"],
          },
          {
            x: 250,
            y: 600,
            territory: new Territory("Peru"),
            neighbors: ["Venezuela", "Brazil", "Argentina"],
          },
          {
            x: 375,
            y: 600,
            territory: new Territory("Brazil"),
            neighbors: ["North Africa", "Peru", "Argentina", "Venezuela"],
          },
          {
            x: 300,
            y: 725,
            territory: new Territory("Argentina"),
            neighbors: ["Peru", "Brazil"],
          },
        ],
      },
      Africa: {
        color: "#b15901",
        territories: [
          {
            x: 600,
            y: 550,
            territory: new Territory("North Africa"),
            neighbors: [
              "Egypt",
              "Congo",
              "East Africa",
              "Brazil",
              "Western Europe",
            ],
          },
          {
            x: 730,
            y: 560,
            territory: new Territory("Egypt"),
            neighbors: ["East Africa", "North Africa", "Southern Europe"],
          },
          {
            x: 800,
            y: 660,
            territory: new Territory("East Africa"),
            neighbors: [
              "Madagascar",
              "Congo",
              "South Africa",
              "Egypt",
              "North Africa",
            ],
          },
          {
            x: 680,
            y: 660,
            territory: new Territory("Congo"),
            neighbors: ["North Africa", "East Africa", "South Africa"],
          },
          {
            x: 700,
            y: 775,
            territory: new Territory("South Africa"),
            neighbors: ["Madagascar", "Congo", "East Africa"],
          },
          {
            x: 850,
            y: 785,
            territory: new Territory("Madagascar"),
            neighbors: ["East Africa", "South Africa"],
          },
        ],
      },
      Australia: {
        color: "#972efb",
        territories: [
          {
            x: 1010,
            y: 600,
            territory: new Territory("Indonesia"),
            neighbors: ["Siam", "New Guinea", "Western Australia"],
          },
          {
            x: 1200,
            y: 580,
            territory: new Territory("New Guinea"),
            neighbors: ["Eastern Australia", "Western Australia", "Indonesia"],
          },
          {
            x: 1200,
            y: 690,
            territory: new Territory("Eastern Australia"),
            neighbors: ["New Guinea", "Western Australia"],
          },
          {
            x: 1100,
            y: 700,
            territory: new Territory("Western Australia"),
            neighbors: ["New Guinea", "Eastern Australia", "Indonesia"],
          },
        ],
      },
      Asia: {
        color: "#38b156",
        territories: [
          {
            x: 825,
            y: 425,
            territory: new Territory("Middle East"),
            neighbors: ["Russia", "India", "Afghanistan"],
          },
          {
            x: 840,
            y: 300,
            territory: new Territory("Afghanistan"),
            neighbors: ["India", "Middle East", "China", "Ural", "Russia"],
          },
          {
            x: 925,
            y: 410,
            territory: new Territory("India"),
            neighbors: ["China", "Middle East", "Siam", "Afghanistan"],
          },
          {
            x: 1025,
            y: 390,
            territory: new Territory("China"),
            neighbors: [
              "Siam",
              "India",
              "Mongolia",
              "Ural",
              "Siberia",
              "Afghanistan",
            ],
          },
          {
            x: 1020,
            y: 490,
            territory: new Territory("Siam"),
            neighbors: ["Indonesia", "India", "China"],
          },
          {
            x: 850,
            y: 175,
            territory: new Territory("Ural"),
            neighbors: ["Siberia", "Russia", "Afghanistan", "China"],
          },
          {
            x: 960,
            y: 155,
            territory: new Territory("Siberia"),
            neighbors: ["Ural", "China", "Mongolia", "Irkutsk", "Yakutsk"],
          },
          {
            x: 1065,
            y: 210,
            territory: new Territory("Irkutsk"),
            neighbors: ["Siberia", "Yakutsk", "Kamchatka", "Mongolia"],
          },
          {
            x: 1090,
            y: 310,
            territory: new Territory("Mongolia"),
            neighbors: ["Japan", "China", "Siberia", "Irkutsk", "Kamchatka"],
          },
          {
            x: 1220,
            y: 300,
            territory: new Territory("Japan"),
            neighbors: ["Kamchatka", "Mongolia"],
          },
          {
            x: 1100,
            y: 120,
            territory: new Territory("Yakutsk"),
            neighbors: ["Kamchatka", "Irkutsk", "Siberia"],
          },
          {
            x: 1200,
            y: 180,
            territory: new Territory("Kamchatka"),
            neighbors: ["Alaska", "Japan", "Irkutsk", "Mongolia"],
          },
        ],
      },
    };
  }
}

export { Board };
