NewGames

NewGames é um sistema online de compra e venda de jogos, desenvolvido em Node.js com Express, usando arquitetura MVC.
Permite que compradores adquiram jogos, vendedores anunciem seus produtos, e administradores aprovem ou reprovem anúncios.

Funcionalidades
Comprador

Visualizar jogos aprovados.

Comprar jogos.

Consultar histórico de compras.

Vendedor

Anunciar novos jogos.

Visualizar histórico de anúncios.

Ver status de aprovação dos jogos.

Administrador

Aprovar ou reprovar jogos.

Consultar todos os jogos cadastrados.

Estrutura do Projeto
/site-newgames
│
├─ /controllers
│   ├─ JogoController.js         # Lógica para listar jogos
│   ├─ LoginController.js        # Lógica de login
│   ├─ VendedorController.js     # Lógica de anúncios
│   ├─ CompradorController.js    # Lógica de compras
│   └─ AdminController.js        # Lógica de aprovação de jogos
│
├─ /models
│   ├─ Jogo.js                   # Modelo do jogo
│   └─ Usuario.js                # Modelo do usuário
│
├─ /views
│   ├─ index.html                # Página principal
│   ├─ login.html                # Página de login
│   └─ style.css                 # Estilos
│
├─ app.js                        # Servidor Express
└─ package.json                  # Dependências do Node.js

Modelos de Dados
Jogo

titulo (string)

preco (float)

plataforma (string)

estado (Novo / Usado)

aprovado (boolean, padrão: false)

emailVendedor (string)

Métodos principais:

getDados() → retorna todas as informações do jogo.

aprovar() / reprovar() → altera status de aprovação.

getEmailVendedor() → retorna email do vendedor.

Usuario

nome (string)

email (string)

tipo (comprador / vendedor / admin)

Rotas
Páginas

GET / → Página principal com jogos disponíveis.

GET /login → Página de login.

Jogos

GET /jogos → Retorna todos os jogos cadastrados (apenas aprovados aparecem para compra).

Compras

POST /comprar
Body JSON:

{ "emailComprador": "ruan@teste.com", "titulo": "Doom 2016" }


GET /comprador/pedidos/:email → Retorna lista de jogos comprados.

Vendedores

POST /anunciar
Body JSON:

{
    "emailVendedor": "joao@teste.com",
    "titulo": "FIFA 23",
    "preco": 199.90,
    "plataforma": "PS5",
    "estado": "Novo"
}


GET /vendedor/anuncios/:email → Retorna anúncios do vendedor.

Administrador

GET /admin/jogos → Lista todos os jogos cadastrados.

POST /admin/jogo
Body JSON:

{ "emailAdmin": "admin@teste.com", "titulo": "Doom 2016", "aprovado": true }

Login

POST /login
Body JSON:

{ "email": "ruan@teste.com", "tipo": "comprador" }

Como Rodar o Projeto

Clone o repositório:

git clone <url-do-repositorio>
cd site-newgames


Instale dependências:

npm install


Inicie o servidor:

node app.js


Acesse no navegador:

http://localhost:3000

Exemplo de Usuários Fictícios
const usuarios = [
    { nome: "Ruan Portela", email: "ruan@teste.com", tipo: "comprador" },
    { nome: "João Vendedor", email: "joao@teste.com", tipo: "vendedor" },
    { nome: "Admin Master", email: "admin@teste.com", tipo: "admin" }
];

Exemplos de Uso
Como comprador

Logar com email ruan@teste.com.

Ver jogos disponíveis.

Clicar em “Comprar” para adquirir um jogo.

Consultar o histórico em “Meus Pedidos”.

Como vendedor

Logar com email joao@teste.com.

Clicar em “Anunciar Novo Jogo”.

Preencher título, preço, plataforma e estado.

Visualizar anúncios em “Meus Anúncios”.

Acompanhar aprovação dos jogos.

Como administrador

Logar com email admin@teste.com.

Abrir “Painel Admin”.

Aprovar ou reprovar jogos anunciados.

Tecnologias

Node.js

Express.js

JavaScript (ES6 Classes)

HTML/CSS

SessionStorage (front-end)

Observações

Todos os dados estão em memória, sem banco de dados persistente.

A lógica de aprovação de jogos é feita pelo administrador antes que compradores possam comprar.

Cada jogo é vinculado ao email do vendedor para controle de anúncios.