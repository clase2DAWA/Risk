import { Board } from "./modules/board.js";
import { Territory } from "./modules/territory.js";


let map = document.getElementById("board");
let board = new Board(map);

board.territories.push({
    posX: 500,
    posY: 400,
    r: 60,
    color: 'red',
    territory: new Territory("Western Europe"),
    neighbor: ["Great Britain", "Southern Europe", "Northern Europe"],
});

board.territories.push({
    posX: 600,
    posY: 400,
    r: 40,
    color: 'blue',
    territory: new Territory("Southern Europe"),
    neighbor: ["Western Europe", "Northern Europe", "Ukraine"],
});

board.territories.push({
    posX: 550,
    posY: 300,
    r: 40,
    color: 'yellow',
    territory: new Territory("Northern Europe"),
    neighbor: ["Western Europe", "Southern Europe", "Ukraine","Scandinavia", "Great Britain"],
});

board.territories.push({
    posX: 400,
    posY: 200,
    r: 40,
    color: 'pink',
    territory: new Territory("Great Britain"),
    neighbor: ["Western Europe", "Northern Europe","Scandinavia", "Iceland"],
});
board.territories.push({
    posX: 400,
    posY: 100,
    r: 40,
    color: 'aqua',
    territory: new Territory("Iceland"),
    neighbor: ["Great Britain", "Scandinavia"],
});
board.territories.push({
    posX: 500,
    posY: 100,
    r: 40,
    color: 'brown',
    territory: new Territory("Scandinavia"),
    neighbor: ["Great Britain", "Iceland", "Ukraine"],
});
board.territories.push({
    posX: 800,
    posY: 200,
    r: 200,
    color: 'green',
    territory: new Territory("Ukraine"),
    neighbor: ["Southern", "Northern Europe", "Scandinavia"],
});



board.draw();