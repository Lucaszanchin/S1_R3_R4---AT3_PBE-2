import { Telefone } from "../models/Telefone.js";
import telefoneRepository from "../repositories/telefoneRepository.js";

const telefoneController = {

    buscarTodosTelefones: async (req, res) => {
        try {
            const resultado = await telefoneRepository.selecionarTodos();

            if (!resultado || resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela não contém dados' });
            }

            res.status(200).json({ message: 'Dados recebidos', data: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro no servidor', errorMessage: error.message });
        }
    },

    buscarTelefonePorID: async (req, res) => {
        try {
            const id = Number(req.params.id);

            const resultado = await telefoneRepository.selecionarPorId(id);

            if (!resultado) {
                return res.status(404).json({ message: 'Telefone não encontrado.' });
            }

            return res.status(200).json(resultado);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar produto', errorMessage: error.message });
        }
    },

    incluirTelefone: async (req, res) => {
        try {

            const { idCliente, numero } = req.body;
            if (!idCliente || !numero) {
                return res.status(400).json({ message: "Campos obrigatórios não informados" });
            }
            
            const telefone = Telefone.criar({ idCliente, numero });

            const resultado = await telefoneRepository.inserirTelefone(telefone.idCliente, telefone.numero);

            res.status(201).json({ message: 'Telefone criado com sucesso', result: resultado });

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Erro no servidor', errorMessage: error.message });

        }
    },

    atualizarTelefone: async (req, res) => {
        try {
            const id = Number(req.params.id);
            if (!id) {
                return res.status(400).json({ message: "ID é obrigatório" });
            }

            const { idCliente, numero} = req.body;

            const telefoneAtual = await telefoneRepository.selecionarPorId(id);
            if (!telefoneAtual) {
                return res.status(404).json({ message: "Cliente não encontrado" });
            }

            const telefone = Telefone.editar({idCliente, numero})

            const resultado = await telefoneRepository.atualizarTelefone(telefone);

            return res.status(200).json({message: "Telefone atualizado com sucesso", result: resultado});

        } catch (error) {
            console.error(error);

            return res.status(500).json({message: "Erro no servidor", errorMessage: error.message});
        }
    },

    excluirCliente: async (req, res) => {
        try {

            const id = Number(req.params.id);

            const telefone = await telefoneRepository.selecionarPorId(id);

            if (!telefone) {
                return res.status(404).json({message: 'Telefone não encontrado.'});
            }

            const exclusao = await telefoneRepository.deletarTelefone(id);

            res.status(200).json({ message: 'Telefone excluído com sucesso', detalhes: exclusao });

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Erro no servidor', errorMessage: error.message });
        }
    }
}

export default telefoneController;