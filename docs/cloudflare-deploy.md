# Publicação — Cloudflare Workers

## Destino confirmado em 16/10/2026

- Plataforma: Cloudflare Workers com Static Assets.
- Conta autenticada: `empreendedorsmart@gmail.com`.
- Worker autorizado pelo usuário: `robertofarias`. A consulta inicial do Wrangler confirmou que esse Worker ainda não existia.
- URL pública: registrar a URL efetivamente retornada pelo primeiro deploy; nenhum domínio ou subdomínio foi presumido.
- Repositório: `https://github.com/dborgesdev/robertofarias`, produção a partir de `main`.

## Arquitetura

React/TypeScript/Vite/Tailwind permanecem iguais. `pnpm build` produz quatro HTMLs completos em `dist/`, além de CSS, JS, fotos, fontes e vídeos. A pré-renderização acontece no build; não existe SSR em produção.

`wrangler.jsonc` versiona o Worker e o binding `ASSETS`. A camada Static Assets resolve os arquivos e os index.html dos diretórios, força as barras finais e responde 404 para caminhos desconhecidos. O fallback global de SPA não se aplica a este projeto multipágina.

Somente `/api/*` invoca primeiro o Worker. `worker/index.ts` adapta Request/Response para o handler já testado de `api/contact.ts`, com `nodejs_compat`, sem servidor HTTP customizado ou dependência de servidor React. Rotas de API desconhecidas respondem JSON 404. A função Vercel anterior permanece disponível como alternativa, sem ser o destino desta publicação.

`public/_headers` configura cache imutável de um ano para `/assets/*` com hashes; imagens e vídeos usam um dia, sem `immutable`, para permitir futuras substituições. A política padrão do Cloudflare administra os HTMLs. Credenciais e arquivos locais do Wrangler são ignorados pelo Git.

## Comandos

Node 22 e pnpm 12.11.2 (também definido no workflow).

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm deploy:check
pnpm preview:worker
```

`preview:worker` usa o runtime local real do Workers na porta 8787. `deploy:check` empacota o Worker sem publicar. Depois do PR aprovado pelos checks e integrado na main:

```sh
git switch main
git pull --ff-only origin main
pnpm install --frozen-lockfile
pnpm build
pnpm deploy:worker
```

Quando a origem pública estiver confirmada, definir `SITE_URL` com essa origem HTTPS antes do build. Exemplo de configuração PowerShell, substituindo pelo endereço real:

```powershell
$env:SITE_URL = 'origem HTTPS confirmada'
pnpm build
pnpm deploy:worker
```

Não publicar o texto de exemplo como variável real. Sem `SITE_URL`, o build mantém noindex, robots bloqueado e sitemap sem URLs, conforme a proteção existente.

## E-mail e variáveis

Configurar no Worker, fora do repositório:

- `RESEND_API_KEY`: segredo de envio, por `pnpm exec wrangler secret put RESEND_API_KEY`.
- `CONTACT_FROM`: remetente de domínio verificado no Resend, por secret ou variável do Worker.
- `SITE_URL`: origem pública real autorizada para o formulário; o mesmo valor deve estar no ambiente de build para canonical, OG e sitemap.
- `CONTACT_ALLOWED_ORIGINS`: origens adicionais exatas, separadas por vírgula; opcional.

Para teste local do Workers, usar `.dev.vars` ignorado pelo Git. O desenvolvimento Vite continua aceitando `.env.local`. Nenhum segredo usa prefixo `VITE_`. `keep_vars` preserva as variáveis remotas configuradas pelo painel.

Sem credenciais/remetente, `/api/contact` responde 503 de forma verdadeira. WhatsApp e mailto continuam independentes. Os testes do provedor são simulados; não significam entrega real de e-mail. O IP vem do header de conexão definido pela Cloudflare; um header Vercel enviado pelo cliente é descartado. O limite em memória é básico por instância, não rate limiting distribuído; manter os limites documentados em `contact-integration.md`.

## Atualizações e conferência

Futuras alterações passam por branch, PR e workflow `Validate production build`; ele executa instalação congelada, typecheck, lint, testes, build e dry-run do Wrangler. Não há deploy automático ou alteração de DNS pelo workflow.

Antes de publicar, confirmar que o checkout está em main, sincronizado e limpo. Após publicar, comparar `/build-info.json` com `git rev-parse HEAD`, conferir a versão em `pnpm exec wrangler deployments list --name robertofarias` e verificar as quatro páginas, recursos, CTAs, vídeo, timeline, formulário e HTTPS na URL pública. `build-info.json` contém somente hash do commit e horário do build, sem dados privados.

Status desta preparação: configuração pronta para validação local; commit, PR, merge e deploy serão registrados com seus resultados reais após execução. Não registrar produção como validada antes disso.
