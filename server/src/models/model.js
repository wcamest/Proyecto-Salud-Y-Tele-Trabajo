const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('cliente', {
        idCliente: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        // vehiculo_id:{
        //     type: DataTypes.INTEGER,
        //     allowNull:false,
        //     references:{
        //         model: "vehiculo",
        //         key: "idVehiculo"
        //     }
        // },       
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
};