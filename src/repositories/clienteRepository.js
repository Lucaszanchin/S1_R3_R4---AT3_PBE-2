import { connection } from "../configs/Database.js";

const clienteRepository = {

    selecionarTodos: async () => {
        const sql = 'SELECT * FROM clientes';
        const [rows] = await connection.execute(sql);
        return rows;
    },

    selecionarPorId: async (id) => {
        const sql = 'SELECT * FROM clientes WHERE id = ?'
        const [rows] = await connection.execute(sql)
        return rows
    }



    
}