---
title: Saan -- March 2016
generate:
  clone: true
  nav: true
static-scripts:
  - main.js
  - leipzig.js
style: >
  caption{text-decoration:underline}
  .center{text-align:center}
  .bold{font-weight:bold}
  .italic{font-style:italic}
  .small{font-size:70%}
  #abbreviation-table td:first-child{font-variant:small-caps}
  .left-headers th{text-align:left}
  .references a {color:inherit;display:block;text-indent:-22px;padding:2px 0 2px 30px;line-height:30px}
  .references a:target{background:#f8f8a8}
  .content p{text-indent: 22px;line-height:30px}
  /*p,ul{font-family:"Palatino Linotype","Book Antiqua",Palatino,serif}*/
  @media (min-width: 680px) {
    .references {column-count:2;-moz-column-count:2;-webkit-column-count:2}
  }
script: >
  window.leipzigAbbreviations = {
    'ACNNR': 'action nominalizer'
  };
templates:
  header-top: >
    <a href="/">home</a>
    <a href="#top">top</a>
    <hr/>
  header-trail: >
    <hr/>
    <a href="#bottom">bottom</a>
---

# <a name="top">The Saan Language</a>
<div class="center small italic">C. LaCourt &mdash; 31 March 2016</div>
<div class="center bold">A. Tilghman<br/>21 August 3024</div>

## Abstract

<div class="content">

This is a grammar of the Saan language of the Oran, of Anaret's Blue Coast Language Family. All aspects of the language are discussed, including phonology, morphology, and background.

Keywords: *Saan*, *grammar*, *Oran*, *language*

## Acknowledgements

This paper would not have been possible without the invitation of the Anaretian Directory and prompting from my professor, Donald Smith, of the University of Valles Marineris. I'd also like to extend my most sincere gratitude to the students and faculty of Onizue Academy and the people of Ennanö and the other Blue Coast towns and cities I visited for their willingness to cooperate with my research, and for all the sources they provided for my further education. Lastly, I want to thank my guide and friend, Mora Adaarie, who has been extremely patient with me during my time on Anaret, and has always been willing to assist me in any way.

</div>

## a. Conventions

This document makes use of a few conventions:

- Forward slashes (//) are used around [phonemes](http://en.wikipedia.org/wiki/Phoneme).  
  These are the recognized distinct sounds found in a language. This format is called __broad transcription__.
- Square brackets ([]) are used around [phones](http://en.wikipedia.org/wiki/Phone_(linguistics)).   
  These sounds are absolutes, many of which may be covered by a single phoneme. This format is called __narrow transcription__.
- Single chevrons (&lsaquo;&rsaquo;) are used around [graphemes](http://en.wikipedia.org/wiki/Grapheme).  
  These symbols are used to write down language. They may or may not correlate to phonemes. Please note that single chevrons are not the standard punctuation for this, but are similarly visually and are more visually appealing than some other angle brackets.

Some further conventions are used to label affixes:

 - Suffixes are marked with a preceding hyphen, e.g. -*suff.*
 - Prefixes are marked with a trailing hypen, e.g. *pref.*-

## b. Glossary of Abbreviations

<clone id="abbreviation-table" class="left-headers"></clone>

|Abbreviation   |Meaning
|---------------|-------
|[nom][wiki_nom]|Nominative case

<div class=content>

## 1. Introduction
Saan, a tongue with over fourteen billion speakers spread over sixty-seven worlds, originates along the famous Blue Coast of Anaret, a region known for its extensive fishing and shipping industries, and formerly for large salt mines that dotted the low hills at the western border, though many have closed by modern times. The region rapidly entered a period of enlightenment following extensive colonial activity by the inland and island nations, and from those same nations the language gained extensive vocabulary in the disciplines of government and trade. Independence movements at the end of the first colonial era granted the region the freedom to build its own government, the very same government that when matured became the core founding member of the Anaretian Directory ([Pellu 2957](#pellu2957)). Today, the shore is dotted with some of the greatest cities in all the empire, which play host to to a burgeoning population of over half a billion Oran, Ngemans, and Qali. The region is also home to the prestigious Onizue Military Academy, named for one of the most prestigious families of the Ngeman aristocracy, and one of the two permanent venues for the semiannual Imperial Defense Expo.

### 1.1 People of the Blue Coast
According to the introduction to Pellu and Mōra's *Cultural Index: 3<sup>rd</sup> edition* ([2965](#pellu2965)), the inhabitants of Anaret's Blue Coast region for centuries held a strange middle ground among their neighbours. Their communities were larger than the numerous villages dotting the Golden Plains, yet smaller than the cities that could be found tucked away out in the [TODO: name] Archipelago, all of which were dwarfed by the true urban centers built in the Grey Mountains and northern plains. Similarly, between the loose yet linear family structure found among the plains-dwellers and the tigher, more nuclear families of the islands, on the Blue Coast, bonds between generations tend to be strong, with a repect and wisdom being traded equally; despite this, single family units are very nuclear&mdash;children are raised by their parents and the community, and are free to move as they see fit when they come of age. This system of community-rearing and strongly nuclear family units is unique on Anaret, though it has shown up on some colonial and client worlds ([ur Thíma 2966](#urthima2966)).

### 1.2 The Oran
The Oran, as a species, have fascinated me for as long as I've had the chance to study them. They, on the outside, are remarkably similar to humans, save for the nearly homogenous skin colour. Oran races are generally split amongst hair and eye colour, which are lines drawn partly by genetics, and partly by nutrition; metals in the food supply alter the production of pigments. It's on the inside that they being to be very different: an Oran's heart is a 12-chambered monstrosity not unlike a peristaltic pump, placed squarely in the middle of the chest, between the two lobes of the lung, which has a larger capacity than that of a human's two lungs combined.

For the sake of this paper, the important thing to note, though, is the peculiarity of the Oran reproductive system, or, more specifically, the sexes each member may be. Life on Anaret is unique in being one of only three worlds with naturally-occurring quadrasexual life: the sexes traditionally male and female being, rather than being goverend by a single male-or-female gene, having male-or-not-male and female-or-not-female genes, indicating the growth of male or female reproductive structures and the hormones belonging to each; this gives the male and female we are accustomed with, as well as hermaphroditic individuals, which possess the dominant alleles of both genes, and sterile individuals, which possess the recessive alleles. Reproduction may only occur during a "heat", when female hormone production has increased enough to permit the release of a female gamete; these same hormones also trigger a drastic decrease in the production and viability of male gametes in hermaphroditic individuals, reducing the chance of accidental self-fertilization to zero in the month prior to release of the female gamete, and maintaining that level throughout the heat ([Karsae 2817: 473](#karsae2817); [Johnson 3020](#johnson3020)). Having four sexes, most Oran languages having grammatical gender either do not distinguish between them, or distinguish between all of them individually. The latter are in the minority of the sample, as are gendered terms&mdash;most Oran have no policemen or policewomen, husbands or wives, or sons or daughters.

The Oran also exhibit lifespans longer than those of we humans, who only recently broke the two-hundred-year mark; the current life expectancy of a child born this year in the capital city of the Anaretian Directory, Ennanö, is just over three hundred fifty-two years, and one subspecies genetically engineered at the beginning of Oran expansion into space has lives extending well over a thousand years&mdash;the exact number is unknown, as only recently have they begun to die of natural causes. If you ask an Oran how old they are, be careful that they're giving you their age in Earth years, as is standard among humans, and not Anaret years, or "Standard Imperial Year" to the Oran, which is approximately four times longer. Some of the dates given in this paper will seem unrealistically out-of-date, but I assure you, they are not so long ago to the Oran.

### 1.3 State of Saan

Saan is a healthy language, with over fourteen billion native speakers on numerous worlds. It is one of the three official languages of the Directory of Anaret, and by extension is one of the more numerous official languages of the Anaretian Empire. Its primary population centers are spread throughout the rimward side of the Luminous Veil, with the notable exception of the [TODO: planet name] colony.

With widespread education, intantaneous communication, and as the result of early colonial policies, there are few dialects. The greatest number are found on Anaret itself, in the more rural coastal towns and villages and retreats nestled away in the forests spanning the northern part of the [TODO: continent name] Shield up to the Grey Mountains. Many of the earlier colonial worlds Saan is spoken on have developed distinct accents and dialects, but these will be ignored for the most part, save for examples that would be grammatical in them, but not in Standard Saan.

On Anaret, the most distinct dialect is that of Jaaliförmaqh, which may be translated as "Stormwatch", which is spoken on the southernmost headlands of the Blue Coast. The village there maintains a quaint, traditional air in the shadow of the Jaaliförmeu lighthouse, which &mdash; along with its sister-tower across the straight on Em Island &mdash; guided merchant ships for two hundred years prior to the widespread use of a satellite global positioning system ([Nora 2990](#nora2990)). According to official censuses in 2960, 2980, and 3000, the Jaaliförmaqh dialect speaking population is stagnant, however, as is the case with the majority of the Anaretian dialects.

On most of the colonial worlds with populations under a billion, the majority of Saan speakers tend to be bilingual or trilingual in the other major languages of the worlds, though again, according to censuses taken every twenty years from 2900 to the present day, these numbers are stagnant or shrinking on almost every world, while the global population of Saan speakers continues to grow at a steady rate.

### 1.4 Generic grammar

Before I move on, I'd like to note some of the basic features of Saan grammar, to prepare you for the coming chapters. Saan, similar to its neighbours, is head-initial, though not nearly as strongly so as a language like Suånwe. In the general order of its sentences, verbs precede objects, and subjects come at the front of the sentence; other clauses tend to follow the object, save for temporal structures, which generally immediately follow the verb. Temporal constructions, and to a lesser extent adverbial constructions, are not fixed in their positions, however, and may move freely about the sentence, bar one location &mdash; they never appear between the subject and the verb&mdash;the only dialects that allow this are the Jaaliförmaqh dialect and its nearby neighbour, Southern Rural Saan. Nouns decline for the negative, singular and plural numbers, as well as clusivity, where the inclusive is marked. Adjectives are not marked. Verbs agree with the person of the subject&mdash;simple subjects may be dropped, and only remain in verb conjugation&mdash;and additionally are marked for one of several tenses. More on these will be covered in the sections [Nouns and Adjectives][self_nouns_and_adjectives], [Other Morphology][self_other_morphology], and [Verbs][self_verbs], respectively.

## 2. Phonology

The traditional phonology of Saan was described by the Oran linguist Tayme in the late 10<sup>th</sup> century ([Tayme circa 980](#tayme900)). While some things have changed since then, the bulk of their research is still valid, and is the basis for nearly all textbooks on the language; I will be presenting their phoneme inventory alongside my own, which I developed from their work and several many hours of recordings taped on the campus of the Onizue Academy, including several student news programs complemented with recordings of the state-run morning news program, and the university choir, which was complemented with my recordings of live entertainment events and concerts.

### 2.1 Consonants

<clone class="tb-center row-headers tb-pair"><caption>Tayme Analysis</caption></clone>
|         |Labial|Coronal|Palatal|Dorsal|
|---------|------|-------|-------|------|
|Nasal    |m     |n      |ɲ      |ŋ     |
|Stop     |p b   |t d    |c ɟ    |k g   |
|Fricative|f v   |s z    |ɕ ʑ    |x χ   |
|Affricate|      |ts tɕ dʑ|cɕ ɟʑ |      |
|Other    |w     |r l    |ʎ j    |      |

<clone class="tb-center row-headers tb-pair"><caption>Tilghman Analysis</caption></clone>
|         |Labial|Coronal|Palatal|Dorsal|
|---------|------|-------|-------|------|
|Nasal    |m     |n      |ɲ~ŋ<clone-p colspan=2></clonep>|
|Stop     |p b   |t d    |c ɟ    |k g   |
|Fricative|f     |s      |ʃ~ɕ    |x χ̝   |
|Affricate|      |ts tʃ dʒ|cɕ ɟʑ |      |
|Other    |β̞     |l      |lʲ j   |ʀ~ʁ   |

The primary difference is the reanalysis of voiced fricatives as allophones of the voiceless fricatives: when Tayme wrote their notes, voiced fricatives appeared word-initially and intervocalically; now, they appear only intervocalically or adjacent to voiced stops or affricates. Additionally, I have found that /ɲ/ and /ŋ/ have merged, giving /ɲ~ŋ/. /w/ long ago lost its velar aspect and become /β̞/, though it remains /w/ in the Jaaliförmaqh dialect, suggesting that the innovation occurred before widespread spacetravel. /ʎ/ has been found to actually be /lʲ/ in most dialects, though this innovation postdates spacetravel&mdash;many Anaretian dialects and the major dialects of two early colonies retain /ʎ/; in the dialect local to Ennanö, it has completely merged with /l/. Some time in the 16<sup>th</sup> century, /r/ became /ʀ~ʁ/, forcing /χ/ to rise up to /χ̝/.

Pure voiceless stops are lenius, though many younger speakers are beginning to aspirate them in the onsets of stressed syllables, with a smaller minority&mdash;generally from the [TODO: name] colony&mdash;also aspirating word-finally. Voiced stops, similarly, are strongly voiced among older speakers, with a hint of implosion, whereas younger speakers use a weaker partial voicing instead.

#### 2.1.1 Allophony and Sandhi

[TODO: this section needs filling out]

### 2.2 Vowels

<clone class="tb-center row-headers tb-pair"><caption>Tayme Analysis</caption></clone>
|         |Front|Central|Back|
|---------|-----|-------|----|
|Close    |i    |ÿ      |u̞   |
|Close-mid|e    |ə      |o̞   |
|Open-mid |ɛ    |œ̈      |    |
|Open     |     |ɐ̞      |ɒ   |
|Dipthongs|æ͡i æ͡ə æ͡u|ə͡i ə͡u ɐ͡i ɜ͡i|o͡i u͡i|

<clone class="tb-center row-headers tb-pair"><caption>Tilghman Analysis</caption></clone>
|         |Front|Central|Back|
|---------|-----|-------|----|
|Close    |i    |       |u̞   |
|Close-mid|e̞    |ə      |o̞   |
|Open-mid |     |ɜ      |    |
|Open     |æ    |ɐ̞      |ɒ   |
|Dipthongs|æ͡ə y͡i|       |    |

Tayme's analysis holds together similarly well for vowels, though again, some changes have occurred. I've found that /œ̈/ unrounded to become /ɜ/, and /ÿ/ merged with /u/ except for word-finally, where it became /ɜ/ as well. /e/ dropped to /e̞/ some time in the 16<sup>th</sup> century, forcing /ɛ/ down to /æ/. Many of what Tayme analyzed as dipthongs are actually combinations with /j/ and /β̞/, except for /u͡i/, which has become /y͡i/.

/o̞/ and /ɐ̞/ have tendencies to become /ə/ in unstressed syllables. /i/, likewise, becomes [ɪ], and /e̞/ and /æ/ both become [ɛ]. In some cases, when consonants of high sonority like nasals (/m n ɲ~ŋ/) and approximants (/l lʲ ʀ~ʁ/) are in a coda position, and the vowel is /ə/, /ə/ may be dropped, and the nasal or approximant will become the new nucleus. This does not happen with /j/ and /β̞/ due to their vowel-like nature.

### 2.2.1 Allophony and Sandhi

There is some fronting of back vowels in the vicinity of front vowels; namely, /u/ becomes [y] when in a syllable adjacent to one containing /i/, and /o̞/ becomes [œ] when in a syllable adjacent to one containing /e̞/.

### 2.3 Syllable Structure

The syllable structure of Saan is more complex than that of other major Oran languages like Naretsov, but only marginally so.
--TODO

### 2.4 Romanization

The native script for Saan has not been added to Unicode, and so I have developed this romanization scheme for it.

<clone class="tb-center tb-pair"><caption>Consonants</caption><clone>
|Phoneme|Glyph| |Phoneme|Glyph|
|-------|-----|-|-------|-----|
|m      |m    | |ʃ~ɕ    |ś    |
|n      |n    | |x      |h    |
|ɲ~ŋ    |ń    | |χ̝      |qh   |
|p      |p    | |ts     |ć    |
|b      |b    | |tʃ     |tś   |
|t      |t    | |dʒ     |dś   |
|d      |d    | |cɕ     |cś   |
|c      |c    | |ɟʑ     |jś   |
|ɟ      |j    | |β̞      |w    |
|k      |k    | |l      |l    |
|g      |g    | |lʲ     |ll   |
|f      |f    | |j      |y    |
|s      |s    | |ʀ~ʁ    |r    |

<clone class="tb-center tb-pair"><caption>Vowels</caption></clone>
|Phoneme|Glyph|
|-------|-----|
|i      |i    |
|u̞      |u    |
|e̞      |e    |
|ə      |ą    |
|o̞      |o    |
|ɜ      |ö    |
|æ      |ę    |
|ɐ̞      |a    |
|ɑ      |aa   |
|æ͡ə     |ëa   |
|y͡i     |ui   |

### 3 









</div>

## References

<clone class="references"></clone>

<a name="johnson3020">Johnson, Peter N. 3020. *Reproduction in Xenoanaretia sapiens.* Marineris DC: University of Valles Marineris. (Doctoral dissertation.)</a>
<a name="karsae2817">Karsae, Dacci. 2817. *Anatomy: 2<sup>nd</sup> edition*. Ennanö: Onizue Academy Press. 473-474.</a>
<a name="nora2990">Nora 2990. Stormwatch diary. In Pellu, Kanna (ed.), *Lighthouses of the Blue Coast,* 54-99. Ennanö: Scakan Books.</a>
<a name="pellu2957">Pellu, Kanna. 2957. *The Blue Coast: Antiquity to the Nuclear Age*. Ennanö: Onizue Academy Press.</a>
<a name="pellu2965">Pellu, Kanna & Mōra, Ryena. 2965. *Cultural Index: 3<sup>rd</sup> edition.* Ennanö: Onizue Academy Press.</a>
<a name="tayme900">Tayme. circa 980. *Notes.* (Handwritten, located in the Onizue Academy Digital Archive from 2300)
<a name="urthima2966">ur Thíma, Nara T. & Pellu, Kanna & Minazukara, Kaide & Anaary, Adlei. 2966. *Demographic Survey of the Anaretian Empire*. Nö bllaaw: Naretmisorikon.</a>

<!-- markdown links -->
[wiki_nom]: https://en.wikipedia.org/wiki/Nominative_case
[self_nouns_and_adjectives]: #nanda
[self_other_morphology]: #morpho
[self_verbs]: #verbs