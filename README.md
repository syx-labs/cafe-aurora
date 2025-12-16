# ☕ Café Aurora - Site Institucional

> Site institucional responsivo para uma cafeteria artesanal, desenvolvido como projeto acadêmico da disciplina de **Padrões Web** do curso de Análise e Desenvolvimento de Sistemas da **UniFECAF**.

## 🌐 Acesse o Site

**🔗 [https://projeto-unifecaf-rocketseat-dezembro-2025.vercel.app](https://projeto-unifecaf-rocketseat-dezembro-2025.vercel.app)**

---

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para atender ao desafio proposto na disciplina de Padrões Web: **criar uma aplicação web simples para um pequeno negócio local**, aplicando os padrões fundamentais da web (HTML, CSS e JavaScript) e demonstrando boas práticas de acessibilidade, responsividade e ética digital.

O **Café Aurora** é uma cafeteria artesanal fictícia localizada em São Paulo. O site apresenta informações sobre a empresa, cardápio, galeria de fotos, horários de funcionamento e um formulário de contato funcional integrado com API externa.

### 👨‍💻 Desenvolvedor

**Gabriel Falcão**
Estudante de ADS - UniFECAF
Dezembro/2025

---

## 🚀 Funcionalidades

- **Design Responsivo** - Layout adaptável para desktop, tablet e mobile
- **Navegação Suave** - Scroll smooth entre seções com highlight automático
- **Menu Mobile** - Hambúrguer menu com animação e overlay
- **Filtro de Cardápio** - Filtragem dinâmica por categorias (Cafés, Bebidas, Comidas)
- **Formulário de Contato** - Validação em tempo real + envio via API (Formspree)
- **Máscara de Telefone** - Formatação automática do campo de telefone
- **Dark Mode** - Suporte automático à preferência do sistema
- **Acessibilidade** - Skip link, ARIA labels, foco visível, contraste adequado

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica (header, main, section, article, nav, footer) |
| **CSS3** | Custom Properties, Flexbox, Grid, Media Queries, Animações |
| **JavaScript ES6+** | DOM manipulation, Fetch API, IntersectionObserver |
| **Formspree** | API para envio de formulários (integração externa) |
| **Google Fonts** | Tipografia personalizada (Playfair Display + Inter) |
| **Unsplash** | Imagens de alta qualidade |

---

## 📁 Estrutura de Arquivos

```
projeto-unifecaf-rocketseat-dezembro-2025/
├── index.html          # Página principal
├── styles.css          # Estilos (CSS puro, sem frameworks)
├── script.js           # Scripts de interatividade
├── README.md           # Este arquivo
└── relatorio.md        # Relatório teórico do projeto
```

---

## 🔧 Como Executar Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Opcional: extensão Live Server para VS Code

### Passos

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/ogabrielfalcao/projeto-unifecaf-rocketseat-dezembro-2025.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd projeto-unifecaf-rocketseat-dezembro-2025
   ```

3. **Abra o arquivo `index.html`:**
   - **Opção A:** Duplo clique no arquivo
   - **Opção B:** Arraste para o navegador
   - **Opção C:** Use o Live Server do VS Code

---

## 🌐 Deploy (Publicação)

O site pode ser publicado gratuitamente em diversas plataformas:

### Opção 1: Vercel (Recomendado)

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Na pasta do projeto, execute:
vercel

# Siga as instruções e pronto!
```

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o deploy drop zone
3. Seu site estará online em segundos

### Opção 3: GitHub Pages

1. Suba o projeto para um repositório no GitHub
2. Vá em Settings > Pages
3. Selecione a branch `main` e salve
4. Aguarde alguns minutos e acesse a URL gerada

---

## ♿ Acessibilidade Implementada

Este projeto foi desenvolvido seguindo as diretrizes **WCAG 2.1**:

- **Skip Link** - Permite pular para o conteúdo principal via teclado
- **Landmarks ARIA** - Regiões semânticas (banner, navigation, main, contentinfo)
- **Labels Descritivos** - Todos os campos de formulário possuem labels associados
- **Foco Visível** - Indicador de foco claro para navegação por teclado
- **Alt Text** - Todas as imagens possuem textos alternativos descritivos
- **Contraste** - Cores seguem proporção mínima de 4.5:1
- **Movimento Reduzido** - Respeita `prefers-reduced-motion`

---

## 📱 Responsividade

O layout foi desenvolvido com abordagem **Mobile First** e se adapta a:

| Dispositivo | Largura | Adaptações |
|-------------|---------|------------|
| Mobile | < 768px | Menu hambúrguer, grid de 1 coluna, botões full-width |
| Tablet | 768px - 992px | Grid de 2 colunas, imagens redimensionadas |
| Desktop | > 992px | Layout completo, grid de 4 colunas na galeria |

---

## 🔌 Integração com API Externa

O formulário de contato está integrado com o **Formspree**, permitindo envio de mensagens sem necessidade de backend próprio.

### Como funciona:
1. Usuário preenche o formulário
2. JavaScript valida os campos em tempo real
3. Ao submeter, dados são enviados via `fetch()` para a API do Formspree
4. Usuário recebe feedback visual de sucesso ou erro

### Código da integração (simplificado):
```javascript
const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
});
```

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#8B4513` | Elementos principais, botões |
| Secondary | `#D4A574` | Destaques, hover states |
| Accent | `#F5DEB3` | Backgrounds suaves |
| Dark | `#1a1a1a` | Textos principais |
| Gray | `#6b6b6b` | Textos secundários |

---

## 📝 Aprendizados do Projeto

Durante o desenvolvimento deste projeto, pude aprofundar meus conhecimentos em:

1. **Semântica HTML** - Importância de usar tags corretas para SEO e acessibilidade
2. **CSS Custom Properties** - Facilitam manutenção e criação de temas
3. **CSS Grid vs Flexbox** - Quando usar cada um para layouts eficientes
4. **JavaScript moderno** - IntersectionObserver, Fetch API, async/await
5. **Acessibilidade web** - ARIA, foco visível, skip links
6. **Performance** - Lazy loading, requestAnimationFrame, passive listeners
7. **Integração com APIs** - Comunicação frontend-backend via REST

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e está disponível sob a licença MIT.

---

## 🙏 Agradecimentos

- **UniFECAF** - Pela estrutura e proposta do desafio
- **Unsplash** - Pelas imagens de alta qualidade gratuitas
- **Google Fonts** - Pelas fontes utilizadas
- **Formspree** - Pelo serviço de formulário gratuito

---

<div align="center">
  <strong>Desenvolvido com ☕ por Gabriel Falcão</strong><br>
  UniFECAF - Dezembro/2025
</div>
