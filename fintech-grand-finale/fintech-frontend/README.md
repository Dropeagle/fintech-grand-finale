
# Fintech Frontend (React + Vite)

Frontend SPA para o projeto Fintech, com rotas e telas CRUD para **Usuário, Conta, Despesas, Receitas e Investimentos**, além de **Login**, **Home** e **ErrorPage**.

> **Back-end esperado**: API em `http://localhost:8080/api` com recursos:
> - `/usuario` (GET/POST/PUT/DELETE)
> - `/conta` (GET/POST/PUT/DELETE)
> - `/despesa` (GET/POST/PUT/DELETE)
> - `/receita` (GET/POST/PUT/DELETE)
> - `/investimento` (GET/POST/PUT/DELETE)
> - (Opcional) `/auth/login` -> `{ token, user }`. Caso não exista, há *fallback* que valida um usuário existente por e-mail via `GET /usuario`.

## Requisitos
- Node.js 18+

## Como rodar
```bash
npm i
cp .env.example .env 
npm run dev
```
Acesse: http://localhost:5173

## Build de produção
```bash
npm run build
npm run preview
```

## Estrutura
```
src/
  App.jsx
  main.jsx
  routes.jsx
  styles.css
  utils/date.js
  services/api.js
  context/AuthContext.jsx
  components/
    Navbar.jsx
    Footer.jsx
    FormInput.jsx
    EntityTable.jsx
    ConfirmDialog.jsx
  pages/
    Login.jsx
    Home.jsx
    ErrorPage.jsx
    Usuario/{ListarUsuarios,NovoUsuario,EditarUsuario}.jsx
    Conta/{ListarContas,NovaConta,EditarConta}.jsx
    Despesas/{ListarDespesas,NovaDespesa,EditarDespesa}.jsx
    Receita/{ListarReceitas,NovaReceita,EditarReceita}.jsx
    Investimentos/{ListarInvestimentos,NovoInvestimento,EditarInvestimento}.jsx
```

## Observações
- Os nomes de campos foram mantidos para aderir aos *models/DAOs* (ex.: `usuario_id_usuario`, `tipoDespesa`).
- Datas usam `YYYY-MM-DD` (compatível com `LocalDate`).
- Ajuste chaves/IDs conforme o seu retorno real (ex.: `id`, `idConta`, `id_usuario`).
