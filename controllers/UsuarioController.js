class UsuarioController {
    static perfil(usuario) {
        return {
            nome: usuario.getNome(),
            email: usuario.getEmail(),
            telefone: usuario.getTelefone(),
            tipo: usuario.getTipo(),
            dataCadastro: usuario.getDataCadastro()
        };
    }
}

module.exports = UsuarioController;
