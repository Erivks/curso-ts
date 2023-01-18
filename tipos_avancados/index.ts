// arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);

// Isso ocasionará em um erro
//numbers = "Teste";

// Outra sintaxe de array
let nums: Array<number> = [100, 200];

nums.push(300);

// any
let arr1: any = [1, 2, "Teste", [], {nome: "Teste"}];

// Tipos de parametro
function soma(a: number, b: number) {
    console.log(a + b);
}

// Tipo de retorno
function greeting(nome: string): string {
    return `Olá, ${nome}`;
}

// Tipos de objeto
function passCoord(coord: {x: number, y: number}) {
    console.log("X coord", coord.x);
    console.log("Y coord", coord.y);
}

const coord = {x: 4.13, y: 5.23};

passCoord(coord);

// Props opcionais
function showNumbers(a: number, b:number, c?: number) {
    console.log("A ", a);
    console.log("B ", b);
    if (c) {
        console.log("C ", c);
    }
}

showNumbers(1, 2);

// Union Type
function showBalance(balance: number | string) {
    console.log(`Saldo: ${balance}`);
}

showBalance(100);
showBalance("100");

// Type Alias
type ID = number | string;

function showID(id: ID) {
    console.log(id);
}

showID(1);
showID("10");


const n1: number = 10;

const n1String = n1.toString();

const show: string = `Esse é o número: ${n1String}`;

console.log(print);

