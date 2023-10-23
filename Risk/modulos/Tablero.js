import { Territorio } from "./Territorio.js";

export class Tablero{
    constructor(board){
        this.board=board;
        this.territorios=[]; //creamos un array vacio, meteremos ahi los paises
        let territorio=new Territorio("Spain");
        let objeto={
            "posx":0,
            "posy":0,
            "territorio":territorio
        };
        this.territorios.push(objeto);

        //aquí creamos otro territorio portugal
        this.territorios.push({
            "posx":0,
            "posy":0,
            "territorio":new Territorio("Portugal")
        });

    }

    draw(){
        let pos=10;
        //esto es un for of, nunca usar for each
        for(let item of this.territorios){
            //creamos un circulo
            let circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
            //estos atributos ya vienen, no hay que declararlos
            circle.setAttribute('cx',pos);
            circle.setAttribute('cy',40);
            circle.setAttribute('r',40);
            circle.setAttribute('fill','red');
            this.board.appendChild(circle); //lo añado al tablero

            //cambiamos el contenido del json
            item.posx=pos;
            item.posy=40;
            circle.addEventListener("click",function(){
                console.log(item.territorio.getNombre());
            });
            pos=+100;
        }
    }

}


