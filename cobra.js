const cobra = {
    x: 400,
    y: 260,
    cor: "black",
    tamanho: 10,
    vida: 3,
    direcao: 0,
    segmentos: [], // Array para armazenar os segmentos da cobra
    desenhar() {
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(this.x, this.y, this.tamanho, this.tamanho);
        for (let i = 0; i < this.segmentos.length; i++) {
            canvasCtx.fillRect(this.segmentos[i].x, this.segmentos[i].y, this.tamanho, this.tamanho);
        }
    },
    mover() {
        // Mover os segmentos
        for (let i = this.segmentos.length - 1; i > 0; i--) {
            this.segmentos[i].x = this.segmentos[i - 1].x;
            this.segmentos[i].y = this.segmentos[i - 1].y;
        }
        if (this.segmentos.length > 0) {
            this.segmentos[0].x = this.x;
            this.segmentos[0].y = this.y;
        }

        // Mover a cabeça da cobra
        if (this.direcao == 0) this.x++;
        if (this.direcao == 90) this.y++;
        if (this.direcao == 180) this.x--;
        if (this.direcao == 270) this.y--;

        if ((this.x > tela.largura - this.tamanho) || (this.x < 0) || (this.y > tela.altura - this.tamanho + placar.altura) || (this.y < placar.altura)) {
            this.morrer();
        }
        this.verificarColisaoComAlimento(alimento);
    },
    morrer() {
        this.vida--;
        if (this.vida == 2) this.cor = "orange";
        if (this.vida == 1) this.cor = "red";
        this.x = 400;
        this.y = 260;
        this.segmentos = []; // Resetar os segmentos ao morrer
    },
    comer() {
        this.cor = "blue"; // Muda a cor da cobra para azul ao comer um alimento
        // Adicionar três novos segmentos
        for (let i = 0; i < 3; i++) {
            this.segmentos.push({ x: this.x, y: this.y });
        }24
    },
    verificarColisaoComAlimento(alimento) {
        if (this.x < alimento.x + alimento.tamanho &&
            this.x + this.tamanho > alimento.x &&
            this.y < alimento.y + alimento.tamanho &&
            this.y + this.tamanho > alimento.y) {
            this.comer();
            placar.atualizarPontos(alimento.pontuacaoAtual); // Atualiza os pontos no placar com a pontuação do alimento

            // Reposicionar o alimento após ser comido
            alimento.x = Math.random() * (tela.largura - alimento.tamanho);
            alimento.y = Math.random() * (tela.altura - alimento.tamanho) + placar.altura;

            // Mudar a imagem do alimento aleatoriamente
            alimento.mudarImagemAleatoria();
        }
    }
};