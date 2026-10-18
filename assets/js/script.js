window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('opacity-0');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 700); 
        }, 1500);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('bg-transparent', 'border-transparent', 'py-2');
            navbar.classList.add('bg-sushito-black/90', 'backdrop-blur-md', 'border-white/5', 'shadow-lg');
        } else {
            navbar.classList.add('bg-transparent', 'border-transparent', 'py-2');
            navbar.classList.remove('bg-sushito-black/90', 'backdrop-blur-md', 'border-white/5', 'shadow-lg');
        }
    });

    const form = document.getElementById('form-reserva');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            const pessoas = document.getElementById('pessoas').value;

            const dataFormatada = data.split('-').reverse().join('/');
            const numeroWhatsApp = '5511999990000'; 
            const mensagem = `Olá, Sushito! Gostaria de solicitar uma reserva. 🍣\n\n*Detalhes do Pedido:*\n👤 *Nome:* ${nome}\n📱 *Telefone:* ${telefone}\n📅 *Data:* ${dataFormatada}\n⏰ *Horário:* ${hora}\n👥 *Pessoas:* ${pessoas}\n\nAguardo a vossa confirmação!`;

            const mensagemCodificada = encodeURIComponent(mensagem);
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    // --- Lógica do Slider com Efeito de Movimento 3D (Zoom Lento) ---
    const slides = document.querySelectorAll('.slide-img');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            // Remove a visibilidade e a animação de zoom da imagem atual
            slides[currentSlide].classList.remove('opacity-100', 'animate-zoom-slow');
            slides[currentSlide].classList.add('opacity-0');
            
            // Calcula a próxima foto
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Adiciona a visibilidade e reinicia a animação de zoom na nova imagem
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100', 'animate-zoom-slow');
            
        }, 5000); // 5 segundos para a animação deslizar suavemente
    }
});
