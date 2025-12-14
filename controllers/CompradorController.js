module.exports = {
    comprarJogo(comprador, jogo) {
        comprador.comprar(jogo);

        return {
            mensagem: "Compra realizada com sucesso!",
            jogoComprado: jogo.titulo,
            totalPedidos: comprador.getPedidos().length
        };
    },

    listarPedidos(comprador) {
        return comprador.getPedidos();
    }
};
