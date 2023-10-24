let Territory = class {
    constructor(name) {
        this.name = name;
        this.neighborTopLeft = null;
        this.neighborTop = null;
        this.neighborTopRight = null;
        this.neighborRight = null;
        this.neighborBottomRight = null;
        this.neighborBottom = null;
        this.neighborBottomLeft = null;
        this.neighborLeft = null;
    }

    getName() {
        return this.name;
    }

    set neighborTopLeft(value) {
        this._neighborTopLeft = value;
    }
    set neighborTop(value) {
        this._neighborTop = value;
    }
    set neighborTopRight(value) {
        this._neighborTopRight = value;
    }
    set neighborRight(value) {
        this._neighborRight = value;
    }
    set neighborBottomRight(value) {
        this._neighborBottomRight = value;
    }
    set neighborBottom(value) {
        this._neighborBottom = value;
    }
    set neighborBottomLeft(value) {
        this._neighborBottomLeft = value;
    }
    set neighborLeft(value) {
        this._neighborLeft = value;
    }
}

export { Territory };