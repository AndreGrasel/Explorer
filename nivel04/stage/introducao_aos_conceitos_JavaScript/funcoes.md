# Functions

```js
// criar um aplicativo de frases motivacionais

// declaration - declaração da função - function statement
function createPhrases() {
  console.log("1° frase")
  console.log("2° frase")
  console.log("3° frase")
}

// executar a função, rodar, chamar, invocar, execute, run, call, invoke
createPhrases()
createPhrases()
createPhrases()
```

## Parâmetros e Argumentos

```js
// function expression - function anonymous
// parâmetros (parameters)
const sum = function (numberOne, numberTwo) {
  console.log(numberOne + numberTwo)
}
// argumentos (arguments)
sum(2, 3)
```

## Retornando valores

```js
const sum = function (numberOne, numberTwo) {
  return numberOne + numberTwo
}

let number1 = 34
let number2 = 66

console.log(`o 1° número é ${number1}`)
console.log(`o 2° número é ${number2}`)
console.log(`a soma é ${total(number1, number2)}`)
```

## Function Scope

```js
// function scope

let think = "create video"

function createThink(think) {
  think = "study"
  return think
}

console.log(createThink(think))
console.log(think)
```

## Function Hoisting

```js
// function hoisting
sayMyName()

function sayMyName() {
  console.log("Elias")
}
```

```js
// não ocorre o function hoisting, logo, vai dar erro
sayMyName()

const sayMyName = function () {
  console.log("Elias")
}
```

```js
// ocorre o hoisting, porém, é o hoisting da variável - ou seja - a declaração de sayMyName é feita no ínicio mas a atribuição de valores ocorre normalmente
// portanto, vai dar erro
sayMyName()

var sayMyName = function () {
  console.log("Elias")
}
```

## Arrow Function

```js
// arrow function

const sayMyname = (name) => {
  console.log(name)
}

sayMyname("Elias")
```

## Callback Function

```js
// callback function - uma função que tem como parâmetro outra função

function sayMyName(name) {
  name()
}

sayMyName(() => {
  console.log("estou em uma callback")
})
```

## Constructor Function

- São declaradas com a **primeira letra maiúscula**.
- Utiliza a expressão `new`
- Cria um novo objeto
- `this` keyword, faz referência a quem chamou a função
- Funçôes contrutores pré-existente no JS: String, Number, Date...

```js
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const elias = new Person("Elias")
const mayk = new Person("Mayk")
console.log(elias)
console.log(mayk)
console.log(elias.walk())
console.log(mayk.walk())
```

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
