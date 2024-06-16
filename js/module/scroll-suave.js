// Scroll Suave
export function initScrollSuave() {
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll('a[href^="#"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    });
}

// Seletor de Seção
export function initSecaoSeletor() {
    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }
}