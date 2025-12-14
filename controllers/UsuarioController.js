module.exports = {
    exibirPerfil(usuario) {
        return {
            tipo: usuario.constructor.name,
            dados: usuario.getInfo()
        };
    }
};
