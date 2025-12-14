class Usuario {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataDeCadastro = new Date().toLocaleDateString();
    }

    getInfo() {
        return {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            dataDeCadastro: this.dataDeCadastro
        };
    }
}

module.exports = Usuario;
