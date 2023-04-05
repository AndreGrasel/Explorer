# Jogo da advinhação

- Apresente a mensagem ao usuário: "Advinhe o número que estou pensando (Está entre 0 e 10).".

- Crie uma lógica para gerar um número aleatório e verificar se esse número é igual ao digitado pelo usuário.

- Enquanto o usuário não advinhar o número, mostrar a mensagem: "Você errou, tente novamente".

- Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você advinhou o número em x tentativas".

- Substitua o "x" da mensagem, pelo número de tentativas.

```js
let result = prompt("Advinhe o número que estou pensando (Está entre 0 e 10):")

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt("Você errou, tente novamente")
  xAttempts++
}

alert(
  `Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou em ${xAttempts} tentativa.`
)
```

<br>
<br>



<br>

<a href="../README.md">Voltar</a>
