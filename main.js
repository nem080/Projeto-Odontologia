(() => {
    "use strict";

    // --- 1. CONTROLE DOS CARDS DE SERVIÇO (VER MAIS / VER MENOS) ---
    function initServiceCards() {
        const cards = document.querySelectorAll(".card-servico");
        const btn = document.querySelector(".btn-verMais");

        if (!btn) return;

        // Esconde cards iniciais (acima de 3)
        cards.forEach((card, index) => {
            if (index >= 3) card.style.display = "none";
        });

        btn.addEventListener("click", function () {
            const estaFechado = this.textContent === "Ver mais";

            if (estaFechado) {
                // Expandir
                cards.forEach((card, index) => {
                    if (index >= 3) card.style.display = "block";
                });
                this.textContent = "Ver menos";
            } else {
                // Recolher
                cards.forEach((card, index) => {
                    if (index >= 3) card.style.display = "none";
                });
                this.textContent = "Ver mais";
                // Opcional: faz scroll de volta para o topo da seção ao fechar
                document.getElementById('servico').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- 2. MENU MOBILE ---
    function initMenuMobile() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuMobile = document.querySelector(".menu-mobile");

        if (!menuToggle || !menuMobile) return;

        menuToggle.addEventListener("click", () => {
            menuMobile.classList.toggle("active");
        });

        // Fecha ao clicar fora
        document.addEventListener("click", (e) => {
            if (!menuToggle.contains(e.target) && !menuMobile.contains(e.target)) {
                menuMobile.classList.remove("active");
            }
        });

        // Fecha ao clicar em link
        document.querySelectorAll(".menu-mobile ul li a").forEach(link => {
            link.addEventListener("click", () => {
                menuMobile.classList.remove("active");
            });
        });
    }

    // --- 3. BLOG (CONTINUAR LENDO) ---
    function initBlogReadMore() {
        const conteudoOculto = document.querySelector(".ocultar");
        const btnBlog = document.querySelector("#btn-blog");

        if (!btnBlog || !conteudoOculto) return;

        btnBlog.addEventListener("click", () => {
            const ativo = conteudoOculto.classList.toggle("ativo");
            if (ativo) {
                conteudoOculto.style.display = "block";
                btnBlog.textContent = "Ler menos";
            } else {
                conteudoOculto.style.display = "none";
                btnBlog.textContent = "Continuar a ler...";
            }
        });
    }

    // --- 4. FORMULÁRIO ---
    function initForm() {
        const form = document.querySelector("#form-contato");
        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const btn = document.querySelector("#btn-from-contato");
            const resposta = document.querySelector(".resposta-from");
            
            btn.innerHTML = 'Enviando...';

            const dados = {
                NOME: form.querySelector('[name="nome"]').value,
                EMAIL: form.querySelector('[name="email"]').value,
                TELEFONE: form.querySelector('[name="telefone"]').value,
                MENSAGEM: form.querySelector('[name="mensagem"]').value,
                DATA_HS: new Date().toLocaleString()
            };

            fetch("https://api.sheetmonkey.io/form/dgvF4tuQp9hY8aqiujk4hi", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados),
            }).then(() => {
                resposta.innerHTML = "Dados Enviados Com Sucesso!";
                resposta.style.display = "block";
                form.reset();
                btn.innerHTML = "Enviar";
                setTimeout(() => location.reload(), 3000);
            });
        });
    }

    // --- INICIALIZAÇÃO GERAL ---
    document.addEventListener("DOMContentLoaded", () => {
        initServiceCards();
        initMenuMobile();
        initBlogReadMore();
        initForm();
        
        // Scroll Suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            });
        });
    });

})();

// --- 5. SEÇÃO DE IMAGENS E MODAL ---
const track = document.getElementById('track');
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgExpanded");
const captionText = document.getElementById("caption");

let currentIndex = 0;
let currentModalIndex = 0;

// Tornar as funções globais para o HTML acessar (necessário para type="module")
window.openModal = function(index) {
    const images = document.querySelectorAll('.card img');
    if (!images[index]) return;
    
    modal.style.display = "flex";
    currentModalIndex = index;
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
};

window.closeModal = function() {
    modal.style.display = "none";
};

window.changeModalImg = function(direction) {
    const images = document.querySelectorAll('.card img');
    currentModalIndex += direction;
    
    if (currentModalIndex >= images.length) currentModalIndex = 0;
    if (currentModalIndex < 0) currentModalIndex = images.length - 1;
    
    modalImg.src = images[currentModalIndex].src;
    captionText.innerHTML = images[currentModalIndex].alt;
};

window.moveSlide = function(direction) {
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20; // largura + gap
    const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);
    const maxIndex = cards.length - visibleCards;

    currentIndex += direction;

    // Lógica para não ultrapassar os limites
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const currentPosition = currentIndex * cardWidth;
    track.style.transform = `translateX(-${currentPosition}px)`;
};

// Fechar ao clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target == modal) window.closeModal();
});

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "Escape") window.closeModal();
        if (e.key === "ArrowLeft") window.changeModalImg(-1);
        if (e.key === "ArrowRight") window.changeModalImg(1);
    }
});
