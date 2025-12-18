const Usuario = require("./Usuario");

class Comprador extends Usuario {
    #pedidos;

    constructor(nome, email, telefone) {
        super(nome, email, telefone, "comprador");
        this.#pedidos = [];
    }

    comprar(jogo) {
        this.#pedidos.push(jogo);
    }

    getPedidos() {
        return this.#pedidos;
    }
}

module.exports = Comprador;
