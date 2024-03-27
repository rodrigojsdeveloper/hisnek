<div align="center">
  <h1>
    Teste Hisnek
  </h1>

  <p>Esse é um teste técnico da Hisnek</p>
</div>
<br/>

## Clonando o Repositório

Você pode clonar este repositório usando o seguinte comando:

```
https://github.com/rodrigojsdeveloper/hisnek.git
```

## Gerenciador de Pacotes

Este projeto utiliza o NPM como seu gerenciador de pacotes. Certifique-se de tê-lo instalado antes de continuar.

## Instalação das Dependências

Para instalar as dependências do projeto, abra o terminal na raiz e execute o seguinte comando:

```
npm install
```

## Configurando a AWS Amplify

### Instalar AWS Amplify CLI

Primeiro, instale o AWS Amplify CLI globalmente:

```
npm install -g @aws-amplify/cli
```

### Configurar Amplify no Projeto

Abra o terminal e configure o Amplify:

```
amplify configure

# Siga as instruções para configurar uma conta AWS, criar um novo usuário IAM e configurar o CLI do Amplify.
```

### Inicializar o Amplify

Inicialize o Amplify em seu projeto:

```
amplify init
```

### Adicionar Autenticação

Adicione autenticação ao projeto com o Amplify:

```
amplify add auth

# Siga as instruções para configurar as opções de autenticação do usuário.
```

### Implementar Autenticação

Implante a configuração de autenticação em sua conta AWS:

```
amplify push

# Certifique-se de seguir esses passos para configurar com sucesso o AWS Amplify.
```

## Configuração do .env

Crie um arquivo `.env.local` com base no arquivo `.env.example`.

### Para acessar o endereço IPv4:

- Abra as configurações de rede.
- Procure pela seção de detalhes da conexão ou configurações de rede, onde você encontrará o endereço IPv4 listado.

## Iniciando o Teste

Para iniciar a fake-api, execute o seguinte comando no terminal:

```
npm run graphql
```

E para iniciar o projeto, em outro terminal execute o seguinte comando no terminal:

```
npm run start
```

<br/>
<p align="center">Desenvolvido por <a href="https://www.linkedin.com/in/rodrigojsdeveloper/">Rodrigo Silva</a>
</p>
