import { connection } from "../configs/Database.js";

const clienteRepository = {

    selecionarTodos: async () => {
        const sql = 'SELECT * FROM clientes';
        const [rows] = await connection.execute(sql);
        return rows;
    },

    selecionarPorId: async (id) => {
        const sql = 'SELECT * FROM clientes WHERE id = ?'
        const [rows] = await connection.execute(sql, [id]);
        return rows
    },

    inserirCliente: async (nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep) => {
        const sql = 'INSERT INTO clientes (nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep) VALUES (?,?,?,?,?,?,?,?,?,?)';
        const values = [nome, cpf, cidade, estado, bairro, uf, rua, numero, complemento, cep];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    atualizarCliente: async (cliente) => {
        const sql = 'UPDATE clientes SET nome = ?, cpf = ?, cidade = ?, estado = ?, bairro = ?, uf = ?, rua = ?, numero = ?, complemento = ?, cep = ? WHERE id = ?';
        const values = [cliente.nome, cliente.cpf, cliente.cidade, cliente.estado, cliente.bairro, cliente.uf, cliente.rua, cliente.numero, cliente.complemento, cliente.cep, cliente.id];
        const [rows] =  await connection.execute(sql, values);
        return rows;
    },

    deletarCliente: async (id) =>{
        const sql = 'DELETE FROM clientes WHERE id = ?';
        const [result] = await connection.execute(sql, [id])
        return result;
    }
}

export default clienteRepository;