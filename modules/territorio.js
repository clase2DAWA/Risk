class Territory {
    constructor(name) {
        this.name = name;
        this.army = 0;
        this.topLeft = null;
        this.top = null;
        this.topRight = null;
        this.left = null;
        this.right = null;
        this.bottomLeft = null;
        this.bottom = null;
        this.bottomRight = null;
        
    }

    set top(top){
        this._top=top;
    }
    set topLeft(topLeft){
        this._topLeft=topLeft;
    }
    set topRight(topRight){
        this._topRight=topRight;
    }
    set left(left){
        this._left=left;
    }
    set right(right){
        this._right=right;
    }
    set bottomLeft(bottomLeft){
        this._bottomLeft=bottomLeft;
    }
    set bottom(bottom){
        this._bottom=bottom;
    }
    set bottomRight(bottomRight){
        this._bottomRight=bottomRight;
    }

    get top(){
        return this.top;
    }
    get topLeft(){
        return this.topLeft;
    }
    get topRight(){
        return this.topRight;
    }
    get left(){
        return this.left;
    }
    get right(){
        return this.right;
    }
    get bottomLeft(){
        return this.bottomLeft;
    }
    get bottom(){
        return this.bottom;
    }
    get bottomRight(){
        return this.bottomRight;
    }


    getName() {
        return this.name;
    }






}

export { Territory }