export class Cliente {
    #id
    #nome
    #cpf
    #cidade
    #estado
    #bairro
    #uf
    #rua
    #numero
    #complemento
    #cep

    constructor(pNome, pCpf, pCidade, pEstado, pBairro, pUf, pRua, pNumero, pComplemento, pCep, pId) {
        this.nome = pNome;
        this.cpf = pCpf;
        this.cidade = pCidade;
        this.estado = pEstado;
        this.bairro = pBairro;
        this.uf = pUf;
        this.rua = pRua;
        this.numero = pNumero;
        this.complemento = pComplemento;
        this.cep = pCep;
        this.id = pId;
    }

    get nome() { return this.#nome }
    set nome(value) { this.#validarNome(value); this.#nome = value }

    get cpf() { return this.#cpf }
    set cpf(value) { this.#validarCpf(value); this.#cpf = value }

    get cidade() { return this.#cidade }
    set cidade(value) { this.#validarCidade(value); this.#cidade = value }

    get estado() { return this.#estado }
    set estado(value) { this.#validarEstado(value); this.#estado = value }

    get bairro() { return this.#bairro }
    set bairro(value) { this.#validarBairro(value); this.#bairro = value }

    get uf() { return this.#uf }
    set uf(value) { this.#validarUf(value); this.#uf = value }

    get rua() { return this.#rua }
    set rua(value) { this.#validarRua(value); this.#rua = value }

    get numero() { return this.#numero }
    set numero(value) { this.#validarNumero(value); this.#numero = value }

    get complemento() { return this.#complemento }
    set complemento(value) { this.#validarComplemento(value); this.#complemento = value }

    get cep() { return this.#cep }
    set cep(value) { this.#validarCep(value); this.#cep = value }

    get id() { return this.#id }
    set id(value) { this.#validarId(value); this.#id = value }

    // 🔥 VALIDAÇÕES

    #validarNome(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 100) {
            throw new Error("Nome inválido");
        }
    }

    #validarCpf(value) {
        if (!value || value.toString().length !== 11 || isNaN(Number(value))) {
            throw new Error("CPF deve ter 11 números");
        }
    }

    #validarCidade(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("Cidade inválida");
        }
    }

    #validarEstado(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("Estado inválido");
        }
    }

    #validarBairro(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("Bairro inválido");
        }
    }

    #validarUf(value) {
        if (!value || value.trim().length !== 2) {
            throw new Error("UF inválido");
        }
    }

    #validarRua(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("Rua inválida");
        }
    }

    #validarNumero(value) {
        if (!value || isNaN(Number(value))) {
            throw new Error("Número inválido");
        }
    }

    #validarComplemento(value) {
        if (!value || value.trim().length < 1) {
            throw new Error("Complemento inválido");
        }
    }

    #validarCep(value) {
        if (!value || value.toString().length !== 8 || isNaN(Number(value))) {
            throw new Error("CEP inválido");
        }
    }

    #validarId(value) {
        if (value && value <= 0) {
            throw new Error("ID inválido");
        }
    }

    static criar(dados) {
        return new Cliente(
            dados.nome,
            dados.cpf,
            dados.cidade,
            dados.estado,
            dados.bairro,
            dados.uf,
            dados.rua,
            dados.numero,
            dados.complemento,
            dados.cep,
            dados.id
        );
    }

    static atualizar(dadosNovos, dadosAtuais) {
        return new Cliente(
            dadosNovos.nome ?? dadosAtuais.nome,
            dadosNovos.cpf ?? dadosAtuais.cpf,
            dadosNovos.cidade ?? dadosAtuais.cidade,
            dadosNovos.estado ?? dadosAtuais.estado,
            dadosNovos.bairro ?? dadosAtuais.bairro,
            dadosNovos.uf ?? dadosAtuais.uf,
            dadosNovos.rua ?? dadosAtuais.rua,
            dadosNovos.numero ?? dadosAtuais.numero,
            dadosNovos.complemento ?? dadosAtuais.complemento,
            dadosNovos.cep ?? dadosAtuais.cep,
            dadosAtuais.id
        );
    }
}