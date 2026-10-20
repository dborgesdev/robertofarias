# Correção local dos blocos de vídeo

Base comparada: `fcb018f`, anterior à alteração incorreta; versão publicada preservada: `ec492a78e51129077d3fbc26a815fe2f71601766`.

## Diferenças identificadas e corrigidas

- O título e a descrição originais de Ainda Tenho Estradas na Home haviam sido substituídos pelo conteúdo de Viva Seus 60+. Restaurados literalmente; Viva permanece como segundo bloco independente, com copy própria, na mesma seção.
- O arquivo usado pelo bloco original era `/videos/ainda-tenho-estradas-autor.mp4`, tanto na Home quanto no livro. A alteração anterior o retirou da Home e trocou o source da seção Video do livro por `/videos/ainda-tenho-estradas.mp4`. Restaurado o source anterior nas duas páginas. O fallback acompanha o source efetivo.
- A moldura original 16:10 (4:3 no mobile), poster `poster-estradas.jpg`, retrato lateral e botão central haviam sido substituídos pela apresentação estreita. Restaurados com estilos isolados na variante split do player. O segundo bloco segue o mesmo tratamento, com poster e rótulos próprios.
- WritingOrigin mantém integralmente a adição válida do vídeo autoral; sua apresentação estreita não é afetada pela restauração da variante original. O uso do mesmo arquivo em dois contextos da página do livro é intencional conforme a correção solicitada.
- Biography, hook da timeline, imagens novas, estilos da timeline, copy biográfica e demais seções não foram modificados nesta correção.

## Validação local

Typecheck, lint, 21 testes e build/SEO aprovados. O teste de distribuição foi corrigido para exigir os dois vídeos na Home, somente Ainda Tenho Estradas na seção Video do livro e o autoral também em WritingOrigin. Testes mantêm verificação de preload none, ausência de autoplay, rótulos, posters, fallbacks e fotografias responsivas.

Home e livro conferidos no navegador em 1440 e 375 px, sem overflow horizontal nem imagens quebradas. Home: dois players; livro: um player em Video, mais WritingOrigin. Reprodução independente dos dois players da Home conferida por teclado, alternando play/pausa e observando estados separados.

Preview local: http://127.0.0.1:4173/. Não houve commit, push, PR, merge ou deploy. Branch local `codex/correcao-blocos-videos`; alterações aguardam avaliação visual expressa. Este registro substitui apenas as conclusões de distribuição/apresentação da rodada anterior em `qa-editorial-media.md`, que permanece como histórico.

## Autorização posterior

Após a avaliação do preview, o usuário autorizou expressamente commit, push, PR, merge após CI e deploy no Worker existente. O registro acima descreve o estado anterior à aprovação. A publicação deve usar novo build da main e ser conferida no domínio oficial.

