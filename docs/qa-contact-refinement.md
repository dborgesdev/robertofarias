# QA — refinamento criativo e contatos

15/10/2026. Branch `codex/v1-site-roberto-farias`, preservada. Sem commit, push, PR, merge ou deploy.

## Composição e conteúdo

Hero em atmosfera grafite com retrato real integrado, título por linhas e contraste marfim/ferrugem. Manifesto como abertura ampla, sem título/texto em duas colunas. Destaque da obra com título em largura integral, capa central atravessando a mudança entre papel e grafite, pontos de leitura e apresentação em posições distintas. Catálogo com capas completas e composição aberta.

Trajetória em cenas progressivas: Recife/1950 em tipografia; fotografia histórica com legenda; capítulo de formação/trabalho com UFPE/Chesf; encontro com a escrita. A banda saiu da duplicação da galeria e ficou no capítulo musical. Cavalo e moto mantêm destaque fotográfico, sem inventar data, viagem ou local. Citação como pausa em ferrugem. Nenhuma capa, rosto ou fotografia foi recriada.

Página do livro com título amplo, capa central em palco próprio, apresentação abaixo, texto de origem em composição de ensaio, ideias de leitura em linhas numeradas e motivação em bloco tipográfico. Não há trechos do livro, preços, estoque ou condições fictícias.

Novo contato Home com o título autorizado, formulário compartilhado e links diretos. Nova rota `/contato/` com H1 próprio, acolhimento, retrato, telefone/e-mail e o mesmo formulário. Todos os destinos comerciais de consulta usam o WhatsApp confirmado; exploração da obra continua direcionando à página editorial.

## Validações executadas

- `pnpm typecheck`: passou, incluindo API, middleware local e componentes.
- `pnpm lint`: passou. A primeira execução apontou regex de caracteres de controle; validação foi reescrita por códigos de caracteres, sem desabilitar a regra.
- `pnpm test`: 12 testes passaram. Campos, controle/injeção de cabeçalhos, payload, origem, honeypot, tempo de preenchimento, rate limit, falhas de rede/provedor, idempotência, destinatário fixo e contexto/encoding do WhatsApp. Provedor simulado; zero envios reais.
- `pnpm build`: passou. Três páginas pré-renderizadas; JS 257,05 kB / 80,40 kB gzip; CSS 47,29 kB / 10,85 kB gzip. Nenhuma biblioteca nova de formulário, motion ou envio de e-mail.
- Preview final iniciado com API local e configuração final ESM/Node 22.
- Edge headless: três páginas em 1440, 1024, 768, 375 e 320 px, total de 15 combinações. Resposta 200, um H1 por página, zero overflow horizontal, títulos cortados, imagens quebradas ou erros JavaScript. Capturas completas e revisão visual da renderização real; primeira dobra da Home nas cinco larguras.
- Menu mobile, Tab/Enter no atalho de conteúdo, Escape e marcação da página atual de contato conferidos. Layout e alvos de toque preservados; botão flutuante usa área de toque 56–60 px, foco visível, margem segura e safe-area. Rodapé tem espaço inferior para evitar sobreposição do crédito.
- Formulário no navegador: validação de campos e foco no primeiro erro; WhatsApp com nome/acentos/ampersand/quebra de linha corretamente codificados, número confirmado e abertura segura. A abertura foi interceptada no teste; nenhuma mensagem enviada. Feedback orienta concluir o envio no WhatsApp.
- E-mail real sem credenciais no preview respondeu 503; a interface apresentou erro e manteve os campos. Estados de carregamento e aceitação foram testados por resposta simulada com ID de provedor; resposta sem ID foi rejeitada; feedback de 429 conferido. Nada de sucesso ao simplesmente abrir mailto ou ao receber resposta vazia.
- Contato sem JavaScript mantém H1, dados de contato, links WhatsApp/mailto e orientação para alternativa direta.
- Motion instrumentado: entrada sequencial observada, revelações únicas na rolagem, sem conteúdo permanentemente oculto. Reduced motion desde a abertura com zero animações; troca da preferência cancelou animações ativas. Falha simulada da API de animação manteve título e CTA legíveis, sem erro de página. A cena de carreira usa fade, alternando com máscaras e deslocamentos.
- 17 URLs locais distintas de navegação/recursos responderam 200; rota desconhecida respondeu 404. Vídeo reproduziu manualmente sem erro. Títulos, descriptions, OG, Twitter e JSON-LD Person/Book/ContactPage presentes no HTML das rotas. Noindex permanece na prévia sem domínio.
- Busca no bundle de cliente por nomes de credenciais, endpoint do provedor e chave de teste não encontrou ocorrências. As variáveis do serviço permanecem no servidor.

## Pendências externas e limites

WhatsApp não é mais pendência: o usuário autorizou expressamente **+55 81 99952-2510** nesta rodada. Conferidos URL e mensagens; não foi feito teste de conversa/entrega na conta.

E-mail exige conta/chave Resend, remetente e domínio verificados, DNS e origens de produção. A implementação está preparada, com `.env.example` e instruções em `docs/contact-integration.md`; nenhum e-mail real foi enviado e nenhuma entrega real foi validada. O rate limit em memória é por instância aquecida; proteção distribuída deve ser configurada no WAF da hospedagem antes da publicação. Sem credenciais, o site mantém WhatsApp e endereço de e-mail como alternativas.

Domínio, publicação, aprovação final da copy e mídias, subtítulo 40/60 e condições comerciais permanecem pendentes. A V1 está disponível apenas localmente. Não houve teste em aparelhos físicos, Safari/iOS ou sessão de leitor de tela, nem certificação WCAG. Os testes de sucesso de envio são explicitamente simulados.

Evidências locais ignoradas pelo Git: `.qa/final-layout-report.json`, `.qa/form-report.json`, `.qa/motion-report.json`, `.qa/final-home-*.png`, `.qa/final-book-*.png`, `.qa/final-contact-*.png`, `.qa/final-top-*.png` e `.qa/contact-email-unavailable.png`. Testes reproduzíveis da API em `tests/contact.test.mjs`, executados por `pnpm test`.

Ajuste final de rotas: `/contato` e `/contato?livro=ainda-tenho-estradas` redirecionam para `/contato/` preservando a query, com resposta final 200. URL desconhecida continua respondendo 404. Middleware local de dev/preview alinhado ao `trailingSlash` da hospedagem. Typecheck executado novamente após o ajuste, com sucesso.
