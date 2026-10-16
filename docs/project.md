# Roberto Farias — Site oficial do autor

**Especificação editorial, criativa e funcional | Proposta de V1 | 15/10/2026**

> **Estado:** documento de direção da Fábrica de Sites, preparado **antes da implementação**. Fatos extraídos da conversa e mídias de Roberto; textos apresentados a seguir são **copy sugerida**, não aprovação formal do autor. A V1 deve ser criada pelo **Codex somente após autorização para implementação**, sem reconstruir decisões a partir do histórico do chat. Ler junto com `docs/source-audit.md`.

## 1. Resumo executivo e limites

**Nome público:** Roberto Farias. **Projeto:** site institucional/autoral para apresentar o escritor, preservar seu percurso e reunir suas obras em endereço próprio. **Objetivo imediato:** dar protagonismo a *Ainda Tenho Estradas*, aproximar o autor do leitor 60+ e permitir consulta sobre aquisição. **Objetivo duradouro:** acervo vivo, capaz de receber novos títulos ao longo dos anos sem recriar o projeto.

Não criar e-commerce na V1: o autor pretende vender por editora e diretamente, mas ainda não confirmou plataforma, checkout, disponibilidade ou preço por obra. Não transformar isso em página puramente institucional sem contato: **o caminho de aquisição, inicialmente por e-mail, precisa ser visível e fácil**.

**O que é confirmado [F]:** origem e trajetória declaradas, títulos/capas, duas obras aprovadas segundo Roberto, terceiro livro em preparação, motivação para escrever, público 60+, interesse em venda, e-mail de contato.

**O que é escolha da Fábrica [E]:** slogan, posicionamento narrativo, ordem de seções, textos reescritos, paleta, tipografia, URLs, layout e componentes propostos.

**O que é pendente [P]:** sinopses oficiais, subtítulo conflitante, preços, links, estoque, domínio, direitos de reuso de vídeos/capas, detalhes bibliográficos e autorização pública do WhatsApp.

## 2. Diretriz estratégica

### 2.1 Tese editorial

**O autor é o vínculo entre as obras.** O visitante não encontra apenas duas capas: encontra o menino de Areias e Afogados, o futebol na Ilha do Retiro, a banda Júpiter 4, o economista da Chesf e a pessoa que, depois da aposentadoria, decidiu compartilhar histórias para encorajar outras a continuarem vivendo.

O site deve equilibrar quatro pilares:

1. **Identidade:** rosto, assinatura e presença de Roberto Farias.
2. **Reconhecimento:** memórias, trabalho, juventude, aposentadoria e novos interesses tratados como experiências humanas comuns, nunca estereótipos de idade.
3. **Legado:** o impulso de escrever após realizar a tríade “ter filhos, plantar uma árvore e escrever um livro”, somado à preocupação com o isolamento de colegas aposentados.
4. **Obras e aquisição:** livros bem apresentados, vídeo como apoio e CTA honesto para descobrir como adquirir.

### 2.2 Posicionamento [E]

**Roberto Farias: escritor pernambucano, economista aposentado e narrador de uma vida que segue em movimento.** A proposta é compartilhar experiências, memórias e reflexões que convidam à participação e ao entusiasmo em qualquer fase, com foco em leitores 60+.

Evitar “guru da longevidade”, “especialista em saúde”, “exemplo de superação” e outros títulos que Roberto não reivindicou ou a fonte não comprova. Não apresentar a ausência de atividades na aposentadoria como falha moral de outras pessoas.

### 2.3 Conexão desejada

**Sentimento inicial:** “Eu me reconheço nesta conversa.”

**Sentimento depois da biografia:** “Esse autor viveu histórias reais; quero ouvir o que tem a dizer.”

**Ação desejada:** explorar os livros, ver a apresentação da obra prioritária, entrar em contato para saber sobre um exemplar.

Linguagem próxima, adulta e sofisticada; sem excesso de frases motivacionais, diminutivos, caricaturas de idosos ou promessas de rejuvenescimento.

### 2.4 Públicos de trabalho [E, derivados da fala sobre 60+]

- **Primário:** pessoas de 60 anos ou mais que se interessem por memória, qualidade de vida, vida social, aposentadoria, curiosidade e novos projetos.
- **Secundário:** leitores em transição de vida, adultos próximos à aposentadoria, familiares que procuram leituras significativas para presentear, leitores de relatos biográficos.
- **Acesso:** algumas pessoas chegarão por link encaminhado no WhatsApp e podem não ter grande familiaridade com navegação de sites. Interface deve ser direta sem infantilizar.

Esses segmentos são hipóteses editoriais, **não dados de audiência comprovados**.

## 3. Arquitetura e escopo da V1

### 3.1 Sitemap

| Endereço proposto | Função | Estado V1 |
|---|---|---|
| `/sobre/` | Biografia completa em capítulos, com registros pessoais e artes simbólicas identificadas. | **Completo** |
| `/contato/` | Formulário reutilizável, WhatsApp confirmado e e-mail. | **Completo** |
| `/` | Site do autor: manifesto, obras, biografia, vida em movimento e contato. | **Completo** |
| `/livros/ainda-tenho-estradas/` | Página editorial de obra prioritária com vídeo e contato. | **Completo** |
| `/livros/viva-seus-60/` | Página futura exclusiva, quando combinada a ampliação e houver conteúdo suficiente. | **Não implementar agora** |
| Outras obras | Inclusão futura, sem URL imaginária nem card vazio. | **Não implementar agora** |

