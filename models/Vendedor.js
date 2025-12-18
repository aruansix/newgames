const Usuario = require("./Usuario");

class Vendedor extends Usuario {
    #anuncios;

    constructor(nome, email, telefone) {
        super(nome, email, telefone, "vendedor");
        this.#anuncios = [];
    }

    anunciar(jogo) {
        this.#anuncios.push(jogo);
    }

    removerAnuncio(index) {
        this.#anuncios.splice(index, 1);
    }

    getAnuncios() {
        return this.#anuncios;
    }
}

module.exports = Vendedor;
