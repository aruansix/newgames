const Comprador = require("../models/Comprador");
const Vendedor = require("../models/Vendedor");
const Administrador = require("../models/Administrador");

const usuarios = [
    new Comprador("ramon", "ramon@gmail.com", "1423-5876"),
    new Vendedor("railan", "railan@gmail.com", "2543-0978"),
    new Administrador("Ruan", "ruan@gmail.com", "2454-4765", "Master")
];

class LoginController {

    static login(req, res) {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ erro: "Email é obrigatório" });
        }

        const usuario = usuarios.find(u => u.getEmail() === email);

        if (!usuario) {
            return res.status(401).json({ erro: "Usuário não encontrado" });
        }

        res.json({
            mensagem: "Login realizado com sucesso",
            usuario: {
                nome: usuario.getNome(),
                email: usuario.getEmail(),
                telefone: usuario.getTelefone(),
                tipo: usuario.getTipo()
            }
        });
    }

}

module.exports = { LoginController, usuarios };
