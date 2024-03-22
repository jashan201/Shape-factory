class Shape {
    constructor(name, color) {
      let _name = name;
      let _color = color;
  
      this.getName = function() {
        return _name;
      }
  
      this.getColor = function() {
        return _color;
      }
    }
  
    getInfo() {
      return `Shape: ${this.getName()}, Color: ${this.getColor()}`;
    }
}

export default Shape;