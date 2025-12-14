const Usuario = require("./Usuario");

class Administrador extends Usuario {
    constructor(nome, email, telefone, nivel) {
        super(nome, email, telefone);
        this.nivelAcesso = nivel;
    }

    revisar(jogo) {
        return `Jogo revisado: ${jogo.titulo}`;
    }

    removerAnuncio(vendedor, index) {
        return vendedor.anuncios.splice(index, 1);
    }
}

module.exports = Administrador;
