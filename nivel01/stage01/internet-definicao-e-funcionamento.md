<h1 id="topico3"> 🌐 O que é e como funciona a Internet? </h1>

<h2>O que é a internet?</h2>
<br>

<p>A internet, de maneira simplificada, é uma <i>rede mundial de 
computadores</i>.</p>
<br>
<p><b>|</b> &nbsp Eu poderia parar por aí mas vamos nos aprofundar um pouco mais...</p>

<p>O que é uma <b>rede</b>❔ Rede é um aglomerado de software e hardware 
que permite a comunicação entre diversos dispositivos. Essa <b>comunicação</b> 
é, basicamente, a transmissão/compartilhamento de dados e informações.</p>

<p>OBS ❕ A palavra dados não foi tratada separada da palavra informações atoa, elas possuem significados
diferentes. <b>Dados</b>, de maneira simplificada, são o estado bruto da informação, ou seja, não possuem contexto
e podem ser meros números. Já <b>informações</b> são um conjunto de dados mais trabalhados, com contexto,
com coerência.</p>

<p>
   Exemplo: mês 1, Dia 1, Dia 2, quente e frio. Isso são dados, informções brutas.<br>
   Exemplo: Dia 2 do mês 1 estava quente e Dia 1, do mesmo mês, estava frio. Isso é informação,
   dados mais trabalhado, com contexto e coerência.
</p>

<p>Ok. mas o que é esse negócio de <b>software</b> e <b>hardware</b>❔
Os hardwares são os itens físicos e tangíveis do dispositivo, desde seu 
gabinete até as peças que o compõe. O software, por sua vez, é o equivalente 
à mente do dispositivo/à parte lógica do dispositivo: aplicativos de celular, jogos, sites, sistemas
operacionais toda essa parte que não podemos tocar, intangíveis, é o que chamamos de software.</p>

<br>

<h2>Como funciona a Internet?</h2>
<br>

<p>
  Como nós, normalmente, exergamos o funcionamento da internet: digitamos o nome do site o qual queremos
   acessar e pronto! Em um passe de mágica, ele aparece na tela.
</p>
<br>
<p>
  <b>|</b> &nbsp Mas o que acontece por debaixo dos panos❔ (logo a baixo, está um passo a passo do que acontece e uma explicação detalhada de cada passo.)
