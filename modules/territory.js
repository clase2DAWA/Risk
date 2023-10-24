class Territory {

    constructor(name){
        this.name = name;
        this.army = 0;
        this.neighbors = null;
        this.top = null;
        this.topRight = null;
        this.right = null;
        this.bottomRight = null;
        this.bottom = null;
        this.bottomLeft = null;
        this. left = null;
        this.topLeft = null;
    }

    get bottom() {
        return this.bottom;
    }

    set bottom( bottom ) {
        this._bottom = bottom;
    }

    get bottomLeft() {
        return this.bottomLeft;
    }

    set bottomLeft( bottomLeft ) {
        this._bottomLeft = bottomLeft;
    }  

    get bottomRight(){
        return this.bottomRight;
    }

    set bottomRight( bottomRight ) {
        this._bottomRight = bottomRight;
    }

    get left() {
        return this.left;
    }

    set left( left ) {
        this._left = left;
    }

    get right() { 
        return this.right;
    }

    set right( right ) {
        this._right = right;
    }

    get top() {
        return this.top;
    }

    set top( top ) {
        this._top = top;
    }

    get topLeft() {
        return this.topLeft;
    }

    set topLeft( topLeft ) {
        this._topLeft = topLeft;
    }

    get topRight() {
        return this.topRight;
    }

    set topRight( topRight ) {
        this._topRight = topRight;
    }

    getname() {
        return this.name;
    }

    setArmy( army ) {
        this.army =  army;
    }
}

export { Territory };
