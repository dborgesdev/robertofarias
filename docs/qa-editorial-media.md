# Vídeos e fotografias — 20/10/2026

## Materiais conferidos

- `public/videos/ainda-tenho-estradas-autor.mp4`: H.264/AAC, 478 × 850, 65,60 s; decodificação completa por FFmpeg sem erro.
- `public/videos/viva-seus-60.mp4`: H.264/AAC, 478 × 850, 64,45 s; decodificação completa sem erro.
- `public/images/roberto-futebol.webp`: 899 × 905; WebP íntegro. Registro antigo com bola e texto incorporado, preservados integralmente.
- `public/images/trajetoria.webp`: 879 × 1093; WebP íntegro. Imagem fornecida de Roberto com chapéu e livro junto à janela; não apresentada como registro do ambiente de trabalho, nem datada.

As quatro mídias já estavam versionadas na main no commit `fcb018f`. Nenhum arquivo original foi alterado. Os dois posters novos são frames de 8 segundos dos respectivos vídeos. O promocional anterior `ainda-tenho-estradas.mp4` também foi decodificado integralmente: 540 × 810, aproximadamente 62 s. Os três MP4s já possuem o bloco moov antes do mdat, adequado ao início progressivo; não foi necessário recodificar nem alterar conteúdo.

## Integração

WritingOrigin recebe o filme autoral ao lado do texto aprovado e preserva caderno/bússola/papel. Home apresenta Viva Seus 60+ em Video. A página do livro mantém separadamente o promocional original de Ainda Tenho Estradas; não duplica o filme autoral nem apresenta o vídeo do segundo livro. Player compartilhado em `ui/EditorialVideo.tsx`, fontes/proporções/posters/rótulos em `data/videos.ts`.

Cada player usa controles nativos, playsInline, preload none, sem autoplay; botão de início/reinício acessível por teclado, foco transferido ao vídeo após play e link permanente para o arquivo correspondente. Falhas de play/mídia têm feedback e fallback, sem sucesso simulado. Nenhuma transcrição ou legenda de áudio foi inventada.

Biography mantém o hook original da timeline. Capítulos 01/03 usam as novas imagens em desktop e mobile, sem recortar rostos/texto/livro. Biografia, datas e demais imagens permanecem iguais. Estilos da montagem anterior, agora sem uso, foram removidos.

## Validação executada antes da publicação

- Typecheck, lint, 21 testes, build com verificação SEO e Wrangler dry-run aprovados. Três testes novos verificam contexto correto/ausência de duplicação, controles/posters/fallbacks reais e ambas as apresentações da timeline.
- Preview no runtime Workers: Home, Sobre e livro em 1440, 768 e 375 px: um H1, sem overflow horizontal ou imagens quebradas. Composição de WritingOrigin e fotografias mobile inspecionadas por screenshots; seção Viva inspecionada no desktop.
- Três vídeos reproduzidos por ação de teclado até ended; botão Reiniciar reapareceu e os três reiniciaram perto de zero, sem ended. Pausa por teclado conferida. Nenhum erro/warning de console nos três tabs de QA.
- Antes do play, vídeos com readyState 0, pausados e sem autoplay. Posters existentes; fallbacks apontam para os arquivos certos. Assets originais não passaram por geração ou edição de rosto/capa.
- Timeline desktop conferida nos quatro capítulos: uma imagem ativa, legendas e imagens corretas. Mobile usa as mesmas novas fontes com altura proporcional.
- Movimento reduzido revisado no código preservado: hook encerra com matchMedia reduce, CSS desativa transições/animações e a timeline mantém troca sem transição. Preferência nativa reduce não foi emulada nesta ferramenta; não se declara teste em aparelho físico ou certificação WCAG.

Após merge/deploy, comparar build-info com main e verificar fontes, posters, fotografias e reprodução no domínio oficial. Resultados públicos e identificadores finais são fornecidos no relatório de entrega; este registro não antecipa o resultado da publicação.
