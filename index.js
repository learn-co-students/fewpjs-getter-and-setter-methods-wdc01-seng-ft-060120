// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area(){
        let square = this.radius**2 
        return square * Math.PI
    }

    set diameter(diameter) {
        this.radius = diameter/2
    }

    set circumference(circumference) {
        this.radius = circumference/(Math.PI * 2)
    }
    
}