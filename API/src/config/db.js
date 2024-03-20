const mysql2 = require("mysql2/promise");

const connection = async () => {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }
    const con = await mysql2.createConnection({
        host: 'localhost',
        port: '3306',
        database: 'cadastro_clientes',
        user: 'root',
        password: '1234'
    });
    console.log("Conectou no MySQL!");
    global.connection = con;
    return con;
}

module.exports = { connection };