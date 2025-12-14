module.exports = {
    revisarJogo(admin, jogo) {
        return {
            admin: admin.nome,
            mensagem: admin.revisar(jogo)
        };
    },

    removerAnuncio(admin, vendedor, index) {
        const removido = admin.removerAnuncio(vendedor, index);

        return {
            mensagem: "Anúncio removido pelo administrador",
            jogoRemovido: removido[0]?.titulo || "Nenhum"
        };
    }
};
