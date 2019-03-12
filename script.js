
function main() {
  const boxes = [];
  setInterval(() => {
    boxes.push(createBox());
  }, 100);

  setInterval(() => {
    boxes.forEach((box, i) => {
      box.rainDown();
      if (box.position.y < -5) {
        boxes.splice(i, 1);
      }
    });
  }, 50);
}

function createBox() {
  const position = {
    x: Math.random() * 20 - 10,
    y: Math.random() * 30,
    z: Math.random() * 20 - 10
  };

  const rotation = {
    x: Math.random() * 90,
    y: Math.random() * 90,
    z: Math.random() * 90
  };

  const color = ['blue', 'purple', 'pink', 'green', 'yellow', 'black'];


  return new Box(position, color[parseInt(Math.random()*5)], rotation);
}

class Box {
  constructor(position, color, rotation) {
    this.domElement = document.createElement('a-box');
    this.domElement.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
    this.domElement.setAttribute('color', color);
    this.domElement.setAttribute('rotation', `${rotation.x} ${rotation.y} ${rotation.z}`);
    document.getElementById('scene').appendChild(this.domElement);
    this.position = position;
    this.rotation = rotation;
    this.color = color;
  }

  rainDown() {
    this.setY(this.position.y-.1);
  }

  setY(y) {
    this.position.y = y;
    this.updatePosition();
  }

  updatePosition(newPos) {
    if (newPos) {
      this.position = newPos;
    }
    this.domElement.setAttribute('position', `${this.position.x} ${this.position.y} ${this.position.z}`);
  }
}
document.addEventListener('DOMContentLoaded', () => main());