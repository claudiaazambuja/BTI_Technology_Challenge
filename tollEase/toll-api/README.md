
# BTI Toll Backend

BTI toll backend, é parte da aplicação BTI Toll. Ela serve para monitorar e adicionar veículos que passam por pedágios. Aplicando descontos mensais a depender do histórico do veículo.
## Deploy

Acesse [aqui](https://bti-toll-api.onrender.com)

## Tecnologias Utilizadas

A seguir estão as principais tecnologias e bibliotecas utilizadas no desenvolvimento deste projeto:

- **node** (v21.2.0) - A versão do Node.js utilizada no projeto.
- **pg** (v8.11.3) - Um cliente PostgreSQL para Node.js.
- **express** (v4.18.2) - Um framework web para Node.js que facilita a construção de APIs RESTful.
- **cors** (v2.8.5) - Middleware para habilitar CORS (Cross-Origin Resource Sharing) em aplicativos Express.
- **dayjs** (v1.11.10) - Uma biblioteca de manipulação de datas leve e moderna.
- **dotenv** (v16.3.1) - Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **express-async-errors** (v3.1.1) - Tratamento de erros assíncronos para aplicativos Express.
- **http-status** (v1.7.3) - Constantes HTTP para Node.js.
- **joi** (v17.11.0) - Uma biblioteca para validação de objetos JavaScript.


## Como Executar o Projeto

1. Clone o repositório: 

```bash
  git clone git@github.com:claudiaazambuja/BTI_Technology_Challenge.git
```

2. Navegue até tollEase/toll-api
3. Atualize seu .env com a URL para o banco com base no env.example e se preferir utilize o deploy para o banco de dados.

```bash
postgres://barxvapl:ryZ-pu5OnhVXr5hRgc_85nuizQjwDDRH@bubble.db.elephantsql.com/barxvapl
```

4. Instale as dependências: 

```bash
  npm install
```

5. Execute o projeto: 

```bash
  npm start
```



