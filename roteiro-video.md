# Roteiro do Vídeo Pitch
## Café Aurora - Projeto Padrões Web
**Duração:** Máximo 4 minutos
**Apresentador:** Gabriel Falcão

---

## ESTRUTURA DO VÍDEO

| Tempo | Seção | Conteúdo |
|-------|-------|----------|
| 0:00 - 0:30 | Introdução | Apresentação e problema |
| 0:30 - 1:30 | Solução | Demonstração do site |
| 1:30 - 2:30 | Técnico | Código e customizações |
| 2:30 - 3:20 | Padrões Web | Responsividade e acessibilidade |
| 3:20 - 4:00 | Conclusão | Dificuldades e aprendizados |

---

## ROTEIRO DETALHADO

### CENA 1: INTRODUÇÃO (0:00 - 0:30)
**[Você na câmera ou tela do site aberta]**

> "E aí, pessoal! Eu sou o Gabriel Falcão, estudante de ADS na UniFECAF, e vou apresentar meu projeto da disciplina de Padrões Web: o **Café Aurora**.
>
> O desafio era criar uma aplicação web para um pequeno negócio local que não tem grana pra contratar programador. Então pensei: e se fosse uma cafeteria artesanal que quer mostrar seu cardápio, horários e receber contatos de clientes?"

---

### CENA 2: DEMONSTRAÇÃO DO SITE (0:30 - 1:30)
**[Gravação de tela navegando pelo site]**

> "Então deixa eu mostrar o que eu criei."

**[Mostra a Hero]**
> "Aqui temos a página inicial com uma chamada clara pro cliente. Os botões levam direto pro cardápio ou formulário de contato."

**[Scroll suave até Sobre]**
> "A seção 'Sobre' conta a história da cafeteria e mostra os diferenciais — grãos brasileiros, embalagens sustentáveis..."

**[Mostra Cardápio + clica nos filtros]**
> "No cardápio, implementei um sistema de filtros. Olha só: posso filtrar só cafés, só bebidas, ou só comidas. Isso aqui é JavaScript puro manipulando o DOM."

**[Mostra Galeria]**
> "A galeria usa CSS Grid responsivo pra criar esse layout dinâmico."

**[Mostra seção de informações]**
> "Aqui tem horários, endereço e links pras redes sociais."

**[Mostra Formulário - preenche e mostra validação]**
> "E o formulário de contato! Olha a validação em tempo real — se eu deixar o campo vazio ou colocar um e-mail inválido, ele já avisa. Esse formulário tá integrado com a API do Formspree, então os dados são enviados de verdade pro e-mail do cliente."

**[Mostra versão mobile - pode usar DevTools]**
> "E claro, tudo responsivo. Aqui no mobile, o menu vira hambúrguer, os grids se adaptam..."

---

### CENA 3: CÓDIGO E CUSTOMIZAÇÕES (1:30 - 2:30)
**[Gravação de tela mostrando o código]**

> "Agora deixa eu mostrar o lado técnico."

**[Abre index.html]**
> "O HTML tá todo semântico — header, nav, main, section, article, footer. Isso não é só boas práticas, isso impacta SEO e acessibilidade."

**[Abre styles.css - mostra variáveis]**
> "No CSS, usei Custom Properties pra definir cores, espaçamentos e fontes. Se o cliente quiser mudar a cor principal, é só trocar aqui em cima que muda o site todo."

**[Mostra media queries]**
> "As media queries controlam a responsividade. Breakpoint em 768px pro tablet e 992px pro desktop."

**[Abre script.js]**
> "O JavaScript tem várias funcionalidades:"

**[Mostra função de filtro]**
> "O filtro do cardápio usa data attributes no HTML e addEventListener no JS."

**[Mostra validação]**
> "A validação do formulário usa regex pra e-mail e feedback visual imediato."

