# Plano de Redesign — 2GO Ceno

## Direção Estética: "Luxury Editorial Noir"

**Conceito:** O site deve transmitir a mesma sofisticação e impacto visual que a 2GO Ceno entrega nos seus projetos cenográficos. A direção é uma fusão entre **editorial de arquitetura** (como revistas como Dezeen, Wallpaper*) e **luxury branding** — tipografia expressiva, espaçamento generoso, transições cinematográficas e uma paleta escura com acentos dourados que respira premium.

**O que torna inesquecível:** A sensação de estar "entrando" em um espaço cenográfico a cada scroll — cada seção é uma cena, com revelações orquestradas e composições assimétricas que fogem do grid previsível.

**Tipografia:**
- Display/Títulos: **"Cormorant Garamond"** (serif elegante, peso variável) — personalidade editorial com charme clássico
- Corpo: **"DM Sans"** (sans-serif geométrica limpa) — legibilidade e modernidade
- Detalhe/Labels: **"Anybody"** ou **"Instrument Serif"** para elementos especiais (numerais dos contadores, títulos de premiação)

**Paleta refinada (extensão da atual):**
- Fundo principal: `#0D0D0B` (quase preto, mais quente que preto puro)
- Fundo seções alternadas: `#1A1917` (cinza-carvão quente)
- Ouro primário: `#C1A55C` (refinamento do `#947433`, mais luminoso)
- Ouro claro (acentos): `#D4C07A`
- Texto principal (sobre escuro): `#E8E4DC` (off-white quente)
- Texto secundário: `#9A9590` (cinza quente)
- Acento teal (preservado para CTAs secundários): `#54C7D1`
- Overlay cards: `rgba(13, 13, 11, 0.85)`

---

## Nova Dependência Sugerida

```bash
npm install framer-motion
```

**Framer Motion** será usado para:
- Animações de scroll (fade-in, slide-up staggered)
- Transições entre páginas
- Hover states elaborados nos cards
- Contadores animados
- Lightbox da galeria

Não é necessário adicionar mais nenhuma dependência. React Slick pode ser mantido ou substituído por implementação customizada com Framer Motion.

---

## Fase 0: Fundação (Theme + Globais)

### 0.1 — Refatorar Theme (`src/theme/index.ts`)

**Mudanças:**
- Adicionar as fontes Google (Cormorant Garamond + DM Sans) no `index.html`
- Reescrever o tema MUI com a nova paleta e tipografia
- Adicionar variantes de tipografia customizadas (display, label, stat)
- Expandir `custom` com tokens: `surface`, `surfaceAlt`, `gold`, `goldLight`, `textMuted`
- Definir breakpoints e espaçamento base (8px grid rigoroso)

**Exemplo da nova estrutura de theme:**
```
palette.background.default → #0D0D0B
palette.background.paper → #1A1917
palette.primary.main → #C1A55C
palette.primary.light → #D4C07A
palette.primary.dark → #27261B
palette.text.primary → #E8E4DC
palette.text.secondary → #9A9590
typography.fontFamily → "DM Sans"
typography.h1 → Cormorant Garamond, 4.5rem, weight 300 (display hero)
typography.h2 → Cormorant Garamond, 3rem, weight 600
typography.h3 → Cormorant Garamond, 2.25rem, weight 500
```

### 0.2 — Componente de Animação Reutilizável

Criar `src/components/AnimateOnScroll/index.tsx`:
- Wrapper que usa `framer-motion` + Intersection Observer
- Props: `direction` (up, left, right, fade), `delay`, `duration`
- Usado em todas as seções para revelação progressiva

### 0.3 — Layout base com transições de página

Modificar `App.tsx`:
- Envolver `Routes` com `AnimatePresence` do Framer Motion
- Transição suave (fade + slide sutil) entre Home e Detalhes

---

## Fase 1: Navigation (CustomAppBar)

