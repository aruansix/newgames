const jogos = require("./JogoController").jogos;

class CompradorController {
    static comprar(comprador, tituloJogo) {
    const jogo = jogos.find(j => j.getDados().titulo === tituloJogo && j.getDados().aprovado);
    if (!jogo) {
        return { erro: "Jogo não encontrado ou não aprovado" };
    }
    comprador.comprar(jogo);
    return { mensagem: `Jogo ${tituloJogo} comprado com sucesso` };
    }

    static listarPedidos(comprador) {
        return comprador.getPedidos();
    }
}

module.exports = CompradorController;