**Justificativa de escopo:** o acordo da conversa é iniciar pelo primeiro livro escolhido por Roberto, mostrar o site como endereço do autor e depois ampliar individualmente cada nova obra. A home deve **apresentar os dois títulos conhecidos** sem esconder o segundo ou inventar uma página comercial para ele.

### 3.2 Menu global

Marca textual **ROBERTO FARIAS**, com descritor discreto `Escritor`. Itens `Início`, `Livros`, `Minha história`, `Vida em movimento`, `Contato`. Na página de livro, `Livros` retorna à seção de obras da home. A navegação mobile deve ser simples, com menu claro e área de toque generosa; sem megamenu nem efeitos especiais.

### 3.3 Percurso narrativo home

| Ordem | Seção | Objetivo | Protagonismo visual |
|---|---|---|---|
| 1 | **Hero / Assinatura** | Apresentar o escritor e o valor de seguir escrevendo a própria história. | Nome, H1 editorial e **retrato real do autor**; deixar a capa para a seção seguinte, evitando repetição. |
| 2 | **Uma nova fase** | Abrir conexão com o leitor 60+ sem pregação. | Uma ideia forte, poucos parágrafos e respiro. |
| 3 | **Obra em destaque** | Tornar *Ainda Tenho Estradas* reconhecível e clicável. | Capa inteira, título e CTA para página exclusiva. |
| 4 | **Os livros** | Sinalizar catálogo autoral, incluindo *Viva Seus 60+*. | Duas capas reais e descrições distintas. |
| 5 | **Minha história** | Credibilidade humana: Recife, esporte, música, carreira, escrita. | Retrato genuíno, texto editado e fatos verificáveis. |
| 6 | **Vida em movimento** | Concretizar a filosofia com imagens, não apenas slogans. | Cavalgada, moto, fotografia antiga da banda com legendas. |
| 7 | **Uma frase de Roberto** | Encerrar reflexão com voz autêntica do escritor. | Tipografia de citação e atribuição correta à mensagem enviada. |
| 8 | **Vídeo da obra** | Permitir conhecer o material promocional. | Player opcional manual, sem autoplay. |
| 9 | **Contato / Aquisição** | Explicar como falar com Roberto sobre os livros sem fingir checkout pronto. | E-mail em CTA destacado. |
| 10 | **Rodapé** | Assinatura, obra, contato e crédito profissional obrigatório. | Simples, discreto, coerente com a linguagem editorial. |

A primeira dobra precisa mostrar em poucos segundos **nome, escritor, motivo de interesse e botão para conhecer obras**. Não iniciar com carrossel de vídeos nem hero visualmente lotado.

## 4. Copy editorial proposta — Home

**Status de todos os textos desta seção: [E] proposta da Fábrica para avaliação**, não transcrição de sinopse oficial. As aspas de Roberto são identificadas à parte. Recomenda-se usá-los integralmente na V1, salvo aprovação de alterações antes da programação. Não substituir por Lorem Ipsum ou IA genérica.

### Header

- Marca: `Roberto Farias`
- Descritor: `Escritor`
- Menu: `Início` · `Livros` · `Minha história` · `Vida em movimento` · `Contato`
- CTA mobile/desktop, se houver espaço: `Conheça os livros`

### Hero

- **Eyebrow:** `ROBERTO FARIAS · ESCRITOR PERNAMBUCANO`
- **H1:** `A vida ainda tem muitas páginas por escrever.`
- **Apoio:** `Depois de uma vida de trabalho, futebol, música e aprendizados, Roberto Farias encontrou na escrita uma nova forma de compartilhar experiências. Histórias que olham para o que passou sem perder de vista tudo o que ainda pode ser vivido.`
- **CTA primário:** `Conheça os livros` → `/#livros`
- **CTA secundário:** `Conheça Roberto` → `/#minha-historia`
- **Microcopy editorial opcional, não citação:** `Memórias, reflexões e novos caminhos.`

### Manifesto

- **Eyebrow:** `A VIDA EM OUTRA FASE`
- **H2:** `Aposentar-se do trabalho não é aposentar-se da vida.`
- **Corpo:** `Há mudanças que alteram a rotina, mas não precisam diminuir nossos horizontes. Cultivar amizades, aprender algo novo, voltar a uma antiga paixão ou simplesmente continuar presente: cada pessoa encontra seu próprio jeito de seguir.`
- **Corpo 2:** `É dessa inquietação que nasce a escrita de Roberto Farias — um convite a olhar para a maturidade com memória, liberdade e disposição para novos capítulos.`

### Obra em destaque

- **Eyebrow:** `OBRA EM DESTAQUE`
- **H2:** `Ainda Tenho Estradas`
- **Corpo:** `A escrita de Roberto nasce das experiências reunidas ao longo da vida e de uma pergunta importante: por que deixar de participar do mundo quando ainda temos tanto para viver e contar? Ainda Tenho Estradas aproxima memória, convivência e novos projetos em uma conversa sobre a continuidade da vida.`
- **Pontos de leitura:** `Memórias e experiências` · `Convivência e novos projetos` · `A vontade de continuar`
- **CTA:** `Conheça a obra` → `/livros/ainda-tenho-estradas/`
- **Nota comercial discreta:** `Para informações sobre aquisição, fale diretamente com o autor.`
- **Não inserir:** subtítulo (`40`/`60`), “já disponível”, preço, data e avaliação de leitores.

### Obras / biblioteca

- **Eyebrow:** `LIVROS DE ROBERTO FARIAS`
- **H2:** `Histórias e reflexões para diferentes caminhos.`
- **Introdução:** `Cada livro abre uma conversa própria. Conheça as obras que Roberto está preparando para compartilhar com seus leitores.`
- **Livro 1:** `Ainda Tenho Estradas`
  - Descrição de card: `Experiências de vida, memória e reflexões sobre continuar descobrindo novos caminhos.`
  - CTA: `Explorar este livro` → página exclusiva.
