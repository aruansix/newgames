const Usuario = require("./Usuario");

class Administrador extends Usuario {
    #nivel;

    constructor(nome, email, telefone, nivel) {
        super(nome, email, telefone, "admin");
        this.#nivel = nivel;
    }

    getNivel() {
        return this.#nivel;
    }
}

module.exports = Administrador;
