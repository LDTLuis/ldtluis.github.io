# Portfólio Luis Borges - Site Pessoal e Estudo de Caso

🔗 **Site no ar:** [portfolio-luis-borges.vercel.app](https://portfolio-luis-borges.vercel.app)

🇺🇸 [Read in English](README.md)

## Descrição

Este é o portfólio pessoal de Luis Borges, desenvolvedor full stack com foco em Java e React. O site apresenta seu **perfil**, suas **competências**, o **projeto em destaque** e os **canais de contato**, e está disponível por completo em **português e inglês**.

O portfólio também traz um **estudo de caso** do Spa Casa Bali, plataforma de agendamento online, pagamentos e vale-presente em produção em [spacasabali.com](https://spacasabali.com). O estudo de caso mostra o contexto, a arquitetura, os desafios técnicos e telas do produto em uso.

## Tecnologias Utilizadas

* **Linguagem:** TypeScript
* **Biblioteca:** React 19
* **Ferramenta de Build:** Vite
* **Animações:** Motion
* **Estilização:** CSS Modules
* **Fontes:** Fontsource (Sora, Manrope e JetBrains Mono, servidas pelo próprio site)
* **Hospedagem:** Vercel

## Práticas Adotadas

* **Internacionalização Tipada:** todos os textos ficam em um único dicionário, e a versão em inglês precisa ter exatamente as mesmas chaves da versão em português, o que o TypeScript verifica
* **Detecção de Idioma:** o site abre no idioma do navegador do visitante e lembra a escolha dele
* **Build com Várias Páginas:** cada página é uma entrada HTML própria, então funciona em qualquer hospedagem estática, sem regras de rota
* **Acessibilidade:** HTML semântico, link para pular ao conteúdo, navegação por teclado e rótulos descritivos para leitores de tela
* **Movimento Reduzido:** as animações respeitam a opção "reduzir movimento" do sistema operacional
* **Design Responsivo:** layouts adaptados para desktop e celular
* **Componentes Reutilizáveis:** peças compartilhadas, como a prévia em navegador e celular, os títulos de seção e as animações de entrada
* **Arquivos Otimizados:** prints em WebP e fontes servidas pelo próprio site

## Funcionalidades

* **Troca de Idioma:** português e inglês, disponível em todas as páginas
* **Download do Currículo:** currículo em PDF, em português ou inglês
* **Prévia do Projeto:** prints em desktop e celular do projeto em destaque
* **Página de Estudo de Caso:** relato detalhado do projeto Spa Casa Bali
* **Seção de Contato:** e-mail, GitHub e LinkedIn

## Como Executar

1.  **Pré-requisitos:**
    * Node.js 20 ou superior.

2.  **Execução:**
    * Clone o repositório.
    * Navegue até o diretório raiz do projeto em um terminal.
    * Instale as dependências e inicie o servidor de desenvolvimento:
        ```bash
        npm install
        npm run dev
        ```
    * O site estará disponível no seu navegador em `http://localhost:5173`.

3.  **Scripts Disponíveis:**
    * **`npm run dev`**: Inicia o servidor de desenvolvimento.
    * **`npm run tipos`**: Executa a checagem de tipos do TypeScript.
    * **`npm run build`**: Checa os tipos e gera o build de produção em `dist/`.
    * **`npm run preview`**: Serve o build de produção localmente.

## Páginas

* **[`/`](https://portfolio-luis-borges.vercel.app)**: Página inicial com as seções de apresentação, sobre, competências, projeto em destaque e contato.
* **[`/estudo-de-caso/spa-casa-bali/`](https://portfolio-luis-borges.vercel.app/estudo-de-caso/spa-casa-bali/)**: Estudo de caso do Spa Casa Bali.

## Onde Editar o Conteúdo

* **`src/i18n/translations.ts`**: Todos os textos, em português e inglês.
* **`src/data/site.ts`**: Dados de contato, links, currículos e dados do projeto.
* **`public/`**: Prints do projeto e currículos em PDF.