- **Livro 2:** `Viva Seus 60+ com Saúde e Propósito`
  - Subtítulo **visível na capa:** `Alimentação + Movimento + Fé para sua melhor fase`
  - Descrição de card: `Uma proposta voltada ao público 60+, com atenção à alimentação, ao movimento e à fé nesta fase da vida.`
  - CTA: `Consultar sobre esta obra` → e-mail com assunto específico, ou botão de informação não comercial sem nova rota.
  - Status de card: `Outra obra do autor`, **não** `Disponível`, `Em lançamento` ou `Compre agora`.

### Minha história

- **Eyebrow:** `QUEM ESTÁ POR TRÁS DOS LIVROS`
- **H2:** `Antes das páginas, uma vida inteira de histórias.`
- **Corpo 1:** `Roberto Farias de Azevêdo nasceu no bairro de Areias, no Recife, em 1950. Cresceu em Afogados, numa vila militar, entre as brincadeiras de rua, as pipas que aprendeu a fazer e vender e uma paixão cada vez maior pelo futebol.`
- **Corpo 2:** `A juventude trouxe outras histórias: a emoção de participar de um teste no juvenil do Sport Club do Recife e os encontros musicais da Banda Júpiter 4, na qual foi ritmista. Mais tarde, formou-se em Ciências Econômicas pela UFPE e construiu sua trajetória profissional na Chesf.`
- **Corpo 3:** `Foi depois de muitos caminhos percorridos que a escrita ganhou um significado especial. Ao observar amigos e colegas se afastarem da convivência após a aposentadoria, Roberto sentiu vontade de dividir uma mensagem: chegar a uma nova fase não precisa ser o fim da nossa participação na vida.`
- **Legenda do retrato:** `Roberto Farias, autor de Ainda Tenho Estradas e Viva Seus 60+ com Saúde e Propósito.`

### Vida em movimento

- **Eyebrow:** `HISTÓRIAS FORA DO PAPEL`
- **H2:** `Uma vida feita de encontros, movimento e descobertas.`
- **Apoio:** `O futebol, a música, os passeios e a convivência não são apenas lembranças para Roberto. Fazem parte da maneira como ele conta sua história — e do desejo de continuar participando dela.`
- **Legenda da foto com cavalo:** `Momentos ao ar livre, entre paisagens e novas experiências.`
- **Legenda da moto:** `A disposição de seguir em movimento, em qualquer fase.`
- **Legenda da banda:** `Banda Júpiter 4: Jáder, Luiz Paulo, Roberto Farias e Flávio.`
- **Nota de precisão:** não nomear destinos, datas ou eventos que as fotos não comprovam.

### Frase do autor — voz autêntica

- **Eyebrow:** `NAS PALAVRAS DO AUTOR`
- **Trecho curto, literal da mensagem de 10/10/2026:** `Dá pra sustentar uma vida plena.`
- **Atribuição:** `Roberto Farias · reflexão compartilhada pelo autor`
- **Apoio de contexto [E]:** `Para Roberto, há espaço para o movimento e o repouso, a conversa e o silêncio — sem perder a vontade de viver.`

**Importante:** essa frase foi enviada em mensagem; **não** rotular como “trecho do livro” nem como frase de terceiro.

### Vídeo

- **Eyebrow:** `O LIVRO EM VÍDEO`
- **H2:** `Uma apresentação de Ainda Tenho Estradas.`
- **Apoio:** `Assista ao material de divulgação da obra e conheça a mensagem que Roberto deseja compartilhar.`
- **Ação:** `Assistir ao vídeo` — reproduzir apenas por ação do visitante; sem abrir automaticamente o áudio.
- **Material:** `VID-20261009-WA0030.mp4` (uso sujeito à confirmação de direitos de divulgação).

### Contato final

- **Eyebrow:** `UMA CONVERSA QUE CONTINUA`
- **H2:** `Toda história encontra novos leitores.`
- **Corpo:** `Quer conversar com Roberto ou saber como adquirir um exemplar? Entre em contato diretamente com o autor e consulte as informações atualizadas sobre suas obras.`
- **CTA:** `Escrever para Roberto`
- **Destino:** `mailto:rbrt.farias@gmail.com?subject=Interesse%20nos%20livros%20de%20Roberto%20Farias`
- **Microcopy:** `Atendimento por e-mail. Valores e disponibilidade devem ser consultados diretamente.`

### Rodapé

- **Marca:** `Roberto Farias`
- **Assinatura editorial:** `Histórias vividas. Caminhos por descobrir.` — slogan criado pela Fábrica, não citação.
- **Navegação curta:** `Livros` · `Minha história` · `Contato`
- **Contato:** `rbrt.farias@gmail.com`
- **Crédito obrigatório literal:** `Desenvolvido por Douglas Borges - Smart Local` com link em nova aba para `https://smartlocal.com.br`, `rel="noopener noreferrer"`.
- **Copyright:** `© [ano] Roberto Farias.`; ano atualizado dinamicamente.

## 5. Copy editorial proposta — `/livros/ainda-tenho-estradas/`

### Cabeçalho da obra

