---
name: Roberto Guidoni — Estudos de caso
description: Portfólio editorial de marketing, operações e tecnologia.
colors:
  ink: "#11110f"
  paper: "#f4f1ea"
  wash: "#ebe7de"
  faint: "#aaa69d"
  muted: "#605e58"
  contact-muted: "#b9b6ae"
  contact-body: "#d5d1c8"
  contact-rule: "#595751"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.45rem, 5vw, 4.7rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  micro:
    fontFamily: "DM Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.035em"
rounded:
  status-dot: "50%"
spacing:
  page-gutter: "28px"
  page-gutter-mobile: "17px"
  grid-gap: "20px"
  section-gap: "150px"
components:
  case-row:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: "23px 0 26px"
  contact-section:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "84px 28px"
---

# Design System: Roberto Guidoni — Estudos de caso

## Overview

**Creative North Star: "O Índice Monográfico"**

O portfólio se comporta como o índice de uma publicação profissional: sóbrio, tipográfico e preciso. A linguagem visual atende à necessidade de apresentar trabalhos de marketing, operações e tecnologia com clareza, antes de qualquer efeito de vitrine.

O sistema usa uma página de papel quente, tinta quase preta, grandes momentos de tipografia literária e microtipografia de medição. Espaço em branco, linhas finas e hierarquia editorial substituem cartões, ilustrações e ornamentos. O bloco de contato inverte a paleta para encerrar a leitura com peso visual.

**Key Characteristics:**

- Catálogo editorial em vez de uma galeria de cards repetitivos.
- Contraste contido entre papel quente e tinta escura.
- Serif expressiva para ideias; sans e mono para informação operacional.
- Linhas finas e espaçamento amplo como estrutura visual.

## Colors

A paleta é monocromática quente: o contraste e a densidade são criados por papel, tinta e tons minerais de apoio, não por cores de destaque.

### Primary

- **Tinta editorial:** usada em textos principais, regras estruturais, indicadores de status em produção e no campo escuro de contato.

### Neutral

- **Papel quente:** fundo contínuo da página e texto invertido no bloco de contato.
- **Lavagem de papel:** tom de superfície disponível no sistema, ainda sem aplicação visível nesta página.
- **Cinza mineral:** texto de apoio, localização e descrição dos estudos de caso.
- **Regra suave:** separadores entre as linhas do índice e estados de evolução.
- **Cinzas invertidos:** apoio e texto corrido no campo de contato, com uma regra de rodapé de baixo contraste.

**The Ink-and-Paper Rule.** Use tinta e papel para os contrastes decisivos; os cinzas só organizam informação secundária. Não introduza uma cor de acento sem uma necessidade funcional comprovada.

## Typography

**Display Font:** Playfair Display (com Georgia como fallback)
**Body Font:** DM Sans (com Arial como fallback)
**Label/Mono Font:** DM Mono

**Character:** A serif de contraste alto dá dimensão editorial aos nomes, teses e convites. A sans mantém a leitura funcional, enquanto a mono em caixa alta identifica categorias, metadados e estados com precisão quase técnica.

### Hierarchy

- **Hero display** (500, `clamp(4rem, 10.4vw, 8.8rem)`, 0.88): nome na abertura; tracking compacto (`-0.04em`) e itálico apenas na segunda linha do sobrenome.
- **Section display** (500, token `typography.display`, 0.94): títulos de seção; tracking (`-0.035em`).
- **Statement display** (500, `clamp(2.65rem, 6.3vw, 6rem)`, 0.95): tese central, em largura generosa e tracking (`-0.04em`).
- **Case title** (500, `clamp(1.55rem, 2.5vw, 2.6rem)`, 0.98): título de cada estudo no índice.
- **Body** (400, token `typography.body`, 1.45): texto corrente; introdução pode crescer até `clamp(1rem, 1.35vw, 1.25rem)` e descrições auxiliares usam 14px.
- **Micro label** (500, token `typography.micro`, caixa alta): categorias, metadados, processo e links; o espaçamento entre letras varia entre `0.035em` e `0.04em`.

**The Two-Voice Rule.** Reserve Playfair para o conteúdo que conduz a narrativa; use DM Sans e DM Mono para explicar, classificar ou orientar ações.

## Layout

