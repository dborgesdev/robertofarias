# Assets da direção visual aprovada

## Uso e procedência

Rodada de 15/10/2026 baseada nas três referências preservadas em `direção-visual/`. Seis assets produzidos com a ferramenta **image_gen integrada**, sem API externa ou imagens de banco. Retrato: edição/composição a partir de `public/images/roberto-retrato-web.webp`, autorizada expressamente pelo usuário. Demais cenas: ilustrações conceituais. Nenhuma representa um evento, manuscrito pessoal, campus real ou instalação da Chesf.

Os arquivos recebidos de Roberto (capas, fotografias, vídeos) não foram modificados. O retrato original continua disponível no álbum e no vídeo. A edição artística fica identificada nos Heroes e no alt. A criança fictícia, capas recriadas, assinaturas e citações não confirmadas das referências não foram reutilizadas.

| Nome | Fonte de manutenção | Derivados públicos | Uso |
|---|---|---|---|
| portrait | `assets/art-source/editorial-portrait.png` | `public/images/editorial-portrait-{768,1536}.webp` | Home e Sobre, composição do retrato com litoral |
| paper | `assets/art-source/editorial-paper.png` | `public/images/editorial-paper-{768,1536}.webp` | Propósito, introdução do livro e textura editorial |
| road | `assets/art-source/editorial-road.png` | `public/images/editorial-road-{768,1536}.webp` | Obras, Hero do livro, panorama, vídeo e reflexões |
| study | `assets/art-source/editorial-study.png` | `public/images/editorial-study-{768,1536}.webp` | Formação, desenho simbólico explicitamente distinto da UFPE |
| dam | `assets/art-source/editorial-dam.png` | `public/images/editorial-dam-{768,1536}.webp` | Trabalho, paisagem conceitual explicitamente distinta de instalação da Chesf |
| writing | `assets/art-source/editorial-writing.png` | `public/images/editorial-writing-{768,1536}.webp` | Escrita, timeline e contato |
| coast | `assets/art-source/coast.png` | `public/images/symbolic-coast-{640,960,1536}.webp` | Horizonte do álbum e timeline; arte da rodada anterior ainda utilizada |

WebP qualidade 84 nas seis novas cenas, larguras 768/1536 com proporção preservada (aprox. 16:9); `srcSet`, dimensões explícitas e lazy loading fora do Hero. Horizonte anterior: qualidade 80, proporção 3:2. CSS usa fundos locais nas texturas decorativas. Capas em HTML, sem rasterizar textos da interface: volume criado por perspectiva e sombra CSS, sem alterar arte nem proporções. Caveat é fonte local decorativa, nunca assinatura atribuída ao autor.

As artes anteriores `road.png` e `desk.png` e seus seis derivados foram removidos após substituição e verificação das referências. Não eram originais do cliente. Não houve uso das screenshots aprovadas como fundos de página.

## Prompts finais — ferramenta integrada

### portrait — edição da fotografia original

Use case: identity-preserve / compositing. Edit the provided real portrait into a cinematic panoramic website hero photograph, 1536x864 landscape. Preserve EXACT recognizable face, age, grey moustache, receding grey hair, wrinkles, skin texture, eye shape, smile and blue patterned shirt of this specific real man Roberto. Do not beautify, replace or invent a lookalike. Keep the face orientation from source. Position his bust large at 65% horizontal center, head at upper third, shoulders cut by bottom edge. Background: coastal Brazilian city and curving ocean shore at warm golden sunset, distant buildings along shore, dramatic blue-grey clouds, sun at far right; natural dark green foliage framing far left bottom and top. Cohesive photographic compositing with realistic subtle golden rim illumination and consistent depth, no cutout halo. Left 43% mostly dark coast and shadowed clouds with clean space for HTML text. Rightmost horizon luminous. Realistic editorial photographic finish, rich forest greens, muted blue, amber sunset. NO TEXT, no lettering, no logos, no frames, no UI. This is an explicitly artistic composition, not a documentary travel photo.

### paper

