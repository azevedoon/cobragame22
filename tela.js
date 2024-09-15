const tela = {
    largura: 800, // Ajuste para a largura da sua imagem, se necessário
    altura: 400,  // Ajuste para a altura da sua imagem, se necessário
    cor: "green",
    imagem: new Image(), // Criamos um novo objeto Image
    desenhar() {
        // Carregamos a imagem (substitua 'minha_imagem.jpg' pelo caminho da sua imagem)
        this.imagem.src = 'arvore.jpg';

        // Função para desenhar a imagem após ela ser carregada
        this.imagem.onload = () => {
            canvasCtx.drawImage(this.imagem, 0, 60, this.largura, this.altura);
        };
    },
};

tela.desenhar();