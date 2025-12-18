class AdminController {
    static listarJogosParaAprovacao() {
        return require("./JogoController").jogos.map(j => j.getDados());
    }

    static alterarAprovacao(admin, titulo, aprovado) {
        if (admin.getNivel() !== "Master") {
            return { erro: "Sem permissão" };
        }
        const { JogoController } = require("./JogoController");
        return JogoController.alterarAprovacao(titulo, aprovado);
    }
}

module.exports = AdminController;