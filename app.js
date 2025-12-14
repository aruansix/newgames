document.addEventListener("DOMContentLoaded", () => {

    const listaJogos = document.getElementById("listaJogos");
    const resultado = document.getElementById("resultado");
    const btnComprar = document.getElementById("btnComprar");
    const btnPedidos = document.getElementById("btnPedidos");

    if (!listaJogos) {
        console.error("Elemento #listaJogos não encontrado");
        return;
    }

   
    const jogos = [
        {
            titulo: "God of War Ragnarok",
            preco: 180,
            plataforma: "PS5",
            estado: "Usado"
        },
        {
            titulo: "The Last of Us Part II",
            preco: 120,
            plataforma: "PS4",
            estado: "Usado"
        }
    ];

    const pedidos = [];

    function renderizarJogos() {
        listaJogos.innerHTML = "";

        jogos.forEach((jogo, index) => {
            const card = document.createElement("div");
            card.className = "jogo";

            card.innerHTML = `
                <h3>${jogo.titulo}</h3>
                <span>Plataforma: ${jogo.plataforma}</span>
                <span>Estado: ${jogo.estado}</span>
                <span><strong>R$ ${jogo.preco}</strong></span>
            `;

            listaJogos.appendChild(card);
        });
    }

    btnComprar.onclick = () => {
        pedidos.push(jogos[0]);
        resultado.style.display = "block";
        resultado.innerText = "Compra realizada com sucesso!";
    };

    btnPedidos.onclick = () => {
        resultado.style.display = "block";
        resultado.innerText =
            pedidos.length === 0
                ? "Nenhum pedido realizado."
                : pedidos.map(p => p.titulo).join(", ");
    };

    renderizarJogos();
});
