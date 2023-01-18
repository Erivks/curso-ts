// 1- type guard
type paramToSum = number | string;

function sum(a: paramToSum, b: paramToSum): void {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("IMpossivel realizar a soma!");
    }
}

sum("4", "5");
sum(44, 34);
sum("1", 100);


// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined): void {
    if (operation) {

        if (operation == "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        } else if (operation == "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("Por favor, defina uma operação");
    }
}

// 3 - instanceof
class User {
    name

    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name);
    }
}


const jhon = new User("Jhon");
const thairis = new User("Thairis");

function userGreeting(user: object): void {
    if (user instanceof SuperUser) {
        console.log(`Olá SuperUser ${user.name}`);
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}

// 4 - operator in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", 'Pastor Alemão');

function showDogDetails(dog: Dog): void {

    if ('breed' in dog) {
        console.log(dog.breed);
    } else {
        console.log("Cachorro sem raça definida");
    }

}