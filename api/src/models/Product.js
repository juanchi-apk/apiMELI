const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Stock: {
      type: DataTypes.INTEGER
    },
    
    
  });
};
