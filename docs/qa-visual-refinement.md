# QA — Refinamento visual das três páginas

16/10/2026 · branch `codex/v1-site-roberto-farias` · checkpoint preservado: `93f315d46eb3b4ead5c73f5496afd704eced4c24`.

## Retomada e escopo

Antes de modificar arquivos, foram conferidos branch, status e diff. A execução interrompida tinha alterações somente em cinco arquivos CSS; todas foram preservadas e revisadas. As três referências de `direção-visual/` foram novamente abertas e comparadas às páginas reais.

Não houve mudanças em copy, fatos, componentes, dados, hooks, formulário, canais, player, SEO ou configuração de deploy. Nenhuma imagem foi gerada ou alterada. Fotografias e capas originais continuam intactas. Não houve commit, push, PR, merge ou publicação nesta rodada.

## Refinamentos entregues

- Home e Sobre: retrato em escala menor, mais paisagem visível, máscara de integração no topo e na lateral e anotação decorativa omitida no mobile para proteger o rosto.
- Obras: capas maiores, sombras de contato, primeiro plano mais presente e descrições integradas à cena com contraste. Preservadas as diferenças reais entre a capa plana de Estradas e a fotografia recebida da segunda obra.
- Timeline: equilíbrio de colunas, molduras sobrepostas, alinhamentos e hierarquia dos marcos. O hook, o limite de ativação, o sticky e as trocas de imagem não foram modificados.
- Experiências: fotos documentais em escalas e alturas diferentes, inclinações menores onde prejudicavam legendas e pequenos elementos de álbum.
- Sobre: enquadramento do retrato das origens, separação entre legenda documental e crédito da arte, hierarquia dos capítulos e contraste do texto sobre papel no capítulo da escrita.
- Livro: capa apoiada por sombra no Hero, introdução com caderno à esquerda, temas separados por linhas e numeração, consulta com hierarquia própria e segunda obra ampliada sobre faixa sálvia.
- Leitura: corpo permanece em 18 px; auxiliares ampliados, foco com apoio claro e título do livro ajustado para telas estreitas.

## Validações executadas

- `pnpm typecheck`: aprovado.
- `pnpm lint`: aprovado.
- `pnpm test`: 12/12 aprovados. O provedor de e-mail é simulado pelos testes; nenhum e-mail ou WhatsApp foi enviado.
- `pnpm build`: aprovado após as correções finais, quatro HTMLs pré-renderizados; JS 83,34 kB gzip e CSS 11,83 kB gzip.
- `git diff --check`: sem erros de whitespace.
- Navegador integrado Chromium: quatro rotas em 320, 375, 768, 1024 e 1440 px, total de 20 combinações. Sem overflow horizontal, títulos excedendo a largura ou imagens quebradas nas verificações. Um H1 por página. Resultados em `qa-visual-refinement-results.json`.
- Comparação visual de Home, Sobre e livro em desktop e mobile; seções percorridas no navegador, imagens carregadas e seis capturas completas preservadas em `visual-refinement/`.
- Timeline: quatro estados observados, uma imagem ativa por vez, sticky a 8vh e retorno ao marco anterior durante a rolagem reversa. No mobile, apresentação sequencial preservada.
- Vídeo: reprodução real por Enter na Home desktop e no livro mobile; tempo avançou, foco no vídeo e controles disponíveis. Sem autoplay. Player e código de reprodução não foram alterados.
- Menu mobile: abre, expõe os links e fecha por Escape a partir da navegação, devolvendo o foco ao botão.
- Formulário da Home: submissão vazia mostra campos inválidos e transfere o foco ao nome. Destinos e mensagens de WhatsApp/e-mail conferidos; integração não foi modificada.
- HTTP da prévia: quatro rotas com resposta 200, description/OG/Twitter presentes e noindex preservado. 32 caminhos locais de rotas, imagens, variantes responsivas, fontes, CSS, JS e vídeo responderam sem falhas. Âncoras internas verificadas no HTML.
- Nenhum erro ou aviso registrado pelo navegador na revisão final. Conteúdo de leitura sem opacidade zero após as entradas. O sistema de motion e as regras de `prefers-reduced-motion` permanecem preservados por inspeção do diff; a preferência reduzida não foi emulada nesta rodada.

## Diferenças intencionais e limites

As referências usam retrato em outra pose, capa recriada da segunda obra, criança fictícia, textos e detalhes comerciais sem comprovação. A implementação mantém o retrato disponível, as capas recebidas, a biografia auditada e os CTAs de consulta. Textos completos e tamanho confortável de leitura tornam algumas seções mais altas. A timeline precisa de percurso de rolagem; uma captura inteira representa apenas um estado.

Legibilidade e contraste foram revisados visualmente, sem certificação WCAG ou medição de todos os pixels sobre fotografia. Não houve teste em aparelhos físicos, Safari/Firefox ou leitor de tela. Sem teste de entrega real de e-mail ou envio de mensagens.

Continuam pendentes os dados já documentados: domínio definitivo, credenciais/remetente do serviço de e-mail, aprovação editorial e direitos antes da publicação, subtítulo 40/60, dados comerciais/bibliográficos e transcrição verificada para legendas do vídeo. Nenhuma dessas lacunas foi preenchida nesta rodada.

## Arquivos

Implementação: `src/styles/base.css`, `editorial.css`, `timeline.css`, `about.css` e `book.css`.

Evidências: este relatório, `qa-visual-refinement-results.json`, seis capturas completas e três capturas da primeira dobra em `docs/visual-refinement/`.

Prévia usada: `http://127.0.0.1:4174/` (a porta 4173 estava ocupada durante a retomada).
