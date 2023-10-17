export class Tablero{

    constructor(territorios) {
      /* Creamos el svg que contendrá los territorios */
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      /* Le añadimos el atributo ancho con un ancho específico */
        this.svg.setAttribute("width", "1000px");

      /* Le añadimos el atributo altura con un alto específico */
        this.svg.setAttribute("height", "1000px");
      
      /* Añadimos el svg qu ehemos creado anteriormente al objeto padre mapa que tenemos en nuestro HTML */
        document.getElementById("mapa").appendChild(this.svg);

        /* Recorremos el objeto territorios que nos llega como parametro y dibujamos los círculos en él */ 
        for (let i = 0; i < territorios.length; i++) {
            this.drawCircle(territorios[i]);
        } 
    }

    drawCircle (territorio){
      /* Creamos los circulos con sus propiedades*/
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', Math.floor(Math.random() * (750 - 70 + 1) + 50));
        circle.setAttribute('cy', Math.floor(Math.random() * (750 - 70 + 1) + 50));
        circle.setAttribute('r', 80);
        circle.setAttribute('id', territorio.getName());
        this.svg.appendChild(circle);
    }
}