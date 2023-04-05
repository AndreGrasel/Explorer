# Estruturando dados com Objetos

- Cada paciente dentro da lista deverá conter: nome, idade, peso e altura.

- Escreva uma lista contendo o nome, idade, altura e peso dos pacientes.

```js
const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.9,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 1.7,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 1.8,
  },
]

const patientsNames = []
const patientsAges = []
const patientsWeight = []
const patientsHeight = []

for (const patient of patients) {
  patientsNames.push(patient.name)
}

for (const patient of patients) {
  patientsAges.push(patient.age)
}

for (const patient of patients) {
  patientsWeight.push(patient.weight)
}

for (const patient of patients) {
  patientsHeight.push(patient.height)
}

console.log("Lista de nomes: " + patientsNames)
console.log("Lista de idades: " + patientsAges)
console.log("Lista de pesos: " + patientsWeight)
console.log("Lista de altura: " + patientsHeight)
```

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
