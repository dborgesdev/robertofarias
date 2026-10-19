# Contatos e integração de e-mail — decisão de 15/10/2026

## Nova autorização

O usuário confirmou expressamente nesta conversa o número **+55 81 99952-2510**, para uso como contato público de Roberto Farias. O valor internacional usado em wa.me é `5581999522510`. Essa autorização substitui a pendência de WhatsApp dos documentos históricos; não foi inferida do número antigo da exportação.

WhatsApp passou a ser a conversão principal por solicitação do usuário. Mensagens distintas para contato geral, Ainda Tenho Estradas e Viva Seus 60+; valores, estoque, entrega e formas de pagamento continuam sendo consultas, sem anúncio de condições não confirmadas. O e-mail `rbrt.farias@gmail.com` permanece como alternativa.

A rota `/contato/` e a reformulação do CTA final/formulário foram autorizadas nesta rodada. A copy biográfica e editorial das obras permanece baseada na especificação. O título de acolhimento solicitado foi adotado: “Toda boa história começa com uma conversa.”

## Arquitetura

Atualização de 16/10/2026: o destino autorizado passou a ser Cloudflare Workers. `worker/index.ts` adapta o mesmo handler de contato para Request/Response; as regras de validação e o provedor permanecem iguais. Configurar os segredos no Worker `robertofarias` e `SITE_URL` no runtime e no build. A configuração anterior de Vercel descrita abaixo é alternativa histórica. Procedimento atual em `cloudflare-deploy.md`.

- Home e Contato reutilizam `ContactForm`, incluindo campos, validação, envio e feedback.
- Contato geral e consultas por livro usam `src/data/contact.ts`. O botão flutuante é único e recebe o contexto da página.
- `/api/contact`: função Node em `api/contact.ts`, compatível com Vercel. As três páginas continuam pré-renderizadas e portáveis; apenas o envio de e-mail depende de execução serverless. Não há servidor React, banco de dados nem armazenamento próprio de mensagens.
- Desenvolvimento e preview Vite usam a mesma função através de `server/contactApi.ts`. Não há falso sucesso local: sem credenciais/origem autorizada, responde 503.
- Provedor escolhido para integração: Resend via REST, sem SDK adicional. Usados `from` do domínio verificado, destinatário fixo confirmado, `reply_to` do visitante e corpo de texto simples. Referências primárias: [envio de e-mail Resend](https://resend.com/docs/api-reference/emails/send-email) e [funções Node da Vercel](https://vercel.com/docs/functions/runtimes/node-js).

## Configuração externa pendente

1. Conta/chave de envio Resend (`RESEND_API_KEY`).
2. Remetente de domínio verificado (`CONTACT_FROM`), com DNS e permissão de envio conferidos no provedor.
3. Domínio/origens reais (`SITE_URL`; Vercel adiciona `VERCEL_URL` no deploy). Origens locais/aliases adicionais em `CONTACT_ALLOWED_ORIGINS`, separados por vírgula e sem curinga.

Copiar `.env.example` para `.env.local` apenas em ambiente local e preencher fora do Git. Para produção, usar variáveis de ambiente do projeto Vercel. Nunca usar prefixo `VITE_` em credenciais. Reiniciar dev/preview após configurar. `SITE_URL` também habilita canonical e sitemap de produção no build.

Não foram fornecidas credenciais, nenhum serviço foi contratado e não houve envio real de e-mail nesta implementação. Os testes de aceitação/sucesso do provedor usam respostas simuladas. O estado real sem configuração é indisponibilidade, com os dados preservados no formulário e alternativas WhatsApp/mailto.

## Proteções e limites

Validação compartilhada com repetição obrigatória no servidor; tipos/limites de campos; JSON de até 12 KB; origem exata autorizada; bloqueio de solicitação cross-site; honeypot; tempo mínimo de preenchimento; cinco tentativas por IP em cinco minutos por instância aquecida; timeout; destinatário fixo; corpo plain text; idempotência no provedor; sem logs de conteúdo, telefone de visitante ou credenciais.

O limite em memória é proteção básica e não é distribuído entre instâncias serverless. Antes de abrir a função ao público, configurar rate limiting no WAF da hospedagem para `/api/contact`, conforme o tráfego/limites da conta. Não foi declarada proteção equivalente a CAPTCHA ou infraestrutura distribuída. Cada mensagem só recebe confirmação após resposta positiva com identificador do provedor; isso confirma aceitação para envio, não leitura nem entrega final na caixa postal.

No WhatsApp, os dados são preparados no navegador e o usuário precisa concluir o envio na conversa. A interface não declara mensagem enviada ao simplesmente abrir a URL. Nenhuma mensagem de teste foi enviada a Roberto.

## Domínio definitivo — 19/10/2026

`SITE_URL=https://robertofariasoficial.com.br` no Worker e no build. Esta origem é autorizada pelo handler; www e endereço provisório são redirecionados antes da API. `CONTACT_ALLOWED_ORIGINS` é opcional e não precisa incluir aliases públicos: a página e o formulário operam na mesma origem oficial. Não há CORS aberto nem curinga; requisições de outras origens continuam bloqueadas. As instruções Vercel acima são históricas; o procedimento atual é `cloudflare-deploy.md`.

A consulta de nomes de secrets do Worker nesta rodada retornou lista vazia. Credenciais Resend/remetente continuam pendentes, sem envio real declarado; WhatsApp e mailto permanecem independentes.
