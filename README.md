# Proposta

Construir um front-end que servirá como um Simulador de Investimentos. A aplicação deverá seguir este [protótipo](https://github.com/eqi-investimentos/desafio-frontend) e consumir os dados da [API fake](https://github.com/eqi-investimentos/desafio-fake-api) com a intenção de exibir seus dados para a pesquisa(mockada) do usuário.

# Roteiro para iniciar o projeto

O primeiro passo para iniciar o projeto é clonar a [API fake](https://github.com/eqi-investimentos/desafio-fake-api). Em seguida é necessário executar os seguintes comandos no terminal dentro do diretório da API fake:

1- `npm install`: Utilize este comando para instalar as dependências da API fake;<br>
2- `npx json-server db.json`: Este comando irá levantar o servidor na porta 3000.

Em seguida devemos abrir o terminal neste diretório para executar os seguintes comandos:

3- `npm install`: Utilize este comando para instalar as dependências do front-end;<br>
4- `npm start`: Este comando irá executar a aplicação, como já existe outra rodando na porta 3000, o sistema informará que a mesma já está em uso e solicitará permissão para utilizar a porta 3001. Pressione **Y** para confirmar.

Após seguir esse procedimento, a aplicação já estará disponível para uso.

# Informações a respeito do projeto

### Resolução funcional

O desafio foi projetado para funcionar dentro da faixa de resolução (a respeito da largura da tela): de 300px à 1600px. É possível que se a sua tela tiver uma altura fora do padrão (muito elevada em relação as tradicionais do mercado), alguns estilos podem acabar ficando desajustados.

### Testes unitários

É possível executar os testes unitários contidos no desafio através dos seguintes comandos:

1- `npm test`: Executa todos os testes presentes no projeto;<br>
2- `npm run test <path_do_arquivo>`: Executa um teste através de seu caminho;<br>
3- `npm run coverage`: Este comando mostrará a cobertura do projeto pelos testes escritos.

### Bibliotecas utilizadas

A biblioteca [TailwindCSS](https://tailwindcss.com/) foi utilizada para estilizar a página em questão pois ela permite a fácil estilização dos componentes sem que os mesmos tenham estilos pré-definidos, diferente de bibliotecas de componentes. 
Todas as chamadas a API fake foram feitas utilizando a biblioteca [Axios](https://axios-http.com/ptbr/docs/intro) por conta de seu uso simples, intuitivo e legibilidade do código.<br>
Para exibir os dados contidos na API em um gráfico, utilizaram-se componentes da biblioteca [ReCharts](https://recharts.org/en-US/). Uma biblioteca que fornece diversos tipos de gráficos customizáveis.<br>
Com a intenção de criar máscaras para os componentes de input do usuário condizentes com o protótipo, utilizou-se a biblioteca [react-number-format](https://www.npmjs.com/package/react-number-format).<br> 
O [Typescript](https://www.typescriptlang.org/) foi utilizado para maior escalabilidade do trabalho e para descobrir possíveis erros em tempo de desenvolvimento.


# Considerações

Para testar a responsividade do desafio, toda vez após alterar a resolução no navegador, faz-se necessária a atualização da página. Um dos componentes utilizados para esboçar o gráfico tem certa incompatibilidade e não atualiza automaticamente ao mudar a responsividade.<br>
De acordo com o protótipo, os tipos de indexação podem ser: *pré*, *pós* e *fixado*. Porém, na API fake existem apenas os tipos de indexação: *pré*, *pós* e *ipca* (*fixado* não é uma opção). Ao selecionar o tipo de indexação ***fixado*** no front-end, os resultados que foram configurados para a API fake retornar são os do tipo ***ipca***.<br>
O protótipo também exibe um gráfico com dezessete ocorrências, sendo que essas representam os meses do ano. A API fake, retorna onze ocorrências para cada conjunto de *Rendimento* e *Tipo de indexação* (protótipo diferente do fornecido pela API).<br>
Foi utilizada a arquitetura [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c) como modelo mental para auxiliar a pensar nas interfaces de usuário como um todo coeso e uma coleção de partes ao mesmo tempo.
