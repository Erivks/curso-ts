// 1 - decorator
function myDecorator() {
    console.log("Iniciando decorator!");

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator!");
        console.log(target, propertKey, descriptor);
    }
}

class myClass {
    @myDecorator()
    public testing(): void {
        console.log("Terminando execução da função!");
    }
}

const myObj = new myClass();

myObj.testing();

// 2 - class decorator
function classDec(constructor: Function) {
    console.log(constructor);
}

@classDec
class UserDecorator {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new UserDecorator("Erick");

console.log(user);

// 3 - method decorator
function enumerable(prop: boolean) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = prop;
    }
}

class MachineDec {
    name;

    constructor(name: string) {
        this.name = name;
    }

    @enumerable(false)
    public showName(): void {
        console.log(this.name);
    }
}


const machine = new MachineDec("Teste");
machine.showName();

//  4 - Acessor Decorator
class Monster {
    name!: string
    age!: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(true)
    get showName() {
        return `Nome: ${this.name}`;
    }

    get showAge() {
        return `Age: ${this.age}`;
    }
}

const charmander = new Monster("Charmander", 20);

console.log(charmander);

// 5 - property decorator
function formatNumber() {
    return function(target: Object, propertKey: string) {
        let value: string;

        const getter = () => {
            return value;
        }

        const setter = (newVal: string) => {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    }
}
class IdDec {
    @formatNumber()
    id: string

    constructor(id: string) {
        this.id = id;
    }
}

const newItem = new IdDec("12");
console.log(newItem.id);

// 6 - class decorator real
function createdAt(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdAt
class Book {
    @formatNumber()
    id: string

    constructor(id: string) {
        this.id = id;
    }
}

@createdAt
class Pencil {
    @formatNumber()
    id: string
    createdAt?: Date;

    constructor(id: string) {
        this.id = id;
    }
}

const livro = new Book("2");
const lapis = new Pencil("3");

console.log(lapis);

// 7 - method decorator
function checkIfIsPosted() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function(...args: any[]) {
            if (args[1] === true) {
                return null;
            } else {
                childFunction.apply(this, args);
            }
        }
    }
}

class Post {
    alreadyPosted = false;

    @checkIfIsPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
    }
}

// 8 - property decorator
function max(limit: number) {
    return function(target: Object, key: string) {
        let value: string;

        const getter = () => {
            return value;
        }

        const setter = (nVal: string) => {
            if (nVal.length > limit) {
                return;
            } else {
                value = nVal;
            }
        }

        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });
    }
}

class Admin {
    @max(10)
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}