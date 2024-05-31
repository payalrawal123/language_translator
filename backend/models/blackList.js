const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");


const blackSchema = sequelize.define('blacklist',{
    token:{type:DataTypes.STRING, allowNull:false},
    
},{
    timestamps:false
})

// eventSchema.findAll().then(console.log).catch(console.log);
module.exports={
    blackSchema
}