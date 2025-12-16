/**
 * =============================================
 * CAFÉ AURORA - SCRIPTS PRINCIPAIS
 * Desenvolvido por Gabriel Falcão
 * Projeto UniFECAF - Padrões Web
 * =============================================
 */

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initCardapioFilter();
    initContactForm();
    initActiveNavLink();
    initRevealAnimations();
});

/* ===========================================
   MENU MOBILE
   =========================================== */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    // Cria overlay para fechar menu ao clicar fora
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);

    if (!menuToggle || !mainNav) return;

    // Toggle do menu
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        menuToggle.setAttribute('aria-expanded', !isOpen);
        mainNav.classList.toggle('open');
        overlay.classList.toggle('active');

        // Previne scroll do body quando menu está aberto
        body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Fecha menu ao clicar no overlay
    overlay.addEventListener('click', closeMenu);

    // Fecha menu ao clicar em um link
    mainNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha menu com tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('open')) {
            closeMenu();
        }
    });

    function closeMenu() {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
}

/* ===========================================
   SMOOTH SCROLL
   Navegação suave entre seções
   =========================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Ignora links vazios ou apenas #
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Atualiza URL sem recarregar página
            history.pushState(null, '', href);
        });
    });
}

/* ===========================================
   HEADER COM SHADOW AO SCROLLAR
   =========================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
        const scrollY = window.scrollY;

        // Adiciona sombra quando não está no topo
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    };

    // Usa requestAnimationFrame para performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
}

/* ===========================================
   FILTRO DO CARDÁPIO
   =========================================== */
function initCardapioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.cardapio-item');

    if (!filterButtons.length || !items.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Atualiza estado dos botões
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Filtra itens com animação
            items.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'todos' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.3s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Animação CSS inline para fadeIn
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ===========================================
   FORMULÁRIO DE CONTATO
   Validação e envio via API (Formspree)
   =========================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    // Campos do formulário
    const fields = {
        name: {
            element: document.getElementById('name'),
            errorElement: document.getElementById('name-error'),
            validate: (value) => {
                if (!value.trim()) return 'Por favor, informe seu nome';
                if (value.trim().length < 3) return 'Nome deve ter pelo menos 3 caracteres';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            errorElement: document.getElementById('email-error'),
            validate: (value) => {
                if (!value.trim()) return 'Por favor, informe seu e-mail';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Por favor, informe um e-mail válido';
                return '';
            }
        },
        subject: {
            element: document.getElementById('subject'),
            errorElement: document.getElementById('subject-error'),
            validate: (value) => {
                if (!value) return 'Por favor, selecione um assunto';
                return '';
            }
        },
        message: {
            element: document.getElementById('message'),
            errorElement: document.getElementById('message-error'),
            validate: (value) => {
                if (!value.trim()) return 'Por favor, escreva sua mensagem';
                if (value.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres';
                return '';
            }
        }
    };

    // Validação em tempo real (blur)
    Object.values(fields).forEach(field => {
        if (!field.element) return;

        field.element.addEventListener('blur', () => {
            validateField(field);
        });

        // Remove erro ao começar a digitar
        field.element.addEventListener('input', () => {
            field.element.classList.remove('error');
            field.errorElement.textContent = '';
        });
    });

    // Máscara de telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 0) {
                value = '(' + value;
            }
            if (value.length > 3) {
                value = value.slice(0, 3) + ') ' + value.slice(3);
            }
            if (value.length > 10) {
                value = value.slice(0, 10) + '-' + value.slice(10);
            }

            e.target.value = value;
        });
    }

    // Submissão do formulário
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Valida todos os campos
        let isValid = true;
        Object.values(fields).forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Foca no primeiro campo com erro
            const firstError = form.querySelector('.form-input.error');
            if (firstError) firstError.focus();
            return;
        }

        // Desabilita botão e mostra loading
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        formStatus.className = 'form-status';
        formStatus.textContent = '';

        try {
            // Envia para Formspree (ou outra API)
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Sucesso
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                form.reset();

                // Remove classes de sucesso dos campos
                Object.values(fields).forEach(field => {
                    if (field.element) {
                        field.element.classList.remove('success');
                    }
                });
            } else {
                throw new Error('Erro ao enviar');
            }
        } catch (error) {
            // Erro
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Ops! Ocorreu um erro ao enviar. Por favor, tente novamente.';
            console.error('Erro no formulário:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });

    // Função auxiliar de validação
    function validateField(field) {
        if (!field.element) return true;

        const error = field.validate(field.element.value);

        if (error) {
            field.element.classList.add('error');
            field.element.classList.remove('success');
            field.errorElement.textContent = error;
            return false;
        } else {
            field.element.classList.remove('error');
            field.element.classList.add('success');
            field.errorElement.textContent = '';
            return true;
        }
    }
}

/* ===========================================
   NAVEGAÇÃO ATIVA (SCROLL SPY)
   Destaca link da seção visível
   =========================================== */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/* ===========================================
   LAZY LOADING DE IMAGENS
   (Fallback para navegadores antigos)
   =========================================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ===========================================
   ANIMAÇÃO DE ENTRADA (SCROLL REVEAL)
   Adiciona classe 'visible' aos elementos com 'reveal'
   =========================================== */
function initRevealAnimations() {
    // Adiciona classe 'reveal' aos elementos que devem animar
    const elementsToReveal = [
        '.section-header',
        '.sobre-content',
        '.sobre-image',
        '.cardapio-item',
        '.galeria-item',
        '.info-card',
        '.contact-form'
    ];

    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('reveal');
            // Adiciona delay para staggered animation em itens repetidos
            if (selector === '.cardapio-item' || selector === '.galeria-item' || selector === '.info-card') {
                const delay = Math.min(index + 1, 5); // max 5 delays
                el.classList.add(`reveal-delay-${delay}`);
            }
        });
    });

    // Observer para detectar quando elementos entram na viewport
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar após revelar (performance)
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    // Observa todos os elementos com classe reveal
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
}

// Função legada mantida para compatibilidade
function initScrollReveal() {
    // Agora usa initRevealAnimations
    initRevealAnimations();
}

