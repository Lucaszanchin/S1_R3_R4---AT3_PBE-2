import { connection } from "../configs/Database.js";

const produtoRepository = {

    selecionarTodos: async () => {
        const sql = 'SELECT * FROM produtos';
        const [rows] = await connection.execute(sql);
        return rows;
    },

    selecionarPorId: async (id) => {
        const sql = 'SELECT * FROM produtos WHERE id = ?';
        const [rows] = await connection.execute(sql, [id]);
        return rows;
    },

    inserirProduto: async (nome, valor, idCategoria, imagem) => {
        const sql = `INSERT INTO produtos (nome, valor, caminhoImagem, idCategoria) VALUES (?, ?, ?, ?)`;
        const values = [nome, valor, imagem ?? null, idCategoria];
        const [result] = await connection.execute(sql, values);
        return result;
    },

    atualizarProduto: async (produto) => {
        const sql = `UPDATE produtos SET nome = ?, valor = ?, caminhoImagem = ?, idCategoria = ? WHERE id = ?`;

        const values = [
            produto.nome,
            produto.valor,
            produto.caminhoImagem,
            produto.idCategoria,
            produto.id
        ];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },
    deletarProduto: async (id) => {
        const sql = "DELETE FROM produtos WHERE id = ?";
        const [result] = await connection.execute(sql, [id]);
        return result;
    },
};

export default produtoRepository;