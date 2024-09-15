class Alimento {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.x = Math.random() * (tela.largura - tamanho);
        this.y = Math.random() * (tela.altura - tamanho) + placar.altura;
        this.imagensArq = ["maca.jpg", "banana.jpg", "imagem.png"]; // Imagens
        this.pontuacoes = [2, 3, 5]; // Pontuações correspondentes as imagens
        this.imagem = new Image();
        this.mudarImagemAleatoria();
    }

    desenhar() {
        canvasCtx.drawImage(this.imagem, this.x, this.y, this.tamanho, this.tamanho);
    }

    mudarImagemAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * this.imagensArq.length);
        this.imagem.src = this.imagensArq[indiceAleatorio];
        this.pontuacaoAtual = this.pontuacoes[indiceAleatorio];
    }
}
