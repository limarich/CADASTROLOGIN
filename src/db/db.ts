import {Sequelize} from "sequelize";
const {DATABASE_NAME,DATABASE_HOST,DATABASE_PORT,DATABASE_USER,DATABASE_PASSWORD} = process.env;

const sequelize = new Sequelize(`${DATABASE_NAME}`, `${DATABASE_USER}`, `${DATABASE_PASSWORD}`, {
  host: `${DATABASE_HOST}`,
  dialect: 'mysql',
  port:  3306
})
sequelize
.authenticate()
.then(()=>{console.log("Conexão com db efetuada com sucesso")})
.catch((err)=>{console.log("ERRO: Não foi possível efetuar a conexão com o db!\n\n", err)})
export {sequelize}