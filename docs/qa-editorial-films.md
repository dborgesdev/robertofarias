# Apresentações em vídeo — versão final para publicação

## Composição aprovada após ajustes manuais

A Home apresenta WritingOrigin com “Dá pra sustentar uma vida plena.”, texto à esquerda e `a-vida-continua.mp4` à direita; Ainda Tenho Estradas com `ainda-tenho-estradas-autor.mp4` à esquerda e texto à direita; Viva com texto à esquerda e `viva-seus-60.mp4` à direita.

Essa seleção substitui a distribuição da revisão anterior, conforme as alterações manuais do usuário. A página exclusiva de Ainda Tenho Estradas mantém apenas o vídeo autoral, com o texto “Veja a apresentação da obra pelo próprio Roberto.” e texto à esquerda do player. A origem da escrita e a citação compacta permanecem textuais, sem acrescentar players à página do livro.

As capas e a remoção do crédito visual de WritingOrigin acompanham o ajuste manual. O frame `poster-origem-escrita.jpg`, extraído do vídeo durante a revisão anterior, permanece no acervo, sem ser utilizado pela composição final. Nenhum MP4 foi recodificado ou recortado. Algumas cenas contêm faixas pretas incorporadas à própria mídia.

## Implementação

Player compartilhado com props tipadas em `ui/EditorialVideo.tsx`. Capa estática e botão central antes da interação, sem MP4 conectado, controles ou autoplay. Após ação do visitante, reprodução e controles nativos com proporção fixa. Ao terminar, restaura a capa e permite reinício. Foco, rótulos, fallback de erro e alternativa sem JavaScript disponíveis.

Home/BookPage compõem as seções. Dados ficam em `data/videos.ts`. `styles/films.css` organiza proporções intrínsecas, alternância e continuidade do verde/paisagem; regras da montagem horizontal foram removidas. Motion existente preservado, com tratamento de prefers-reduced-motion no hook e CSS.

## Validação

A revisão anterior foi inspecionada em 1440, 768 e 375 px e teve reprodução, pausa, término e reinício conferidos. Após as alterações manuais, os testes de distribuição foram atualizados para exigir as fontes finais escolhidas pelo usuário. As validações finais e os identificadores de PR, merge e deploy são apresentados no relatório de publicação da conversa.

## Autorização

Em 30/10/2026, após editar manualmente a implementação, o usuário autorizou expressamente commit, push, PR, merge e deploy. Essa autorização substitui a restrição de publicação da revisão anterior. Branch de implementação: `codex/refinamento-videos-roberto-farias`; produção a partir da main integrada.
