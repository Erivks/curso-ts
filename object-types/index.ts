// 1 - interface
interface Product {
    name: string, 
    price: number,
    isAvaliable: boolean
}

function testnterface(product: Product) {
    console.log(`${product.name} - ${product.price}`);
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
}

testnterface(shirt);

// 2 - opcionais em interface
interface User {
    name: string,
    role?: string
}

function showUser(user: User): void {
    if (user.role) {
        console.log(`${user.role}`);
    }
}

// 3 - readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

// 4 - Index Signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15;

console.log(coords);

// 5 - Extending Types
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const erick: Human = {
    name: "Erick",
    age: 23
}

const superman: SuperHuman = {
    name: "Clark",
    age: 30,
    superpowers: ["Voo", "Laser"]
}

console.log(superman);

// 6 - Intersection Types
interface Char {
    name: string
}

interface Gun {
    type: string,
    calliber: number
}

type HumanWithGun = Char & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    calliber: 12
}

// 7 - readonly array
let myarray: ReadonlyArray<string> = ["Banana", "Maçã", "Laranja"];

// 8 - Tuplas
type tupla = [number, number, number];

const myTupla: tupla = [1, 2, 3]

type Review = number | boolean;

function showUserReview(review: Review): void {
    if (!review) {
        console.log("Produto não avaliado");
    }

    console.log(`A nota dada foi ${review}!!`);
}


