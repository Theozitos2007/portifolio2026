# Portfólio pessoal

# IMPORTANTE: GERADO POR LLM-------------------------------

Portfólio de página única feito com Next.js App Router, TypeScript, Tailwind CSS e Framer Motion. A navegação por âncoras permite acessar as seções sem interromper a leitura; os componentes e conteúdos ficam separados para facilitar atualizações.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar e preparar a versão de produção:

```bash
npm run typecheck
npm run build
npm start
```

## Estrutura

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── contact-section.tsx
│   ├── education-section.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── hobbies-section.tsx
│   ├── navbar.tsx
│   ├── projects-section.tsx
│   ├── section-heading.tsx
│   ├── skills-section.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── data/
    ├── education.ts
    ├── hobbies.ts
    ├── projects.ts
    └── skills.ts
```

## Personalização

- Troque o nome, cargo, tagline, cidade e avatar ilustrado em `src/components/hero.tsx`.
- Atualize projetos, tecnologias e endereços de demo/repositório em `src/data/projects.ts`.
- Ajuste skills e níveis em `src/data/skills.ts`; formação e certificados em `src/data/education.ts`; hobbies em `src/data/hobbies.ts`.
- Altere e-mail e URLs sociais em `src/components/contact-section.tsx`.
- Atualize o título, a descrição, o domínio e os metadados Open Graph em `src/app/layout.tsx`.
- Substitua `example.com` e os perfis `alexmorgan-dev` por destinos reais. Os dados atuais são fictícios.
- O formulário usa validação nativa e `mailto:`; para envio sem aplicativo de email, conecte-o a uma API route e a um serviço de email.

## Tema e acessibilidade

O tema claro/escuro é alternável e persistido pelo `next-themes`. A interface inclui navegação por teclado, link para pular ao conteúdo, estados de foco visíveis, rótulos acessíveis e suporte a preferência por movimento reduzido.
