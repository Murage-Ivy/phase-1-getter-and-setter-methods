// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        this.radius = (circumference/ Math.PI)/2
    }

    set area (area){
        this.radius = Math.sqrt(area/Math.PI)
    }
}

const circle = new Circle(7);
console.log(circle.diameter)
console.log(circle.circumference)
console.log(circle.area)
circle.diameter = 12;
circle.circumference = 44;
circle.area = 200;
console.log(circle.radius)
console.log(circle.diameter);