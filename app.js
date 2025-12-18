const express = require("express");
const path = require("path");

const { JogoController, jogos } = require("./controllers/JogoController");
const { LoginController, usuarios } = require("./controllers/LoginController");
const VendedorController = require("./controllers/VendedorController");
const CompradorController = require("./controllers/CompradorController");
const AdminController = require("./controllers/AdminController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/views", express.static(path.join(__dirname, "views")));


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));

app.get("/jogos", JogoController.listarJogos);

app.post("/login", LoginController.login);

app.post("/anunciar", (req, res) => {
    const { emailVendedor, titulo, preco, plataforma, estado } = req.body;
    const vendedor = usuarios.find(u => u.getEmail() === emailVendedor && u.getTipo() === "vendedor");
    if (!vendedor) return res.status(401).json({ erro: "Vendedor não encontrado" });

    const Jogo = require("./models/Jogo");
    const novoJogo = new Jogo(titulo, parseFloat(preco), plataforma, estado);
    novoJogo.setEmailVendedor(emailVendedor);
    const resultado = VendedorController.anunciar(vendedor, novoJogo);
    res.json(resultado);
});

app.get("/vendedor/anuncios/:email", (req, res) => {
    const email = req.params.email;
    const vendedor = usuarios.find(u => u.getEmail() === email && u.getTipo() === "vendedor");
    if (!vendedor) return res.status(404).json({ erro: "Vendedor não encontrado" });
    const meusAnuncios = jogos.filter(j => j.getEmailVendedor() === email);
    res.json(meusAnuncios.map(j => j.getDados()));
});

app.post("/aprovar", (req, res) => {
    const { emailAdmin, titulo } = req.body;

    const admin = usuarios.find(u => u.getEmail() === emailAdmin && u.getTipo() === "admin");
    if (!admin) return res.status(401).json({ erro: "Administrador não encontrado" });

    const jogo = jogos.find(j => j.getDados().titulo === titulo);
    if (!jogo) return res.status(404).json({ erro: "Jogo não encontrado" });

    const resultado = AdminController.aprovarJogo(admin, jogo);
    res.json({ mensagem: resultado });
});


app.post("/comprar", (req, res) => {
    const { emailComprador, titulo } = req.body;

    const comprador = usuarios.find(u => u.getEmail() === emailComprador && u.getTipo() === "comprador");
    if (!comprador) return res.status(401).json({ erro: "Comprador não encontrado" });

    const resultado = CompradorController.comprar(comprador, titulo);

    if (resultado.erro) return res.status(400).json({ erro: resultado.erro });

    res.json({ mensagem: resultado.mensagem });
});

app.get("/comprador/pedidos/:email", (req, res) => {
    const emailComprador = req.params.email;
    const comprador = usuarios.find(u => u.getEmail() === emailComprador && u.getTipo() === "comprador");
    if (!comprador) return res.status(401).json({ erro: "Comprador não encontrado" });

    const pedidos = CompradorController.listarPedidos(comprador).map(j => j.getDados());
    res.json(pedidos);
});

app.get("/admin/jogos", (req, res) => {
    res.json(AdminController.listarJogosParaAprovacao());
});


app.post("/admin/jogo", (req, res) => {
    const { emailAdmin, titulo, aprovado } = req.body;
    const admin = usuarios.find(u => u.getEmail() === emailAdmin && u.getTipo() === "admin");
    if (!admin) return res.status(401).json({ erro: "Administrador não encontrado" });

    const resultado = AdminController.alterarAprovacao(admin, titulo, aprovado);
    if (resultado.erro) return res.status(400).json(resultado);
    res.json(resultado);
});

module.exports = app;
