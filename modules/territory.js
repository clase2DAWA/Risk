class Territory {
    constructor(name) {
        this.name = name;
        this.army = 0;
        this.degrees = null;

    }
    get name() {
        return this._name;
    }
    
    set army(value) {
        this._army = value;
    }

    get degrees(){
        return this._degrees;
    }
    set degrees(value){
        this._degrees = value;
    }

}
export { Territory };