# Guia de Boas Práticas para o Portfólio na Vercel

# Deploy e Configurações na Vercel
Para um projeto HTML/CSS/JS puro, o deploy na Vercel deve ser configurado de forma enxuta. O Framework Preset deve ficar como Other, pois não há nenhum framework envolvido. O Build Command e o Install Command devem ser deixados em branco, já que não existe etapa de compilação nem dependências para instalar. O Output Directory deve apontar para a raiz do projeto (.), onde o index.html está localizado.
Nas configurações de Headers, vale adicionar cache para os arquivos estáticos: imagens podem ser cacheadas por até um ano (max-age=31536000) e arquivos CSS por um dia (max-age=86400). Isso torna o site significativamente mais rápido em visitas repetidas sem nenhum custo extra.
ative o Vercel Analytics no plano gratuito para acompanhar visitas reais ao portfólio.

# Melhorias no Código HTML
O HTML deve usar tags semânticas como <header>, <nav>, <main>, <section> e <footer> no lugar de <div> genéricas. Isso melhora tanto o SEO quanto a acessibilidade. No <head>, adicionar meta tags de descrição e Open Graph garante que o link do portfólio apareça com um card visual bonito quando compartilhado no LinkedIn ou WhatsApp. Adicionar um favicon personalizado também faz diferença na apresentação geral. Imagens devem ter o atributo loading="lazy" para melhorar a performance de carregamento.

# Melhorias no CSS
Centralizar cores, fontes e espaçamentos em variáveis CSS no :root torna o código mais fácil de manter e garante consistência visual em todo o site. Os cards de projeto devem ter transições suaves no hover, com leve elevação via transform: translateY e sombra, dando uma sensação polida e moderna. O layout deve ser construído com CSS Grid ou Flexbox e garantir responsividade em telas menores, já que muitos recrutadores acessam portfólios pelo celular.

# Melhorias no JavaScript
Usar a Intersection Observer API para animar elementos conforme o usuário rola a página é uma técnica moderna e sem dependências externas que causa boa impressão. Implementar um toggle de modo claro/escuro demonstra domínio de JavaScript e CSS ao mesmo tempo — um diferencial simples, mas que chama atenção.