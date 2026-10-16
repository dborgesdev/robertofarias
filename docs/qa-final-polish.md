# QA — Acabamento visual final da V1

15/10/2026 · branch `codex/v1-site-roberto-farias` · produção local em http://127.0.0.1:4173/. Escopo: acabamento da direção aprovada, sem novas páginas, integrações ou publicação.

## Alterações revisadas

- Hero: fotografia original sem moldura/rotação; máscara SVG manual da silhueta aplicada em CSS, composição maior com horizonte e bordas suaves. Nenhum rosto gerado, nenhum arquivo fotográfico alterado. Paisagem simbólica e retrato pessoal continuam identificados separadamente. Alt ajustado ao retrato do acervo, sem apresentar o cenário composto como registro documental.
- Home: passagens curtas entre papel, sálvia e grafite; intervalos/alinhamentos ajustados, destaque editorial preservado e catálogo compacto. Capas completas com funções distintas: destaque de 680 px no desktop, catálogo de aproximadamente 260–285 px e apresentação individual imersiva.
- Sobre: horizontes em escala ampla com painel editorial sobreposto; foto da banda em escala maior; relação entre foto a cavalo e texto em planos diferentes; composição de escrita com abertura visual acima do texto. Mesmos capítulos, ordem e conteúdo. No mobile, leitura sequencial sem sobreposição dos parágrafos às imagens. Legendas simbólicas/documentais preservadas.
- Tipografia: navegação de 18 px, legendas e auxiliares geralmente 16–18 px, parágrafos de 18–19 px, formulários preservados. Menu recolhe até 900 px para manter conforto. Títulos serifados e paleta autoral mantidos.
- Vídeo: MP4 original, poster existente, cenário simbólico discreto, botão explícito de reprodução, foco transferido ao player e controles nativos permanentes. Sem autoplay. Falha mantém botão/controles e oferece link ao MP4; sem JavaScript, overlay oculto e controles nativos disponíveis.

## Executado e resultado

- `pnpm typecheck`: passou.
- `pnpm lint`: passou.
- `pnpm test`: 12 testes passaram.
- `pnpm build`: passou. Quatro páginas pré-renderizadas; JS principal 82,88 kB gzip, CSS 14,69 kB gzip. Nenhuma dependência adicionada.
- Microsoft Edge/Chromium via Playwright: quatro rotas em 1440, 1024, 768, 375 e 320 px, total de 20 layouts. Todos 200, um H1 por página, zero overflow horizontal, imagens quebradas, títulos cortados ou erros JavaScript. Screenshots desktop/mobile inspecionados, incluindo Hero, Home inteira, biografia e vídeo. Corrigido durante a revisão um overflow de 4 px da foto da banda em 320 px.
- Reprodução real pelo novo botão usando teclado Enter na Home e no livro, em 1440 e 375 px: vídeo avançou além de 0,3 s em todos os quatro cenários, dimensões de mídia válidas, controles preservados, botão oculto após iniciar, foco no vídeo. Estado inicial pausado e sem autoplay. Rejeição de play simulada mostrou fallback; contexto sem JavaScript manteve controles e os quatro capítulos.
- Timeline: quatro estados corretos, único quadro ativo, legendas/numeração, sticky, rolagem inversa, mobile inline e movimento reduzido passaram novamente. Sobre estática, redirect `/sobre` → `/sobre/`, SEO das quatro rotas, 17 URLs locais 200, vídeo manual e 404 verificados pelo roteiro existente.
- Contatos: validação/foco, WhatsApp confirmado/contextual/codificado, retenção de campos, estados de espera, erro/limite e sucesso simulado com ID passaram. Endpoint real sem configuração retornou 503 corretamente. Nenhuma mensagem real enviada.
- Motion existente: sete entradas do Hero, revelações sem repetição, nenhum conteúdo oculto após a execução, preferência inicial/troca para movimento reduzido e falha simulada da API de animação passaram.
- Comparação SHA-256 de 11 arquivos protegidos: dados editoriais/contatos, hook e componente da timeline, hook de motion, formulário, navegação, gerador SEO e configuração Vercel permaneceram byte a byte iguais ao início desta rodada. Componentização e rotas preservadas.

Evidências locais ignoradas pelo Git: `.qa/final-layout-report.json`, `.qa/finish-function-report.json`, `.qa/chapters-interaction-report.json`, `.qa/form-report.json`, `.qa/motion-report.json`, screenshots `final-*.png`, `mask-hero-*.png` e `finish-video-*.png`.

## Limites e pendências

Nenhum deploy externo, teste em aparelho físico, Safari/Firefox, entrega real de e-mail, leitor de tela ou certificação WCAG foi executado. Legibilidade/contraste revisados visualmente; navegação por teclado exercitada no menu, formulário e reprodução.

Continuam as pendências externas já registradas: domínio e configuração do e-mail/remetente; direitos de divulgação das mídias; informações editoriais/comerciais definitivas; subtítulo 40/60 e transcrição/legendas dos vídeos. Sem novas pendências impeditivas desta rodada. Sem commit, push, PR, merge ou publicação.