- Breadcrumb: `Início / Livros / Ainda Tenho Estradas`
- Eyebrow: `UMA OBRA DE ROBERTO FARIAS`
- H1: `Ainda Tenho Estradas`
- Linha editorial: `As histórias que nos trouxeram até aqui não precisam ser o fim do caminho.`
- Apresentação: `Em Ainda Tenho Estradas, Roberto Farias compartilha uma inquietação que atravessa sua própria trajetória: a vida continua pedindo presença, convivência e curiosidade, mesmo quando os anos e a rotina mudam. A obra nasce de experiências pessoais e do desejo de convidar outros leitores a enxergar possibilidades na maturidade.`
- CTA: `Consultar como adquirir` → e-mail com assunto `Interesse em Ainda Tenho Estradas`.

### Origem da escrita

- Eyebrow: `POR TRÁS DAS PÁGINAS`
- H2: `Por que escrever sobre continuar?`
- Corpo: `A aposentadoria trouxe a Roberto uma pergunta que não saiu da cabeça. Ao ver amigos e colegas se afastarem do convívio social, ele percebeu como algumas pessoas pareciam deixar de viver projetos e interesses que antes lhes davam entusiasmo. Escrever tornou-se sua maneira de abrir uma conversa e lembrar que cada nova fase pode guardar seus próprios caminhos.`

### Três ideias de leitura

- **Título:** `Memórias que acompanham` — `A experiência de quem viveu diferentes papéis, construiu vínculos e aprendeu ao longo do caminho.`
- **Título:** `A importância de permanecer presente` — `Convivência, interesses e participação como partes de uma vida que continua.`
- **Título:** `O que ainda está por vir` — `A possibilidade de imaginar novos projetos sem desvalorizar o que já foi realizado.`

Esses **eixos são interpretação editorial**, derivados das falas do autor e da propaganda; **não** são índice de capítulos nem sinopse oficial.

### Uma motivação pessoal

- H2: `Uma missão realizada. Novos capítulos pela frente.`
- Texto: `A expressão popular de que é preciso ter filhos, plantar uma árvore e escrever um livro acompanhou Roberto como uma espécie de compromisso pessoal. Ao realizar também a escrita, celebrou essa conquista. Mas sua mensagem não termina na missão cumprida: ela continua no desejo de aproveitar a vida e compartilhar experiências.`
- Apoio visual opcional: frase literal curta `Missão cumprida.` identificada como **expressão do autor em conversa**, não promessa de fim de trajetória.

### Vídeo e aquisição

- H2: `Conheça Ainda Tenho Estradas em vídeo`
- Texto de apoio: `Veja a peça de apresentação enviada por Roberto.`
- H2 contato: `Quer saber como adquirir o livro?`
- Corpo: `Escreva ao autor para consultar disponibilidade, condições e opções de compra.`
- CTA: `Falar com Roberto sobre este livro`
- Destino: `mailto:rbrt.farias@gmail.com?subject=Interesse%20em%20Ainda%20Tenho%20Estradas`
- Link de retorno: `Ver todos os livros` → `/#livros`

### Delimitações da página

- Não acrescentar texto alternativo dizendo que o livro está à venda.
- Não publicar o subtítulo conflitante em HTML (a capa original preserva o texto existente na imagem até recebimento de versão oficial).
- Não citar editora nominalmente como publicadora definitiva sem confirmação do registro da obra; logotipo que integra o vídeo pode permanecer dentro do material original, se liberado.
- Não colocar resenhas, notas em estrelas, “leitores recomendam”, depoimentos, capítulos, índice, páginas ou ISBN fictícios.

## 6. Interações e conversão

**Conversão primária V1:** consulta de aquisição por e-mail; os links comerciais diretos serão inseridos assim que o autor enviar URLs específicas e regras de disponibilidade. **Conversão secundária:** conhecer trajetória e obras.

### Links e mensagens

- Contato geral: `mailto:rbrt.farias@gmail.com?subject=Interesse%20nos%20livros%20de%20Roberto%20Farias`.
- Livro em destaque: `mailto:rbrt.farias@gmail.com?subject=Interesse%20em%20Ainda%20Tenho%20Estradas`.
- Segundo livro: `mailto:rbrt.farias@gmail.com?subject=Interesse%20em%20Viva%20Seus%2060%2B`.
- Se quiser predefinir corpo do e-mail, sugerido: `Olá, Roberto! Conheci seu site e gostaria de informações sobre o livro [título], disponibilidade, valor e entrega.` — **mensagem da interface, não fala do autor**.
- Não exibir WhatsApp do contato de origem como número de vendas sem autorização expressa. Se depois confirmado, incluir botão flutuante no canto inferior direito em todas as páginas com texto **específico para Roberto e a obra**, conforme padrão da Fábrica.
- Não embutir checkout, botões de marketplaces sem URL nem sistema de pagamento na primeira entrega.
- Não oferecer newsletter ou cadastro de visitantes sem necessidade e tratamento de dados definido.

### Atualização das obras

Concentrar informações de livros em estrutura facilmente expansível (ex.: dados tipados em `src/data/books.ts`): `slug`, `titulo`, `subtituloConfirmado?`, `descricaoEditorial`, `capa`, `video?`, `statusEditorial`, `contato`, `urlCompra?`, `isbn?` etc. Valores desconhecidos devem ficar ausentes, **não preenchidos com inventados**. Na home, apresentar somente títulos existentes e confirmados.

A interface futura deve permitir trocar consulta por “Comprar na editora”/“Comprar com o autor” **somente** quando URLs e condições efetivas forem fornecidas.

## 7. Direção criativa — identidade do autor, não template de envelhecimento

### 7.1 Conceito visual [E]

**“Memórias em movimento”**: um site com atmosfera de livro bem editado e revista literária contemporânea, mas vivo. O passado aparece nas imagens e nos relatos; o presente aparece no rosto, nos passeios, no vídeo e na linguagem. A direção segue **a capa de *Ainda Tenho Estradas*** como primeiro código visual, sem obrigar as próximas obras a copiar sua identidade.

