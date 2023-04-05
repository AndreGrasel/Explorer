# Estruturas de Repetição

## for

```js
for (let i = 10; i > 0; i--) {
  console.log(i)
}

// break - para a execução do loop
for (let i = 10; i > 0; i--) {
  if (i == 5) {
    break
  }
  console.log(i)
}

// continue - pula a execução do momento
for (let i = 10; i > 0; i--) {
  if (i == 5) {
    continue
  }
  console.log(i)
}
```

## whiile

```js
let i = 10

while (i > 0) {
  console.log(i)
  --i
}
```

## do..while

```js
let i = 10

do {
  console.log(i)
  --i
} while (i > 0)
```

## for of

```js
// percorre um array e coloca o valor de cada elemento (um por loop) dentro de uma variavel

let names = ["Elias", "Mayk", "Ana"]

for (let name of names) {
  console.log(name)
}
```

## for in

```js
// percorre um objeto e coloca o nome cada propriedade (um por loop) dentro de uma variavel

let person = {
  name: "elias",
  age: 30,
  weight: 70.5,
}

for (let propriety in person) {
  console.log(propriety)
  console.log(person[propriety])
}
```

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
