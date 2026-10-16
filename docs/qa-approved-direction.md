# QA — Implementação da direção visual aprovada

15/10/2026 · branch `codex/v1-site-roberto-farias` · preview de produção local, sem publicação.

## Resultado técnico

- `pnpm typecheck`: aprovado.
- `pnpm lint`: aprovado.
- `pnpm test`: 12/12 testes aprovados. Testes do provedor de e-mail usam simulação; nenhum e-mail real foi enviado.
- `pnpm build`: aprovado sem avisos na execução final; quatro HTMLs pré-renderizados. JS principal 83,34 kB gzip, CSS 11,02 kB gzip.
- Edge/Chromium via Playwright: quatro rotas × 1440, 1024, 768, 375 e 320 px. 20 respostas 200, um H1 por página, nenhuma imagem quebrada, nenhum overflow horizontal, nenhum título com largura excedente e nenhum erro de execução.
- Timeline: quatro estados, uma imagem ativa, sticky a 8vh, rolagem reversa, transição imediata com movimento reduzido, quatro imagens sequenciais em mobile e sem JavaScript.
- Vídeo: reprodução real por Enter em Home/livro, desktop/mobile; tempo do vídeo avançou; foco enviado ao player; controles mantidos; sem autoplay. Rejeição simulada de play mostra alternativa verdadeira. Sem JS, controles nativos disponíveis.
- Formulário: validação, foco no primeiro erro, WhatsApp confirmado com mensagem codificada, dados preservados em erro, resposta 503 real sem credenciais, sucesso apenas após ID simulado de provedor, rejeição de resposta sem ID e feedback 429. O teste de WhatsApp intercepta a abertura e não envia mensagens.
- Navegação: menu mobile, aria-current, Escape, redirecionamento 308 de `/sobre`, 404 em caminho inexistente, âncoras locais e 21 recursos/rotas locais com resposta 200.
- SEO: description, OG, Twitter e H1 nas quatro rotas. Domínio ausente mantém noindex e sitemap sem URLs presumidas. Build/deploy/endpoint preservados.
- Motion: sete entradas do Hero, revelações sem replay indevido, nenhum elemento permanentemente oculto; mudança dinâmica e preferência inicial de movimento reduzido; fallback quando Web Animations falha.
- Oito arquivos centrais comparados por SHA-256 à rodada anterior: dados de livros, biografia resumida e contatos, hooks de timeline e motion, formulário, build e Vercel. Sem mudanças nesses arquivos.

## Comparação visual realizada

As três referências de `direção-visual/` foram inspecionadas integralmente e comparadas às capturas das páginas reais. Capturas finais de desktop/mobile são preservadas em `docs/visual-review/`; resultados estruturados em `docs/qa-approved-direction-results.json`.

| Página/cena | Implementação e revisão |
|---|---|
| Home / abertura | Retrato integrado ao litoral e luz de pôr do sol, título à esquerda, ferrugem, manuscrito editorial, CTAs reais. Enquadramento próprio de tablet/mobile corrigido para não cortar o rosto. |
| Home / propósito | Caderno à esquerda, texto sobre papel, bússola e natureza à direita. Fundo e texto são elementos separados. |
| Home / obras | Dois livros protagonistas sobre paisagem escura, descrições e links reais, profundidade CSS. Destaque e catálogo integrados, sem repetir uma terceira capa gigante em outra seção. |
| Home / memória | Álbum à esquerda e quatro marcos à direita; hook sticky preservado. Intervalos reduzidos após comparação; a área continua mais alta que a imagem estática por causa da interação na rolagem. |
| Home / experiências | Banda, cavalo e moto originais em fotografias sobrepostas; legendas legíveis, ajustadas no mobile. |
| Home / citação | Panorama e citação autêntica. Sem personagem fictício apresentado como Roberto. |
| Vídeo / ambas | Cena escura, poster original e retrato documental, botão explícito. Ao reproduzir, o MP4 vertical usa o palco inteiro com proporção preservada. |
| Contato | Composição clara com formulário real, papel, manuscrito simbólico e folhas. Campo de assunto fictício do mockup não foi acrescentado. |
| Livro / abertura e introdução | Estrada, capa íntegra dominante, conteúdo à esquerda; introdução em papel com bússola. |
| Livro / temas e reflexão | Temas sobre verde escuro; motivação pessoal com paisagem. Não foram inventados benefícios ou capítulos para copiar o mockup. |
| Livro / consulta e outra obra | Capa central menor, canais de consulta e segunda obra em sálvia. Sem preço, estoque ou condições presumidas. |
| Sobre / abertura e origens | Hero compartilhando a linguagem da Home; álbum com retrato atual verdadeiro em vez da criança fictícia. |
| Sobre / juventude | Futebol e música reunidos, foto da banda ampliada e sobreposta, conteúdo verificado integral. |
| Sobre / formação e trabalho | Capítulos separados, arquitetura ilustrada em papel e cena conceitual de energia. Legendas informam que não são fotos da UFPE ou da Chesf. |
| Sobre / experiências e escrita | Cavalo e moto em álbum; manuscrito simbólico integrado ao papel. Fontes/documentos continuam distintos de decoração. |
| Sobre / obras e fechamento | Livros sobre paisagem, citação autêntica em ferrugem, rodapé. |

Diferenças intencionais: retrato frontal preserva a fotografia disponível, em vez de inventar a pose da referência; capas reais diferem das capas recriadas nos mockups; frases não verificadas e ícones de redes sem URLs confirmadas foram omitidos; textos completos e tamanho de leitura confortável ampliam algumas seções. A reprodução é uma implementação da direção de arte, não uma igualdade pixel a pixel das imagens geradas.

## Limpeza executada

Removidos após inspeção de usos:

- Componentes `FeaturedBook.tsx` e `AboutMusic.tsx`, substituídos por Works e AboutYouth.
- CSS `home.css`, `refinement.css`, `cinematic.css`, `book-stage.css`, `catalog.css`, `finish.css`. Estilos ativos consolidados por responsabilidade.
- Máscara antiga `retrato-mask.svg`.
- Artes substituídas `assets/art-source/road.png`, `desk.png` e seis WebPs `symbolic-road-*`, `symbolic-desk-*`.
- Derivados sem uso `estradas-240.webp`, `estradas-500.webp`, `retrato-360.webp`, `retrato-540.webp`, `poster-viva.jpg`.
- Dados combinados de carreira substituídos pelos dois capítulos factuais, ramo antigo de contato do livro, imports e seletores sem uso.
- Temporários de implementação, scripts pontuais e capturas antigas de `.qa`, depois de conservar o relatório final e seis capturas de avaliação.

Preservados todos os materiais recebidos no checkout, incluindo imagens não usadas na interface e os dois vídeos; documentação relevante, três referências aprovadas, testes, configuração, SEO e fontes de manutenção dos assets usados. Nenhuma dependência abandonada identificada; Caveat é a única nova dependência, uma fonte local para elementos manuscritos.

## Limites e pendências

Não houve teste em aparelho físico, Safari/Firefox, leitor de tela ou auditoria WCAG completa. Legibilidade/contraste foram revisados visualmente; teclado, foco, semântica, rótulos, alt e movimento reduzido foram inspecionados/testados nos cenários descritos.

Continuam pendentes: domínio definitivo, credenciais/remetente/DNS para envio de e-mail, direitos e aprovação editorial antes da publicação, subtítulo 40/60, dados comerciais/bibliográficos e transcrição/legendas do vídeo. A autorização do WhatsApp já está resolvida. Não houve commit, push, PR, merge ou publicação.

