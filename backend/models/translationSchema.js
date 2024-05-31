const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");
const User = require('../models/userModel'); 
const Language = require('../models/languageSchema')

const Translation = sequelize.define('translate',{
    'sourceText':{type: DataTypes.TEXT, allowNull: false},
    'translateText':{type: DataTypes.TEXT, allowNull: false},
    'sourceLang':{type: DataTypes.STRING, allowNull: false},
    'targetLang':{type: DataTypes.STRING, allowNull: false},
    'userId':{type:DataTypes.INTEGER,
        references:{
model: User,
key:'id'
    }}
})

Translation.belongsTo(Language, { as: 'sourceLanguage', foreignKey: 'sourceLang', targetKey: 'code' });
Translation.belongsTo(Language, { as: 'targetLanguage', foreignKey: 'targetLang', targetKey: 'code' });

module.exports = {
    Translation
}