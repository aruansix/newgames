const Usuario = require("./Usuario");

class Comprador extends Usuario {
    constructor(nome, email, telefone) {
        super(nome, email, telefone);
        this.pedidos = [];
    }

    comprar(jogo) {
        this.pedidos.push(jogo);
    }

    getPedidos() {
        return this.pedidos;
    }
}

module.exports = Comprador;
