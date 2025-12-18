const Jogo = require("../models/Jogo");


const jogos = [
    new Jogo("God of War", 199.90, "PS4", "Usado"),
    new Jogo("Zelda BOTW", 299.90, "Switch", "Novo"),
    new Jogo("Red Dead 2", 249.90, "PS4", "Usado")
];


jogos.forEach(j => j.aprovar());

class JogoController {
    static listarJogos(req, res) {
        res.json(jogos.map(j => j.getDados()));
    }

    static alterarAprovacao(titulo, aprovado) {
        const jogo = jogos.find(j => j.getDados().titulo === titulo);
        if (!jogo) return { erro: "Jogo não encontrado" };
        if (aprovado) jogo.aprovar();
        else jogo.reprovar();
        return { mensagem: `Jogo ${titulo} ${aprovado ? "aprovado" : "reprovado"}` };
    }
}

module.exports = { JogoController, jogos };
