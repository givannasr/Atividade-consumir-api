const { connection } = require(`../config/db`);

const modelCliente = {

    // SELECIONA TODOS OS REGISTROS DA TABELA CLIENTES;
    selecionaTodosClientes: async () => {
        try {
            const conn = await connection();
            const [rows] = await conn.query('select * from clientes;');
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // SELECIONA O REGISTRO DESEJADO NA TABELA CLIENTES;
    selectOneCliente: async (id) => {
        try {
            const conn = await connection();
            const sql = 'SELECT * FROM clientes WHERE id=?;';
            const values = id;
            const [rows] = await conn.query(sql, values);
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // SELECIONA O REGISTRO DESEJADO NA TABELA CLIENTES POR NOME;
    selectClienteNome: async (NOME) => {
        try {
            const conn = await connection();
            const sql = `SELECT * FROM clientes WHERE NOME=?;`;
            const values = NOME;
            const [rows] = await conn.query(sql, values);
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // INSERE UM NOVO REGISTRO NA TABELA CLIENTES;
    insertCliente: async (cliente) => {
        try {
            const conn = await connection();
            const sql = 'INSERT INTO CLIENTES (NOME, TEL_CEL, TEL_FIXO, EMAIL) VALUES (?,?,?,?);';
            const values = [cliente.NOME, cliente.TEL_CEL, cliente.TEL_FIXO, cliente.EMAIL];
            return await conn.query(sql, values);

        } catch (error) {
            throw error;
        }
    },
    // ATUALIZA UM REGISTRO DA TABELA CLIENTES;
    updateCliente: async (id, cliente) => {
        try {
            const conn = await connection();
            const sql = 'UPDATE CLIENTES SET NOME=?, TEL_CEL=?, TEL_FIXO=?, EMAIL=? WHERE id=?';
            const values = [cliente.NOME, cliente.TEL_CEL, cliente.TEL_FIXO, cliente.EMAIL, id];
            return await conn.query(sql, values);

        } catch (error) {
            throw error;
        }
    },
    // DELETA UM REGISTRO DA TABELA CLIENTES;
    deleteCliente: async (id) => {
        try {
            const conn = await connection();
            const sql = 'DELETE FROM clientes where id=?;';
            return await conn.query(sql, [id]);

        } catch (error) {
            throw error;
        }
    },
}

module.exports = modelCliente;