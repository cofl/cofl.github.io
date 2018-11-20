---
title: Tsaihänni Sketch
template: index.pug
leipzig: true
uplink: ../
---
<script src="index.js"></script>

# Tsaihänni
<!--{#top.center}-->

## Intro

Tsaihänni is the first language I've put serious thought into for a while (as of 8 Nov. 2015). This document is a sketchpad of all I've written on it thus far. Many things are missing or incomplete (phoneme frequencies, basic lists for TAM/cases/etc), but I feel that it's ready enough for feedback. Please, once you're done, go back to [the thread](https://www.reddit.com/r/conlangs/comments/3s37yi/introducing_tsaih%C3%A4nni_looking_for_feedback_please/) if that's what brought you here and tell me what you think.
If you don't really want to look at the phonology, hover over the sidebar to the left and click on "Grammar Testing Bed" for all sorts of examples.

<div data-gloss>
  <p>Tsaihänni</p>
  <p>tsai=hä-nni</p>
  <p>tsɑ͡içɐnːi</p>
  <p>1PL=talk-NMZ</p>
  <p>'*our speech*'</p>
</div>

## Culture

There is no culture yet, but I imagine that there will be soon. (__TODO__).

![](https://i.imgur.com/oUuJii0.jpg)<!--{width=400 .center}-->

## Phonology
<div class="flex-parent">
<div class="flex-child">

|Phonemes                                      ||Labial|Alveolar|Palatal|Velar|Back    |
|------------------------------|----------------|------|--------|-------|-----|--------|
|Nasal<!--{rowspan=3}-->       |Hard            |m     |n       |ɲ      |ŋ    |        |
|<!--{.hidden}-->              |Round           |mʷ    |nʷ      |ɲʷ     |ŋʷ   |        |
|<!--{.hidden}-->              |Soft            |mʲ    |nʲ      |ɲʲ     |ŋʲ   |        |
|Plosive<!--{rowspan=3}-->     |Hard            |p b   |t d     |       |k g  |        |
|<!--{.hidden}-->              |Round           |pʷ bʷ |tʷ dʷ   |       |kʷ gʷ|        |
|<!--{.hidden}-->              |Soft            |pʲ bʲ |tʲ dʲ   |       |kʲ gʲ|        |
|Affricate<!--{rowspan=3}-->   |Hard            |      |t͡s d͡z   |t͡ɕ d͡ʑ  |     |        |
|<!--{.hidden}-->              |Round           |bʷ͜vʷ  |tʷ͜sʷ dʷ͜zʷ|tʷ͜ɕʷ dʷ͜ʑʷ|  |        |
|<!--{.hidden}-->              |Soft            |bʲ͜vʲ  |tʲ͜ʃʲ dʲ͜ʒʲ|tʲ͜ɕʲ dʲ͜ʑʲ|  |        |
|Fricative<!--{rowspan=2}-->   |Hard            |f v   |s z     |ɕ ʑ ç  |x ʝ~ɣ|χ~ħ ʁ~ʕ |
|<!--{.hidden}-->              |Soft            |fʲ vʲ |ʃʲ ʒʲ   |ɕʲ ʑʲ  |xʲ ɣʲ|χʲ ʀj~ʀ̆j|
|Approximants                                  ||w     |l lʲ    |ɥ j    |     |        |
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|Graphemes                                     ||Labial|Alveolar|Palatal|Velar|Back    |
|------------------------------|----------------|------|--------|-------|-----|--------|
|Nasal<!--{rowspan=3}-->       |Hard            |m     |n       |gn     |ng   |        |
|<!--{.hidden}-->              |Round           |mw    |nw      |gnw    |ngw  |        |
|<!--{.hidden}-->              |Soft            |mj    |nj      |gnj    |ngj  |        |
|Plosive<!--{rowspan=3}-->     |Hard            |p b   |t d     |       |k g  |        |
|<!--{.hidden}-->              |Round           |pw bw |tw dw   |       |kw gw|        |
|<!--{.hidden}-->              |Soft            |pj bj |tj dj   |       |kj gj|        |
|Affricate<!--{rowspan=3}-->   |Hard            |      |ts dz   |tsh dzh|     |        |
|<!--{.hidden}-->              |Round           |bvw   |tsw dzw |tshw dzhw|   |        |
|<!--{.hidden}-->              |Soft            |bvj   |tsj dzj |tshj dzhj|   |        |
|Fricative<!--{rowspan=2}-->   |Hard            |f v   |s z     |sh zh h|kh gh|hh r    |
|<!--{.hidden}-->              |Soft            |fj vj |sj zj   |shj zhj|khj ghj|hhj rj|
|Approximants                                  ||w     |l lj    |ui j   |     |        |
<!--{table:.tb-center.row-headers}-->
</div>
</div>
<br/>
<div class="flex-parent">
<div class="flex-child">

|Phonemes|Front|Center|Back|
|--------|-----|------|----|
|High    |i ʏ~y|ɨ     |u   |
|Mid-High|e~ɛ ɪ|      |o   |
|Mid-Low |ɛ̞ œ  |ə     |ɔ   |
|Low     |æ~a  |      |ɑ   |
|Dipthongs|e͡i œ͡y o͡i ɑ͡ɪ ɐ͡i ɑ͡ɔ ɐ͡o|||
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|Graphemes|Front|Center|Back|
|---------|-----|------|----|
|High     |i ü  |ï     |u   |
|Mid-High |e  ì |      |o   |
|Mid-Low  |ë ö  |a     |å   |
|Low      |æ    |      |aa  |
|Dipthongs|e͡i œ͡y o͡i ɑ͡ɪ ɐ͡i ɑ͡ɔ ɐ͡o|||
<!--{table:.tb-center.row-headers}-->
</div>
</div>

- For all round consonants, [ʷ] become [ᶣ] before rounded vowels.
- Consonant voicing tends to assimilate with the preceding consonant in the cluster,<br/>where a cluster is a series of two consonants not spanning a syllable boundary (<abbr title="that is,">i.e.</abbr> in an onset or coda position).
- /e/ and /ɛ/ are merging. /e/ is almost always [ɛ] in closed syllables.
- Coda palatalisation is sometimes realised as offglide /i̯/.

### Syllable Structure

- __C__: Any Plosive or Nasal
- __F__: Any Fricative or Affricate
- __R__: Any Approximant
- __V__: Any Vowel

The Structure is: __(F)(C|R)V(j|ʁ|l|w)(C)(s|ɕ)(t)__[^1].

[^1]: The final __(t)__ only appears when not preceeded by a /t/ or /d/.

__TODO__: Phoneme frequency.

### Stress and Isochrony

Primary stress almost always falls on the penultimate syllable. Secondary stress is more finicky and needs to be sorted out (__TODO__).


__TODO__: The rest.

## Basic Grammar and Syntax

The default word order is SVO, but parts can shift around in a non-configurationalmanner, with less important or older elements dropping toward the end of the sentence.

There are no noun classes, save a vestigial class for animate females and endeared terms, with its usage transitioning toward only the latter.

### Verbs
#### Ye Table of Declensions

<div class="flex-parent">
<div class="flex-child">

|A |Singular|Plural|
|--|--------|------|
|1 |mä-     |-     |
|2 |-       |      |
|3 |e-      |      |
|3F|ta-     |tü-   |
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|A |Singular|Plural|
|--|--------|------|
|1 |        |      |
|2 |        |      |
|3 |        |      |
|3F|        |      |
</div>
</div>

#### Some ideas
- Logophoricity, f ye!

## Grammar Testing Bed

### Sample Sentences

<div data-gloss>
  <p>Dao gwöügn.</p>
  <p>dao gwöü-gn</p>
  <p>dɑ͡ɔ gʷœ͡yɲ</p>
  <p>man[ABS] [3S.A]eat-ANTIP</p>
  <p>The man eats (it).</p>
</div>
<div data-gloss>
  <p>Daom egwöü må.</p>
  <p>dao-m e-gwöü må</p>
  <p>dɑ͡ɔm ˈe.gʷœ͡y mɔ</p>
  <p>man-ERG 3S.ERG-eat[3S.P] bread[ABS]</p>
  <p>The man eats the bread.</p>
</div>
<div data-gloss>
  <p>Må gwöüyn.</p>
  <p>må gwöü-yn</p>
  <p>mɔ gʷœ͡yɥn</p>
  <p>bread[ABS] eat[3S.P]-PASS</p>
  <p>The bread is eaten.</p>
</div>
<div data-gloss>
  <p>Tshïh legwöügn.</p>
  <p>tshï-h le-gwöü-gn</p>
  <p>tɕɨç ˈle.gʷœ͡yɲ</p>
  <p>3[ABS]-PL 3PL.A-eat-ANTIP</p>
  <p>They are eating (something, <abbr title="for example">e.g.</abbr> a meal).</p>
</div>
<div data-gloss>
  <p>Gwöükwä!</p>
  <p>gwöü-kwä</p>
  <p>gʷœ͡ykʷa</p>
  <p>Eat!</p>
</div>
<div data-gloss>
  <p>Vrom tapit sä.</p>
  <p>vro-m ta-pi-t sä</p>
  <p>vʁom ˈtɑ.pɪt sɐ</p>
  <p>3S.F-ERG 3S.F.A-set[3S.P]-PST it[ABS]</p>
  <p>She set it down.</p>
</div>
<div data-gloss>
  <p>Vro tapisht.</p>
  <p>vro ta-pi-sh-t</p>
  <p>vʁo ˈtɑ.pɪɕt</p>
  <p>3S.F[ABS] 3S.F.A-set-REFL-PST</p>
  <p>She set herself down. (She sat down.)</p>
</div>
<blockquote class="negative-gloss">
  <div data-gloss>
    <p>Vro tapishtign.</p>
    <p>vro ta-pi-sh-t-(i)gn</p>
    <p>vʁo ˈtɑ.pɪɕ.tɪɲ</p>
    <p>3S.F[ABS] 3S.F.A-set-REFL-PST-ANTIP</p>
    <p>Reflexive verbs are always intransitive, and thus cannot be antipassive.</p>
  </div>
  <div data-gloss>
    <p>Vrom tapisht.</p>
    <p>vro-m ta-pi-sh-t</p>
    <p>vʁom ˈtɑ.pɪɕt</p>
    <p>3S.F-ERG 3S.F.A-set-REFL-PST</p>
    <p>Reflexive verbs are always intransitive, and thus cannot take an ergative argument.</p>
  </div>
</blockquote>
<div data-gloss>
  <p>Vro tapimt.</p>
  <p>vro ta-pi-m-t</p>
  <p>vʁo ˈtɑ.pɪmt</p>
  <p>3S.F[ABS] 3S.F.A-set-STAT-PST</p>
  <p>She sat. (She was sitting.)</p>
</div>
<blockquote class="negative-gloss">
  <div data-gloss>
    <p>Vro tapimtign.</p>
    <p>vro ta-pi-m-t(i)-gn</p>
    <p>vʁo tɑˈpɪm.tɪɲ</p>
    <p>3S.F[ABS] 3S.F.A-set-STAT-PST-ANTIP</p>
    <p>Stative verbs are always intransitive, and thus cannot be antipassive.</p>
  </div>
  <div data-gloss>
    <p>Vro tapimsht.</p>
    <p>vro ta-pi-m-sh-t</p>
    <p>vʁo ˈtɑ.pɪmɕt</p>
    <p>3S.F[ABS] 3S.F.A-set-STAT-REFL-PST</p>
    <p>A verb cannot be both stative and reflexive.</p>
  </div>
</blockquote>
<div data-gloss>
  <p>Vro tapisht shönen.</p>
  <p>vro ta-pi-sh-t shön-en</p>
  <p>vʁo tɑˈpɪɕt ˈɕœn.ɛn</p>
  <p>3S.F[ABS] 3S.F.A-set-REFL-PST quick-ADV</p>
  <p>She sat quickly.</p>
</div>
<div data-gloss>
  <p>Vro natapishät shönen.</p>
  <p>vro na-ta-pi-sh-ät shön-en</p>
  <p>vʁo nɑ.tɑˈpɪɕ.ɐt ˈɕœn.ɛn
  <p>3S.F[ABS] EVID-3S.F.A-set-REFL-FUT quick-ADV</p>
  <p>She will sit quickly.</p>
</div>
<div data-gloss>
  <p>Dzjï napishätkja shönen fiyenës</p>
  <p>dzjï na-pi-sh-ät-kja shön-en fiy-ën=ës</p>
  <p>dʑʲɨ nɑ.piˈɕɐt.kʲa ˈɕœn.ɛn fiˈjɛn.ɛs</p>
  <p>2S[ABS] EVID-[2S.A]set-REFL-FUT-IMP quick-ADV smooth-ADV=and</p>
  <p>You will sit quickly and smoothly.</p>
</div>
<div data-gloss>
  <p>Em mähät i vro</p>
  <p>e-m mä-hä-t i vro</p>
  <p>em mɐˈçɐt i vʁo</p>
  <p>1S-ERG 1S.A-say[3S.O]-PST PREP 3S.F</p>
  <p>I said (it) to her.</p>
</div>
<div data-gloss>
  <p>Em mähänwäsjt i sä</p>
  <p>e-m mä-hä-gnj-äsj-t i sä</p>
  <p>em mɐçɐɲjɐi̯ʃʲtʲ i sɐ</p>
  <p>1S-ERG 1S.A-say-APL-3S.F.O-PST PREP it</p>
  <p>I told (her) it.</p>
</div>

### Phrasebook

<div data-gloss>
  <p>Erlä hhaf!</p>
  <p>erlä hhaf</p>
  <p>eʁlɐ ħɑf</p>
  <p>morning[ABS] hello</p>
  <p>Good morning!<br/>Colloquially &ldquo;Ëlläkhakh!&rdquo;, a corruption of the original phrase.</p>
</div>
<div data-gloss>
  <p>Tshja, tshja. Mïnyi ghunnje is.</p>
  <p>tshja tshja mïn-yi ghun-nje is</p>
  <p>tɕʲɑ tɕʲɑ ˈmɨn.ji ˈɣun.nʲe is</p>
  <p>yes yes very big-GEN [3S.A]be[3S.O]</p>
  <p>[Yes, yes. It's very big.](https://www.reddit.com/r/conlangs/comments/3s3m9s/how_many_words_are_in_your_conlangs/cwtzlgv)</p>
</div>

### Sentences for Testing Conlang Syntax

<div data-gloss>
  <p>Tjæ såkhäng.</p>
  <p>tjæ så-kh-äng</p>
  <p>tʲæ sɔxɐŋ</p>
  <p>sun[ABS] [3S.A]illuminate-IMPRS-GNO</p>
  <p>The sun illuminates. (*gnomic*)</p>
</div>
<div data-gloss>
  <p>Tjæ såkh.</p>
  <p>tjæ så-kh</p>
  <p>tʲæ sɔx</p>
  <p>sun[ABS] [3S.A]illuminate-IMPRS</p>
  <p>The sun illuminates. (The sun is shining.)</p>
</div>
<div data-gloss>
  <p>Tjæ såkht.</p>
  <p>tjæ så-kh-t</p>
  <p>tʲæ sɔxt</p>
  <p>sun[ABS] [3S.A]illuminate-IMPRS-PST</p>
  <p>The sun illuminated. (The sun shone.)</p>
</div>
<div data-gloss>
  <p>Tjæ nasåkhät.</p>
  <p>tjæ na-så-kh-ät</p>
  <p>tʲæ nɑˈsɔx.ɐt</p>
  <p>sun[ABS] EVID-[3S.A]illuminate-IMPRS-FUT</p>
  <p>The sun will shine. (The speaker knows this to be true.)</p>
</div>
<blockquote>
  Also:
  <div data-gloss>
    <p>Tjæ såkhätnäng.</p>
    <p>tjæ så-kh-ätn-äng</p>
    <p>tʲæ sɔˈxɐt.nɐŋ</p>
    <p>sun[ABS] [3S.A]illuminate-IMPRS-FUT-GNO</p>
    <p>The sun will shine. (It is general knowledge so.)</p>
  </div>
  <div data-gloss>
    <p>Tjæ nuiösåkhät.</p>
    <p>tjæ nuiö-så-kh-ät</p>
    <p>tʲæ nɥœˈsɔ.xɐt</p>
    <p>sun[ABS] HSY-[3S.A]illuminate-IMPRS-FUT</p>
    <p>The sun will shine. (The speaker has heard this to be true.)</p>
  </div>
  <div data-gloss>
    <p>Tjæ nusåkhät.</p>
    <p>tjæ nu-så-kh-ät</p>
    <p>tʲæ nuˈsɔ.xɐt</p>
    <p>sun[ABS] INFER-[3S.A]illuminate-IMPRS-FUT</p>
    <p>The sun will shine. (The speaker infers.)</p>
  </div>
  <div data-gloss>
    <p>Tjæ maisåkhät</p>
    <p>tjæ mai-så-kh-ät</p>
    <p>tʲæ mɑ͡iˈsɔ.xɐt</p>
    <p>sun[ABS] UNSURE-[3S.A]illuminate-IMPRS-FUT</p>
    <p>The sun will shine. (The speaker is uncertain, but thinks it likely.)</p>
  </div>
</blockquote>
<div data-gloss>
  <p>Tjæ sååkhëni</p>
  <p>tjæ så~å-kh-ëni</p>
  <p>tʲæ ˈsɔːx.ɛni</p>
  <p>sun[ABS] [3S.A]illuminate~PERF.CONT-IMPRS-PERF.CONT</p>
  <p>The sun has been shining.</p>
</div>
<div data-gloss>
  <p>Tjæ såkh mïn</p>
  <p>tjæ så-kh mïn</p>
  <p>tʲæ sɔx mɨn</p>
  <p>sun[ABS] [3S.A]illuminate-IMPRS more</p>
  <p>The sun is shining again.</p>
</div>
<div data-gloss>
  <p>Tjæ nasåkhät erläb.</p>
  <p>tjæ na-så-kh-ät erlä-b</p>
  <p>tʲæ nɑˈsɔ.xɐt eʁlɐb</p>
  <p>sun[ABS] EVID-[3S.A]illuminate-IMPRS-FUT morning-ESS</p>
  <p>The sun will shine tomorrow.</p>
</div>
<div data-gloss>
  <p>Tjæ såkh hhlien.</p>
  <p>tjæ så-kh hhli-en</p>
  <p>tʲæ sɔx ˈħli.e̞n</p>
  <p>sun[ABS] [3S.A]illuminate-IMPRS blind-ADV</p>
  <p>The sun shines brightly. (The sun shines blindingly.)</p>
</div>
<div data-gloss>
  <p>Tjæ hhliyi såkh.</p>
  <p>tjæ hhli-yi så-kh</p>
  <p>tʲæ ˈħli.ji sɔx</p>
  <p>sun[ABS] blind[ABS]-PTCP [3S.A]illuminate-IMPRS</p>
  <p>The bright sun shines. (The blinding sun shines.)</p>
</div>
<div data-gloss>
  <p>Ghjoh immje sigaltign.</p>
  <p>ghjo-h im-nje si-gal-t(i)-gn</p>
  <p>ɣʲoç imːʲe̞ siˈgɑl.tɪɲ</p>
  <p>person[ABS]-PL all-GEN 3PL.A-shout-PST-ANTIP</p>
  <p>All the people shouted.</p>
</div>
<div data-gloss>
  <p>Ghjoh sunnje sigaltign.</p>
  <p>ghjo-h sun-nje si-gal-t(i)-gn</p>
  <p>ɣʲoç sunːʲe̞ siˈgɑl.tɪɲ</p>
  <p>person[ABS]-PL some-GEN 3PL.A-shout-PST-ANTIP</p>
  <p>Some of the people shouted.</p>
</div>

__TODO__: The rest of these.
<a name="bottom"></a>