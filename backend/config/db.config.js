require("dotenv").config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect:"mysql"
   });

   async function connectionToDb(){
    try {
        await sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
   }
   module.exports={
       sequelize,
       connectionToDb
   }