class Circle{
    
    constructor (radius,color){
        this.radius=radius
        this.color=color
    }

    setRadius(radius){
        this.radius=radius
    }

    getRadius(radius){
        return this.radius
    }

    setColor(color){
        this.color=color
    }

    getRadius(color){
        return this.color
    }

    toString(){
        return `${this.radius} ${this.color}`
    }

    getArea(){
        return (Math.PI * this.radius * this.radius)
    }

    getCircumference(){
        return (2 * Math.PI * this.radius)
    }

}

let obj= new Circle(2,"blue");
    console.log(obj.toString())

    let area= new Circle();
    obj.setRadius(6);
    console.log(obj.getArea().toFixed(2))
