class Territory {
    constructor(name) {
        this.name = name;
        this.army = 0;
        this.top = null;
        this.topRight = null;
        this.topLeft = null;
        this.left = null;
        this.right = null;
        this.bottom = null;
        this.bottomRight = null;
        this.bottomLeft = null;
    }
    get name() {
        return this._name;
    }
    
    set army(value) {
        this._army = army;
    }

    get top(){
        return this._top;
    }
    set top(value){
        this._top = value;
    }

    get topRight(){
        return this._topRight;
    }
    set topRight(value){
        this._topRight = value;
    }

    get topLeft(){
        return this._topLeft;
    }
    set topLeft(value){
        this._topLeft = value;
    }

    get left(){
        return this._left;
    }
    set left(value){
        this._left = value;
    }
    
    get right(){
        return this._right;
    }
    set right(value){
        this._right = value;
    }

    get bottom(){
        return this._bottom;
    }
    set bottom(value){
        this._bottom = value;
    }

    get bottomRight(){
        return this._bottomRight;
    }
    set bottomRight(value){
        this._bottomRight = value;
    }

    get bottomLeft(){
        return this._bottomLeft;
    }
    set bottomLeft(value){
        this._bottomLeft= value;
    }   
}
export { Territory };