Evitar: clichês de banco de imagens de pessoas idosas, cartões com ícones genéricos de “saúde”, interface com cara de portal de aposentadoria, excesso de sépia decorativo, fundos pesados, animações de estrada, scrapbook carregado, 3D, glassmorphism, parallax, estética de panfleto de lançamento e saturação de banners.

### 7.2 Paleta proposta

| Token | Cor | Papel |
|---|---|---|
| Papel quente | `#F7F2E8` | Base editorial predominante. |
| Branco marfim | `#FFFCF7` | Áreas de leitura e cartões. |
| Grafite | `#25241F` | Texto e elementos de contraste. |
| Ferrugem | `#B64F2A` | Destaques, CTAs, relação com a capa da primeira obra. |
| Sálvia | `#69775F` | Contraponto sutil associado à segunda obra, sem mudar identidade global. |
| Areia | `#D8C9B8` | Linhas, detalhes e divisões. |

Cores são **proposta**, sujeita a teste de contraste real. Ferrugem como cor de botão pede texto branco somente com contraste validado; ajustar tom se necessário.

### 7.3 Tipografia e composição

- **Títulos:** serif editorial expressiva (ex.: *Cormorant Garamond* para títulos grandes, com fallback Georgia) se preservar legibilidade; não usar versão excessivamente fina ou itálica para conteúdo longo.
- **Corpo e navegação:** sans de leitura simples e reconhecível (ex.: *Source Sans 3* ou equivalente), espaçamento confortável.
- **Texto:** alvo de 18–20 px em desktop e pelo menos 17–18 px no celular para leitura corrida; altura de linha aprox. 1,6.
- **Hierarquia:** poucos títulos grandes, parágrafos curtos e respiros suficientes; largura de texto 65–75 caracteres quando possível.
- **Grid:** container aprox. 1180–1240px, leitura principal mais estreita, composição assimétrica moderada em desktop e empilhamento cuidadoso em mobile.
- **Capas:** mostradas completas, proporcionais e com texto original intocado (`contain`), nunca esticadas nem cortadas para caber em hero.
- **Fotografias:** crop leve apenas para melhorar composição; privilegiar rosto do autor, fotos reais e movimento sem falsificar contexto.
- **Motion:** microtransições suaves e opcionais; respeitar `prefers-reduced-motion`. Sem autoplay de carrossel ou vídeo.

### 7.4 Tratamento específico de páginas

- **Home:** identidade editorial neutra aquecida. **Hero centrado no nome e retrato real de Roberto**; a capa de *Ainda Tenho Estradas* ganha protagonismo na seção da obra em destaque, e reaparece apenas em miniatura no catálogo. Seção biográfica pode usar composição tipográfica/memorial sem duplicar o mesmo retrato; galeria de vida com fotos e legendas.
- **Página da primeira obra:** presença mais expressiva do ferrugem, capa como objeto principal, intro bem legível, vídeo promocional em moldura simples.
- **Segunda obra na home:** manter verde, título e três eixos visíveis, sem transplantar toda a home para identidade verde. A futura página dessa obra poderá ter tratamento próprio quando contratada/adicionada.

## 8. Plano de assets — fonte, slot e instrução

**Nesta etapa somente especificar.** O pacote original do WhatsApp é a origem e **precisa estar acessível ao Codex na etapa de assets/implementação**; não usar as imagens recriadas, comprimidas ou recortadas do site gerado indevidamente como fonte primária. Tratamento e integração ocorrerão no momento de produção da V1 pelo Codex/agente de assets.

| Slot da V1 | Fonte original | Proporção/uso | Instrução |
|---|---|---|---|
| Capa obra principal | `IMG-20261009-WA0031.jpg` | Vertical aprox. 2:3 | Usar inteira e em alta resolução disponível; **não refazer nem ocultar subtítulo embutido**; manter conflito documentado. |
| Miniatura segunda obra | `IMG-20261009-WA0028.jpg` | Vertical de livro | Recorte geométrico da foto para retirar mesa/envelope, sem distorcer texto/capa. Se resolução for insuficiente, solicitar arte oficial à editora depois. |
| Retrato autêntico autor | `IMG-20261009-WA0019.jpg` | Vertical/4:5 | Recortar somente a fotografia central, evitando moldura e frase decorativa. Proteger rosto no mobile. |
| Galeria de vida — cavalgada | `IMG-20261009-WA0021.jpg` | Preferência 4:5 | Roberto a cavalo, crop com sujeito e contexto, sem alegar evento ou local. |
| Galeria de vida — moto | `IMG-20261009-WA0023.jpg` | Preferência 4:5 | Retrato real na moto; não substituir pela montagem `WA0020`. |
| Galeria de vida — música | `IMG-20261015-WA0016.jpg` | Horizontal aprox. 4:3 | Fotografia histórica da Júpiter 4; legenda com quatro nomes enviados por Roberto. |
| Vídeo obra 1 | `VID-20261009-WA0030.mp4` | Vídeo vertical original | Player manual, poster legível extraído de frame adequado, peso otimizado, sem alteração de mensagens da peça. |
| Vídeo obra 2 (uso opcional na home) | `VID-20261009-WA0015.mp4` | Vídeo vertical | Evitar dois players longos concorrentes; incluir somente se agregar à leitura e não atrasar página. |
| Identidade/favicon | Nome autoral / monograma `RF` | SVG/PNG futuros | Criar monograma tipográfico coerente, **não fingir que é logotipo oficial existente**. |
| OG do site e livro | Capa + fotografia + tipos | Social aprox. 1200×630 | Composição limpa, título e nome, sem inventar selo de editora, venda ou data. |

