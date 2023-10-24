class Territory {

    constructor(name, army) {
        this.name = name;
        this.army = 0;
        this.top = null;
        this.bottom = null;
        this.left = null;
        this.right = null;
    }
    set top(top) {
        this._top = top;
      }
      set bottom(bottom) {
        this._bottom = bottom;
      }
      set left(left) {
        this._left = left;
      }
      set right(right) {
        this._right = right;
      }
      get top() {
        return this._top;
      }
      get bottom() {
        return this._bottom;
      }
      get left() {
        return this._left;
      }
      get right() {
        return this._right;
      }

    getName() {
        return this.name;
    }
    setArmy(army) {
        this.army = army;
    }
      

}
export { Territory };
