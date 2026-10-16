# QA da V1 — 15/10/2026

Branch: `codex/v1-site-roberto-farias`, criada de `origin/main`. `main` e remoto estavam alinhados (0/0). Sem commit, push, PR, merge ou deploy.

## Verificações executadas

- Instalação com pnpm 12 e lockfile. `esbuild` explicitamente permitido em `pnpm-workspace.yaml`.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`: sucesso.
- Build de duas páginas completas; preview de produção por `pnpm preview` em 127.0.0.1:4173.
- Edge headless: home e livro em 320, 360, 375, 768, 1024 e 1440 px (12 combinações). Resposta 200, um H1 por página, sem overflow horizontal, imagens quebradas, âncoras internas ausentes ou erros de console/JavaScript.
- Capturas completas de ambas as páginas em 375 e 1440 px; revisão visual das composições e recortes de primeira dobra. Retrato autêntico, capas integrais, galeria com fotos reais; nenhuma montagem como evidência biográfica.
- Menu mobile abriu, fechou após navegação e respondeu a Escape. Teste por teclado de Tab, Enter e atalho para conteúdo. Foco visível implementado; âncoras e CTAs com destinos confirmados.
- 17 URLs locais distintas de navegação e recursos com resposta 200. Links mailto revisados: destinatário e assuntos específicos corretos; nenhum e-mail enviado. Crédito Smart Local com URL, target e rel obrigatórios. O destino externo não foi auditado por disponibilidade de serviço.
- Vídeo sem autoplay; metadados: 61,998 s, 540×810. Reprodução manual avançou no player, sem erro; pausado em seguida. Nenhuma transcrição inventada.
- Preferência por movimento reduzido: scroll computado `auto`.
- Página do livro com JavaScript desativado: conteúdo e H1 presentes.
- SEO: títulos diferentes por rota, description, OG, Twitter e JSON-LD Person/Book presentes no HTML. Sem Offer, Review, ISBN ou domínio fictício. No estado de prévia: noindex/nofollow e robots bloqueado. Canonical e sitemap definitivo condicionados a `SITE_URL`.
- Detectado fallback de SPA no preview durante QA; corrigido com Vite MPA e duas entradas HTML. Após reiniciar o preview, URL inexistente respondeu 404.

## Arquitetura e direção editorial

Cada seção principal e cada bloco da página de livro tem componente próprio em `src/components/sections`. Header/Footer separados; App e páginas apenas compõem. Obras e contato em dados tipados. Renderização estática durante build; sem servidor React em produção. Tipografia local e assets locais, com derivados responsivos e lazy loading após a primeira dobra. Originais recebidos no checkout preservados.

Paleta, serifas e composição assimétrica seguem a referência. Fotografia vertical autêntica substitui o panorama gerado. Sequência de conteúdo mais extensa segue a especificação. Não há depoimentos, preço, estoque, links comerciais ou WhatsApp inventados. A segunda obra aparece na home, sem página individual fora do escopo.

## Limites e pendências

QA executado no Edge em desktop com viewports emulados; não houve teste em aparelhos físicos, Safari/iOS ou sessão com leitor de tela. Acessibilidade foi revista por semântica, alternativas, foco, teclado, preferência de movimento e contraste, sem afirmar certificação WCAG. Legendas/transcrição dependem da validação do áudio. Deploy Vercel preparado em configuração, ainda não executado a pedido do usuário. Domínio, autorização editorial/das mídias e dados comerciais continuam pendentes conforme README e documentos de origem.

Evidências locais de trabalho: `.qa/report.json`, capturas `.qa/home-375.png`, `.qa/home-1440.png`, `.qa/book-375.png`, `.qa/book-1440.png` (ignoradas pelo Git). Scripts de QA usam o runtime de browser deste ambiente e não são dependências de execução do site.
