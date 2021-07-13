const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
    {
        header: DataTypes.STRING,
        text: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post;