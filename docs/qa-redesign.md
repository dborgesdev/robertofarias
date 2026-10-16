# QA — redesign editorial e motion da V1

Data: 15/10/2026. Branch mantida: `codex/v1-site-roberto-farias`. Nenhum commit, push, PR, merge ou publicação.

## Direção implementada

- Retrato real integrado à primeira dobra por enquadramento e máscaras de composição CSS, sem reconstrução de rosto ou cenário. Título em três linhas, maior escala, ações e descrição em uma hierarquia única. Enquadramento próprio para mobile, com rosto acima do título.
- Obra prioritária sobre grafite, capa real de maior escala e texto em contraste. Catálogo com duas capas grandes, posições assimétricas e links acessíveis nas imagens. As capas permanecem completas, sem deformação ou rotação.
- Biografia em quatro momentos: infância no Recife; futebol e música; UFPE/Chesf; escrita. O parágrafo sobre juventude e carreira foi dividido para leitura, preservando cada frase. Fotografia histórica com legenda correta, tipografia de capítulo e composição que acompanha a rolagem em desktop.
- Galeria com fotografias em escalas distintas e recortes por breakpoint. Citação sobre fundo escuro como pausa visual estável. Vídeo, contato, rodapé e página do livro revisados na mesma linguagem.
- Estilos divididos por responsabilidade. Dados de trajetória e fotos separados da apresentação. Nenhuma dependência nova.

A missão citava três referências, mas o anexo desta rodada continha somente texto. Foi utilizada a referência visual disponível na conversa anterior. As outras duas não foram recebidas nem declaradas como analisadas. A aparência real do material disponível prevaleceu sobre o retrato gerado da referência.

## Sistema de movimento

- Entrada inicial: linhas do título com máscara do próprio contêiner; fotografia com máscara e escala 1,035→1; descrição e ações com fade/deslocamento. Durações individuais de 620–900 ms e easing cubic-bezier(.22,1,.36,1).
- Scroll: IntersectionObserver com revelação uma vez; fade/deslocamento de 20–30 px, escala discreta de capas e máscaras de imagens. Textos animados por grupo, não por parágrafo individual.
- Interações: setas, sublinhados, feedback de botão/foco, elevação de capa em 9 px e escala 1,015. Menu mobile com transição de 240 ms.
- Profundidade: uma fotografia da galeria com parallax de no máximo 12 px, somente a partir de 1024 px, processado em requestAnimationFrame e apenas enquanto visível. Não há scroll hijacking, loop decorativo nem autoplay.
- Conteúdo está visível no CSS/HTML padrão. Web Animations aplica estados transitórios; falha ou cancelamento não deixa estilos de ocultação. Rolagem rápida e foco dentro do elemento cancelam entradas. Preferência por movimento reduzido cancela animações em andamento e desativa parallax e transições.

## Validações executadas

- `pnpm typecheck`, `pnpm lint` e `pnpm build`: sucesso após a refatoração e formatação final.
- Build estático das duas páginas preservado; JS final 246,46 kB / 76,75 kB gzip. Acréscimo de cerca de 1,7 kB gzip sobre a V1 anterior, sem biblioteca de motion.
- Edge headless, ambas as páginas em 320, 360, 375, 768, 1024 e 1440 px: 12 combinações com resposta 200, um H1 por página, nenhum overflow horizontal, imagem quebrada, âncora interna ausente ou erro de JavaScript/console.
- Revisão visual com screenshots completos e primeira dobra da home em 1440, 1024, 768, 375 e 320 px. Capturas completas do livro em 1440 e 375 px. Identificados e corrigidos ampliação excessiva do retrato, quebra do CTA e overflow de uma palavra no título da galeria. Nova captura nas cinco larguras sem overflow.
- Fontes carregadas antes das capturas. Corpos corridos de pelo menos 18 px; metadados/legendas/notas têm escala própria. Revisão de contraste preserva os pares escuros/claros e ferrugem; link inferior sobre fotografia recebeu fundo sólido para leitura.
- Instrumentação de `Element.animate`: entradas sequenciais observadas e 24 revelações de scroll na home durante rolagem gradual. Retornar às seções não acrescentou revelações. Nenhum elemento permaneceu com opacidade zero ao concluir.
- Movimento reduzido desde a abertura: zero animações, scroll auto, parallax none, título e fotografia visíveis. Alterar a preferência durante a entrada também terminou com zero animações ativas.
- Falha simulada de `Element.animate`: título, CTA e conteúdo continuaram presentes e visíveis, sem erro de página.
- Comparação da versão anterior renderizada com o HTML novo: 34 parágrafos da home e 19 da página de livro, sem frases removidas e sem destinos de links perdidos. A biografia foi reorganizada, sem acrescentar fatos.
- Menu mobile abriu/fechou, navegação e Escape funcionaram. Tab e Enter no atalho para conteúdo conferidos. Preferência de movimento respeitada. Conteúdo da página do livro disponível com JavaScript desativado.
- 17 URLs locais distintas de navegação/recursos com resposta 200. Página desconhecida com 404. CTAs mailto preservados; não houve envio de mensagem.
- Vídeo permaneceu sem autoplay; reprodução manual avançou sem erro no player. OG, Twitter, description e JSON-LD Person/Book preservados por rota. Prévia continua noindex sem domínio definido.

## Evidências e limites

Evidências de trabalho locais, ignoradas pelo Git: `.qa/redesign-layout.json`, `.qa/report.json`, `.qa/motion-report.json`, `.qa/copy-report.json`; capturas `.qa/redesign-home-*.png`, `.qa/redesign-top-*.png`, `.qa/book-1440.png`, `.qa/book-375.png` e `.qa/motion-hero-mid.png`. Snapshot da implementação anterior em `.qa/before-redesign/` para comparação, sem commit.

Testes em Edge com viewports emulados. Não foram testados aparelhos físicos, Safari/iOS ou leitor de tela, nem foi feita certificação WCAG. Testes de reduced motion e falha de API verificam o fallback, sem afirmar cobertura de todos os navegadores. Não foi realizado deploy público.

Pendências editoriais/comerciais anteriores permanecem: domínio; aprovação da copy e mídias; subtítulo 40/60; disponibilidade, preço, logística e links de compra; eventual WhatsApp público autorizado; sinopses oficiais e dados bibliográficos; transcrição/legendas verificadas dos vídeos.
