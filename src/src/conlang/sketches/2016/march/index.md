---
title: Saan -- March 2016
generate:
  clone: true
  nav: true
scripts:
  - index.js
static-scripts:
  - main.js
  - leipzig.js
style: >
  .center{text-align:center}
  .bold{font-weight:bold}
  .italic{font-style:italic}
  .small{font-size:70%}
  #abbreviation-table td:first-child{font-variant:small-caps}
  .left-headers th{text-align:left}
  .references a {color:inherit;display:block;text-indent:-22px;padding:2px 0 2px 30px}
  .references a:target{background:#f8f8a8}
  @media (min-width: 680px) {
    .references {column-count:2;-moz-column-count:2;-webkit-column-count:2}
  }
templates:
  header-top: >
    <a href="/">home</a>
    <a href="#top">top</a>
    <hr/>
---

# <a name="top">The Saan Language</a>
<div class="center small italic">C. LaCourt &mdash; 31 March 2016</div>
<div class="center bold">A. Tilghman<br/>21 August 3024</div>

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

## 1. Introduction
Saan, a tongue with over fourteen billion speakers spread over sixty-seven worlds, originates along the famous Blue Coast of Anaret, a region known for its extensive fishing and shipping industries, and formerly for large salt mines that dotted the low hills at the western border, though many have closed by modern times. The region was rapidly entered a period of enlightenment following extensive colonial activity by the inland and island nations, and from those same nations the language gained extensive vocabulary in the disciplines of government and trade. Independence movements at the end of the first colonial era granted the region the freedom to build its own government, the very same government that when matured became the core founding member of the Anaretian Directory ([Pellu 2957](#pellu2957)). Today, the shore is dotted with some of the greatest cities in all the empire, which play host to to a burgeoning population of over half a billion Oran, Ngemans, and Qali. The region is also home to the prestigious Onizue Military Academy, named for one of the most prestigious families of the Ngeman aristocracy, and one of the two permanent venues for the semiannual Imperial Defense Expo.

### 1.1 People of the Blue Coast
According to the introduction to Pellu and Mōra's *Cultural Index: 3<sup>rd</sup> edition* ([2961](#pellu2961)), the inhabitants of Anaret's Blue Coast region for centuries held a strange middle ground among their neighbours. Their communities were larger than the numerous villages dotting the Golden Plains, yet smaller than the cities that could be found tucked away out in the [TODO: name] Archipelago, all of which were dwarfed by the true urban centers built in the Grey Mountains and northern plains. Similarly, between the loose yet linear family structure found among the plains-dwwellers and the tigher, more nuclear families of the islands, on the Blue Coast, bonds between generations tend to be strong, with a repect and wisdom being traded equally; despite this, single family units are very nuclear&mdash;children are raised by their parents and the community, and are free to move as they see fit when they come of age. This system of community-rearing and strongly nuclear family units is unique on Anaret, though it has shown up on some colonial and client worlds ([ur Thíma 2966](#urthima2966)).

### 1.2 The Oran
The Oran, as a species, have fascinated me for as long as I've had the chance to study them. They, on the outside, are remarkably similar to humans, save for the nearly homogenous skin colour. Oran races are generally split amongst hair and eye colour, which are lines drawn partly by genetics, and partly by nutrition; metals in the food supply alter the production of pigments. It's on the inside that they being to be very different: an Oran's heart is a 12-chambered monstrosity not unlike a peristaltic pump, placed squarely in the middle of the chest, between the two lobes of the lung, which has a larger capacity than that of a human's two lungs combined.

For the sake of this paper, the important thing to note, though, is the peculiarity of the Oran reproductive system, or, more specifically, the sexes each member may be. Life on Anaret is unique in being one of only three worlds with naturally-occurring quadrasexual life: the sexes traditionally male and female being, rather than being goverend by a single male-or-female gene, having male-or-not-male and female-or-not-female genes, indicating the growth of male or female reproductive structures and the hormones belonging to each; this gives the male and female we are accustomed with, as well as hermaphroditic individuals, which possess the dominant alleles of both genes, and sterile individuals, which possess the recessive alleles. Reproduction may only occur during a "heat", when female hormone production has increased enough to permit the release of a female gamete; these same hormones also trigger a drastic decrease in the production and viability of male gametes in hermaphroditic individuals, reducing the chance of accidental self-fertilization to zero in the month prior to release of the female gamete, and maintaining that level throughout the heat ([Karsae 2817: 473](#karsae2817); [Johnson 3020](#johnson3020)). Having four sexes, most Oran languages having grammatical gender either do not distinguish between them, or distinguish between all of them individually. The latter are in the minority of the sample, as are gendered terms&mdash;most Oran have no policemen or policewomen, husbands or wives, or sons or daughters.

### 1.3 State of Saan

Saan is a healthy language, with over fourteen billion native speakers on numerous worlds. It is one of the three official languages of the Directory of Anaret, and by extension is one of the more numerous official languages of the Anaretian Empire. Its primary population centers are spread throughout the rimward side of the Luminous Veil, with the notable exception of the [TODO: planet name] colony.

With widespread education, intantaneous communication, and as the result of early colonial policies, there are few dialects. The greatest number are found on Anaret itself, in the more rural coastal towns and villages and retreats nestled away in the forests spanning the northern part of the [TODO: continent name] Shield up to the Grey Mountains. Many of the earlier colonial worlds Saan is spoken on have developed distinct accents and dialects, but these will be ignored for the most part, save for examples that would be grammatical in them, but not in Standard Saan.

On Anaret, the most distinct dialect is that of [TODO: translate "Stormwatch"], literally "Storm-watch", which is spoken on the southernmost headlands of the Blue Coast. The village there maintains a quaint, traditional air in the shadow of the [TODO: translate "Stormwatch"] lighthouse, which &mdash; along with its sister-tower across the straight on Em Island &mdash; guided merchant ships for two hundred years prior to the widespread use of a satellite global positioning system. ([Nora 2990](#nora2990))

## References

<clone class="references"></clone>

<a name="johnson3020">Johnson, Peter N. 3020. *Reproduction in Xenoanaretia sapiens.* Marineris DC: University of Valles Marineris. (Doctoral dissertation.)</a>
<a name="karsae2817">Karsae, Dacci. 2817. *Anatomy: 2<sup>nd</sup> edition*. Ennanö: Onizue Academy Press. 473-474.</a>
<a name="nora2990">Nora 2990. Stormwatch diary. In Pellu, Kanna (ed.), *Lighthouses of the Blue Coast,* 54-99. Ennanö: Scakan Books.
<a name="pellu2957">Pellu, Kanna. 2957. *The Blue Coast: Antiquity to the Nuclear Age*. Ennanö: Onizue Academy Press.</a>
<a name="pellu2961">Pellu, Kanna & Mōra, Ryena. 2961. *Cultural Index: 3<sup>rd</sup> edition.* Ennanö: Onizue Academy Press.</a>
<a name="urthima2966">ur Thíma, Nara T. & Pellu, Kanna & Minazukara, Kaide & Anaary, Adlei. 2966. *Demographic Survey of the Anaretian Empire*. Nó błau: Naretmisorikon.</a>

<!-- markdown links -->
[wiki_nom]: https://en.wikipedia.org/wiki/Nominative_case