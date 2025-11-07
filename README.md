# 💸 Fintech - Projeto Final (Grand Finale FIAP)

Este repositório contém o **projeto completo da Fintech**, integrando **Java (Spring Boot)**, **Oracle Database** e **ReactJS (Vite)**.  
Desenvolvido como parte do **Grand Finale da FIAP**, este sistema permite o gerenciamento financeiro pessoal, unindo tecnologia e boas práticas de desenvolvimento full stack.

---

## 🧠 Visão Geral

O **Fintech** é uma aplicação voltada ao **controle financeiro pessoal**, permitindo que o usuário registre e visualize **receitas, despesas, metas e investimentos**, com autenticação e persistência dos dados em banco de dados Oracle.

O projeto foi desenvolvido seguindo os princípios de **arquitetura em camadas**, **componentização React**, e **boas práticas de REST API**.

---

## 🖥️ Tecnologias Utilizadas

### 🔹 Backend
- **Java 17**
- **Spring Boot**
- **Spring Data JPA**
- **REST API**
- **Oracle Database (FIAP Cloud ou local)**
- **Maven**

### 🔹 Frontend
- **ReactJS (Vite)**
- **React Router DOM**
- **Axios**
- **Hooks (useState, useEffect)**
- **HTML5 / CSS3 / JavaScript (ES6+)**

---

## 🗄️ Configuração e Execução

### 🔸 Backend (Spring Boot)

1. Configure o arquivo `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL
   spring.datasource.username=SEU_RM
   spring.datasource.password=SUA_SENHA
   spring.jpa.hibernate.ddl-auto=update
   ```

2. Execute no terminal, dentro da pasta **backend**:
   ```bash
   mvn spring-boot:run
   ```

3. O backend estará disponível em:
   ```
   http://localhost:8080/api
   ```

---

### 🔸 Frontend (React)

1. Acesse a pasta **frontend**:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. O frontend abrirá em:
   ```
   http://localhost:5173
   ```

> 💡 Se o backend estiver rodando em outro servidor ou porta, crie um arquivo `.env` na pasta `frontend`:
> ```bash
> VITE_API_BASE_URL=http://localhost:8080/api
> ```

---

## 🔐 Autenticação

O sistema inclui um módulo de **autenticação de usuários**, permitindo login e cadastro.  
Usuários válidos são validados no backend e persistidos no banco Oracle.

> Caso o backend ainda não possua autenticação via JWT, é possível usar mock de login para testes no frontend.

---

## 📊 Funcionalidades

✅ Cadastro e login de usuário  
✅ Registro de receitas e despesas  
✅ Visualização de saldo e histórico financeiro  
✅ Criação e acompanhamento de metas financeiras  
✅ Listagem de investimentos  
✅ Integração total entre backend e frontend  
✅ Banco Oracle integrado via Spring Data JPA  

---

## 🧩 Estrutura das Entidades Principais

- **Usuário**
- **Conta**
- **Receita**
- **Despesa**
- **MetaFinanceira**
- **Investimento**

Cada entidade segue o padrão MVC:
- Controller → camada de exposição da API REST  
- Service → regras de negócio  
- Repository → persistência de dados  

---

## 🧠 Aprendizados Aplicados

- Integração completa **Spring Boot + ReactJS**
- Comunicação via **REST API** com Axios
- Gerenciamento de estado com **React Hooks**
- Estrutura modular e componentização
- Consumo de API e tratamento de respostas
- Deploy e versionamento com Git/GitHub

---

## 🧾 Licença

Projeto acadêmico desenvolvido para fins educacionais – **FIAP 2025**.  

---
