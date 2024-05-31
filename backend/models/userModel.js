const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const userModel = sequelize.define("users",{
    name:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique: true},
    password:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:false
})

// userModel.findAll().then(console.log).catch(console.log);

module.exports = {
    userModel
}