### Estado Atual
- AppBar fixa com fundo `#d4bf7a` sólido, logo pequeno, botões de texto simples
- Sem efeito de scroll, sem hamburger menu mobile

### Redesign

**Desktop:**
- Fundo **transparente** no topo, transiciona para `rgba(13, 13, 11, 0.95)` com backdrop-blur ao scrollar (efeito glassmorphism escuro)
- Logo maior (60px) com animação sutil de entrada
- Links de navegação em **DM Sans**, uppercase, letter-spacing: 2px, font-size: 0.75rem
- Hover nos links: underline animada dourada (barra fina que desliza da esquerda)
- Botão WhatsApp: bordas douradas com ícone, hover com fill dourado
- Indicador de seção ativa baseado na posição de scroll

**Mobile:**
- Hamburger menu customizado (3 linhas douradas, animação de transformação em X)
- Menu fullscreen overlay escuro com links centralizados em fonte grande (Cormorant Garamond)
- Animação staggered dos links ao abrir

**Arquivo:** `src/components/CustomAppBar/index.tsx`

---

## Fase 2: Hero Section

### Estado Atual
- React Slick com 3 slides, overlay escuro simples, texto centralizado básico (h2 + h5)
- Altura fixa 700px, sem CTA, sem indicadores visuais sofisticados

### Redesign

**Layout:** Full viewport height (`100vh`) com composição assimétrica

**Para cada slide:**
- Imagem full-bleed com **parallax sutil** (background-attachment ou transform via scroll)
- Overlay: gradiente diagonal (de `rgba(13,13,11,0.8)` esquerda para `rgba(13,13,11,0.2)` direita)
- Texto posicionado à **esquerda** (não centralizado), alinhado ao grid do container
- Título em **Cormorant Garamond**, tamanho display (~5rem desktop), peso 300 (light elegante)
- Subtítulo em **DM Sans**, uppercase, letter-spacing amplo, cor dourada `#C1A55C`
- Animação de entrada: título revela letra por letra ou word-by-word com stagger
- CTA "Ver projeto" com seta animada, borda dourada, transparente

**Indicadores de slide:**
- Substituir dots padrão por **barra de progresso linear** dourada na base
- Ou numeração estilizada: "01 / 03" com fonte Instrument Serif

**Transição entre slides:**
- Crossfade suave (não slide horizontal) com scale sutil na imagem

**Scroll indicator:**
- Ícone de mouse ou seta para baixo pulsando na base, convidando ao scroll

**Arquivo:** `src/pages/Home/components/Hero/index.tsx`

---

## Fase 3: Serviços

### Estado Atual
- Grid simples com ícones MUI + texto ao lado, sem background, sem hover

### Redesign

**Layout:** Fundo escuro (`#0D0D0B`), seção com padding generoso (py: 12)

**Título da seção:**
- Substituir `TituloSecao` genérico por composição customizada
- "Nossos Serviços" em Cormorant Garamond, com uma linha dourada fina à esquerda (não centralizado — alinhado à esquerda para quebrar a simetria)

**Cards de serviço (5 itens):**
- Layout: Grid 5 colunas em desktop, 2+2+1 em tablet, 1 coluna mobile
- Cada card:
  - Fundo `#1A1917` com borda sutil `rgba(193, 165, 92, 0.1)`
  - Ícone grande (3.5rem) dourado, dentro de um círculo com borda dourada fina
  - Título do serviço em DM Sans bold
  - Micro-descrição (1 linha) em texto secundário (atualmente não existe — adicionar)
  - **Hover:** borda dourada completa, ícone faz scale(1.1), sombra dourada sutil (`0 8px 32px rgba(193,165,92,0.15)`)
  - **Animação de entrada:** staggered fade-up, cada card com 100ms de delay

**Arquivo:** `src/pages/Home/components/Servicos/index.tsx`

---

## Fase 4: Sobre (About)

