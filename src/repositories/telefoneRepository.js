import { connection } from "../configs/Database.js";

const telefoneRepository = {

    selecionarTodos: async () => {
        const sql = 'SELECT * FROM telefones ';
        const [rows] = await connection.execute(sql);
        return rows;
    },

    selecionarPorId: async (id) => {
        const sql = 'SELECT * FROM telefones WHERE id = ?'
        const [rows] = await connection.execute(sql, [id]);
        return rows;
    },

    inserirTelefone: async (idCliente, numero) => {
        const sql = 'INSERT INTO telefones (cliente_id, numero) VALUES (?,?)';
        const values = [idCliente, numero];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    atualizarTelefone: async (telefone) => {
        const sql = 'UPDATE telefones SET cliente_id = ?, numero= ? WHERE id = ?';
        const values = [telefone.idCliente, telefone.numero, telefone.id];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    deletarTelefone: async (id) => {
        const sql = 'DELETE FROM telefones WHERE id = ?';
        const [result] = await connection.execute(sql, [id]);
        return result;
    }

}

export default telefoneRepository;