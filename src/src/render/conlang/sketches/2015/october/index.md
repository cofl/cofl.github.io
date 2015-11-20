---
title: October 2015 Sketch
scripts:
  - index.js
static-scripts:
  - main.js
  - header-link.js
  - leipzig.js
templates:
  header-top: >
    <a href="/">home</a>
    <hr/>
  header-trail: >
    <hr/>
    <a href="#bottom_of_page">bottom</a>
---
# <a name="top">October 2015 Sketch</a>

<div id="nav"></div>

## Phonology

<table class="tb-center row-headers tb-pair">
  <thead><tr><th style="font-style:italic">Phonemes</th>
    <th>Labial</th>
    <th>Coronal</th>
    <th>Dorsal</th></tr></thead>
  <tr><td></td>
    <td>p b</td>
    <td>t d</td>
    <td>k g</td></tr>
  <tr><td>Plosive\*</td>
    <td>pʷ bʷ</td>
    <td>tʷ dʷ</td>
    <td>kʷ gʷ</td></tr>
  <tr><td></td>
    <td>pˡ bˡ</td>
    <td>tˡ dˡ</td>
    <td>kˡ gˡ</td></tr>
  <tr><td>Fricative</td>
    <td>f v</td>
    <td>s z ʃ ʒ</td>
    <td>ç~x ɣ</td></tr>
  <tr><td>Affricate</td>
    <td></td><td>ts tʃ dʒ</td><td></td></tr>
  <tr><td>Nasal</td>
    <td>m mʷ</td>
    <td>n nʷ</td>
    <td>ɲ ɲʷ ŋ ŋʷ</td></tr>
  <tr><td>Approximant</td>
    <td>w ɥ</td>
    <td>l</td>
    <td>j ʎ ʁ</td></tr></table>
<table class="tb-center row-headers tb-pair">
  <thead><tr><th style="font-style:italic">Graphemes</th>
    <th>Labial</th>
    <th>Coronal</th>
    <th>Dorsal</th></tr></thead>
  <tr><td></td>
    <td>p b</td>
    <td>t d</td>
    <td>k g</td></tr>
  <tr><td>Plosive\*</td>
    <td>pw bw</td>
    <td>tw dw</td>
    <td>kw gw</td></tr>
  <tr><td></td>
    <td>pl bl</td>
    <td>tl dl</td>
    <td>kl gl</td></tr>
  <tr><td>Fricative</td>
    <td>f v</td>
    <td>s z sc zsc</td>
    <td>h gh</td></tr>
  <tr><td>Affricate</td>
    <td></td><td>ts tsc dzsc</td><td></td></tr>
  <tr><td>Nasal</td>
    <td>m mw</td>
    <td>n nw</td>
    <td>gn gnw ng ngw</td></tr>
  <tr><td>Approximant</td>
    <td>w ui</td>
    <td>l</td>
    <td>j ll r</td></tr></table>


__*:__ ʷ becomes ᶣ before /i y ɪ œ/.

<table class="tb-center row-headers tb-pair">
  <thead><tr><th style="font-variant:italic">Phonemes</th>
    <th>Front</th>
    <th>Center</th>
    <th>Back</th></tr></thead>
  <tr><td>High</td>
    <td colspan="2">i ɪ y~ʉ</td>
    <td>u</td></tr>
  <tr><td>Mid</td>
    <td>ɛ œ</td>
    <td></td><td>ʌ o</td></tr>
  <tr><td>Low</td>
    <td>æ</td>
    <td>ä</td>
    <td>ɔ</td></tr>
  <tr><td>Dipthongs</td>
    <td colspan="3">e͡i œ͡y ʌ͡ɪ o͡i ä͡i ä͡o ʌ͡ɔ</td>
    </tr></table>
<table class="tb-center row-headers tb-pair">
  <thead><tr><th style="font-variant:italic">Graphemes</th>
    <th>Front</th>
    <th>Center</th>
    <th>Back</th></tr></thead>
  <tr><td>High</td>
    <td colspan="2">i ï y</td>
    <td>u</td></tr>
  <tr><td>Mid</td>
    <td>e ö</td>
    <td></td><td>â o</td></tr>
  <tr><td>Low</td>
    <td>ä</td>
    <td>a</td>
    <td>å</td></tr>
  <tr><td>Dipthongs</td>
    <td colspan="3">ei öü âi oi ai ao âo</td>
    </tr></table>

### Syllable Structure:

- __C__: Any Plosive or Nasal
- __F__: Any Fricative or Affricate
- __R__: Any Approximant
- __V__: Any Vowel

The Structure is: __(F)(C|R)V(j|ʁ|l|w)(C)(t|s|ʃ)\*(t)\*__.

__*__: For these sets, they must not repeat the previous letter.

__TODO__: Phoneme frequency.

### Stress and Isochrony

__TODO__: This.

## Basic Grammar and Syntax

The default word order is OSV, but parts often shift around in a non-configurational manner, with less important elements or older elements dropping toward the end of the sentence.

There are no noun classes, but animate females and endeared terms in the ergative are marked on the verb with the special prefix &lsaquo;ta-&rsaquo;, which is analysed as being in agreement with the non-existent female noun class.

## Grammar Testing Bed

### Sample Sentences

<div data-gloss>
  <p>Dao gwöügnw.</p>
  <p>dao {} gwöü -gnw</p>
  <p>man[ABS] {} eat[3S.O] -ANTIP</p>
  <p>The man eats.</p>
</div>
<div data-gloss>
  <p>Må egwöü daom.</p>
  <p>må {} e- gwöü {} dao -m</p>
  <p>bread[ABS] {} 3S.ERG- eat {} man -ERG</p>
  <p>The man eats bread.</p>
</div>
<div data-gloss>
  <p>Må gwöüyn.</p>
  <p>må {} gwöü -yn</p>
  <p>bread[ABS] {} eat -PASS</p>
  <p>The bread is eaten.</p>
</div>

### Sentences for Testing Conlang Syntax

<div data-gloss>
  <p>Tla så ngâ.</p>
  <p>tla {} så {} ngâ</p>
  <p>sun[ABS] {} shine {} GNO</p>
  <p>The sun shines. (*gnomic*)</p>
</div>
__TODO__: The rest of these.

<a name="bottom"></a>