**Cortes para mobile:** se rosto/capa não couberem juntos, priorizar texto legível e reposicionar imagem abaixo; **nunca** sacrificar capa para um efeito visual. Fotos serão otimizadas para WebP/AVIF quando conveniente, com originais preservados no acervo de produção. Não usar posters `IMG-20261015-WA0013/14` como depoimento verdadeiro, nem caricaturas como fotografias.

### Direitos e veracidade

Material enviado pelo próprio autor pode ser usado para compor prévia sob sua solicitação. Antes de publicação, confirmar autorização de exibição dos vídeos publicitários, fotografias de terceiros (banda) e artes da editora. Não criar imagens geradas representando Roberto, amigos ou locais de sua vida como se fossem registros autênticos. Imagens conceituais são possíveis somente se necessário, identificáveis como ilustração — **a V1 já tem mídia pessoal suficiente e não precisa delas como protagonista**.

## 9. SEO editorial e técnico

**Intenção de busca:** nome do autor, títulos das obras e temas associados a maturidade, memórias e vida ativa, sem apelar a alegações clínicas.

**Home**
- `title`: `Roberto Farias | Escritor e autor de Ainda Tenho Estradas`
- `description`: `Conheça Roberto Farias, escritor pernambucano, sua trajetória e obras sobre experiências de vida, maturidade e novos caminhos. Explore os livros do autor.`
- H1: `A vida ainda tem muitas páginas por escrever.` com nome do autor em contexto visual/semântico próximo.

**Livro 1**
- `title`: `Ainda Tenho Estradas | Livro de Roberto Farias`
- `description`: `Conheça Ainda Tenho Estradas, de Roberto Farias. Experiências, memórias e reflexões sobre a vontade de continuar vivendo novos capítulos.`
- H1: `Ainda Tenho Estradas`.

**Keywords de planejamento (sem keyword stuffing):** `Roberto Farias escritor`, `Roberto Farias livros`, `Ainda Tenho Estradas`, `Viva Seus 60+ com Saúde e Propósito`, `livros para leitores 60+`.

**Requisitos:** metadata exclusivas por rota e efetivamente interpretáveis por indexadores/compartilhamentos; canonical do domínio oficial quando recebido; OG/Twitter com imagem real; `robots.txt`, `sitemap.xml` com URLs definitivas; links internos claros; `alt` descritivo; `Person` e `Book` em JSON-LD **apenas com atributos verificados**. Não criar `Offer`, `Review`, `AggregateRating`, ISBN, data/quantidade de venda ou `sameAs` falsos.

**Observação de arquitetura:** uma SPA que mostra o mesmo `<title>`/OG para todas as rotas não satisfaz a necessidade de compartilhar cada livro com título/imagem próprios. Codex deve escolher a solução menos complexa que produza metadata por página no build/hosting efetivo (pré-renderização estática ou alternativa apropriada), sem introduzir SSR pesado por rotina. Documentar a decisão no repositório.

## 10. Stack, organização e deploy — requisitos para o Codex (não execução nesta etapa)

- Base preferida: **React + TypeScript + Vite + Tailwind CSS**, pacote **pnpm**, lock `pnpm-lock.yaml`.
- Site com conteúdo majoritariamente estático. Evitar CMS, servidor customizado, banco de dados e checkout na V1, porque hoje não há necessidade comprovada.
- Estrutura recomendada (somente diretórios efetivamente utilizados): `src/components/sections`, `src/components/ui` se reaproveitável, `src/pages`, `src/data/books.ts`, `src/lib`, `public`, `docs`.
- **Obrigatório:** seções principais e seções distintas de página de livro em arquivos `.tsx` próprios. `App.tsx`/páginas principalmente compõem; dados, lógica e UI separados quando fizer sentido. Props tipadas, nomes claros, comentários úteis, sem `any` injustificado nem boilerplate Lovable.
- Rotas estáveis `/` e `/livros/ainda-tenho-estradas/`, com regras corretas de hospedagem para refresh de páginas internas.
- Deploy preferencial Vercel em hospedagem estática/portável, mas **domínio ainda não informado**. `pnpm build` → output `dist/` salvo escolha técnica fundamentada e documentada para SEO por página. Sem API nem variável secreta inicialmente.
- Configurar SEO e deployability desde a V1, não só depois do preview.
- Git: uma branch de implementação, validação/refino nela, PR após autorização; não trabalhar mudanças substanciais na `main` e não fazer merge sem ordem.

## 11. Acessibilidade, performance e qualidade editorial

- Responsivo 320, 360/375, 768, 1024, 1440px sem corte de palavras/capas, overflow horizontal ou CTA sobreposto.
- Legibilidade real para público 60+: contraste suficiente, corpo confortável, foco e navegação por teclado, botões pelo menos 44×44px, espaços adequados, `aria-label` claros.
- Nada deve depender de hover, movimento ou áudio; vídeos sem autoplay, com `controls`, poster e carga adiada. Considerar legendas/transcrição **quando conteúdo de áudio tiver sido verificado**, sem fabricar falas.
- Evitar animação automática, carrossel rápido, fundos de pouca leitura, cinza claro para texto extenso, links disfarçados ou tamanho mínimo de fonte.
- Otimizar imagens, largura, posters e carregamento sem perder qualidade dos rostos/capas. Testar especialmente hero e primeiro livro nos smartphones.
- Crédito no rodapé **em toda página** com texto exato e link correto.
- O site deve revelar conteúdo e links básicos mesmo para agentes de busca que não executem JS, quando adotada solução de renderização estática.

