// 1 - importacao de arquivos
import importGreet from "./import";

importGreet();

// 2 - variaveis
import { x } from "./variable";
console.log(x);

// 3 - multiplos
import { s, b, myFunc } from "./multiple";

console.log(s, b, myFunc());

// 4 - alias
import { someName as name } from "./changename";
console.log(name);

// 5 - import all
import * as myNums from "./numbers";
console.log(myNums.a);

// 6 - import type
import { Human } from "./myType";

class User implements Human {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = "Erick";
        this.age = 10;
    }
}