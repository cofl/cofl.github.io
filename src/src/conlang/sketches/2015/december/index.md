---
title: December 2015 Sketch
scripts:
  - index.js
static-scripts:
  - main.js
  - leipzig.js
generate:
  nav: true
  clone: true
templates:
  header-top: >
    <a href="/">home</a>
    <a href="#top">top</a>
    <hr/>
  header-trail: >
    <hr/>
    <a href="#bottom_of_page">bottom</a>
---
# <a name="top">Tsoąićęn</a>
<strong style="display:block;text-align:center">December 2015 Sketch</strong>

<div id="nav"></div>

## Intro

This project started off as a reworking of [Tsaihänni](/conlang/sketches/2015/november/), however, it eventually grew beyond that and can now not be considered anything but its own work.

Tsoąićen is a work-in-progress name and subject to change.

## Culture

There is no culture yet, but I imagine that there will be soon.

## Phonology
<clone class="tb-center row-headers tb-pair"></clone>
|*Phonemes*|Labial|Coronal|Dorsal|
|----------|------|-------|------|
|Nasal     | m    | n     | ŋ    |
|Plosive   | p b  | t d   | k g  |
|Fricative |      |s z ʃ ʒ| ç x ɣ|
|Other     | w    | l ɾ   | j    |
<clone class="tb-center row-headers tb-pair"></clone>
|*Graphemes*|Labial|Coronal|Dorsal|
|-----------|------|-------|------|
|Nasal      | m    | n     | ń    |
|Plosive    | p b  | t d   | k g  |
|Fricative  ||s[¹](#phon-footnote-1) s[²](#phon-footnote-2) ś ź|c[¹](#phon-footnote-1) ć c[2](#phon-footnote-²)|
|Other      | ł    | l r   | y    |

---
<clone class="tb-center row-headers tb-pair"></clone>
|*Phonemes*|Front|Central|Back|
|----------|-----|-------|----|
|High      | iː ɪ| ɨ     | ɯ~u|
|Mid       | eː ɛ| ə     | o ʌ|
|Low       | æ   |       | ɑ ɒ|
|Dipthongs |<clone-p colspan=3/></clone-p>ʌɪ ɑʊ ʌu ɒɪ|
<clone class="tb-center row-headers tb-pair"></clone>
|*Graphemes*|Front|Central|Back|
|-----------|-----|-------|----|
|High       |ii i |u      |w   |
|Mid        |ee e |a      |o a |
|Low        |ę    |       |ą oą|
|Dipthongs  |<clone-p colspan=3/></clone-p>ai ąo ao oąi|

- <a name="phon-footnote-1">¹</a>: Intervocalically, /s ç/ are spelled as &lsaquo;ss cc&rsaquo;, rather than &lsaquo;s c&rsaquo;.
- <a name="phon-footnote-2">²</a>: As /z ɣ/ only appear intervocalically, they are spelled the same as their "voiceless counterparts", /s ç/ (&lsaquo;s c&rsaquo;).

### Allophony

- Before /ɾ/, the following changes occur:
  |Original|New| |Original|New|
  |--------|---|-|--------|---|
  |t       |θ  | |d       |ð  |
  |s       |sə | |z       |zə |
  |ʃ       |ʃə | |ʒ       |ʒə |
- /ɾ/ becomes [d] after a nasal; the nasal is geminated.
- /ç/ is allophonous with [ɸ] before /ɯ/.

### General rules

- All plosives are devoiced at word-finally.
- All consonant clusters assimilate to the voicing of the initial consonant, except for /x/, which does not have an analysed voiced counterpart.
- Nasals tend to assimilate in place with following consonants.

### Syllable Structure

The syllable structure I've imagined is quite complex to me, so I may not write it down right. Here's my best shot: syllables are analysed as being of two different structures, to simplify the overall model.

#### Structure 1: Normal Structure

    ((F)C|F|C(F)|(F)N)(R)V(l|F|N)(C)(t|s(t))
    
Where:

 - __C__: /p b t d k g/
 - __F__: /s ʃ ʒ ç x/
 - __N__: /m n ŋ/
 - __R__: /w l ɾ j/
 - __V__: Any vowel.

Final /t/ may only occur when not immediately preceeded by another /t/. /ɾ/ may not appear after a nasal consonant. The long vowels /eː/ and /iː/ may only appear in stressed syllables; elsewhere, they are reduced to /ɛ/ and /ɪ/, respectively.

#### Structure 2: Non-vowel Structure

Additionally, a non-dorsal fricative may stand in as the nucleus.

    (C)F

Where __C__ is any of /p b t d k/, and __F__ is any of /s ʃ ʒ x/. Except for when /x/ is the nucleus, any onset consonant must have the same voicing as the nucleus fricative.

<!--### Isochrony and Prosody

Isochrony and prosody vary between casual and formal speech: the more casual the language, the more stress-timed and lyrical it becomes; on the other hand, formal speaking is generally more syllable-timed, with a flatter intonation.

In formal speaking, the intonation is generally flat, as stated above. There are, however, several spots where that differs: at the beginning of a minor group, the intonation falls to the baseline pitch; at the end of a major group the intonation falls from the baseline pitch downward.
However, in interrogative sentences, major groups instead end on a rising intonation. Emphasized terms have a higher intonation that the baseline as well. There are additional rules, but I don't know enough to write them down properly. Assume they follow GenAm elsewhere.-->

## Grammar Testing Bed

<div data-gloss>
  <p>Example</p>
  <p>example</p>
  <p>gloss</p>
  <p>ipa</p>
  <p>"Example"</p>
</div>

<a name="bottom_of_page"></a>