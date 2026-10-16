# QA — Uma vida em capítulos

Revisão local em 15/10/2026, branch `codex/v1-site-roberto-farias`. Artefato real produzido por `pnpm build` e servido com `pnpm preview` em 127.0.0.1:4173. Navegador: Microsoft Edge/Chromium headless via Playwright, com inspeção dos screenshots. Não houve publicação, commit, push, PR ou merge.

## Verificações executadas

- `pnpm typecheck`: passou.
- `pnpm lint`: passou.
- `pnpm test`: 12 testes passaram, sem falhas. Validação, número/contexto do WhatsApp, origem, payload, honeypot, tempo, configuração ausente, resposta do provedor, falha de rede, limite por instância e idempotência.
- `pnpm build`: passou; quatro páginas com HTML completo. JS principal aproximadamente 82,7 kB gzip, CSS aproximadamente 12,9 kB gzip. Fontes locais, três artes WebP em três tamanhos, sem nova biblioteca de motion.
- Quatro rotas × cinco larguras (1440, 1024, 768, 375 e 320 px): 20 verificações, todas 200, um H1 por rota, sem overflow horizontal, imagens quebradas, headings cortados ou erros JavaScript. Evidência local: `.qa/final-layout-report.json` e screenshots `final-{home,about,book,contact}-*.png`.
- Timeline: quatro estados ativos corretos em sequência, uma imagem ativa de cada vez, legenda/numeração correspondentes, sticky após a entrada da seção (80 px em viewport de 1000 px), retorno ao primeiro capítulo na rolagem inversa. Quatro imagens inline no mobile. Movimento reduzido troca o estado sem transição. Sem JavaScript, quatro capítulos e imagens visíveis. `.qa/chapters-interaction-report.json` e `timeline-state-*.png`.
- Sobre: seis seções narrativas próprias, leitura estática sem JavaScript, link global com aria-current e redirecionamento 308 de `/sobre` para `/sobre/`. Dados em `src/data/about.ts`; App e páginas compõem as seções. Estilos separados por abertura, timeline, biografia, obras e cenário do livro. Composições antigas da biografia removidas.
- Navegação e mídia: 17 URLs locais únicas usadas por links/assets retornaram 200. Âncoras locais da página verificadas; vídeo reproduzido por ação do teste até avançar mais de 0,3 s, sem autoplay; caminho desconhecido retornou 404. Metadados description, Open Graph e Twitter presentes nas quatro rotas. JSON-LD factual revisado no gerador; prévia noindex, sem domínio fictício/canonical inventado. Sitemap/robots condicionados a SITE_URL.
- Contatos: validação com foco no primeiro erro, WhatsApp confirmado e codificado, mensagem contextual por obra, feedback de envio, estados de espera/erro/limite e retenção dos campos. Abertura de WhatsApp interceptada no teste, sem enviar mensagem. Endpoint real sem credenciais respondeu 503; sucesso foi testado apenas com resposta simulada de provedor e ID, nunca como entrega real. Sem ID, a interface rejeita sucesso. Menu mobile e tecla Escape verificados; links WhatsApp/mailto presentes no HTML sem JavaScript. `.qa/form-report.json`.
- Motion: sete entradas do Hero instrumentadas, revelações por rolagem, sem repetição ao retornar, sem elementos ocultos após animação, cancelamento na mudança para movimento reduzido, preferência inicial respeitada, fallback com falha simulada de Element.animate sem erros. `.qa/motion-report.json`.

## Revisão visual e editorial

Hero com paisagem unificadora, retrato original com moldura, título expressivo e CTAs acessíveis no mobile. Ainda Tenho Estradas em cenário de estrada e capa grande, catálogo com segunda obra em composição própria. Página do livro com apoio legível em painel claro, legenda de arte explícita, leitura em escalas alternadas e composição de escrita. Sobre alterna horizonte, memória da banda, tipografia UFPE/Chesf, registro real a cavalo e escrita simbólica. Galeria da Home preserva cavalo e moto com enquadramentos distintos.

Foram corrigidos durante a revisão um overflow da segunda obra, a posição do retrato/CTAs no mobile, contraste do apoio/eyebrow do livro e a posição de sua legenda. Fotos/capas recebidas não foram redesenhadas. Artes novas identificadas como ilustrações, sem datas, lugares visitados, manuscritos ou fatos inventados. Proveniência e prompts em `art-direction-assets.md`.

Foco visível, skip link, landmarks, hierarquia de títulos, labels/erros do formulário, áreas de toque, textos alternativos e movimento reduzido revisados por código e navegador. Contraste e leitura revisados visualmente; não foi executada auditoria automatizada WCAG ou validação com leitor de tela. Não há certificação de acessibilidade.

## Limites e pendências reais

Não foram testados entrega real de e-mail, DNS/remetente, deploy Vercel público, domínio final, Safari/Firefox ou dispositivos físicos. A configuração Vercel foi revisada para páginas estáticas por diretório e função API independente; o preview local não prova um deploy externo.

Dependências externas: domínio/SITE_URL; credenciais Resend e remetente verificado; aprovação editorial e direitos de divulgação dos materiais; sinopses e dados editoriais; conflito de subtítulo 40/60; informações comerciais; transcrição/legendas dos vídeos. A autorização do WhatsApp foi resolvida. Nenhuma dessas lacunas virou afirmação comercial pública.
