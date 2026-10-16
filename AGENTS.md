# Instruções do repositório — Roberto Farias

1. Leia integralmente `docs/project.md` e `docs/source-audit.md` antes de qualquer implementação. O primeiro é a especificação editorial e técnica; o segundo justifica fatos, restrições e o uso correto das mídias.
2. **Status:** o conteúdo e a direção visual são **propostas da Fábrica para avaliação**, não declarações já aprovadas pelo autor. Não altere copy/informações nem preencha lacunas inventando fatos.
3. Trate `Ainda Tenho Estradas` como obra prioritária. Não anuncie estoque, lançamento confirmado, preço, link de compra, ISBN, subtítulo conflitante nem contato WhatsApp não autorizado.
4. Use React + TypeScript + Tailwind; prefira Vite e pnpm, salvo necessidade técnica documentada. Componentize **cada seção principal em arquivo `.tsx` próprio**, inclusive páginas únicas. `App.tsx` e páginas compõem; não acumule seções, dados ou lógica em arquivos monolíticos. Separe dados de obras e contatos quando útil.
5. Preserve capas/fotografias recebidas; nunca apresente ilustrações/montagens como evidência real. Não redesenhe capa, não modifique textos embutidos e não simule fotos documentais.
6. Entregue V1 completa em uma branch, com responsividade, acessibilidade para público maduro, SEO factual e deploy estático confiável. Não crie placeholders falsos de obras ou avaliações.
7. Incluir crédito de rodapé exato `Desenvolvido por Douglas Borges - Smart Local`, link `https://smartlocal.com.br`, nova aba, `rel="noopener noreferrer"`.
8. Só incluir WhatsApp flutuante se for confirmado como canal de aquisição, com número autorizado e mensagem personalizada.
9. Validar typecheck, lint, build, preview, rotas, assets, CTAs, SEO, legibilidade e QA arquitetural. Não declarar testes não feitos.
10. Não fazer commit, push, PR ou merge sem ordem explícita. Preserve a `main`.
