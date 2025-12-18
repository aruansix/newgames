const jogos = require("./JogoController").jogos; 

class VendedorController {
    static anunciar(vendedor, jogo) {
        jogo.aprovado = false;
        jogos.push(jogo);
        vendedor.anunciar(jogo); 
        return { mensagem: "Jogo anunciado com sucesso", jogo };
    }

    static listarAnuncios(vendedor) {
        return jogos.filter(j => j.getEmailVendedor() === vendedor.getEmail());
    }
}

module.exports = VendedorController;