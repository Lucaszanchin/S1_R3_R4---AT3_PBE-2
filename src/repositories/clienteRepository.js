import { connection } from "../configs/Database.js";

const clienteRepository = {

    async selecionarTodos() {
        const conn = await connection.getConnection();

        try {
            const sql = `SELECT * FROM clientes AS c INNER JOIN Telefones AS t ON c.id = t.cliente_id INNER JOIN enderecos as e ON c.id = e.cliente_id`;
            const [rows] = await conn.execute(sql);
            return rows;

        } finally {
            conn.release();
        }
    },

    async selecionarPorId(id) {
        const conn = await connection.getConnection();

        try {
            const sql = `SELECT c.id, c.nome, c.cpf, c.data_cadastro, t.numero, e.cidade, e.uf, e.bairro, e.rua, e.numero AS numero_endereco, e.complemento, e.cep FROM clientes c LEFT JOIN telefones t ON c.id = t.cliente_id LEFT JOIN enderecos e ON c.id = e.cliente_id WHERE c.id = ? `;
            const [rows] = await conn.execute(sql, [id]);
            return rows[0]

        } finally {
            conn.release();
        }
    },

    async inserirCliente(cliente, telefone, endereco) {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();
            const [clienteResult] = await conn.execute("INSERT INTO clientes (nome, cpf) VALUES (?,?)", [cliente.nome, cliente.cpf]);
            const clienteId = clienteResult.insertId;
            await conn.execute("INSERT INTO telefones (numero, cliente_id) VALUES (?,?)", [telefone.numero, clienteId]);
            await conn.execute(`INSERT INTO enderecos (cidade, uf, bairro, rua, numero, complemento, cep, cliente_id)VALUES (?,?,?,?,?,?,?,?)`,
                [endereco.cidade, endereco.uf, endereco.bairro, endereco.rua, endereco.numero,endereco.complemento, endereco.cep, clienteId]
            );

            await conn.commit();
            return { clienteId };

        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    },

    async atualizarCliente(cliente, telefone, endereco) {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();
            const [resultCliente] = await conn.execute("UPDATE clientes SET nome=?, cpf=? WHERE id=?", [cliente.nome, cliente.cpf, cliente.id]);

            if (resultCliente.affectedRows === 0) {
                throw new Error("Cliente não encontrado para atualização");
            }

            if (telefone) {
                await conn.execute("UPDATE telefones SET numero=? WHERE cliente_id=?", [telefone.numero, cliente.id]);
            }

            if (endereco) {
                await conn.execute(`UPDATE enderecos SET cidade=?, uf=?, bairro=?, rua=?, numero=?, complemento=?, cep=? WHERE cliente_id=?`,
                    [endereco.cidade, endereco.uf, endereco.bairro, endereco.rua, endereco.numero, endereco.complemento, endereco.cep, cliente.id]
                );
            }

            await conn.commit();
            return { message: "Atualizado com sucesso" };

        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    },

    
    async deletarCliente(id) {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();
            await conn.execute("DELETE FROM telefones WHERE cliente_id=?", [id]);
            await conn.execute("DELETE FROM enderecos WHERE cliente_id=?", [id]);
            const [result] = await conn.execute("DELETE FROM clientes WHERE id=?", [id]);

            if (result.affectedRows === 0) {
                throw new Error("Cliente não encontrado");
            }

            await conn.commit();
            return { message: "Deletado com sucesso" };

        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    }
};

export default clienteRepository;