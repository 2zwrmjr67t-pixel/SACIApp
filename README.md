# SACI · Protótipo do app do atleta

Protótipo navegável, com dados fictícios, que serve de modelo para a startup que vai desenvolver o app do ecossistema SACI.

**Abrir:** `https://2zwrmjr67t-pixel.github.io/SACIApp/` (depois de ativar o GitHub Pages, veja abaixo).

## Estrutura

```
index.html            ← o app pronto (arquivo único, é o que o GitHub Pages publica)
build.py              ← gera o index.html a partir de src/
src/
  data.js             ← dados fictícios, cards, cursos, trilhas e o bloco VIDEOS
  app.js              ← telas e regras (atleta, responsável, treinador, SACI)
  style.css           ← visual
  index.template.html ← esqueleto da página
videos/               ← opcional: vídeos .mp4 das aulas
```

Para mudanças rápidas, como colar um link de vídeo, edite direto o `index.html`.
Para mudanças maiores, edite os arquivos em `src/` e rode `python3 build.py`. Esse comando regera o `index.html` e sobrescreve as edições feitas direto nele.

## Ativar o GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → Branch `main`, pasta `/ (root)` → Save.

## Como navegar
- O app abre na visão do atleta.
- O ícone de olho abre o **modo demonstração**. No computador ele fica no canto inferior esquerdo; no celular, no superior direito. Ali dá para trocar o perfil (Atleta, Responsável, Treinador/Dono, SACI admin) e escolher o atleta ou o treinador.
- Recarregar a página reinicia a demonstração.

## Vídeos das aulas (YouTube)
No `index.html` (ou em `src/data.js`), procure `const VIDEOS={` e cole o link na chave da aula:

```js
'k_boas-1':'https://www.youtube.com/watch?v=XXXXXXXXXXX',
```

| Chave | Curso · aula |
|---|---|
| k_boas-1 | Boas-vindas ao Colorado · Nossa história (concluir libera a Sala de Troféus) |
| k_boas-2 | Boas-vindas ao Colorado · O Beira-Rio |
| k_boas-3 | Boas-vindas ao Colorado · Os valores do clube |
| k_fund-1 | Fundamentos em casa · Domínio |
| k_fund-2 | Fundamentos em casa · Condução |
| k_fund-3 | Fundamentos em casa · Passe na parede |
| k_jogo-1 | Jogo do Colorado · Olhar antes |
| k_trn1-1 | Leitura de jogo (treinador) · O guia de sinais |

O vídeo precisa permitir incorporação (no YouTube: Compartilhar → Incorporar). Sem link, o app procura `videos/<chave>.mp4` e, se não achar, mostra "Vídeo em breve".

## Limitações
- Dados fictícios. Sem login, pagamento ou notificações reais.
- Troféus são desenhos originais, não réplicas das taças oficiais. Escudo e marcas oficiais dependem de autorização do clube.
- Repositório público: qualquer pessoa com o link vê o protótipo. Deixe-o privado se ainda não houver aval do clube.
- A lista completa de pontos em aberto está em "Sobre / limitações", dentro do modo demonstração.