### Estado Atual
- Fundo `#EEEEEE`, grid 5+7 com texto à esquerda e valores/missão/visão à direita
- Indicadores (90%, 500+, 40.000m²) como texto estático

### Redesign

**Layout:** Fundo `#1A1917`, composição assimétrica mais dramática

**Lado esquerdo (5 colunas):**
- Manter estrutura "Por que escolher a 2GO?"
- Título: Cormorant Garamond, com "2GO" em dourado (manter, mas com a nova fonte)
- Texto descritivo em `#9A9590`
- **Contadores animados:** Os 3 indicadores devem ter contagem animada (count-up) quando entram no viewport
  - Números em **Cormorant Garamond** peso 300, tamanho 3rem, cor dourada
  - Labels em DM Sans pequeno, uppercase
  - Separados por linhas verticais douradas finas
- CTA "Fazer orçamento" redesenhado (ver Fase 8)

**Lado direito (7 colunas):**
- Cards de Valores/Missão/Visão em fundo `#0D0D0B` (mais escuro que o background)
- Cada card com ícone dourado, título em branco, descrição em cinza
- Borda-left dourada de 2px em cada card
- Texto de "Valores" **resumido** — atualmente é um bloco enorme; quebrar em tópicos com bullet points dourados
- Animação: cards revelam da direita com stagger

**Arquivo:** `src/pages/Home/components/Sobre/index.tsx`

---

## Fase 5: Portfólio

### Estado Atual
- Grid horizontal scroll com thumbnails 250x150px em 2 rows
- Hover mostra overlay com título
- Abaixo: logos de empresas em scroll horizontal com filtro grayscale

### Redesign

**Esta é a seção mais importante do site — o portfólio É o produto.**

**Título:** "Portfólio" alinhado à esquerda com contador total de projetos ("19 projetos")

**Layout principal — Grid Masonry/Bento:**
- Substituir scroll horizontal por grid visível tipo "bento box"
- Tamanhos variados: projetos premiados ganham cards 2x maiores
- Desktop: 4 colunas com itens de tamanhos variados (1x1, 2x1, 1x2)
- Tablet: 2 colunas
- Mobile: 1 coluna

**Card de projeto:**
- Imagem com aspect-ratio preservado
- **Estado normal:** imagem com sutil overlay escuro na base (gradiente de baixo para cima)
- **Hover:**
  - Imagem faz `scale(1.05)` com `overflow: hidden`
  - Overlay mais intenso
  - Título aparece com slide-up
  - Localização aparece com fade-in sutil
  - Se tem premiação: badge dourado no canto superior direito com ícone de troféu + quantidade
  - Borda dourada fina aparece com transição
- **Click:** navega para `/detalhes/:id`
- Cursor: pointer com mudança visual

**Seção de logos (Empresas Atendidas):**
- Título: "Marcas que confiam na 2GO" em texto pequeno, uppercase, dourado
- Logos em **marquee infinito** (animação CSS de scroll contínuo, sem pause)
- Duas fileiras movendo em direções opostas para efeito visual
- Logos mantêm grayscale, hover individual mostra cor

**Arquivo:** `src/pages/Home/components/Portifolio/index.tsx`

---

## Fase 6: Time (SobreTime)

### Estado Atual
- Fundo `#131313`, grid 4+8, foto do CEO à esquerda, bio à direita
- Texto simples sem hierarquia visual clara

### Redesign

**Layout:** Manter fundo escuro, mas com composição mais editorial

**Foto do CEO:**
- **Maior presença:** ocupar 5 colunas
- Foto com tratamento: borda dourada fina (2px) com offset (deslocada 12px para baixo e direita, criando efeito de "moldura deslocada")
- Ou: foto recortada em formato não-retangular (clip-path diagonal)

