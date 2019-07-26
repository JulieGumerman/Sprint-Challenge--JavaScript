// 1. Copy and paste your prototype in here and refactor into class syntax.


class MakeCuboids {
    constructor(object) {
        this.length = object.length;
        this.width = object.width;
        this.height = object.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


const lilCuboid = new MakeCuboids({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(lilCuboid.volume()); // 100
console.log(lilCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends MakeCuboids{
    constructor(object){
        super(object);
    }

    cubeSurfaceArea(){
        console.log((this.length*this.length)*6);
    }

    cubeVolume() {
        console.log(this.width*3);
    }
}

const littleCube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
})

littleCube.cubeSurfaceArea();
littleCube.cubeVolume();