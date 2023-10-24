class Territory {
  constructor(name) {
    this.name = name;
    this.army = 0;
    this.top = null;
    this.bottom = null;
    this.left = null;
    this.right = null;
    this.topLeft = null;
    this.topRight = null;
    this.bottomLeft = null;
    this.bottomRight = null;
  }

  getName() {
    return this.name;
  }

  setArmy(army) {
    this.army = army;
  }

  // Setters
  set top(value) {
    this._top = value;
  }
  set bottom(value) {
    this._bottom = value;
  }
  set left(value) {
    this._left = value;
  }
  set right(value) {
    this._right = value;
  }
  set topLeft(value) {
    this._topLeft = value;
  }
  set topRight(value) {
    this._topRight = value;
  }
  set bottomLeft(value) {
    this._bottomLeft = value;
  }
  set bottomRight(value) {
    this._bottomRight = value;
  }

  // Getters
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
  get topLeft() {
    return this._topLeft;
  }
  get topRight() {
    return this._topRight;
  }
  get bottomLeft() {
    return this._bottomLeft;
  }
  get bottomRight() {
    return this._bottomRight;
  }
}

export { Territory };
