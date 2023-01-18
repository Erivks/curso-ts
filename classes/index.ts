// 1 - propriedades
class User {
    name!: string
    age!: number
}

const testUser = new User();

testUser.name = "Erick"

console.log(testUser);

// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = "Erick"
        this.age = 10
    }
}

// 3 - readonly
class testReadOnly {
    name
    readonly wheels: number = 4
    constructor(name: string) {
        this.name = name
    }
}

// 4 - Herança e super
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns 
    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

// 5 - metodos
class Dwarf {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    greeting(): void {
        console.log("Hey Stranger!!")
    }
}

const jimmy = new Dwarf("Jimmy")
jimmy.greeting()

//6 - getters
class testGetters {
    name: string
    lastname: string

    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }

    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}

const test = new testGetters("Erick", "Santos");

console.log(test.fullName);

// 7 - setters
class Coords {
    x!: number
    y!: number

    set fillX(x: number) {
        this.x = x
    }

    
    set fillY(y: number) {
        this.y = y
    }
}

// 8 - interface
interface showTitle {
    itemTitle(): string
}

class testShowTitle implements showTitle {
    itemTitle(): string {
        return "test"
    }
}

// 9 - override
class Pai {
    method() {
        console.log("method");
    }
}

class Filho extends Pai {
    method(): void {
        console.log("testando alguma coisa");
    }
}

// 10 - protected
class E {
    protected x: number = 10;
}

class D extends E {
    public showX(): void {
        console.log(this.x);
    }
}

// 11 - private
class A {
    private name: string = "Name";

    get showName(): typeof this.name {
        return this.name;
    }
}

// 12 - static members
class StaticClass {
    public static prop: string = "properties";
}

StaticClass.prop;

// 13 - generic class 
class Item<T, U> {
    public first;
    public second;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
}

// 14 - parameter propeties
class TestProperties {
    constructor(public name: string, private price: number) {
        this.name = name;
        this.price = price;
    }
}

// 15 - abstract class
abstract class testAbstract {
    abstract showName(): void
}

class testAbstractFilho extends testAbstract {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public showName(): string {
        return this.name;
    }
}