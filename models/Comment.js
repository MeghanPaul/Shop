const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn("NOW")
        }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
