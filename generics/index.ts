// 1 - generic
function showDetail<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showDetail(5));

// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T): string {
    return `${obj.name}`;
}

// 3 - generic em interface
interface myObj<T, U> {
    name: string,
    wheels: T,
    engine: U
}

type Mobil = myObj<number, number>
type Pen = myObj<boolean, boolean>

const myCar: Mobil = { name: "Fusca", wheels: 4, engine: 1.0}

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `a chave ${key.toString()} está presente e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '16gb'
}

console.log(getSomeKey(server, 'hd'));

// 5 - keyof operator
type Character = {name: string, age: number, hasDriverLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character = {
    name: "Erick",
    age: 30,
    hasDriverLicense: true
}

console.log(showCharName(myChar, 'age'));

// 6 - typeof operator
const userName: string = "Erick"

const userName2: typeof userName = "Erick2"

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck["km"];

const myTruck = {
    km: 10000,
    kg: 1000,
    description: "Truck"
}

function showTruck(km: Km) {
    console.log(km);
}

showTruck(myTruck.km);

// 8 - Conditional types
interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const somevar: myType = 5

// ============

interface Teste {
    showName(): string
}

type myTestType = Teste extends {showName(): string } ? number : string

// 9 - template literal types
type testA = "text"

type customType = `some ${testA}`

const testing: customType = "some text"

