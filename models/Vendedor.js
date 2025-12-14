const Usuario = require("./Usuario");

class Vendedor extends Usuario {
    constructor(nome, email, telefone) {
        super(nome, email, telefone);
        this.anuncios = [];
    }

    anunciar(jogo) {
        this.anuncios.push(jogo);
    }

    getAnuncios() {
        return this.anuncios;
    }
}

module.exports = Vendedor;
