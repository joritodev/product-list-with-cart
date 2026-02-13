# 🛒 Product List with Cart

Aplicação web de **lista de produtos (sobremesas)** com **carrinho de compras** funcional, desenvolvida em React com TypeScript. Ideal para demonstrar domínio de componentes reutilizáveis, gerenciamento de estado e interface responsiva.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)
![SASS](https://img.shields.io/badge/SASS-1.77-CC6699?logo=sass)

---

## ✨ Destaques do projeto

- **TypeScript em todo o código** — interfaces tipadas para props, estado e dados; menos bugs e melhor autocomplete.
- **Arquitetura em componentes** — separação clara: `ProductList`, `Product`, `Cart`, `ProductCart` e ícones reutilizáveis.
- **Estado elevado (lifting state up)** — carrinho centralizado em `App` e atualizado via callbacks, facilitando manutenção.
- **Design responsivo** — imagens e layout adaptados para mobile (375px), tablet e desktop (1440px) com media queries em SASS.
- **Acessibilidade e UX** — botões semânticos, estados vazios (carrinho vazio), totais calculados e feedback visual de quantidade.
- **Qualidade de código** — ESLint (incl. React Hooks e React Refresh), build com checagem TypeScript (`tsc -b`).
- **Stack moderna** — Vite para dev rápido e builds otimizados, React 18 e SASS com variáveis CSS.

---

## 🎯 Funcionalidades

| Funcionalidade | Descrição |
|---------------|-----------|
| **Listagem de produtos** | Exibição dos itens a partir de `data.json` com imagem, nome, tipo e preço. |
| **Adicionar ao carrinho** | Botão "Add to Cart" adiciona o produto ou incrementa a quantidade se já existir. |
| **Incrementar / decrementar** | Controles +/- na listagem e no carrinho para alterar quantidades. |
| **Remover item** | Remoção de um item do carrinho ou redução da quantidade até zero. |
| **Total dinâmico** | Cálculo do total em valor e em número de itens, atualizado em tempo real. |
| **Carrinho vazio** | Estado dedicado com ilustração e mensagem quando não há itens. |
| **Imagens responsivas** | Uso de `thumbnail`, `mobile`, `tablet` e `desktop` para diferentes breakpoints. |

---

## 🛠 Stack e ferramentas

- **React 18** — biblioteca UI com hooks (`useState`).
- **TypeScript** — tipagem estática e interfaces (`CartItem`, `ProductProps`, `CartProps`, etc.).
- **Vite** — bundler e dev server com HMR.
- **SASS** — estilos com variáveis, aninhamento e media queries.
- **ESLint** — lint para JS/TS e regras React (hooks, refresh).

---

## 📁 Estrutura do projeto

```
src/
├── App.tsx              # Estado do carrinho e layout principal
├── main.tsx
├── data.json             # Catálogo de produtos (sobremesas)
├── globals.scss          # Estilos globais
├── styles/
│   └── home.scss        # Layout do container (flex, responsivo)
└── components/
    ├── list/            # Lista de produtos e lógica add/remove
    ├── product/         # Card de produto com controles de quantidade
    ├── cart/            # Painel do carrinho e total
    ├── product-cart/    # Item do carrinho (thumbnail, quantidade, preço)
    └── icons/           # Ícones (add, increment, decrement)
```

---

## 🚀 Como rodar

Requisitos: **Node.js** (recomendado 18+).

```bash
# Instalar dependências
npm install

# Desenvolvimento (com hot reload)
npm run dev

# Build de produção
npm run build

# Preview do build
npm preview

# Lint
npm run lint
```

Após `npm run dev`, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 📐 Design e acessibilidade

- Layout e cores seguem o **Frontend Mentor** (style guide em `style-guide.md`).
- Breakpoints considerados: mobile 375px, desktop 1440px; conteúdo testável de 320px em diante.
- Fonte: **Red Hat Text** (Google Fonts), pesos 400, 600, 700.
- Paleta em HSL (vermelho, verde, tons de rosa) para consistência e possíveis temas.

---

## 👤 Autor

Projeto desenvolvido como demonstração de habilidades em **React**, **TypeScript**, **SASS** e **UX responsiva**.  
Para dúvidas ou sugestões, abra uma issue ou entre em contato.

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Made with Next.js, React, and TypeScript

</div>
