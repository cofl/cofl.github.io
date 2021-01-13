---
title: October 2015 Sketch
template: index.pug
leipzig: true
uplink: ../
---
<script src="index.js"></script>

# October 2015 Sketch
<!--{#top.center}-->

## Phonology

<div class="flex-parent">
<div class="flex-child">

|Phonemes                        |Labial|Coronal |Dorsal   |
|--------------------------------|------|--------|---------|
|Plosive[^1]<!--{td:rowspan=3}-->|p b   |t d     |k g      |
|<!--{.hidden}-->                |pʷ bʷ |tʷ dʷ   |kʷ gʷ    |
|<!--{.hidden}-->                |pˡ bˡ |tˡ dˡ   |kˡ gˡ    |
|Fricative                       |f v   |s z ʃ ʒ |ç~x ɣ    |
|Affricate                       |      |ts tʃ dʒ|         |
|Nasal                           |m mʷ  |n nʷ    |ɲ ɲʷ ŋ ŋʷ|
|Approximant                     |w ɥ   |l       |j ʎ ʁ    |
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|Graphemes                       |Labial|Coronal    |Dorsal       |
|--------------------------------|------|-----------|-------------|
|Plosive[^1]<!--{td:rowspan=3}-->|p b   |t d        |k g          |
|<!--{.hidden}-->                |pw bw |tw dw      |kw gw        |
|<!--{.hidden}-->                |pl bl |tl dl      |kl gl        |
|Fricative                       |f v   |s z sc zsc |h gh         |
|Affricate                       |      |ts tsc dzsc|             |
|Nasal                           |m mw  |n nw       |gn gnw ng ngw|
|Approximant                     |w ui  |l          |j ll r       |
<!--{table:.tb-center.row-headers}-->
</div>
</div>

[^1]: ʷ becomes ᶣ before /i y ɪ œ/.

<div class="flex-parent">
<div class="flex-child">

|Phonemes|Front                    |Center          |Back|
|--------|-------------------------|----------------|----|
|High    |i ɪ y~ʉ<!--{colspan=2}-->|<!--{.hidden}-->|u   |
|Mid     |ɛ œ                      |                |ʌ o |
|Low     |æ                        |ä               |ɔ   |
|Dipthongs|e͡i œ͡y ʌ͡ɪ o͡i ä͡i ä͡o ʌ͡ɔ<!--{colspan=3}-->|<!--{.hidden}-->|<!--{.hidden}-->|
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|Graphemes|Front                  |Center          |Back|
|---------|-----------------------|----------------|----|
|High     |i ï y<!--{colspan=2}-->|<!--{.hidden}-->|u   |
|Mid      |e ö                    |                |â o |
|Low      |ä                      |a               |å   |
|Dipthongs|ei öü âi oi ai ao âo<!--{colspan=3}-->|<!--{.hidden}-->|<!--{.hidden}-->|
<!--{table:.tb-center.row-headers}-->
</div>
</div>

### Syllable Structure:

- __C__: Any Plosive or Nasal
- __F__: Any Fricative or Affricate
- __R__: Any Approximant
- __V__: Any Vowel

The Structure is: __(F)(C|R)V(j|ʁ|l|w)(C)(t|s|ʃ)[^2]\(t)[^2]__.

[^2]: For these sets, they must not repeat the previous letter.

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
