

class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};

const size1 = 100;
const size2 = 200;

module.exports = {Square,size1,size2};