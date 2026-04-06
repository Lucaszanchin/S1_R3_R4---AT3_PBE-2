export class Telefone {
    #id
    #idCliente
    #numero

    constructor(pIdCliente, pNumero, pId) {
        this.#idCliente = pIdCliente;
        this.#numero = pNumero;
        this.#id = pId;;
    }

    get idCliente() {
        return this.#idCliente;
    }

    set idCliente(value) {
        this.#validarIdCliente(value);
        this.#idCliente = value;
    }

    get numero() {
        return this.#numero;
    }

    set numero(value) {
        this.#validarNumero(value);
        this.#numero = value;
    }

    get id() {
        return this.#id
    }

    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }


    #validarNumero(value) {
        if (!value || value.trim().length < 11 || value.trim().length > 11 || !isNaN) {
            throw new Error("O número deve ter entre 11 dígitos")
        }
    }

    #validarIdCliente(value) {
        if (!value || value <= 0) {
            throw new Error("Escreva um ID válido");
        }
    }

    #validarId(value) {
        if (value && value <= 0) {
            throw new Error("ID inválido");
        }
    }

    static criar(dados) {
        return new Telefone(
            dados.idCliente,
            dados.numero
        )
    }

    static editar(dados, telefoneAtual) {
        return new Telefone(
            dados.idCliente ?? telefoneAtual.idCliente,
            dados.numero ?? telefoneAtual.numero
        )
    }
}