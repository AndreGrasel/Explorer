# Exercício 01

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ] A soma dos dois números;
- [ ] A subtração dos dois números;
- [ ] A multiplicação dos dois números;
- [ ] A divisão dos dois números;
- [ ] O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- [ ] Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ] Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

```js
const numberOne = Number(prompt("Digite um número:"))
const numberTwo = Number(prompt("Digite outro número:"))
let evenOdd
let equality

if ((numberOne + numberTwo) % 2 == 0) {
  evenOdd = "par"
} else {
  evenOdd = "ímpar"
}

if (numberOne == numberTwo) {
  equality = "iguais"
} else {
  equality = "diferentes"
}

alert(`A soma dos dois números é ${evenOdd} e igual a ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é ${(numberOne / numberTwo).toFixed(2)}`)
alert(`O resto da divisão dos dois números é ${numberOne % numberTwo}`)
alert(`Os dois números são ${equality}`)
```

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
