document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav a.menu-link');
    const offset = 120; // Ajuste para o header fixo

    // Função para rolar suavemente até a seção alvo
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }

    // Adiciona evento de clique aos links do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1); // Remove o '#'
            const targetElement = document.getElementById(targetId);

            // Verifica se o link é interno (aponta para um ID válido)
            if (targetElement) {
                e.preventDefault(); // Impede o comportamento padrão apenas para links internos
                smoothScroll(targetId);
            }
        });
    });
});