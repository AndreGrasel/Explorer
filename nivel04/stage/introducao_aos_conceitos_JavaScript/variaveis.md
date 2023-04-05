# Variáveis

- Espaços na memória do computador para armazenar algum dado
- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criação de uma variável: var, let e const

## Tipagem

O JavaScript é uma linguagem fracamente tipada e dinâmica

- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o tipo da variável

```js
let adress = 42 // agora, adress é um Number
adress = "bar" // agora, adress é um String
adress = true // agora, adress é um Boolean
```

## Escopo

- Escopo refere-se a visibilidade de uma variável.

### Block statement

```js
// inicio do bloco
{
  // dentro do bloco
}
// fim do bloco
```

o bloco criará um novo escopo, `block-scoped`.

### Scope var

- Variáveis declaradas com a palavra reservada `var`:

  - Possuem escopo global (ou seja, são visivéis em todo o programa)
  - Sofrem o fenômeno de **hoisting** que consiste na elavação da declaração da variável para o topo do programa, indpeendente de onde ela foi declarada.

```js
console.log("> existe x antes do bloco? ", x)
{
  var x = 0
}
console.log("> existe x depois do bloco? ", x)
```

### Scope let and const

- Variáveis declaradas com a palavra reservada `let` ou `const` possuem o escopo local.
- Ou seja, são visíveis apenas dentro do escopo no qual foram criadas.

```js
console.log("> existe y antes do bloco? ", y)
{
  let y = 0
}
console.log("> existe y depois do bloco? ", y)
```

> OBS: você pode declarar let|const com mesmo nome mas em diferentes escopos

## Nomemclatura de Variáveis

- JS é case-sensitive (sensível ao caso)
- JS aceita a cadeia de caracteres Unicode

- Posso:

  - Iniciar com esses caracteres especiais: $ \_
  - Iniciar com letras
  - Colocar acentos
  - Letras maúsculas e minúsculas fazem diferença

- Não posso:

  - Iniciar com números
  - Colocar espaços vazios

- Boas práticas:
  - Criar nomes que fazem sentido (explique o que a variável é ou faz)
  - calmelCase
  - snake_case
  - Escrever em inglês

<br>
<br>


<br>

<a href="../README.md">Voltar</a>
