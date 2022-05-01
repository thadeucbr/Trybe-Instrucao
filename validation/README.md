## Requisitos para rodar

 - docker
 - docker-compose
 - vscode

## Instalação

A api já vem configurada para ser executada em um contêiner do Docker, não é necessário realizar nenhuma configuração ou instalação.

A primeira execução pode demorar um pouco pois o docker vai fazer o download da imagem do mysql e do node.

## Iniciando a API

Para iniciar a API basta executar o comando `npm start`, o script vai montar um contêiner para a aplicação e outro para o banco mysql.

Não é necessário restaurar o banco de dados, o docker-compose já está configurado para restaurar automaticamente na primeira vez que inicia o contêiner .

## Acessando a API

A api está rodando na porta 3333, para fazer as requisições no postman/insomnia ou outro através do endereço `localhost:3333/book` ou `localhost:3333/author`

As rotas podem ser consultadas nessa documentação https://documenter.getpostman.com/view/19487223/UVyn2ypz

## Acessando o banco de dados

O banco está rodando em um contêiner junto com a aplicação, para acessar utilize o workbench com os seguintes dados:
```
hostname: localhost
port: 3308
password: thadeu12
```
