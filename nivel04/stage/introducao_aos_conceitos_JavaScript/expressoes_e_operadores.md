# Expressões e Operadores

- Expressão é qualquer linha de código que resolva alguma coisa

- Operadores

  - Binary: está em uma expressão com dois elementos

  - Unary: está em uma expressão com um único elemento

  - Ternary: está em uma expressão com três elementos

```js
console.log(number + 1) // binary operator
console.log(++number, typeof number) // unary operators
console.log(true ? "se sim, alo" : "se nao, nada") // ternary operator
```

- No JavaScript, o ponto e vírgula no final dos comandos é opcional.

- Porém, existem algumas porquíssimas excessões, por exemplo:

```js
let number = 1 // nesse caso, è preciso colocar ; no final da expressao

;(function () {
  // isso é uma função auto-executável
  console.log("alo")
})()
```

## New

- A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

```js
let name = new String("Elias")
name.surName = "Neto"
console.log(name)

let number = new Number(23)
console.log(number)

let date = new Date("2022-07-27")
console.log(date)
```

## Operadores unários: typeof e delete

- Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

```js
console.log(typeof "elias")

const person = {
  name: "elias",
  age: 18,
}
console.log(person)
delete person.age
console.log(person)
```

## Operadores Aritrméticos

```js
// multiplicação (*)
console.log(3 * 5)

// divisão (/)
console.log(15 / 3)

// soma (+)
console.log(10 + 5)

// subtração (-)
console.log(20 - 5)

// resto da divisão (%)
console.log(21 % 2)

// incremento (++)
let increment = 0
console.log(increment++)
console.log(++increment)

// decremento (--)
let decrement = 3
console.log(decrement--)
console.log(--decrement)

// exponencial (**)
console.log(2 ** 11)
```

## Grouping Operator

- Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

```js
let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
```

## Operadores de comparação

- Irão compara valores e retornar um Boolean

```js
let one = 1
let two = 2

// == (igual a)
console.log(one == two) // false
console.log(one == "1") // true

// != (diferente de)
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

// === (estritamente igual a)
console.log(one === "1") //false
console.log(one === 1) // true

// !== (estritamente diferente de)
console.log(two !== "2")
console.log(two !== 2)

// > (maior que)
console.log(one > two) // false

// < (menor que)
console.log(one < two) // true

// >= (maior ou igual a)
console.log(one >= 1)
console.log(two >= 1)

// <= (menor ou igual a)
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
```

## Operadores de Atribuição (assignment)

```js
let x
console.log(x)

// simple assignment
x = 1
console.log(x)

//  addition assignment
x += 2
console.log(x)

// subtraction assignment
x -= 1
console.log(x)

// multiplication assignment
x *= 5
console.log(x)

//  division assignment
x /= 5
console.log(x)

// remainder assignment
x %= 2
console.log(x)

// expnentation assignment
x **= 100
console.log(x)
```

## Operadores Lógicos

- Comparam dois valores booleanos e retorna true ou false.

```js
// Gosta de pizza?
let pizza = true
// Gosta de Lasanha?
let lasanha = true

// AND (&&)
console.log(pizza && lasanha)

// OR (||)
console.log(pizza || lasanha)

// NOT (!)
console.log(!lasanha)
```

## Operador Ternário

- É um operador que serve para realizar uma condição.

- `condicao ? valorSeTrue : valorSeFalse`

```js
// CAFÉ DA MANHÃ TOP
let cake = true
let coffe = true

const niceBreakfast =
  coffe && cake ? "café da manhã top" : "café da manhã não top"

console.log(niceBreakfast)

// MAIOR DE 18
let age = 17

const canDrive = age >= 18 ? "can drive" : "cant't drive"

console.log(canDrive)
```

## Operadores Para String (String Operator)

```js
//  comparação
console.log("a" == "b")
console.log("a" == "a")

// concatenação - retorna a uniao de duas Strings
console.log("a" + "b")
```

## Falsy x Truthy

- O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

```js
console.log(false ? "true" : "false")
console.log(0 ? "true" : "false")
console.log(-0 ? "true" : "false")
console.log("" ? "true" : "false")
console.log(null ? "true" : "false")
console.log(undefined ? "true" : "false")
console.log(NaN ? "true" : "false")
```

- Já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

```js
console.log(true ? "true" : "false")
console.log({} ? "true" : "false")
console.log([] ? "true" : "false")
console.log(1 ? "true" : "false")
console.log(1.56 ? "true" : "false")
console.log("0" ? "true" : "false")
console.log("false" ? "true" : "false")
console.log(-1 ? "true" : "false")
console.log(Infinity ? "true" : "false")
console.log(-Infinity ? "true" : "false")
```

## Precedência dos Operadores

```js
/*
  Operator precedence

  * grouping                  ( )
  *  negaçãoo e incremento    ! ++ --
  * multiplicação e divisão   * /
  * adição e subtração        + -
  * relacional                < <= > >= 
  * igualdade                 == != ==== !==
  * AND                       &&
  * OR                        ||
  * condicional               ?:
  * assignment (atribuição)   = += -= *=
*/

// Curiosidade

console.log(true == 1)
console.log(false == 0)

console.log(3 > 2 > 1)
console.log(3 > 2 == 1)
```

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
