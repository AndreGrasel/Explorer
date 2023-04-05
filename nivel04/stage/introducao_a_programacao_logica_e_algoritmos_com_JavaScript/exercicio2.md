# Exercício 02

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ] Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ] Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

```js
const students = [
  {
    name: "Diego",
    n1: 5,
    n2: 7,
  },
  {
    name: "Leticia",
    n1: 7,
    n2: 8,
  },
  {
    name: "Ana",
    n1: 7,
    n2: 4,
  },
]

function avarage(N1, N2) {
  return ((N1 + N2) / 2).toFixed(1)
}
9
function approval(name, N1, N2) {
  let a = avarage(N1, N2)
  if (a >= 7) {
    return `${a} Parabéns, ${name}! Você foi aprovado(a)!`
  } else {
    return `${a} Não foi dessa vez, ${name}. Tente novamente.`
  }
}

function messageFunction(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${approval(
    student.name,
    student.n1,
    student.n2
  )}`
}

for (const student of students) {
  let message = messageFunction(student)
  console.log(message)
}
```

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
