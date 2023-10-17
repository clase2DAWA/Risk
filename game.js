//let circle1 = document.getElementById("circle1").onclick(console.log("hola"));
//let circle2 = document.getElementById("circle2").onclick(console.log("hola"));

let circle1 = document.getElementById("circle1").onclick = function() {
    console.log("hola")
};

let circle2 = document.getElementById("circle2").onclick = function() {
    console.log("adios")
};

