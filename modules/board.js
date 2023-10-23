import { Terrytory } from "./territory.js";
import { Continent } from "./continents.js";

let Board = class {
    constructor(board) {
        this.continents = [];
        this.board = board;
        let europa = new Continent();
        europa.europe();
        this.continents.push(europa);
    }

    draw() {
        let r = 25;
        let pos = 0;
        for (let item of this.continents) {
            for (let item1 of item.territories) {
                var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                let width = (r + r) * 3;
                let y = 0;
                rect.setAttributeNS(null, 'x', pos);
                rect.setAttributeNS(null, 'y', y);
                rect.setAttributeNS(null, 'width', width);
                rect.setAttributeNS(null, 'height', width);
                rect.setAttributeNS(null, 'fill', 'red');
                this.board.appendChild(rect);
                let posicionesPaises = [];
                posicionesPaises.push({
                    "name": "main",
                    "posX": pos + (width / 2),
                    "posY": (y + width) / 2
                });
                posicionesPaises.push({
                    "name": "pos1",
                    "posX": pos + (width / 2),
                    "posY": (((y + width) / 2) - r) / 2
                });
                posicionesPaises.push({
                    "name": "pos2",
                    "posX": pos +(((width / 2) -r) / 2) * 5,
                    "posY": (((y + width) / 2) - r) / 2
                });
                posicionesPaises.push({
                    "name": "pos3",
                    "posX": pos +(((width / 2) -r) / 2) * 5,
                    "posY": (y + width) / 2
                });
                posicionesPaises.push({
                    "name": "pos4",
                    "posX": pos +(((width / 2) -r) / 2) * 5,
                    "posY": ((((y + width) / 2) - r) / 2) *5
                });
                posicionesPaises.push({
                    "name": "pos5",
                    "posX": pos + (width / 2),
                    "posY": ((((y + width) / 2) - r) / 2) *5
                });
                posicionesPaises.push({
                    "name": "pos6",
                    "posX": pos +((width / 2) -r) / 2,
                    "posY": ((((y + width) / 2) - r) / 2) *5
                });
                posicionesPaises.push({
                    "name": "pos7",
                    "posX": pos +((width / 2) -r) / 2,
                    "posY": (y + width) / 2
                });
                posicionesPaises.push({
                    "name": "pos8",
                    "posX": pos +((width / 2) -r) / 2,
                    "posY": (((y + width) / 2) - r) / 2
                });
                let centroX = pos + (width / 2);
                let centroY = (y + width) / 2;
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', centroX);
                circle.setAttribute('cy', centroY);
                circle.setAttribute('r', r);
                circle.setAttribute('fill', 'blue');
                circle.onclick = function () {
                    console.log(item1.territory.getName())
                }
                item1.posX = pos;
                item1.posY = r;
                this.board.appendChild(circle);
                for (let item2 of item1.territory.neighbor) {
                    for (let pos of posicionesPaises) {
                        const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        console.log(pos.name);
                        circle2.setAttribute('cx', pos.posX);
                        circle2.setAttribute('cy', pos.posY);
                        circle2.setAttribute('r', r);
                        circle2.setAttribute('fill', 'yellow');
                        circle2.onclick = function () {
                            console.log(item2.getName())
                        }
                        this.board.appendChild(circle2);
                    }

                    item1.posX = pos;
                    item1.posY = r;
                }
                pos += (r + r) * 3 + 20;
            }
        }
    }
}

export { Board };