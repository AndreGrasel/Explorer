## Declaration and Assignment with var

```js
// declaração or declaration
var name

// assignment or atribuição de valores
name = "Elias"

console.log(name)

// que tipo de dado foi colocado na variável
console.log(typeof name)
```

## Agrupando declarações

```js
// agrupamento de declarações
let age, isHuman, name
name = "Elias"
age = 18
isHuman = true

// multiplos argumentos na funcao
console.log(name, age, isHuman)
```

## Concatenando e Interpolando Variáveis

```js
let name, age
name = "Elias"
age = 18

// concatenando valores
console.log(name + " tem " + age + " anos.")

// interpolando valores com template literals
console.log(`${name} tem ${age} anos.`)
```

## Object

```js
// declarando um objeto e suas propriedades
const person = {
  name: "Jhon",
  age: 30,
  weight: 88.6,
  isdAdmin: true,
}

// imprimindo um objeto e os valores de suas propriedades
console.log(person, person.name, person.age, person.weight, person.isdAdmin)

// interpolação de valores com template literals e objects
console.log(`${person.name} tem ${person.age} anos`)
```

## Array

```js
// declarando um array
const animals = ["Lion", "Monkey", "Cat"]

// acessando valores de um array
console.log(animals, animals[0], animals[1], animals[2])

// acessando o tamanho de um aray
console.log(animals.length)
```

## Exercícios

1. Declare uma variável de nome weight

```js
let weight
```

2. Qual é o tipo da variável acima?

```js
console.log(typeof weight)
```

3. Declare uma variável e atribua valores para cada um dos dados:

- name: String
- age: Number (interger)
- weight: Number (float)
- isSubscribed: Boolean

```js
let name = "Elias"
let age = 18
let weight = 65.8
let isSubscribed = true
```

4.  A variável student abaixo é de que tipo de dado?

- 4.1 Atribua os mesmos valores das variáveis do exercício 3 só que agora em propriedades de student.

- 4.2 Mostre no console a seguinte mensagem: (name) de idade (age) pesa (weight) kg.

```js
let student = {
  name: "Elias",
  age: 18,
  weight: 65.8,
  isSubscribed: true,
}
console.log(typeof student)
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
)
```

5. Declare um Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

```js
let students = []
```

6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o criado inserir ele no Array)

```js
students = [student]
```

7. Coloque no console o valor da posição zero do Array acima

```js
console.log(students[0])
```

8. Crie um novo student e coloque-o na posição 1 do Array students

```js
const maria = {
  name: "Maria",
  age: 10,
  weight: 27.4,
  isSubscribed: false,
}
students[1] = maria
```

9. Sem rodar o código responsa qual é a respostra do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

```js
console.log(a)
var a = 1
```

<br>
<br>

<br>

<a href="../README.md">Voltar</a>
