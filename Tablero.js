import {TABLERO} from "./modules/territorio.js"


    let game = new TABLERO.Crear();
    game.GeneraCirculo(1);
    let game1 = new TABLERO.Crear();
    game1.GeneraCirculo(2);
    let game2 = new TABLERO.Crear();
    game2.GeneraCirculo(3);
    let game3 = new TABLERO.Crear();
    game3.GeneraCirculo(4);
    
   


    var arrayXY = [];
    arrayXY.push( [game.getx(), game.gety()]);
    arrayXY.push( [game1.getx() , game1.gety()]);
    arrayXY.push( [ game2.getx() ,  game2.gety()]);
    arrayXY.push( [game3.getx() ,  game3.gety()]);
    for (var territorio in arrayXY) {
        if (arrayXY.hasOwnProperty(territorio)) {
            console.log(territorio + ": " + arrayXY[territorio][0] + ", " + arrayXY[territorio][1]);
        }
    }