**[Mostra fetch]**
> "E o envio usa Fetch API com async/await pra integrar com o Formspree. Zero backend próprio."

---

### CENA 4: RESPONSIVIDADE E ACESSIBILIDADE (2:30 - 3:20)
**[Pode alternar entre site e código]**

> "Falando de padrões web, dois pontos importantes: responsividade e acessibilidade."

**[Mostra site em diferentes tamanhos]**
> "O layout é fluido — uso CSS Grid com auto-fill e minmax pra colunas que se adaptam. Flexbox pro alinhamento. Imagens com max-width 100% e object-fit."

**[Mostra skip link funcionando - Tab no teclado]**
> "Na acessibilidade, implementei skip link — esse link oculto que aparece quando navego por teclado. Permite pular direto pro conteúdo principal."

**[Mostra ARIA no código]**
> "Todos os elementos interativos têm ARIA labels. O menu tem aria-expanded, aria-controls... Leitores de tela conseguem interpretar."

**[Mostra focus visível]**
> "O foco tá visível — olha esse outline quando navego por Tab. Isso é crucial pra quem não usa mouse."

**[Mostra prefers-reduced-motion no CSS]**
> "E respeito a preferência do usuário por movimento reduzido. Se a pessoa tem sensibilidade a animações, elas são desligadas automaticamente."

---

### CENA 5: DIFICULDADES E APRENDIZADOS (3:20 - 4:00)
**[Você na câmera ou slide com tópicos]**

> "Pra fechar, as dificuldades e o que eu aprendi."

> "A maior dificuldade foi fazer o menu mobile funcionar bem em todos os navegadores. O comportamento do overflow hidden com position fixed deu trabalho, mas resolvendo isso entendi muito melhor o modelo de layout do CSS."

> "Outro desafio foi a validação de formulário — garantir que funcione com e sem JavaScript, mantendo boa UX nos dois casos."

> "O que eu aprendi? Que os padrões fundamentais da web — HTML, CSS e JavaScript — são poderosos o suficiente pra criar aplicações profissionais sem frameworks. Entender a base me dá autonomia pra customizar qualquer ferramenta no-code no futuro."

> "E que acessibilidade não é extra, é parte do desenvolvimento. Fazer certo desde o início é muito mais fácil do que adaptar depois."

**[Encerramento]**
> "É isso! O código tá no GitHub, o site tá publicado, e eu fico feliz em responder qualquer pergunta. Valeu!"

---

## DICAS PARA GRAVAÇÃO

### Equipamento
- Use o celular apoiado ou webcam do notebook
- Grave em ambiente silencioso e bem iluminado
- Pode gravar tela com OBS Studio (gratuito) ou Loom

### Apresentação
- Fale de forma natural, como se explicasse pra um amigo
- Não precisa decorar, pode ter o roteiro do lado
- Se errar, continua — edição resolve

### Tela
- Aumente o zoom do navegador (Ctrl/Cmd + Plus)
- Esconda abas desnecessárias
- Use tema claro no VS Code pra melhor visibilidade

### Edição
- Pode cortar pausas longas
- Coloque seu nome e título no início/fim
- Exporte em 720p ou 1080p

### Upload
- YouTube (não listado) - link mais confiável
- Google Drive (permissão de visualização)
- Loom (gratuito, link direto)

**IMPORTANTE:** Teste o link antes de enviar! Abra em aba anônima pra garantir que está acessível.

---

## CHECKLIST PRÉ-GRAVAÇÃO

- [ ] Site funcionando e publicado
- [ ] Formulário testado (envia de verdade)
- [ ] Código aberto no VS Code
- [ ] DevTools pronto pra mostrar responsivo
- [ ] Roteiro impresso ou na segunda tela
- [ ] Ambiente silencioso
- [ ] Celular/webcam posicionado
- [ ] Água por perto (4 minutos falando dá sede!)

---

**Boa gravação, Gabriel! Você consegue!** 🎬
