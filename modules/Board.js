import { RISK } from "./Game.js";
import { RISK as TERRITORY } from "./Territory.js";

RISK.board = class {

    constructor(board,players,maxHeight,maxWidth) {

        this.board = board;
        this.players = players;
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.territories = [];
        this.territoriesData = [
            
            {
                "name": "Argentina",
                "neighbors": ["Brazil", "Peru"],
                "continent": "South America",
                "y" : 645,
                "x" : 200,
                "color" : "#4E4D3E",
                "army" : 0
            },
            {
                "name": "Brazil",
                "neighbors": ["Argentina", "Peru", "Venezuela"],
                "continent": "South America",
                "y" : 550,
                "x" : 235,
                "color" : "#4E4D3E",
                "army" : 0
            },
            {
                "name": "Peru",
                "neighbors": ["Venezuela", "Brazil", "Argentina"],
                "continent": "South America",
                "y" : 570,
                "x" : 135,
                "color" : "#4E4D3E",
                "army" : 0
            },
            {
                "name": "Venezuela",
                "neighbors": ["Peru", "Brazil","C.America"],
                "continent": "South America",
                "y" : 473,
                "x" : 167,
                "color" : "#4E4D3E",
                "army" : 0
            },
            {
                "name": "C.America",
                "neighbors": ["E.Usa", "W.Usa","Venezuela"],
                "continent": "North America",
                "y" : 372,
                "x" : 150,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "E.Usa",
                "neighbors": ["C.America", "W.Uusa","Ontario","Quebec"],
                "continent": "North America",
                "y" : 310,
                "x" : 230,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "W.Usa",
                "neighbors": ["C.America", "E.Usa","Ontario","Alberta"],
                "continent": "North America",
                "y" : 279,
                "x" : 110,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "Alberta",
                "neighbors": ["Alaska", "N.Usa","Ontario","W.Usa"],
                "continent": "North America",
                "y" : 180,
                "x" : 95,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "Ontario",
                "neighbors": ["Alberta", "N.Usa","Quebec","W.Usa","E.Usa"],
                "continent": "North America",
                "y" : 217,
                "x" : 190,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "Quebec",
                "neighbors": ["Greenland", "E.Usa","Ontario"],
                "continent": "North America",
                "y" : 227,
                "x" : 290,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "Greenland",
                "neighbors": ["Quebec", "N.Usa","Ontario", "Iceland"],
                "continent": "North America",
                "y" : 60,
                "x" : 350,
                "color" : "#ED6244",
                "army" : 0,
                "line1": {  "sx" : 25,
                            "sy" : 25,
                            "fx" : 25,
                            "fy" : 25,}
            },
            {
                "name": "N.Usa",
                "neighbors": ["Alaska", "Alberta","Ontario","Greenland"],
                "continent": "North America",
                "y" : 117,
                "x" : 175,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "Alaska",
                "neighbors": ["N.Usa", "Alberta","Kamchatka"],
                "continent": "North America",
                "y" : 79,
                "x" : 83,
                "color" : "#ED6244",
                "army" : 0
            },
            {
                "name": "Iceland",
                "neighbors": ["Greenland", "G.Britain","Scandinavia"],
                "continent": "Europe",
                "y" : 87,
                "x" : 545,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "G.Britain",
                "neighbors": ["Iceland", "W.Europe","N.Europe","Scandinavia"],
                "continent": "Europe",
                "y" : 217,
                "x" : 475,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "Scandinavia",
                "neighbors": ["Iceland", "G.Britain","N.Europe","Ukraine"],
                "continent": "Europe",
                "y" : 175,
                "x" : 680,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "N.Europe",
                "neighbors": ["W.Europe", "G.Britain","Scandinavia","S.Europe","Ukraine"],
                "continent": "Europe",
                "y" : 258,
                "x" : 622,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "W.Europe",
                "neighbors": ["N.Europe", "G.Britain","N.Africa","S.Europe"],
                "continent": "Europe",
                "y" : 342,
                "x" : 565,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "S.Europe",
                "neighbors": ["N.Europe", "Egypt","N.Africa","W.Europe","Ukraine"],
                "continent": "Europe",
                "y" : 350,
                "x" : 665,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "Ukraine",
                "neighbors": ["Scandinavia", "N.Europe","S.Europe","Ural","Afghanistan","M.East"],
                "continent": "Europe",
                "y" : 267,
                "x" : 723,
                "color" : "Blue",
                "army" : 0
            },
            {
                "name": "N.Africa",
                "neighbors": ["Brazil","Egypt","E.Africa","Congo","W.Europe","S.Europe"],
                "continent": "Africa",
                "y" : 545,
                "x" : 585,
                "color" : "#B67617",
                "army" : 0
            },
            {
                "name": "Egypt",
                "neighbors": ["E.Africa","N.Africa","S.Europe","M.East"],
                "continent": "Africa",
                "y" : 497,
                "x" : 674,
                "color" : "#B67617",
                "army" : 0
            },
            {
                "name": "Congo",
                "neighbors": ["E.Africa","N.Africa","S.Africa"],
                "continent": "Africa",
                "y" : 647,
                "x" : 582,
                "color" : "#B67617",
                "army" : 0
            },
            {
                "name": "E.Africa",
                "neighbors": ["Egypt","N.Africa","Congo","Madagascar","S.Africa","M.East"],
                "continent": "Africa",
                "y" : 599,
                "x" : 672,
                "color" : "#B67617",
                "army" : 0
            },
            {
                "name": "S.Africa",
                "neighbors": ["Congo","E.Africa","Madagascar"],
                "continent": "Africa",
                "y" : 699,
                "x" : 670,
                "color" : "#B67617",
                "army" : 0
            },
            {
                "name": "Madagascar",
                "neighbors": ["S.Africa","E.Africa"],
                "continent": "Africa",
                "y" : 699,
                "x" : 845,
                "color" : "#B67617",
                "army" : 0
            },
            {
                "name": "M.East",
                "neighbors": ["Egypt","E.Africa"],
                "continent": "Asia",
                "y" : 359,
                "x" : 765,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Afghanistan",
                "neighbors": ["M.East","Ukraine","India","China","Ural"],
                "continent": "Asia",
                "y" : 277,
                "x" : 825,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Ural",
                "neighbors": ["Ukraine","Afghanistan","China","Siberia"],
                "continent": "Asia",
                "y" : 189,
                "x" : 875,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Siberia",
                "neighbors": ["Ural","China","Mongolia","Irkutsk","Yakutsk"],
                "continent": "Asia",
                "y" : 189,
                "x" : 976,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Yakutsk",
                "neighbors": ["Siberia","Irkutsk","Kamchatka"],
                "continent": "Asia",
                "y" : 105,
                "x" : 1031,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Kamchatka",
                "neighbors": ["Alaska","Yakutsk","Irkutsk","Japan","Mongolia"],
                "continent": "Asia",
                "y" : 79,
                "x" : 1225,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Irkutsk",
                "neighbors": ["Siberia","Mongolia","Yakutsk","Kamchatka"],
                "continent": "Asia",
                "y" : 195,
                "x" : 1077,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Mongolia",
                "neighbors": ["China","Irkutsk","Kamchatka","Japan"],
                "continent": "Asia",
                "y" : 285,
                "x" : 1026  ,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Japan",
                "neighbors": ["Mongolia","Kamchatka"],
                "continent": "Asia",
                "y" : 259,
                "x" : 1235,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "China",
                "neighbors": ["Siberia","Ural","Afghanistan","India","Siam","Mongolia"],
                "continent": "Asia",
                "y" : 279,
                "x" : 926,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "India",
                "neighbors": ["M.East","Afghanistan","China","Siam"],
                "continent": "Asia",
                "y" : 369,
                "x" : 865,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Siam",
                "neighbors": ["India","China","Indonesia"],
                "continent": "Asia",
                "y" : 425,
                "x" : 950,
                "color" : "#5FDF64",
                "army" : 0
            },
            {
                "name": "Indonesia",
                "neighbors": ["Siam","N.Guinea","W.Australia"],
                "continent": "Australia",
                "y" : 559,
                "x" : 1085,
                "color" : "#BB5FDF",
                "army" : 0
            },
            {
                "name": "N.Guinea",
                "neighbors": ["Indonesia","W.Australia","E.Australia"],
                "continent": "Australia",
                "y" : 559,
                "x" : 1205,
                "color" : "#BB5FDF",
                "army" : 0
            },
            {
                "name": "E.Australia",
                "neighbors": ["N.Guinea","W.Australia"],
                "continent": "Australia",
                "y" : 699,
                "x" : 1185,
                "color" : "#BB5FDF",
                "army" : 0
            },
            {
                "name": "W.Australia",
                "neighbors": ["N.Guinea","E.Australia","Indonesia"],
                "continent": "Australia",
                "y" : 699,
                "x" : 1084,
                "color" : "#BB5FDF",
                "army" : 0
            },

        ];  
        this.lines = [
            {
                "x1": 224,
                "y1": 105,
                "x2": 310,
                "y2": 90
            },
            {
                "x1": 214,
                "y1": 175,
                "x2": 312,
                "y2": 90
            },
            {
                "x1": 314,
                "y1": 90,
                "x2": 300,
                "y2": 180
            },
            {
                "x1": 394,
                "y1": 85,
                "x2": 496,
                "y2": 75
            },
            {
                "x1": 284,
                "y1": 560,
                "x2": 536,
                "y2": 560
            },
            {
                "x1": 554,
                "y1": 505,
                "x2": 554,
                "y2": 390
            },
            {
                "x1": 554,
                "y1": 505,
                "x2": 634,
                "y2": 390
            },
            {
                "x1": 674,
                "y1": 399,
                "x2": 670,
                "y2": 448
            },
            {
                "x1": 734,
                "y1": 399,
                "x2": 670,
                "y2": 448
            },
            {
                "x1": 714,
                "y1": 574,
                "x2": 762,
                "y2": 408
            },
            {
                "x1": 804,
                "y1": 674,
                "x2": 718,
                "y2": 578
            },
            {
                "x1": 804,
                "y1": 674,
                "x2": 718,
                "y2": 678
            },
            {
                "x1": 40,
                "y1": 50,
                "x2": 0,
                "y2": 50
            },
            {
                "x1": 1267,
                "y1": 50,
                "x2": 1370,
                "y2": 50
            },
            {
                "x1": 1184,
                "y1": 250,
                "x2": 1073,
                "y2": 270
            },
            {
                "x1": 1244,
                "y1": 125,
                "x2": 1244,
                "y2": 210
            },
            {
                "x1": 964,
                "y1": 377,
                "x2": 944,
                "y2": 324
            },
            {
                "x1": 979,
                "y1": 464,
                "x2": 1044,
                "y2": 533
            },
            {
                "x1": 1134,
                "y1": 560,
                "x2": 1155,
                "y2": 560
            },
            {
                "x1": 1084,
                "y1": 610,
                "x2": 1084,
                "y2": 650
            },
            {
                "x1": 1201,
                "y1": 610,
                "x2": 1084,
                "y2": 650
            },
            {
                "x1": 1201,
                "y1": 610,
                "x2": 1201,
                "y2": 650
            },
            {
                "x1": 500,
                "y1": 255,
                "x2": 540,
                "y2": 300
            },
            {
                "x1": 510,
                "y1": 245,
                "x2": 580,
                "y2": 240
            },
            {
                "x1": 490,
                "y1": 172,
                "x2": 550,
                "y2": 135
            },
            {
                "x1": 515,
                "y1": 192,
                "x2": 629,
                "y2": 179
            },
            {
                "x1": 565,
                "y1": 133,
                "x2": 629,
                "y2": 179
            },            {
                "x1": 1100,
                "y1": 152,
                "x2": 1180,
                "y2": 100
            },
            
            
        ] 
    }


    assignTerritories() {
        for (let item of this.territoriesData) {
            let neighbors = [];
    
            for (let neighborName of item.neighbors) {
                neighbors.push(neighborName);
        }
    
        let territory = new RISK.territory(item.name, item.y, item.x, item.color, item.army);
        territory.neighbors = [...neighbors];
        this.territories.push(territory);
        }
    }
    drawLinesOnMap(SVG) {

        for (let item of this.lines){

            let line = document.createElementNS("http://www.w3.org/2000/svg" , "line");
                        
            line.setAttribute("x1", item.x1); 
            line.setAttribute("y1", item.y1); 
            line.setAttribute("x2", item.x2); 
            line.setAttribute("y2", item.y2); 

            line.setAttribute("stroke", "black"); 
            line.setAttribute("stroke-width", "2");
            
            SVG.appendChild(line);
            

        }
    }
    
    drawTerrainOnMap(SVG) {
        
        let pos = 40;

        for (let item of this.territories) {
            
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            let text = document.createElementNS("http://www.w3.org/2000/svg","text")
            let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            

            circle.setAttribute("cy", item.getY()); 
            circle.setAttribute("cx", item.getX()); 
            circle.setAttribute("r", item.getR());   
            circle.setAttribute("fill", item.getColor()); 
            circle.setAttribute("stroke", "Black");
            circle.setAttribute("stroke-width", "0.1rem");

            circle.addEventListener('click', function (){
                console.log(item.getName())
            });

            text.setAttribute("y", item.getY()); 
            text.setAttribute("x", item.getX()); 
            text.setAttribute("text-anchor", "middle"); 
            text.setAttribute("dy", ".1em");
            text.setAttribute("fill", "White");
            text.textContent = item.getName(); 
            text.classList.add("countryName");

            tspan.setAttribute("x", item.getX());
            tspan.setAttribute("dy", "1.2em"); 
            tspan.textContent = item.getArmy();

            SVG.appendChild(circle);
            text.appendChild(tspan);
            SVG.appendChild(text);
            
        }
                
    }

    getRandomMapHeight(){
        return Math.floor(Math.random() * this.maxHeight);
    }

    getRandomMapWidth(){
        return Math.floor(Math.random () * this.maxWidth);
    }

}

export { RISK };

