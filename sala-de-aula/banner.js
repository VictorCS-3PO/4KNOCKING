// banner.js
document.addEventListener("DOMContentLoaded", () => {
    const banners = document.querySelectorAll(".banner");
    let bannerAtual = 0;

    function trocarBanner() {
        // Remove a classe 'active' do banner atual
        banners[bannerAtual].classList.remove("active");

        // Calcula o índice do próximo banner
        bannerAtual = (bannerAtual + 1) % banners.length;

        // Adiciona a classe 'active' ao próximo banner
        banners[bannerAtual].classList.add("active");
    }

    // Define um intervalo para trocar os banners a cada 5 segundos (5000 milissegundos)
    setInterval(trocarBanner, 5000);
});