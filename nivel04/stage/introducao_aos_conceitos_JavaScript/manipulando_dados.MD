# Manipulando Dados

## Prototype

- Protótipo refere-se a algo que é criado antes

- JavaScript é uma linguagem baseada em protótipos - prototype-based language

  - Prototype é uma característica do JS, é uma série de propriedades e funcionalidades que já existem nativamente em diversos tipos de dados que são tidos como objetos.

- Prototybe chain (corrente/cadeia de protótipos), todos os objetos JavaScript herdam propriedades e métodos de um objeto protótipo.

- `object.__proto__` - dessa forma, você conseque ver os objetos protótipos de um objeto

```js
// A ideia é essa só que o "objectPrototype" já é pré-definido nativamente e possue vários métodos e atributos.
let object = {
  a: "a",
  b: "b",
  objectPrototype: {
    c: "c",
    objectPrototype: {
      d: function () {
        console.log("d")
      },
    },
  },
}

console.log(object.a, object.b)
console.log(object.objectPrototype.c)
console.log(object.objectPrototype.c)
object.objectPrototype.objectPrototype.d()
```

## Type Conversion (type casting) x Type Coersion

- Ambos servem para alterar o tipo de um dado
- Type Conversion é feito manualmente
- Type Coersion é feito naturalmento pelo JS

```js
console.log("9" + 5) // Type Coersion (natural)
console.log(Number("9") + 5) // Type conversion (manual)
```

## Strings em números

```js
// Transformar String em Número e Número em String

let string = "123"
console.log(Number(string)) // Number()

let number = 123
console.log(String(number)) // String()
```

## Contando caracteres e dígitos

```js
// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)
```

## Casas Decimais

```js
// Transformando um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 23.67844
console.log(number.toFixed(1).replace(".", ","))
```

## Minúsculas e Maiúsculas

```js
// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word = "JavaScript"
console.log(word.toLowerCase())
console.log(word.toUpperCase())
```

## Separando Strings

```js
// Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_" (underline).

let phrase = "Eu quero viver o Amor!"

let myArray = phrase.split(" ")

let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore.toLowerCase())
```

## Encontrando palavras em frases

```js
// Verificar se o texto contém uma palavra em específica

let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("Amor"))
console.log(phrase.includes("amor"))
```

## Criando array com construtor

```js
// Criar Array com construtor

let myArray = new Array("a", "b", "c")
let myArrayX = new Array(10)
console.log(myArray)
console.log(myArrayX)
```

## Elementos de um Array

```js
// Contar elementos de um Array

console.log(["a", "b", "c"].length)

// Trabalhando com Array

console.log(
  [
    "a",
    { type: "array" },
    () => {
      return "alo"
    },
  ][1].type
)

console.log(
  [
    "a",
    { type: "array" },
    () => {
      return "alo"
    },
  ][2]()
)

console.log(
  [
    "a",
    { type: "array" },
    () => {
      return "alo"
    },
  ].length
)
```

## Strings para Arrays

```js
// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))
```

## Manipulando Arrays

```js
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
console.log(techs)

// adicionar no começo
techs.unshift("sql")
console.log(techs)

// remover do fim
techs.pop()
console.log(techs)

// remover do começo
techs.shift()
console.log(techs)

// pegar somente alguns elementos do array
techs.slice(1, 3)
console.log(techs)

// remover 1 ou mais items em qualquer posição do array
techs.splice(0, 2)
console.log(techs)

// encontrar a posição de um elemnto no array
let index = techs.indexOf("css")
console.log(index)

techs.splice(index, 1)
console.log(techs)
```

<br>
<br>



<br>

<a href="../README.md">Voltar</a>
