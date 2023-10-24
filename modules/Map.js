import { Territory } from "./Territories.js";
let Map = [{
    Europe:{
        territories: [
            {
                Territory: "Southern Europe",
                top: "Northern Europe",
                bottom: null,
                right: null,
                left: "Western Europe",
            },  
            {
                Territory: "Great Britain",
             
                top: null,
            bottom: "Western Europe",
                right: "Northern Europe",
                left: null,
            },
            {
                Territory: "Northern Europe",
              
                top: null,
                bottom: "Southern Europe",
                right: null,
                left: "Great Britain",
            },
            {
                Territory: "Western Europe",
          
                top: "Great Britain",
                bottom: null,
                right: "Southern Europe",
                left: null,
            },
        ]
    }
}
];
export{Map};