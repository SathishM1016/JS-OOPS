class Person{

    constructor(name,age,gender,address){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.address=address;
    }

    getPersonDetails(){
        return `Name:${this.name}\nAge:${this.age}\nGender${this.gender}\nAddress${this.address}`
    }
}

var details = new Person("Virat",31,"Male","Chennai");
console.log(getPersonDetails())
