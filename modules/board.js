import { Territory } from "./Territories.js";
import { Map } from "./Map.js";
class Board {
    constructor(board) {
        this.board = board;
        this.Map = Map;
        this.territories = [];
        for (let item of this.Map) {
            for (let provincia of item.Europe.territories) {
            
                this.territories.push( {  
                    Territory: new Territory(provincia.Territory)
                })
            }
        }
        for (let item of this.Map) {
            for (let provincia of item.Europe.territories) {
   
             
            this.search(provincia.Territory).top = this.search(provincia.top)
            
            
         
                  this.search(provincia.Territory).bottom = this.search(provincia.bottom);
            
          
                this.search(provincia.Territory).right = this.search(provincia.right);
            
            
                 this.search(provincia.Territory).left = this.search(provincia.left);
            
            
                
            
            }
            console.log(this.territories)
        }
       
    }
    
    



    draw() {
     /*
        let self = this; // Guarda una referencia a "this"

    for (let item in this.Map) {
        for (let provincia of this.Map[item].territories) {
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute("cx", provincia.posx);
            circle.setAttribute("cy", provincia.posy);
            circle.setAttribute("r", 40);
            circle.setAttribute("fill", "green");

            this.board.appendChild(circle);

            circle.addEventListener("click", () => {
                if (provincia && provincia.Territory) {
                    console.log(`Territory: ${provincia.Territory.getName()} His neighbors: ${provincia.neighbor.map(index => self.Map[item].territories[index].Territory.getName()).join(', ')}`);
                } else {
                    console.log("Territory information is missing.");
                }
            });
        }
    }
        
   */ }
    search(name) {
        for (let item of this.territories) {
            
          if (item.Territory.getName() === name) {
           
            return item.Territory;
          }
        }
      }
    
   
    
}
export { Board };