**Conteúdo (7 colunas):**
- Acima do nome: linha dourada + "Conheça o Fundador" em uppercase, letter-spacing, DM Sans
- Nome "Marcelo Chacon" em Cormorant Garamond, 2.5rem, branco
- "Founder & CEO" em dourado, italic
- Bio com hierarquia melhor: primeira frase em destaque (font-size maior, branca), restante em cinza
- Aspas decorativas douradas (" ") como elemento visual no início da bio

**Animação:** Foto slide-in da esquerda, texto fade-in da direita

**Arquivo:** `src/pages/Home/components/SobreTime/index.tsx`

---

## Fase 7: Depoimentos (Reativar)

### Estado Atual
- Comentado no Home/index.tsx
- Implementação básica: scroll horizontal com cards de avatar + texto

### Redesign (Reativar e Redesenhar)

**Layout:** Fundo `#0D0D0B`, seção dedicada com impacto visual

**Design dos cards:**
- Cards maiores (largura 350px)
- Fundo `#1A1917` com borda sutil
- **Aspas decorativas** douradas gigantes (" ") como background decorativo no card
- Avatar: borda dourada circular
- Nome em DM Sans bold, branco
- Cargo/Empresa em dourado
- Texto do depoimento em cinza claro, fonte ligeiramente maior que atual
- Estrelas ou indicador visual de satisfação (opcional)

**Carousel:**
- Usar Framer Motion para carousel customizado (drag gesture)
- Ou manter React Slick com styling customizado
- 3 cards visíveis em desktop, 1 em mobile
- Indicadores: dots dourados customizados
- Autoplay com pausa no hover

**Arquivo:** `src/pages/Home/components/Depoimentos/index.tsx`
**Também:** Descomentar em `src/pages/Home/index.tsx`

---

## Fase 8: Footer

### Estado Atual
- Fundo `#323333`, centralizado, telefone + email + Instagram + botão
- Muito simples para um site premium

### Redesign

**Layout:** Footer em duas camadas

**Camada superior (CTA Section):**
- Fundo com textura sutil (noise grain) sobre `#1A1917`
- Headline grande: "Vamos criar algo extraordinário juntos?" em Cormorant Garamond
- Subtítulo: "Entre em contato e transforme seu próximo evento"
- Botão CTA grande e dourado: "Solicitar Orçamento" — full-width em mobile
- Espaçamento generoso (padding 80px+ vertical)

**Camada inferior (Info):**
- Fundo `#0D0D0B`
- Grid de 3 colunas:
  - **Coluna 1:** Logo 2GO + tagline breve + redes sociais (ícones com hover dourado)
  - **Coluna 2:** Links rápidos (Serviços, Portfólio, Sobre, Contato) — navegação anchor
  - **Coluna 3:** Contato direto (telefone com link, email com mailto:, endereço se houver)
- Linha divisória dourada fina
- Copyright: "© 2024 2GO Ceno. Todos os direitos reservados." em texto pequeno, cinza

**Arquivo:** `src/pages/Home/components/Footer/index.tsx`

---

## Fase 9: Página de Detalhes

### Estado Atual
- AppBar + Container simples, imagem principal 400px, thumbnails em scroll, info abaixo
- Sem lightbox, sem projetos relacionados

### Redesign

**Hero do projeto:**
- Imagem principal **full-width** (sem Container), altura 60vh
- Overlay gradiente na base com título e localização
- Badge de premiação dourada se aplicável

**Galeria:**
- Thumbnails maiores (300px width) com hover de seleção (borda dourada quando ativo)
- **Lightbox:** Click na imagem principal abre overlay fullscreen
  - Fundo preto com opacidade
  - Imagem ampliada com controles de navegação (setas)
  - Fechamento com X ou click fora
  - Navegação com keyboard (setas + Esc)
  - Implementar com Framer Motion (AnimatePresence)

**Informações do projeto:**
- Grid 8+4 (invertido: info à esquerda, premiações à direita)
- Título em Cormorant Garamond, dourado
- Localização com ícone em linha, estilo discreto
- Descrição em texto maior se disponível

