const placar = {
    largura: 800,
    altura: 60,
    corFundo: "black",
    corTexto: "white",
    nomeJogo: "IFRJ Cobra",
    pontos: 0,

    desenhar() {
        canvasCtx.fillStyle = this.corFundo;
        canvasCtx.fillRect(0, 0, this.largura, this.altura);
        canvasCtx.fillStyle = this.corTexto;
        canvasCtx.font = "26px Fantasy";
        canvasCtx.textAlign = "center";
        canvasCtx.textBaseline = "middle";
        canvasCtx.fillText(this.nomeJogo, 400, 30);
        canvasCtx.font = "16px Fantasy";
        canvasCtx.textAlign = "right";
        canvasCtx.fillText(this.pontos + " pts", 780, 45);
        canvasCtx.fillText(cobra.vida + " vida(s)", 780, 15);
    },

    atualizarPontos(pontos) {
        this.pontos += pontos;
        this.desenhar();
    }
};

//função que verifica se a cobra comeu o alimento
function cobraComeuAlimento() {
    // Lógica para verificar se a 888 comeu o alimento
    // Se a cobra comer o alimento atualiza os pontos
    placar.atualizarPontos(2); // Atualiza os pontos com um valor fixo (2) como exemplo
}

// Exemplo de chamada da função quando a cobra come o alimento
cobraComeuAlimento();

