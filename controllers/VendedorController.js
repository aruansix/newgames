module.exports = {
    anunciarJogo(vendedor, jogo) {
        vendedor.anunciar(jogo);

        return {
            mensagem: "Jogo anunciado com sucesso!",
            jogo: jogo.titulo
        };
    },

    listarAnuncios(vendedor) {
        return vendedor.getAnuncios();
    }
};
