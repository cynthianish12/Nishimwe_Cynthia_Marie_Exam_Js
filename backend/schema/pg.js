
const { DataTypes, Sequelize } = require("sequelize");


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});



const Register = sequelize.define("WorkerData", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sname: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    position: {
        type: DataTypes.STRING,
        allowNull: false
      },
     company: {
        type: DataTypes.STRING,
        allowNull: false
      },
     arena: {
        type: DataTypes.STRING,
        allowNull: false
      },
     employees: {
        type: DataTypes.STRING,
        allowNull: false
      },
     info: {
        type: DataTypes.STRING,
        allowNull: false
      },
     code: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
     street: {
        type: DataTypes.STRING,
        allowNull: false
      },
     place: {
        type: DataTypes.STRING,
        allowNull: false
      },
     country: {
        type: DataTypes.STRING,
        allowNull: false
      },
     number: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
     email: {
        type: DataTypes.STRING,
        allowNull: false
      },
});


// Synchronize the models with the database
sequelize.sync();

// Export the models
module.exports = {
  Register
};