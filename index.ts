// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point): void {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}

const coordsObj:Point = {
    x: 10,
    y: 10,
    z: 10
}

// 14 - interface x type alias

// interface pode ser alterada durante o código, adicionando novos parametros
// diferente de type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson:Person = {name: "Erick", age: 20}

//---
// type alias
// repetir o type, ocasionara em um erro
type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - Literal Types
let test: "testing"

test = "testing"

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}

showDirection("left");
showDirection("right");

// 16 - Non null Assertion Operator
// O operador (non-null assertion) em questão serve para você dizer ao compilador que você sabe que esta operação é segura e nunca será nula.
const p = document.getElementById("some-p");

console.log(p!.innerText);

// 17 - BigInt
let n: bigint

n = 1000n

// 18 - Symbol
// Symbol é um valor unico, indenpendente da setada
let symbolA:symbol = Symbol("a");
let symbolB:symbol = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

