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
        this.#nome = pNome;
        this.#cpf = pCpf;
        this.#cidade = pCidade;
        this.#estado = pEstado;
        this.#bairro = pBairro;
        this.#uf = pUf;
        this.#rua = pRua;
        this.#numero = pNumero;
        this.#complemento = pComplemento;
        this.#cep = pCep;
        this.#id = pId;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#validarNome(value);
        this.#nome = value;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(value) {
        this.#validarCpf(value);
        this.#cpf = value;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(value) {
        this.#validarCidade(value);
        this.#cidade = value;
    }

    get estado() {
        return this.#estado;
    }

    set estado(value) {
        this.#validarEstado(value);
        this.#estado = value;
    }

    get bairro() {
        return this.#bairro;
    }

    set bairro(value) {
        this.#validarBairro(value);
        this.#bairro = value;
    }

    get numero(){
        return this.#numero;
    }

    set numero(value){
        this.#validarNumero(value);
        this.#numero = value;
    }

    get uf() {
        return this.#uf
    }

    set uf(value) {
        this.#validarUf(value)
        this.#uf = value;
    }

    get rua() {
        return this.#rua;
    }

    set rua(value) {
        this.#validarRua(value);
        this.#rua = value;
    }

    get complemento() {
        return this.#complemento;
    }

    set complemento(value) {
        this.#validarComplemento(value);
        this.#complemento = value;
    }

    get cep() {
        return this.#cep;
    }

    set cep(value) {
        this.#validarCep(value);
        this.#cep = value;
    }

    get id(){
        return this.#id;
    }

    set id(value){
        this.#validarId(value);
        this.#id = value;
    }

    #validarNome(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 45) {
            throw new Error("Nome deve ter entre 3 e 100 caracteres");
        }
    }

    #validarCpf(value) {
        if (!value || value.trim().length < 11 || value.trim() > 11 || !isNaN) {
            throw new Error("O CPF deve ter 11 dígitos númericos, escreva corretamente")
        }
    }

    #validarCidade(value) {
        if (!value || value.trim().length < 3 || isNaN) {
            throw new Error("Digite uma cidade válida")
        }
    }

    #validarEstado(value) {
        if (!value || value.trim().length < 4 || isNaN) {
            throw new Error("Digite estado válido")
        }
    }

    #validarBairro(value) {
        if (!value || value.trim().length < 3 || isNaN) {
            throw new Error("Digite um bairro válido")
        }
    }

    #validarUf(value) {
        if (!value || value.trim().length < 2 || value.trim().length > 2 || isNaN) {
            throw new Error("Digite as siglas correspondentes ao estado que você mora")
        }
    }

    #validarRua(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 150) {
            throw new Error("Digite uma rua válida")
        }
    }

    #validarNumero(value) {
        if (!value || value.trim().length < 1 || value.trim().length > 10 || !isNaN) {
            throw new Error("Digite um número válido")
        }
    }

    #validarComplemento(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 150) {
            throw new Error("Digite um complemento válido")
        }
    }

    #validarCep(value) {
        if (!value || value.trim().length < 8 || value.trim().length > 8 || !isNaN) {
            throw new Error("Digite um CEP válido")
        }
    }

    #validarId(value) {
        if (value && value <= 0) {
            throw new Error("ID inválido");
        }
    }
}