## 12. Pendências com classificação de impacto

### Bloqueiam afirmações comerciais precisas e/ou publicação definitiva, mas **não bloqueiam design e V1**

1. **Subtítulo correto de *Ainda Tenho Estradas*:** capa diz “depois dos 40”, vídeo “depois dos 60”.
2. **Preço e logística:** R$37,00 corresponde a qual obra? Frete, pagamento, envio, estoque, disponibilidade? Não exibir preço antes disso.
3. **Links oficiais:** editora, Amazon ou outro marketplace. Não supor contratos/estoque.
4. **Domínio:** não presumir endereço definitivo, canonical absoluto e produção SEO final.
5. **Aprovação dos textos e uso das mídias:** conferir com Roberto o uso dos materiais da editora e da fotografia da banda.
6. **Contato de venda por WhatsApp:** número da conversa não é autorização para uso público; confirmar se for canal desejado.

### Não bloqueiam a primeira apresentação visual

- Sinopses completas oficiais, ISBN, ano/editoras registrados, número de páginas, formato e classificação editorial.
- Endereços oficiais das redes sociais.
- Arquivo original sem cenário da capa de *Viva Seus 60+*.
- Certificados que prometeu enviar em 14/10.
- Dados e capa da terceira obra.
- Texto integral autenticado/legendas dos vídeos.

**Na primeira validação com Roberto, consolidar essas questões em uma única rodada curta, sem interrogatório de doze perguntas repetidas.**

## 13. Critérios de aceite da V1 — orientação para o momento de implementação

- Ao abrir, o visitante entende imediatamente que o site é **do escritor Roberto Farias** e reconhece seus livros.
- O centro emocional é sua história, não uma coleção de pôsteres ou um checkout fictício.
- *Ainda Tenho Estradas* possui página aprofundada e capa real; *Viva Seus 60+* aparece com título e identidade corretos, sem página adicional nem data de lançamento inventada.
- A biografia respeita Recife/Afogados, música, futebol, UFPE, Chesf e motivação para escrever. Não inventa carreira profissional de futebol ou currículo de especialista em saúde.
- Fotografias são reais quando apresentadas como biografia; artes conceituais não disfarçadas de documentação; vídeos opcionais funcionam sem autoplay.
- Copy editorial, CTAs, links, eventos e textos comerciais são os deste documento ou revisões explicitamente aprovadas; não alegar venda imediata.
- Header, Hero, Manifesto, FeaturedBook, Works, Biography, LifeGallery, Quote, Video, Contact e Footer **não são um arquivo JSX único**; o mesmo vale para blocos principais da página de livro.
- Checagem feita no desktop e mobile, teclado, leitor, links, metadados por rota, canonical ao receber domínio, deploy real, typecheck, lint, build e rota interna acessível diretamente.
- Crédito obrigatório no rodapé. WhatsApp flutuante apenas se canal autorizado; se ativado, mensagem específica e acessibilidade.
- Nenhum `commit`, `push`, `PR` ou `merge` antes da solicitação correspondente.

## 14. Handoff e estado do trabalho

**ENTREGUE nesta etapa:** auditoria do WhatsApp, curadoria, tese estratégica, públicos de trabalho, sitemap, textos propostos, direção criativa, inventário de assets e slots, UX/CTA, SEO, arquitetura e pendências.

**NÃO EXECUTADO nesta etapa:** criação de componentes, geração/edição de assets finais, preview renderizado, build, deploy, Git, QA técnico ou validação visual do site real. Não confundir documento pronto para handoff com site implementado.

**Próximo marco:** revisão estratégica e autorização para a implementação pelo Codex. A especificação é autossuficiente quanto às decisões; o **arquivo original de mídias ainda precisa ser entregue à etapa de assets/Codex**. Nenhuma parte da implementação depende de reler o histórico do chat, mas os arquivos de mídia precisam existir fisicamente no projeto.

## 15. Atualização autorizada em 15/10/2026 — contatos e escopo

Na rodada posterior de refinamento, o usuário autorizou WhatsApp como conversão principal e confirmou expressamente o número público +55 81 99952-2510. Também solicitou formulário reutilizável na Home/Contato, rota `/contato/` e envio real por função serverless, condicionado às credenciais externas. Essas decisões substituem os limites anteriores de canal e formulário nas seções 3, 4, 6 e 10; as restrições factuais e comerciais restantes continuam válidas. Ver `docs/contact-integration.md` e o README para estado de configuração, novas mensagens de interface e pendências reais. Nenhuma publicação foi autorizada.


## 16. Direção consolidada — Uma vida em capítulos (15/10/2026)

A solicitação posterior de redesign autoriza imagens simbólicas e composições artísticas, identificadas como ilustração, e uma nova página Sobre. Esta seção substitui as restrições visuais anteriores que impediam essas artes e atualiza a arquitetura; fatos e limites comerciais continuam regidos pela auditoria. O resultado permanece proposta da Fábrica para avaliação, sem aprovação formal do autor ou publicação.

O conceito é **Uma vida em capítulos**. Superfícies marfim, grafite verde, ferrugem e sálvia; Cormorant Garamond expressiva e Source Sans 3 para leitura. O Hero combina horizonte simbólico, título em três linhas e retrato autêntico em moldura, preservando a distinção entre paisagem artística e acervo pessoal. No mobile, título e CTAs precedem o retrato e o apoio mais longo. As entradas de título, máscara do retrato e CTAs usam o sistema nativo de motion já implementado.

