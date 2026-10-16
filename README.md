# Roberto Farias — Site oficial

Site editorial em refinamento, com Home, Sobre o Autor, página de Ainda Tenho Estradas e Contato. Conteúdo factual baseado em `docs/project.md` e `docs/source-audit.md`. A atualização de contatos autorizada em 15/10/2026 está em `docs/contact-integration.md`: WhatsApp confirmado como principal canal, e-mail como alternativa, formulário e rota de contato. Direção visual aprovada pelo usuário em 16/10/2026. Publicado em https://robertofarias.smartlocal.workers.dev; pendências editoriais e de integração estão documentadas.

## Rodar e visualizar

Node.js 22.12+ e pnpm 12.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Desenvolvimento: http://127.0.0.1:5173/. Para avaliar o artefato de produção:

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm preview
```

Preview: http://127.0.0.1:4173/. Rotas: `/`, `/sobre/`, `/livros/ainda-tenho-estradas/` e `/contato/`.

## Arquitetura

React + TypeScript + Vite + Tailwind v4. Fontes locais Cormorant Garamond, Source Sans 3 e Caveat. Cada seção principal em `src/components/sections`; App e páginas compõem. Dados de livros, contato, trajetória e fotografias em `src/data`. Formulário reutilizável em `src/components/contact/ContactForm.tsx`; validação compartilhada com o servidor em `src/lib/contactValidation.ts`.

As quatro páginas são pré-renderizadas durante o build, com HTML completo, metadados próprios e JSON-LD factual. Não há servidor React em produção. Fontes, fotos e vídeos locais, com reprodução manual. A única função serverless é `/api/contact`, para enviar e-mail. WhatsApp e links mailto funcionam de forma independente dela.

Motion nativo em `src/lib/useEditorialMotion.ts`: Web Animations API, IntersectionObserver e requestAnimationFrame, sem biblioteca adicional. Revelação por linhas e máscaras, capas, fade de transição, parallax de até 12 px em uma foto somente no desktop, microinterações e respeito a movimento reduzido. Conteúdo visível por padrão, inclusive sem animação. Rolagem rápida e foco cancelam entradas. Estilos organizados por base, layout, páginas, composição narrativa, contatos e motion.

## Contatos

WhatsApp público confirmado: **+55 81 99952-2510**. Usado em wa.me como `5581999522510`, com texto codificado e contexto geral ou por obra. Nome, e-mail opcional e mensagem do formulário viram uma conversa preparada; o visitante conclui o envio no WhatsApp. Nenhuma compra, preço ou estoque é presumido.

E-mail: **rbrt.farias@gmail.com**. Para habilitar envio pela função:

1. Copiar `.env.example` para `.env.local` no ambiente local, fora do Git.
2. Configurar `RESEND_API_KEY` e `CONTACT_FROM` com um remetente de domínio verificado no Resend.
3. Configurar `SITE_URL` com o domínio oficial; usar `CONTACT_ALLOWED_ORIGINS` para origens locais/aliases necessários. No Workers, a origem padrão está em `wrangler.json`.
4. Reiniciar dev/preview. Em produção, configurar os segredos no Worker `robertofarias`; no runtime local Workers usar `.dev.vars`, fora do Git.

Credenciais não usam prefixo `VITE_` nem são exportadas ao cliente. Sem configuração, a função responde 503 e a interface oferece WhatsApp/mailto, preservando os dados. Não há simulação de sucesso. A confirmação do provedor significa aceitação para envio, não entrega/leitura. Integração e limites antispam detalhados em `docs/contact-integration.md`.

## Build e hospedagem

**Destino aprovado em 16/10/2026: Cloudflare Workers, Worker `robertofarias`, conta `empreendedorsmart@gmail.com`.** O fluxo atual, configuração, variáveis e comandos estão em [docs/cloudflare-deploy.md](docs/cloudflare-deploy.md). `pnpm build` gera `dist/`; `pnpm preview:worker` testa no runtime Workers; `pnpm deploy:check` empacota sem publicar e `pnpm deploy:worker` publica. Somente a API de contato exige execução do Worker; páginas e mídia usam Static Assets. A origem pública confirmada está versionada em `wrangler.json` e alimenta o SEO do build. O texto Vercel abaixo documenta a alternativa anterior.

`pnpm build` → `dist/`. `wrangler.json` publica Static Assets e `worker/index.ts` adapta `/api/contact`, reutilizando o handler testado. `pnpm preview:worker` testa no runtime Cloudflare. A configuração Vercel anterior permanece como alternativa.

URL confirmada: https://robertofarias.smartlocal.workers.dev. O build usa `SITE_URL` do ambiente ou, por padrão, `vars.SITE_URL` de `wrangler.json`, gerando canonical, OG absoluto e sitemap. Para uma prévia noindex, definir a variável de ambiente como string vazia. Um futuro domínio próprio requer confirmação e novo build. Caminhos desconhecidos respondem 404, sem fallback global de SPA.

## Materiais e pendências

Arquivos recebidos em `public/` preservados, incluindo as capas originais completas. O acervo contém WebPs e dois MP4s; o ZIP original citado pela auditoria não está no checkout. Derivados responsivos têm nomes próprios. Os Heroes usam uma composição artística autorizada a partir do retrato original, identificada como tal. Cenários gerados não são registros documentais da trajetória. A banda aparece no capítulo da música; cavalo e moto têm destaque na narrativa visual de novas experiências, sem inventar local ou data.

Pendências externas: credenciais/remetente/DNS do e-mail; domínio; aprovação editorial e direitos das mídias; subtítulo conflitante 40/60; disponibilidade, preço, pagamento, frete e URLs comerciais; dados bibliográficos e sinopses oficiais; transcrição/legendas dos vídeos. A pendência de autorização de WhatsApp foi resolvida nesta rodada.

Testes de API usam provedor simulado e não enviam e-mails. QA real de navegação, formulário e visual está documentado em `docs/qa-approved-direction.md`. A primeira publicação foi verificada no navegador em desktop/mobile; ver `docs/qa-cloudflare.md`. Não houve entrega real de e-mail, teste em aparelho físico ou certificação WCAG.

Não fazer commit, push, PR, merge ou publicação sem ordem explícita.


## Direção aprovada implementada

As três referências em `direção-visual/` agora orientam as cenas da Home, do livro e de Sobre: composição artística do retrato, propósito com bússola/caderno, obras sobre paisagem escura, álbum documental, capítulos alternados, panorama, vídeo e contato editorial. A fonte Caveat local complementa os elementos manuscritos, sem simular assinatura pessoal. A timeline mantém o mesmo hook interativo e o sistema de motion continua nativo.

A organização atual substitui os componentes FeaturedBook e AboutMusic por obras integradas e capítulo conjunto de juventude, acrescentando AboutEducation, BookAcquisition e OtherBook. Estilos antigos de sucessivas rodadas foram removidos. Mapeamento: seção 18 de `docs/project.md`; fontes e prompts: `docs/art-direction-assets.md`; revisão e limites: `docs/qa-approved-direction.md`.
