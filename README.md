# Academia Bio Forma

Site institucional da Academia Bio Forma, em Chã de Alegria (PE). Apresenta a academia, suas modalidades, instrutores, planos, depoimentos e artigos sobre atividade física e Jiu-Jitsu.

## Conteúdo e recursos

- Página inicial responsiva, com carrossel automático de imagens e chamada para contato pelo WhatsApp.
- Seções de apresentação, modalidades, planos, instrutores, depoimentos, artigos e contato.
- 14 páginas de conteúdo em `conteudos/`, cada uma com título, descrição e informações próprias.
- Menu adaptado para dispositivos móveis, botão de voltar ao topo, animações de entrada e tela de carregamento.
- Aviso visual quando o navegador detecta perda de conexão. A página 404 personalizada trata endereços que não existem.
- Metadados para mecanismos de busca e compartilhamento, dados estruturados da academia, sitemap e regras para robôs.
- Folhas de estilo mantidas em SCSS (`css/style.scss`) e CSS publicado (`css/style.css`).

## Estrutura

```text
.
├── 404.html                 # Página personalizada para endereços inexistentes
├── index.html               # Página inicial do site
├── robots.txt               # Regras de rastreamento e endereço do sitemap
├── sitemap.xml              # Endereços públicos para descoberta pelos buscadores
├── conteudos/               # Páginas de modalidades e artigos
├── css/
│   ├── style.scss           # Fonte SCSS dos estilos
│   └── style.css            # Estilos carregados pelo site
├── images/                  # Logotipos, banners, fotos e ícones
└── js/
    └── script.js            # Menu, controles de rolagem, avisos e carrosséis
```

## Tecnologias e dependências

- HTML, CSS, SCSS e JavaScript sem framework de aplicação.
- [Swiper 7.4.1](https://swiperjs.com/) para os carrosséis, servido pelo jsDelivr com versão fixa e SRI (integridade do recurso).
- Font Awesome 5.15.4 para ícones e Google Fonts (Nunito) no SCSS. Esses recursos externos dependem de conexão.

Os estilos publicados ficam em `css/style.css`. Se alterar o SCSS, compile-o para atualizar o CSS carregado pelo site. O projeto não inclui configuração de compilação SCSS; use uma instalação de Sass disponível no seu ambiente, por exemplo:

```bash
sass css/style.scss css/style.css
```

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta raiz com um servidor HTTP local. Um servidor HTTP é preferível para testar recursos, rotas e comportamento semelhante ao deploy estático.

## Publicar na Netlify

O domínio informado para o projeto é `https://academiabioforma.netlify.app/`.

1. Envie os arquivos do projeto ao repositório Git conectado à Netlify.
2. Configure o diretório publicado como a raiz deste projeto, onde estão `index.html`, `404.html`, `robots.txt` e `sitemap.xml`.
3. Como é um site estático, não é necessário comando de build. Se a Netlify exigir uma pasta de publicação, use a raiz (`.`).
4. Após o deploy, confira a página inicial, uma página dentro de `conteudos/`, `/404.html`, `/robots.txt` e `/sitemap.xml`.
5. Cadastre o domínio no Google Search Console e envie `https://academiabioforma.netlify.app/sitemap.xml`.

A Netlify reconhece `404.html` como página personalizada para rotas inexistentes em sites estáticos. Outras hospedagens podem exigir configuração própria para servir essa página com status HTTP 404.

## SEO e endereço público

As URLs canônicas, metadados sociais, dados estruturados, `robots.txt` e `sitemap.xml` usam o domínio `academiabioforma.netlify.app`. Se o domínio mudar, atualize essas referências em `index.html`, nas páginas de `conteudos/` e em `robots.txt`/`sitemap.xml`.

## Conexão e funcionamento offline

O aviso de conexão usa os eventos `online` e `offline` do navegador (`navigator.onLine`). Esses sinais indicam o estado de conectividade reportado pelo dispositivo e não garantem que a internet ou um serviço específico esteja acessível. Se não houver conexão antes de abrir o endereço, o navegador pode mostrar sua própria página de erro; uma página do site só pode aparecer se já estiver carregada ou se for implementado um service worker com recursos armazenados em cache.

## Pontos de manutenção

- O formulário “Novidades” é apenas visual e ainda não envia inscrições para um serviço.
- Os links sociais nos cartões de instrutores estão como `#`; devem ser substituídos pelos perfis corretos quando disponíveis.
- Confirme nomes, telefone, horários, e-mail e endereço antes de divulgar alterações.
- Depois de publicar alterações de SEO, confira o site e os arquivos de rastreamento no domínio público e solicite nova indexação aos buscadores quando necessário.
