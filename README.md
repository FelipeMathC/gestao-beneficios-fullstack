# 🚀 Projeto Fullstack - Gestão de Benefícios & Transferências

Este projeto é uma aplicação Fullstack moderna projetada para gerenciar benefícios financeiros com um sistema de transferência robusto, garantindo a integridade dos dados através de controle de concorrência.

---

## 📸 Demonstração da Interface

### 📋 Lista de Benefícios
![Lista de Benefícios](/docs/lista_beneficios.png)

### 📡 Swagger da API
![Swagger API](docs/swagger.png)

---

## 📋 Funcionalidades

- **CRUD de Benefícios**: Gerenciamento completo (Listar, Criar, Editar e Excluir).
- **Sistema de Transferências**: Movimentação de saldo entre contas com validações em tempo real.
- **Controle de Concorrência**: Implementação de Optimistic Locking (`@Version`) para evitar conflitos de escrita.
- **UI/UX Moderna**: Interface responsiva e intuitiva utilizando Angular Material e Signals.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Java 17 & Spring Boot 3  
- Spring Data JPA & Hibernate  
- PostgreSQL (Banco de dados relacional)  
- SpringDoc OpenAPI (Swagger) (Documentação da API)  

### Frontend
- Angular 18+ (Arquitetura Standalone)  
- TypeScript  
- Angular Material (Componentes de UI)  
- Signals (Gerenciamento de estado moderno)  

---

## 🏗️ Arquitetura do Projeto

O sistema foi desenhado seguindo os princípios de separação de responsabilidades:

- **Camada de Persistência**: PostgreSQL com versionamento de entidades.
- **Camada de Serviço**: Lógica de negócio e validações de saldo.
- **Camada de API**: Endpoints REST documentados.
- **Camada de Visão**: Frontend SPA consumindo serviços de forma reativa.

---

## 📡 Documentação da API (Swagger)

A API possui documentação interativa para facilitar os testes dos endpoints.

Para acessar:

1. Certifique-se de que o backend está rodando.
2. Acesse no navegador:

http://localhost:8080/swagger-ui/index.html

---

## ⚙️ Como Rodar o Projeto

### 1. Banco de Dados
Certifique-se de ter o PostgreSQL rodando e crie um banco de dados. Configure as credenciais no arquivo `application.properties` do backend.

---

### 2. Rodando o Backend

cd backend-module
mvn clean install
mvn spring-boot:run

A API estará ativa em: http://localhost:8080

---

### 3. Rodando o Frontend

cd bip-beneficio-ui
npm install
ng serve

Acesse em: http://localhost:4200

---

## ⚠️ Regras de Negócio Implementadas

- O valor da transferência deve ser obrigatoriamente maior que zero.
- Verificação de saldo suficiente na conta de origem antes da operação.
- Validação de existência de contas (Origem e Destino).
- Impedimento de transferência para a mesma conta (Origem == Destino).
- Tratamento de exceções customizado com mensagens claras para o usuário.

---

## 🧪 Testes

Além do Swagger, os endpoints foram validados para garantir o comportamento esperado em cenários de sucesso e erro (saldo insuficiente, IDs inexistentes).

---

## 👨‍💻 Autor

Felipe Caldeira