Use case: photorealistic-natural. Produce an exceptionally detailed panoramic editorial still life photograph, 1536x864, for literary website purpose section. An aged cream paper notebook with illegible faded ink handwriting and a black fountain pen enters cropped from far LEFT EDGE, antique brass compass resting on warm rock in RIGHT THIRD, small sunlit green leaves around right upper and lower corners, softly blurred golden natural background at far right. Middle 45% must be pale warm ivory parchment with very subtle authentic paper fibers, mostly clean quiet space where real HTML heading/body will be overlaid. Natural feathered blending from notebook left through cream paper to compass right, beautiful realistic natural light, dimensional tactile paper, muted terracotta and green accents. No readable writing, no quotes, no logos, no UI, no people. This is symbolic editorial art, not someone's real personal possessions. Objects must feel richly photographic, not vector clipart.

### road

Use case: photorealistic-natural. Cinematic landscape website backdrop 1536x864. A winding road makes a graceful S curve through lush dark green coastal hills at sunset, ocean and distant headlands to right, dramatic blue-grey and amber clouds, low warm sun at far right. Rough flat stone ledge spans foreground bottom, suitable to place real separate book covers on it in HTML. Foliage frames left edge and lower right. Deep dark forest greens and charcoal on left 45%, light golden horizon upper right. Rich photographic depth, realistic atmosphere, editorial fine art landscape. No people, NO BOOKS, no cars, no signs, no text, no UI, no watermark. Scene is conceptual landscape, not specific identifiable place. Leave center/right midground sufficiently calm to display two book covers.

### study

Use case: illustration-story. Wide 1536x864 editorial art for an author's university education chapter. Antique ivory paper background, subtle fiber and aged edges. Right half shows a beautifully detailed graphite and sepia architectural drawing of a generic Brazilian university courtyard with shaded colonial arcades, books and palm trees, blending into photographic golden foliage at right border. Left half mostly clean softly textured parchment for real HTML copy. Elegant heritage journal aesthetic, delicate pencil lines and realistic paper shadows. No letters, no university logos or recognizable specific institution, no people. This must look like symbolic illustrated learning, not documentary evidence of a campus.

### dam

Use case: photorealistic-natural. Wide panoramic 1536x864 cinematic illustration for a retired energy-company economist biography. Left half a generic large hydroelectric dam spillway, white falling water, green hills and blue river in foreground. Right half deep dark green forest in atmospheric shadow with low contrast, space for HTML copy. Golden sunset glancing over water and concrete. Rich sophisticated editorial photograph aesthetic, not dramatic catastrophe, no people, no signs, no text, no logos. This is a conceptual landscape, do not depict a named or recognizable specific dam or imply it documents a real workplace.

### writing

Use case: photorealistic-natural. Panoramic 1536x864 literary editorial website backdrop. A tactile ivory paper surface fills entire frame. On the far RIGHT third: old cream handwritten notebook on a dark wooden desk, a beautiful black fountain pen angled diagonally, softly shadowed olive-green foliage overhanging upper right corner, layered paper edges and a discreet brass clip. Elegant natural window sunlight, realistic fibers, antique faded ink abstract illegible cursive marks, no readable phrases or signatures. LEFT 60% calm warm pale cream lightly textured paper with generous empty space for HTML text/form; blend objects and desk softly into this paper background with feathered light. Warm ivory, sepia and muted forest green, sophisticated and detailed. No compass, no people, no books with covers, no UI or logos. Symbolic scene, not author's actual manuscript.

### coast — arte anterior conservada

Use case: photorealistic-natural. Asset type: symbolic background for an elegant Brazilian writer website, NOT a documentary photograph. Create a cinematic ultra-wide 3:2 landscape of a tranquil tropical ocean horizon seen from a coastal overlook, gentle morning waves, distant hazy coastline, a poetic quiet atmosphere with natural warm sunlight, subtle silver sage and deep ocean blue, restrained fine photographic grain. Broad quiet sky occupying upper third, ocean movement in lower third, open visual space at left for independently coded editorial typography. No people, no buildings, no recognizable landmarks, no text, no books, no logos, no watermark. This is an atmospheric conceptual illustration of horizons and possibilities; do not depict a specific location or imply an author's travels.
