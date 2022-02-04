## Sistema de Cadastro e Login

- Já parou para pensar como que funciona um sistema desses!? 
  - Nada melhor do que praticar para descobrir.
<p align="center">
  <a href="#sobre">| Sobre |</a>
  <a href="#tecnologias"> Tecnologias |</a>
  <a href="#tutorial"> Como usar |</a>
  <a href="https://limarich.github.io/My-ToDo/">Página do projeto</a>|
</p>
<hr>

### Sobre

Sem mais delongas, o projeto consiste em uma aplicação Node+typescript que faz uso de um banco de dados Mysql que configurei para rodar em um docker container.
<br><br>
Por enquanto o projeto ainda não possui interface, então é necessário utilizar algum programa que te permita fazer mais requisições do que seu navegador permite(apenas GET para quem não sabe). No meu caso utilizei o [Postman](https://www.postman.com/downloads/) e tenho algumas requisições:
<br>
- login
- cadastro
- busca por usuários
- busca por usuários
- atualização de dados de um usuário
- mudança de senha
- remoção de um usuário

Segue um vídeo abaixo onde eu falo um pouco sobre o projeto.
<img src="https://www.loom.com/share/ed73c094e9f2484584ea7b33a7dafc0e" />
[Caso não carregue clique aqui](https://www.loom.com/share/ed73c094e9f2484584ea7b33a7dafc0e)

### Tecnologias
Para a construção deste projeto foram usadas as tecnologias:

- Nodejs
- Mysql
- Typescript
- Docker
- express
- sequelize
- celebrate
- bycript
- Eslint
- prittier

> Bastante coisa né? normalmente aplicações complexas requerem mais dependências para te dar um suporte melhor. Não se preocupe, normalmente vc se acostuma bem rápido!

### Tutorial

```markdown
#clone este repositório
https://github.com/limarich/CADASTROLOGIN.git

1. caso queira utilizar o npm 
#baixe as dependencias
npm install

- inicie Mysql no xamp!

## crie o banco de dados com o nome indicado:
 CREATE DATABASE "nome que estiver no arquivo .env"

#converta o index.ts para index.js
- npm run build

#inicie a aplicação
- npm start

##ou ainda execute  apenas:
`npm run dev`

2. caso prefira utilizar o docker/docker-compose

# inicie o compose
- docker-compose up
# provavelmente você terá um erro que pode ser corrigido pelo próprio cmd

# no cmd execute:
- mysql -u root
- create new schema "nome que estará no arquivo .env"

#pronto caso necessite, dê um ctrl+C e rode de novo docker-compose up

3. para todos configurarem as variáveis de ambiente
# existem 5 variáveis que você precisa "setar" para poder usar, preencha os dados que correspondem ao seu caso e renomeie de .env.locals para .env
##exemplo
`
DATABASE_NAME = "sistema"
DATABASE_HOST = "database-login"
DATABASE_PORT = 3306
DATABASE_USER = "root"
DATABASE_PASSWORD = "root"
`


```

> Recomendo fortemente que assista ao meu vídeo [acima](https://www.loom.com/share/ed73c094e9f2484584ea7b33a7dafc0e)

**Contatos** 
- <a href="https://limarich.github.io/My-ToDo/">Página do projeto</a>
- <a href="https://www.linkedin.com/in/richard-lima-488b451a8/">Linkedin</a>
- <a href="https://github.com/limarich/">github</a> 
- <a href="mailto:richard.esclima@gmail.com">e-mail</a>

------------


<br>

<p>Feito por Richard Lima Ribeiro</p>
