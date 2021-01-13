---
title: Ngjewma Symbols Script Generator
template: index.pug
uplink: ../
---
<div class="hidden" id="toc-footer">

See also:
[Ngjewma Sketch](index.html)
</div>

# Ngjewa Symbols
<!--{#top.center}-->

<div style="min-height:200px;padding:15px">
<img id="ot" style="max-height:200px" class="noborder" src='data:image/svg+xml,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"  fill="none" stroke="black" stroke-width="4"><path d="M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M0 12H28V24M15 10V22"/></svg>'></img>
</div>

---

<input type="text" id="in"></input> <input type="checkbox" id="ch" checked/><button onclick="submit()">Submit</button>

---

### How to use

Type in character blocks, separated with a space. A character block is a consonant, approximant, vowel, long marker, etc.:

- i, e, a, o, u, ɑ, ɒ are all blocks.
- Make vowels long by doubling, or with `-`.
- Approximants are: w, r, y.
    - pi→pwi
- Consonants: p b t d k g m n ŋ ɱ ɳ ɲ f h s z ɣ w r y -
- Final consonants are their own block:
    - p t k f s q
- Special Character Mappings between the romanization and input to the generator are:

    |Input|Romanization|
    |-----|------------|
    |ŋ    |ng          |
    |ɳ    |ngj         |
    |ɱ    |mj          |
    |ɲ    |nj          |
    |ɣ    |gj          |
    |ɑ    |à           |
    |ɒ    |ò           |
    <!--{table:.tb-center.auto-layout.auto-wide}-->

<script src="symbol.js"></script>
