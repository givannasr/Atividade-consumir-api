const clienteModel = require('../models/clienteModel')

const clienteController = {
    // RETORNA TODOS OS CLIENTES EXISTENTES NA TABELA CLIENTES
    selecionarTodosClientes: async (req, res) => {
        try {
            const clientes = await clienteModel.selecionaTodosClientes();
            return res.json(clientes);
        } catch (error) {
            throw error
        }
    },

    // RETORNA O CLIENTE COM BASE NO ID INFORMADO
    selecionarUmCliente: async (req, res) => {
        try {
            const { id } = req.params;
            const cliente = await clienteModel.selectOneCliente(id);
            return res.json(cliente)

        } catch (error) {
            throw error
        }
    },

    // RETORNA O CLIENTE COM BASE NO ID INFORMADO
    selecionarClienteNome: async (req, res) => {
        try {
            const { NOME } = req.params;
            const cliente = await clienteModel.selectClienteNome(NOME);
            return res.json(cliente)

        } catch (error) {
            throw error
        }
    },

    // CREATE - CRIA UM NOVO CLIENTE
    adicionarCliente: async (req, res) => {
        try {
            const { NOME, TEL_CEL, TEL_FIXO, EMAIL } = req.body;
            const result = await clienteModel.insertCliente({ NOME: NOME, TEL_CEL: TEL_CEL, TEL_FIXO: TEL_FIXO, EMAIL: EMAIL });
            console.log(result);
            return res.json(result);

        } catch (error) {
            throw error
        }
    },

    alterarCliente: async (req, res) => {
        try {
            const { id } = req.params;
            const { NOME, TEL_CEL, TEL_FIXO, EMAIL } = req.body;

            const result = await clienteModel.updateCliente(id, { NOME: NOME, TEL_CEL: TEL_CEL, TEL_FIXO: TEL_FIXO, EMAIL: EMAIL });
            return res.json(result);

        } catch (error) {
            return res.json(error);
        }
    },
    deletarCliente: async (req, res) => {
        try {
            const { id } = req.params;
            var result = await clienteModel.deleteCliente(id);
            if (result[0].affectedRows > 0) {
                return res.status(200).send(`Registro excluído com sucesso!`)
            } else {
                return res.send("Registro não localizado");
            }
        } catch (error) {
            throw error
        }
    }
};


module.exports = clienteController;