**Premiação (quando existe):**
- Card destacado com fundo dourado semitransparente
- Troféus com animação de entrada staggered
- Título da premiação em destaque

**Projetos relacionados:**
- Seção "Outros projetos" antes do footer
- 3 cards de projetos (mesmo cliente ou mesmo local)
- Mesma linguagem visual da seção Portfólio

**Botão voltar:**
- Posição fixa ou no topo, estilo: seta + "Voltar ao portfólio" em texto discreto

**Arquivo:** `src/pages/Detalhes/index.tsx`

---

## Fase 10: Página 404

### Estado Atual
- Apenas `<h1>404 - Page Not Found</h1>`

### Redesign

**Layout:** Fullscreen, centrado, fundo escuro

- Número "404" gigante em Cormorant Garamond, peso 200, cor dourada com opacidade baixa (marca d'água)
- Texto: "Página não encontrada" em DM Sans
- Subtítulo: "O cenário que você procura não existe" (trocadilho com cenografia)
- Botão: "Voltar ao início" com hover dourado
- Animação sutil: o "404" pode ter um efeito de glitch ou flicker sutil

**Arquivo:** `src/pages/NotFound/index.tsx`

---

## Fase 11: Componentes Globais Refinados

### 11.1 — BotaoAcao (Redesign)
- Dois estilos: **primary** (fundo dourado, texto escuro) e **outline** (borda dourada, fundo transparente, texto dourado)
- Border-radius: 0 (quadrado — mais editorial/luxury)
- Padding generoso (16px 40px)
- Hover: transição de 0.3s, inversão de cores
- Uppercase, letter-spacing: 1.5px, DM Sans weight 600
- Ícone opcional (seta, WhatsApp) com animação de translate-x no hover

### 11.2 — TituloSecao (Redesign)
- **Alinhamento à esquerda** (não mais centralizado)
- Linha dourada à esquerda (vertical, 40px de altura, 2px de largura)
- Ou: número da seção ("01", "02") em dourado ao lado do título
- Fonte: Cormorant Garamond
- Sub-heading opcional em DM Sans, texto secundário

### 11.3 — Novo: Loading/Splash Screen
- Tela de loading com logo 2GO animado (fade-in + scale)
- Fundo escuro
- Transição suave para o conteúdo
- Opcional: preload das imagens do Hero durante o splash

---

## Ordem de Implementação Recomendada

| Fase | Descrição | Prioridade | Estimativa de Complexidade |
|------|-----------|------------|---------------------------|
| 0 | Theme + Animações + Fontes | Crítica | Média |
| 1 | CustomAppBar | Alta | Média |
| 2 | Hero Section | Alta | Alta |
| 5 | Portfólio | Alta | Alta |
| 9 | Detalhes Page | Alta | Alta |
| 3 | Serviços | Média | Baixa |
| 4 | Sobre | Média | Média |
| 6 | Time | Média | Baixa |
| 8 | Footer | Média | Média |
| 7 | Depoimentos | Média | Média |
| 10 | 404 Page | Baixa | Baixa |
| 11 | Componentes Globais | Baixa | Baixa |

**Recomendação:** Implementar em ondas:
1. **Onda 1 (Fundação):** Fases 0 + 11 (theme, fontes, componentes base, framer-motion)
2. **Onda 2 (Impacto visual):** Fases 1 + 2 + 5 (navbar, hero, portfólio — as seções mais visíveis)
3. **Onda 3 (Conteúdo):** Fases 3 + 4 + 6 + 7 (serviços, sobre, time, depoimentos)
4. **Onda 4 (Complementar):** Fases 8 + 9 + 10 (footer, detalhes, 404)

---

## Resumo das Adições ao `index.html`

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

## Resumo de Dependências

```bash
npm install framer-motion
```

Nenhuma outra dependência necessária. O stack existente (MUI + Emotion + React Slick) é mantido.
