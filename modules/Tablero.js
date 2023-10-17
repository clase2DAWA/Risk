import { Territorio } from "./Territorio.js";

class Tablero {
  constructor() {
    this.territorios = new Array();
    this.ns = "http://www.w3.org/2000/svg";
  }

  setTerritorios(numTerritorio, cx, cy, r) {
    for (let i = 0; i < numTerritorio; i++) {
      this.territorios.push(new Territorio(r, cx, cy));
    }
  }

  drawTerritorios(svg) {
    let terr;
    let x, y, max, min;
    for (let i = 0; i < this.territorios.length; i++) {
      min = this.territorios[i].cx;
      max = svg.getAttribute("width") - min * 2;
      x = Math.floor(min + Math.random() * max);
      min = this.territorios[i].cy;
      max = svg.getAttribute("height") - min * 2;
      y = Math.floor(min + Math.random() * max);

      terr = document.createElementNS(this.ns, "circle");
      terr.setAttribute("cx", x);
      terr.setAttribute("cy", y);
      terr.setAttribute("r", this.territorios[i].r);
      terr.setAttribute("fill", this.territorios[i].fill);
      terr.setAttribute("stroke", this.territorios[i].stroke);
      terr.setAttribute("stroke-width", this.territorios[i].strokeWidth);
      svg.appendChild(terr);
    }

    return svg;
  }
}

export { Tablero };
