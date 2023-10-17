document.querySelectorAll('svg').forEach(function (item) {
    item.addEventListener('click', function (event) { console.log(event.target.id) });
})

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const svg = document.getElementById("miSVG");

const mensajes = [
    "territorio 1",
    "territorio 2",
    "territorio 3",
    "territorio 4",
  ];

const coordenadasCirculos = [];


for (let i = 0; i < 4; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    const radius = 30;
    const cx = getRandomNumber(0, 400);
    const cy = getRandomNumber(0, 400);

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "blue");

    circle.setAttribute("data-mensaje", mensajes[i]);
    
    // Agrega el círculo al elemento SVG
    svg.appendChild(circle);
    
    // Almacena las coordenadas del círculo
    coordenadasCirculos.push({ cx, cy });
}

// Agrega un controlador de eventos clic a los círculos
const círculos = svg.querySelectorAll("circle");

círculos.forEach(círculo => {
    círculo.addEventListener("click", (evento) => {
        const mensaje = evento.target.getAttribute("data-mensaje");
        console.log(`${mensaje}`);
    });
});