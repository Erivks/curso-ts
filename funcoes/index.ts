// 1 - void
function withoutReturn(): void {
    console.log("Esta função não tem retorno");
}

// 2 - callback como argumento
function greetingNew(name: string): string {
    return `Olá ${name}`;
}

function preGreeting(f: (n: string) => string, userName: string): void {
    console.log("Preparando função...");

    const greet = f(userName);

    console.log(greet);
}

preGreeting(greetingNew, "Erick");

// 3 - generic function
function firstElemen<T>(arr: T[]): T {
    return arr[0];
}

function mergeObjects<U, T>(obj1: U, obj2: T): T {
    return {
        ...obj1,
        ...obj2
    }
}

// 4 - constraint
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest;
}

// 4 - especificar
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

mergeArrays<string | number>([1, 2], ["teste", "testando"]);

// 5 - parametros opcionais
function modernGreeting(name: string, greet?: string): string {
    if (greet) {
        return `${greet} ${name}`;
    }

    return `${name}`;
}

// 6 - parametro default
function someDefault(n1: number, n2 = 10) {
    return n1 + n2;
}

// 7 - unknown 
function doSomething(n: unknown) {
    if (Array.isArray(n)) {
        return n[0];
    }
}

// 8 - never
function error(): never {
    throw new Error("Erro");
}

// 9 - rest operator
function sumFunc(...n: number[]): number {
    return n.reduce((num, sum) => sum + num);
}

// 10 - destructuring como parametro
function showProduct({name, price}: {name: string, price: number}): string {
    return `${name} e ${price}`;
}