A largura de conteúdo é `min(1320px, calc(100% - 56px))`, centralizada; em telas de até 760px, passa a `min(100% - 34px, 1320px)`. A composição desktop usa uma grade de 12 colunas, com lacunas de 20px nas seções que as declaram.

A abertura ocupa ao menos a altura da viewport e distribui masthead, nome, introdução e regra de navegação verticalmente. O corpo inicia após 150px, alternando trechos de índice denso com grandes pausas: a tese recebe 180px acima e 165px abaixo. O contato escapa intencionalmente da largura do conteúdo para tocar as bordas da viewport.

No celular, a abertura vira uma pilha, a grade de casos reduz-se a duas colunas (estado ao lado da categoria e conteúdo abaixo), o processo passa a duas colunas e o contato usa margem negativa de 17px para manter o sangramento total. A experiência reduz animação quando o usuário solicita movimento reduzido.

## Elevation & Depth

Não há sombras nem superfícies elevadas. A profundidade vem da alternância entre o papel claro e o campo de tinta escura, das regras de 1px e da mudança de escala tipográfica. A entrada dos casos só anima quando movimento não é reduzido: opacidade, recorte vertical e deslocamento de 16px transitam por 0.8s com `cubic-bezier(.16,1,.3,1)`; o rótulo de abertura no hover transita por 0.25s.

**The Flat Page Rule.** Não use sombra para separar blocos; recorra à hierarquia, espaço e regras finas.

## Motion

O movimento reforça a leitura editorial. A abertura entra em sequência — navegação, nome, apresentação e contexto profissional — sem bloquear o conteúdo. Durante a rolagem, os blocos aparecem com deslocamento curto e as miniaturas respondem ao hover ou foco de acordo com a lógica de cada projeto. As demonstrações usam transições rápidas para indicar troca de contexto e atualização de dados.

**The Editorial Motion Rule.** Movimento deve explicar hierarquia, resposta ou continuidade. Não usar loops decorativos, cursor personalizado, partículas ou animações que atrasem a navegação. Todo o sistema respeita `prefers-reduced-motion`.

## Shapes

O sistema é deliberadamente reto: seções, regras e links não usam cantos arredondados, contêineres ou molduras decorativas. O único elemento circular é o indicador de status de 6px; ele pode ser preenchido, contornado ou suavizado para comunicar produção, pendência e evolução. As regras estruturais usam 1px.

## Components

### Navigation

O masthead é uma linha superior de três informações em microtipografia, alinhadas à esquerda, ao centro e à direita. Em telas pequenas, o item central desaparece para preservar a leitura. O link de navegação da abertura permanece textual, sem botão; no hover recebe sublinhado com afastamento de 4px. Todo foco visível usa contorno de 2px em tinta com afastamento de 4px.

### Case Index

Cada estudo é uma linha editorial inteiramente clicável. Número, miniatura esquemática, título, descrição e área de atuação formam uma única sequência de leitura. No hover ou foco, a linha inverte para tinta, reforçando a ação sem sombra ou elevação. No celular, a miniatura ocupa a largura útil e o texto permanece logo abaixo.

### Process Grid

O processo é uma faixa de quatro etapas abaixo de uma regra suave. Cada etapa combina rótulo mono em caixa alta e texto auxiliar de 13px; no celular, preserva-se o mesmo padrão em duas colunas.

### Contact Section

O contato é o único bloco de fundo escuro e usa conteúdo invertido. O rótulo ocupa as primeiras colunas e o convite em display, a explicação e os links seguem à direita. LinkedIn, e-mail, GitHub e WhatsApp são destinos ativos e recebem sublinhado apenas como resposta a hover ou foco.

## Do's and Don'ts

### Do:

- **Do** manter o fundo de papel quente e usar tinta para títulos, regras principais e a seção de contato.
- **Do** criar ritmo com margens grandes, grade de 12 colunas e regras de 1px em vez de painéis decorativos.
- **Do** usar microtipografia mono em caixa alta para metadados, categorias e estados.
- **Do** respeitar `prefers-reduced-motion` e manter animações de revelação discretas.

### Don't:

- **Don't** transformar estudos de caso em cards iguais com sombra, raio, badges ou preenchimentos decorativos.
- **Don't** adicionar cores de acento, gradientes ou imagens ornamentais ao sistema atual.
- **Don't** usar a serif display em textos explicativos, categorias ou links de navegação.
- **Don't** substituir dados de contato pendentes por informações inventadas.
