class Usuario {
    #nome;
    #email;
    #telefone;
    #tipo;
    #dataCadastro;

    constructor(nome, email, telefone, tipo) {
        this.#nome = nome;
        this.#email = email;
        this.#telefone = telefone;
        this.#tipo = tipo;
        this.#dataCadastro = new Date().toLocaleDateString();
    }

    getNome() { return this.#nome; }
    getEmail() { return this.#email; }
    getTelefone() { return this.#telefone; }
    getTipo() { return this.#tipo; }
    getDataCadastro() { return this.#dataCadastro; }
}

module.exports = Usuario;