</p>
<br>
<ol>
  <li>
    &nbsp Você abre seu navegador (google crhome, firefox, microsft edge...) digita o nome do site
    que deseja acessar e, automaticamente, o navegador preenche toda a URL. 
    <br><br>
    <p>
      O que é <b>navegador (browser)</b>❔ ele é quem te ajuda a navegar pelo grande oceano que é a internet.
      A função dele é obter as informções necessárias de outras partes da internet e exibi-las no seu computador, celular, tablet, 
      ou qualquer outro dispositivo.
    </p>
    <p>
      O que é <b>URL</b>❔ URL signfica <i>Uniform Resource Locator</i> (localizador padrão de recursos)
      , ou seja, ela é responsável por localizar e identificar um recurso (sites, imagens, vídeos...).
    </p>
  </li> <br>
  <li>
    &nbsp
    Ao dar "enter", é iniciada uma linha de comunicação entre o seu computador (cliente) 
    até o computador que tem o site que você deseja acessar (Servidor).
    <br><br>
    <p>
      O modelo de comunicação utilizado na internet é o <b>modelo Cliente/Servidor</b>. 
    </p>
    <p>
      Nele, o computador que faz o pedido/requisição, é denominado de cliente e, o computador que recebe o pedido/requisição,
      é denominado de servidor. E esse servidor recebe os pedidos pois é nele que estão os arquivos
      necessários para que você acesse o site que deseja.
    </p>
    <p>
      Ou seja, quando você quer acessar um site, seu computador está do lado
      do cliente (client-side) - é ele que está fazendo uma requisição para poder acessar o site. Do 
      outro lado, teremos um computador que irá receber a requição e responde-la, esse computador é
      denominado de servidor (server-side). 
    </p>
    <p>
      Como é feita essa <b>comunicação</b>❔ Ela é feita através de protocolos.
    </p>
    <p>
      O que são <b>protocolos</b>❔ Protocolos são um conjunto de regras. 
    </p>
    <p>
      Na internet, existem VÁRIOS protocolos de comunicação (cada um com sua funcionalidade específica) que estabelcem os 
      formatos e a ordem das mensagens, além de definir todas as ações a serem tomadas na 
      transmissão e recepção das mensagens.
    </p>
    <p>
      No contexto que está sendo analisado (acessar um site na internet), os principais protocolos 
      são: o <b>HTTP</b> e o <b>TCP/IP.</b>
    </p>
    <p>
      <b>O protocolo HTTP</b> (Hypertext Transfer Protocol - Protocolo de Transferência de Hypertexto)
      , como próprio nome já diz: é um protocolo cuja função é a transferência de hipertexto (textos com links).
      Até porque, toda página na internet é feita utilizando uma linguagem de marcação de hipertexto, 
      o <b>HTML</b> (Hypertext Markup Language).
    </p>
    <p>
      OBS ❕ Se você olhar bem nas URL's, normalmente, elas começam com <b>https://</b> isso significa
      que ali está sendo utilizado um protocolo <i>HTTPS (HyperText Transfer Protocol Secure - Protocolo de
      Transferência de Hipertexto Seguro)</i> ele é um protocolo HTTP só que com uma camada mais sofisticada
      de segurança.
    </p>
    <p>
      <b>O protocolo TCP/IP</b>, na verdade, é a união de dois importantes protocolos: o <i>TCP</i> e o <i>IP</i>. 
    </p>
    <p>
      <b>O protocolo TCP</b> (Transmission Control Protocol - Protocolo de Controle de Transmissão) é
      um protocolo cuja função, de forma simplificada, é garantir que a mensagem chegue corretamente ao destino.
    </p>
    <p>
      <b>O protocolo IP</b> (Internet Protcol) é um procolo cuja função é garantir a identificação dos
       computadores, como ele faz isso? atribuindo endereços para cada computador (é o famoso endereço
      IP, 168.77.34.21, por exemplo).
    </p>
  </li> <br>
  <li>
    &nbsp O nome do site (também chamado de domínio) é convertido em um endereço IP, através do DNS.
    <br><br>
    <p>
      Aqui entra outro carinha muito o importante, o <b>DNS</b>. O que é o DNS ❔ Domain Name System -
      Sistema de Nomes de Domínio (DNS) são servidores cuja função é estabelecer uma relação entre o nome de um site
      e um endereço IP. 
    </p>
    <p>
      Ou seja, antes do sue pedido para acessar o site desejado chegue até o computador (servidor) no qual o site está hospedado ,
      ele vai primeiro para um servidor DNS, que vai receber o nome do site que você digitou (domínio) e
      vai te devolver o endereço IP de onde aquele site está localizado/hospedado na intenet.
    </p>
  </li> <br>
  <li>
    &nbsp Seu pedido percorre diversos proxies.
    <br><br>
    <p>
      O que é um <b>Proxy</b>❔ É qualquer dispositivo no meio do caminho da caminho entre você (cliente)
      e o local onde está o site que você deseja acessar (servidor). Exemplos de Proxy: moldem, roteador,
      outros computadores, etc... Ou seja, a função de um Proxy é, simplismente, servir de ponte para
      que a mensagem chegue de um ponto a outro.
    </p>
    <p>
      <b>Aliás ❕</b> Uma coisa importante de ressaltar, a mensagem ela não é enviada inteira de um lado para
      outro, ela é quebrada em <b>pacotes</b>. Quem exerce esse papel é o protocolo TCP, lembra dele? É esse
      carinha o responsável por garantir que a mensagem chegue corretamente ao destino. Uma das formas
      dele cumprir com essa responsabilidade é quebrando a mensagem em pacotes, pois, dessa forma, o 
      processo de comunicação se torna bem mais rápido, eficiente e controlado. 
    </p>
    <p>
      Imagina só se no meio da comunicação se perde alguma informação, caso a mensagem não fosse 
      quebrada em pacotes, esse processo iria ter que ser realizado tudo de novo. Agora, se a mensagem
      é quebrada em pacotes e, porventura, ocorre um erro e um desses pacotes é perdido, não é necessário
      enviar toda a mensagem novamente, basta enviar somente o pacote que foi perdido (mais rápido, 
      eficiente e controlado).
    </p>
    <p>
      Se você, assim como eu, quer saber mais sobre como o protocolo UTP garante que as informações na
      internet trafeguem de um lado para outro corretamente, lá vai outra estratégia que utilizada nesse
      protocolo: O protocolo TCP é <b>orientado à conexão</b>.
    </p>
    <p>
      Tá, mas o que isso significa? Significa que, antes de um computador cliente começar a se comunicar
      com um computador servidor, o TCP faz com que uma conexão seja criada previamente. Dessa forma,
      ele garante que haverá uma conexão assegurada para que a mensgaem chegue ao seu destino de forma correta.
    </p>
    <p>
      Se o TCP não fizesse isso e mandasse informações adoidado sem se certificar que há uma conexão
      entre o client-side e o server-side, iria demorar mais, pois teriamos que esperar todas as informações
      chegarem até o servidor ou não para descobrir se a conexão foi estabelecida com sucesso . 
      Existe um protocolo mais simples que, diferentemente do TCP, não estabelece a necessidade de haver
      uma conexão prévia entre o lado do cliente e do servidor, esse protocolo é o UDP (User Datagram Protocol)
    </p>
  </li> <br>
  <li>
    &nbsp Seu pedido chega até o servidor.
  </li> <br>
  <li>
    &nbsp O Servidor analisa seu pedido e te dá uma resposta, neste caso, positiva.
  </li> <br>
  <li>
    &nbsp O caminho de volta é semelhante ao ida, passando pela linha de 
    comunicação que foi criada.
  </li> <br>
  <li>
    &nbsp O browser (navegador) recebe os pacotes, junta, interpreta-os e monta a tela do site para você.
  </li> <br>
  <li>
    &nbsp Esse processo acontece muitas vezes, pois para cada recurso (html, css
    , javascript, imagem ...) é feita uma nova conexão
  </li>
</ol>

<br>
<br>


<br>

<a href="./README.md">Voltar</a>