A Home apresenta quatro marcos: Recife e infância (1950 confirmado), juventude/futebol/música, UFPE/Chesf e aposentadoria/escrita. No desktop, imagem sticky com crossfade e leve escala acompanha o capítulo cuja entrada atravessa 48% da viewport; há um único estado ativo, numeração, legenda e progresso. Sem controle da rolagem. No mobile, imagens integradas aos quatro textos, sem sticky. Com movimento reduzido, a troca é imediata. Sem JavaScript, todos os capítulos e suas imagens permanecem sequenciais.

A rota `/sobre/` desenvolve origens, juventude/futebol, música/Banda Júpiter 4, formação/Chesf, aposentadoria/novas experiências e motivação para escrever, seguida das obras e contato. Copy narrativa derivada apenas das declarações auditadas, centralizada em `src/data/about.ts`. Não há datas adicionais, cargos, carreira profissional no futebol ou especialidade médica presumidos. O menu O autor, o rodapé e a timeline conduzem à biografia completa.

Ainda Tenho Estradas recebe cenário simbólico de estrada e capa íntegra em maior escala na Home e na página individual. Viva Seus 60+ possui composição própria em sálvia, com a imagem recebida integral, sem inventar arte plana da capa. O catálogo continua preparado para novos dados em `src/data/books.ts`, sem cards futuros vazios. A página do livro alterna cenário, texto editorial, ideias de leitura, composição simbólica de escrita, vídeo manual e consulta ao autor.

As três artes geradas não retratam Roberto, posses, manuscritos, eventos ou destinos visitados. Origens e prompts: `docs/art-direction-assets.md`. Originais recebidos e capas preservados; fotos de banda, cavalo, moto e retrato mantêm legendas factuais. Nenhuma nova dependência de motion ou servidor foi adicionada. As quatro rotas têm HTML completo no build, metadados próprios e dados estruturados factuais; o domínio permanece pendente, mantendo a prévia noindex. Contatos, formulário, função de e-mail e WhatsApp confirmado permanecem conforme seção 15.
## 17. Acabamento visual final autorizado — 15/10/2026

O usuário aprovou a direção criativa para continuidade e solicitou somente acabamento, preservando conteúdo, timeline, motion, rotas, contatos, SEO e deploy. O Hero passa da moldura para uma máscara vetorial manual da silhueta, aplicada em CSS à fotografia original intacta. A paisagem continua identificada como ilustração; não há geração de rosto nem nova fotografia. O alt descreve o retrato do acervo sem atribuir ao cenário composto um registro documental.

Passagens da Home usam as cores do papel/sálvia em gradientes curtos, alinhamentos e intervalos ajustados. O catálogo passa a exibir capas compactas, diferenciando consulta resumida, destaque editorial amplo e página individual. A biografia mantém os mesmos capítulos e textos; horizontes, música, novas experiências e escrita recebem escalas e sobreposições pontuais, sem novo conteúdo.

Navegação, legendas, créditos das artes e textos auxiliares foram ampliados; o menu recolhe até 900 px para conservar áreas confortáveis. O vídeo original possui palco escuro com cenário simbólico discreto e botão explícito de reprodução manual; controles nativos permanecem disponíveis, inclusive sem JavaScript. Falha de reprodução mantém alternativa para abrir o MP4. Sem autoplay e sem novas bibliotecas, rotas ou integrações. Resultados e limites da revisão em `docs/qa-final-polish.md`.

## 18. Reprodução da direção visual aprovada — 15/10/2026

A solicitação “Implementação definitiva” substitui as decisões de apresentação das seções 7, 16 e 17 pelas três imagens preservadas em `direção-visual/`. Conteúdo factual continua regido pela auditoria; contatos, timeline, motion, SEO e deploy são reaproveitados. A branch permanece `codex/v1-site-roberto-farias`, sem publicação.

### Mapa de implementação definido antes da reconstrução

| Referência | Cena | Componentes reais |
|---|---|---|
| Histórias e Novos Caminhos | Retrato/litoral, propósito, duas obras | Hero, Manifesto, Works (destaque e catálogo integrados na mesma cena) |
| Home | Memória sticky, álbum, panorama, audiovisual, conversa | Biography, LifeGallery, Quote, Video, Contact |
| Ainda Tenho Estradas | Estrada/capa, papel/bússola, temas | BookHero, WritingOrigin, ReadingIdeas |
| Livro | Vídeo, reflexão/paisagem, citação, consulta, segunda obra | Video, PersonalMotivation, Quote, BookAcquisition, OtherBook |
| Uma Vida em Capítulos | Retrato, origens, futebol/música | AboutHero, AboutOrigins, AboutYouth (incorpora música) |
| Sobre | Formação, trabalho, novas experiências, escrita, obras | AboutEducation, AboutCareer, AboutNewPaths, AboutWriting, Works |
| Todas | Navegação, assinatura e contato confirmado | Header, Footer, FloatingWhatsApp |

As referências não autorizam copiar a criança fictícia, a capa alterada da segunda obra, frases não documentadas, promessas comerciais ou fotos de instituições não fornecidas. Usar retrato atual do acervo no álbum de origens, capas integrais originais e citação autêntica. Formulários, player vertical e textos completos exigem alturas maiores do que os mockups; legibilidade prevalece sobre redução artificial do conteúdo.

Assets planejados: composição artística do retrato original no litoral; estrada panorâmica com primeiro plano rochoso; papel/caderno/bússola; ilustração de formação; cenário conceitual hidrelétrico. Fontes e prompts serão registrados em `art-direction-assets.md`. Fotos de banda, cavalo e moto continuam documentais, sem alteração de identidade. Nenhuma screenshot de referência será usada como interface ou fundo integral.
