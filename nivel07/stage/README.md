# 🐙 Git e Github

GitHub é uma plataforma para armazenarmos nossos projetos e o Git é o software que utilizamos para gerenciar nosso código.

## Version Control System (VCS)

Gerencia o histórico das alterações que os arquivos do projeto sofreram ao longo do tempo.

Por exemplo, você pode comparar mudanças, reverter alteraçôes e ver quando algo foi modificado e quem modificou...

> Exemplo: Git, CVS, Mercurial, etc.

## Git

Git é um sistema de controle de versões distribuído e um sistema de gerenciamento de código fonte, com ênfase em velocidade.

O git inicialmente foi um projeto desenvolvido para os desenvolvedores do Kernel Linux, mas foi adotado por muitos projetos e atualmente é o controlador de versões mais utilizado.

## Como funciona o Git?

Temos uma linha do tempo principal que pode possuir linhas do tempo paralelas e é formada por pequenos pontos/marcos importantes da história do projeto.

Chamamos as linhas do tempo de **branch's** e os pontos da história do projeto de **commit's**.

## Como funciona o Commit?

Podemos imaginar que um commit é uma caixa que contém todas as alterações feitas no projeto até um determinado ponto.

Para criar um commit, primeiro você precisa colocar todas essas alterações dentro de uma "caixa", depois você coloca uma "etiqueta" na caixa com o nome dela e define essa caixa como um ponto da história do projeto.

## Estágios do arquivo

No git, um arquivo pode estar em 3 estágios:

1. **Working Diretory ou Working Tree** - esse é o estágio em que você desenvolve as alterações: cria pastas, arquivos, códigos. Logo, um arquivo nesse estágio é um arquivo **_Modified_**.

2. **Stage Area** - esse é o estágio em que você empacota todas as alterações feitas em uma caixa para poder fazer o commit. Logo, um arquivo nesse estágio é um arquivo **_Staged_**.

3. **Reposirory** - esse é o estágio em que você fecha a caixa com todas as alterações, coloca um etiqueta com um nome e define essa caixa com um ponto na linha do tempo do projeto, ou seja, você faz um commit. Logo, um arquivo nesse estágio é um arquivo **_Commited_**.

## Comandos e conceitos importantes

- `git init` inicia um repositório git, ou seja, um repositório controlado pelo git.

- `git config --global user.name` define um nome de usuáio.

- `git config --global user.email` define um email de usuáio.

- `git config --list` lista o conteúdo que está dentro da pasta config.

- `git add .` adiciona todos os arquivos que estão no Working Diretory na Stage
  Area.

- `git commit -m "commit name"` pega todos arquivos da Stage Area e faz um commit.

- `git log` mostra o histórico de commits realizados.

- `git log --oneline` mostra o histórico de commits de forma mais enxuta.

- `git log -n 3` mostra os últimos três commits (esse número é opcional).

- `git status` mostra em qual etapa os arquivos se encontram.

- `HEAD` não é um comando mas é um conceito importante. O HEAD é um ponteiro que mostrará a versão que você está trabalhando no momento atual da história do git. Ao executar um `git log` esse ponteiro irá aparecer te mostrando em que ponto da história o projeto se encontra.

- `git diff` mostra o que mudou desde o último commit, com ele será possível compararmos as modificações anteriores de um arquivo com o atual.

- `git restore .` desfaz as modificações feitas em todos os arquivos que estiverem modifed.

- `git restore --staged .` retira todos os arquivos que na Stage Area e coloca-os novamente no Working Diretory como arquivos modifed.

- `git commit --amend -m "new commit name"` reatribui um novo nome para o último commit.

- `git reset --soft HEAD~1` desfaz o último commit e retorna com os arquivos para a Stage Area.

- `git branch -M "main"` renomeia a branch principal para "main".

- `git remote --v` mostra o endereço remoto do repositório.

- `git push -u origin main` empurra o código do repositório local para o repositório remoto no github. (OBS: o `-u origin main` é necessário somente na primeira vez para que o git memorize para onde deve fazer o push nas próximas)

- `.gitignore` não é um comando mas também é uma ferramenta importante. O arquivo .gitignore é lido pleo github que vai ignorar todos os arquivos ou pastas que estiverem registrados dentro do .gitignore. (OBS: se você quer ignorar uma pasta ou arquivo que já está no repositório remoto dentro, vai ser necessário que você execute um `git rm -r --cached .`)

- `git rm -r cached .` reseta a mémoria cache do repositório remoto.

- `.gitkeep` não é um comando mas também é uma ferramenta importante. O arquivo .gitkeep é lido pelo git e mantém torna uma visível mesmo ela estando vazia (OBS: esse arquivo fica dentro da pasta em questão).

- `git pull` puxa o código atualizado do repostório remoto.

## Git e Github para times

## Commits atômicos

São commits menores.

- Terminou de codar uma funcionalidade, commita.

- Refatorou uma parte do código, commita.

- Criou a estrutura de um arquivo, de uma pasta, commita.

Ou seja, terminou de fazer uma parte importante, COMMITA.

Dessa forma você construi um Histórico mais consistente, coerente e detalhado. Isso facilita o mapeamento de bugs e facilita se você precisar voltar para uma parte específica.


### Work in Progress (WIP)

A sigla WIP é muito vista em commits para indicar que aquela ação ainda não foi concluída.

## Commits imperativos

É uma boa prática escrever os commits de forma imperativa, para passar seguir a seguinte lógica "o que esse commit faz no projeto?" (commit message) "add home page".

## Comandos

- `git fetch origin main` busca as alterações que só estão no repositório remoto e coloca elas em um lugar chamado origin/main. Esse comando é um `git pull` mais educado, enquanto o git pull busca essas alterações e já junta com o repositório local, o `git fetch` coloca elas em um lugar separado. Isso é bom pois assim você pode comparar as alterações utilizando o `git diff main origin/main` e decidir se quer juntá-las no repositório local (pra ajuntar vc utiliza o `git merge origin/main`). (OBS: só o `git fetch` busca as alterações feitas em todo o projeto não só na branch main).

- `git merge branchName` junta uma branch qualquer com a branch principal.

- `git checkout -b branchName` cria uma nova branch a partir da branch na qual você se encontra.

- `git branch` lista todas as branchs locais do projeto.

- `git branch -r` lista todas as branchs remotas do projeto.

- `git branch -a` lista todas as branchs do projeto.

- `git checkout branchName` troca de branch.

- `git branch -D branchName` deleta uma branch.

- `git push origin --delete branchName` deleta uma branch remota.

## Git Flow

- 👉 https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow
- 👉 https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html

<br>
<br>


<br>

<a href="../../README.md">Voltar</a>
