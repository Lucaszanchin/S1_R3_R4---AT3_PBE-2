import { Cliente } from "../models/Cliente.js";
import clienteRepository from "../repositories/clienteRepository.js";

const clienteController = {

    buscarTodosClientes: async (req, res) => {
        try {
            const resultado = await clienteRepository.selecionarTodos();

            if (!resultado || resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela não contém dados' });
            }

            res.status(201).json({ message: 'Dados recebidos', data: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro no servidor', errorMessage: error.message });
        }
    },

    buscarClientePorID: async (req, res) => {
        try {

            const id = Number(req.params.id);
            const resultado = await clienteRepository.selecionarPorId(id);

            if (!resultado) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            return res.status(201).json(resultado);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar produto', errorMessage: error.message });
        }
    },

    incluirCliente: async (req, res) => {
        try {

            const { nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep } = req.body;
            const cliente = Cliente.criar({ nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep });
            const resultado = await clienteRepository.inserirCliente(cliente.nome, cliente.cpf, cliente.cidade, cliente.estado, cliente.bairro, cliente.uf, cliente.rua, cliente.numero, cliente.complemento, cliente.cep);

            res.status(201).json({ message: 'Cliente criado com sucesso', result: resultado });

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Erro no servidor', errorMessage: error.message });

        }
    },

    atualizarCliente: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const clienteAtual = await clienteRepository.selecionarPorId(id)
            if (!clienteAtual) {
                return res.status(404).json({ message: "Cliente não encontrado" })
            }

            const {nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep} = req.body
            const cliente = Cliente.editar({ nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep });

            await clienteRepository.atualizarCliente(cliente)

            res.status(201).json({ message: "Cliente atualizado com sucesso" })

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Erro no servidor" })
        }
    },

    excluirCliente: async (req, res) => {
        try {

            const id = Number(req.params.id);
            const cliente = await clienteRepository.selecionarPorId(id);
            if (!cliente) {
                return res.status(404).json({ message: 'Produto não encontrado.' });
            }

            const exclusao = await clienteRepository.deletarCliente(id);
            res.status(201).json({ message: 'Cliente excluído com sucesso', detalhes: exclusao });

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Erro no servidor', errorMessage: error.message });
        }
    }
}

export default clienteController;