class Jogo {
    #titulo;
    #preco;
    #plataforma;
    #estado;
    #aprovado;

    constructor(titulo, preco, plataforma, estado) {
        this.#titulo = titulo;
        this.#preco = preco;
        this.#plataforma = plataforma;
        this.#estado = estado;
        this.#aprovado = false;
        this.emailVendedor = "";
    }

    setEmailVendedor(email) {
        this.emailVendedor = email;
    }

    getEmailVendedor() {
        return this.emailVendedor;
    }

    aprovar() {
        this.#aprovado = true;
    }

    reprovar() {
        this.#aprovado = false;
    }

    isAprovado() {
        return this.#aprovado;
    }

    getDados() {
        return {
            titulo: this.#titulo,
            preco: this.#preco,
            plataforma: this.#plataforma,
            estado: this.#estado,
            aprovado: this.#aprovado,
            emailVendedor: this.emailVendedor
        };
    }
}

module.exports = Jogo;
