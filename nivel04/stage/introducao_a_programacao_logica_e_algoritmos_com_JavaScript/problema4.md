# Calculando a média de um estudante

- Solicitar o nome do aluno, as 3 notas do bimestre e calcular a média daquele aluno.

- A média deverá ser maior que 6.

- Se o aluno passou no bimestre, dar os parabéns. Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na recuparação. Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.

```js
let name = prompt("Digite o seu Nome: ")
let note1 = prompt("Digite a 1° nota: ")
let note2 = prompt("Digite a 2° nota: ")
let note3 = prompt("Digite a 3° nota: ")

note1 = Number(note1)
note2 = Number(note2)
note3 = Number(note3)

let avarage = (note1 + note2 + note3) / 3
avarage = avarage.toFixed(2)

if (avarage >= 6) {
  alert(name + " obteve média " + avarage + ". Parabéns, você passou :D")
} else if (avarage < 3) {
  alert(name + " obteve média " + avarage + ". Caso de Reprovação ;-;")
} else {
  alert(
    name +
      " obteve média " +
      avarage +
      ". Você não passou, dê o seu melhor na recuperação :D"
  )
}
```

<br>
<br>



<br>

<a href="../README.md">Voltar</a>
