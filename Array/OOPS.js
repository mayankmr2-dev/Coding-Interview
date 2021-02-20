class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this);
    }

    get sayName() {
        return this.name
    }
}

class Footballer extends Player {
    constructor(name, age, nationality) {
        super(name, age);
        console.log(this);
        this.nationality = nationality;
    }

}

pk = new Player("Mayan", 24)
console.log(pk.sayName);
mk = new Footballer("Messi", 34, "Argentina")
console.log(mk.sayName);

/*
OUTPUT -
Player { name: 'Mayan', age: 24 }
Mayan
Footballer { name: 'Messi', age: 34 }
Footballer { name: 'Messi', age: 34 }
Messi
*/