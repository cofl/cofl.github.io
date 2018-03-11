---
title: September 2015 Sketch
template: index.jade
leipzig: true
uplink: ../
---
<script src="index.js"></script>

# September 2015 Sketch
<!--{#top.center}-->

## Phonology

<div class="flex-parent">
<div class="flex-child">

|           |Labial|Coronal              |Dorsal        |Glottal|
|-----------|------|---------------------|--------------|-------|
|Stop/Flap  |p pː  |t tː d~ɾ dː r        |k kː ɣ~g ɣː~gː|       |
|Affricate  |      |ts tʃ t̠ɕ̠~c̟ç̟          |              |       |
|Nasal      |m mː  |n nː                 |ŋ ŋː          |       |
|Fricative  |f fː  |θ s sː ʃ ʃː ɕ̠~ç̟ ɕ̠ː~ç̟ː|h p<!--{colspan=2}-->|<!--{.hidden}-->|
|Approximant|w~ʋ   |l lː                 |j i ɹ         |       |
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|           |Labial|Coronal            |Dorsal   |Glottal|
|-----------|------|-------------------|---------|-------|
|Stop/Flap  |p pp  |t tt d dd rr       |c cg g gg|       |
|Affricate  |      |ts tj tsh          |         |       |
|Nasal      |m mm  |n nn               |nh/hn nhn|       |
|Fricative  |f ff  |th s ss j sj sh sjh|h pp<!--{colspan=2}-->|<!--{.hidden}-->|
|Approximant|w     |l ll               |y i r    |       |
<!--{table:.tb-center.row-headers}-->
</div>
</div>

- The exact pronunciation of geminate stops is variable: /Cː/, /ʔC(ː)/, and /C̚C/ are all acceptable.
- /ɹ/ is geminated to /r/.
- /p t f θ s ʃ/ are consistently voiced between vowels (V_V) to [b d v ð z ʒ].
- All consonants when adjacent assimilate in voicing following the first consonant of the cluster.
- /m n ŋ/ when the coda of an onsetless unstressed syllable often become [m̩ n̩ ŋ̍], with the elision of the vowel in that syllable.
- Final devoicing when at the end of a phrase, or when the following word begins with a voiceless consonant.

<div class="flex-parent">
<div class="flex-child">

|        |Front|Center|Back     |
|--------|-----|------|---------|
|High~Mid|i iː |      |ɯ~u ɯː~uː|
|Mid~Low |ɛ̝ ɛ̝ː |ɐ̞ ɐ̞ː  |o̞ o̞ː     |
<!--{table:.tb-center.row-headers}-->
</div>
<div class="flex-child">

|        |Front|Center|Back   |
|--------|-----|------|-------|
|High~Mid|i ii |      |u uu   |
|Mid~Low |e ee |a aa  |o ou/oo|
<!--{table:.tb-center.row-headers}-->
</div>
</div>
<!-- - Before /ɺ/, /ɯ~u/ is always [ɯ]. Counterwise, before /d~ɾ/, [u].-->

- /t/ consistently becomes [t͡s] before [u].
- Long vowels become short before geminate consonants.
- /o̞/ often becomes /ə/ in non-final unstressed positions.
- /u/ is often devoiced between voiceless consonants, even across word boundaries.

### Syllable Structure
Syllable structure is a basic (C)(y,w)V(T), where:

* **C**: any consonant except &lsaquo;y w&rsaquo; Geminate consonants may not appear word-initially.
* **V**: any vowel.
* **T**: any consonant except geminate consonants. The most common are nasals.
  - Very rarely, as a result of lost wholly prenasalized consonants, <nd> and <hnc> may appear.

### Stress and Isochrony

- Stress-timed. Stressed syllables are longer than unstressed syllables.
  - Unstressed syllables are shorter than stressed syllables with short vowels, are shorter than syllables with long vowels; syllables with long vowels are always stressed.
    - If the vowel length has been lost due to a following geminate consonant, the syllable remains stressed.
    - Often, when there are no neighbouring long-voweled syllables to a short-voweled stressed syllable, the short vowel will be lengthened.
- Unstressed syllables following a stressed syllable tend to have the same pitch.
- Stressed syllables bear the common prosodic changes:
  - Pitch prominence, increased length, increased volume

Additional prosodic rules will be denoted later along with their relavent phenomena, but for the most part they're going to follow English for now, until I can come up with something better/different.

## Basic Grammar and Syntax

The default word order is SOV; the language is usually head-final, with a large amount of suffixal case marking and derivation, generally in an aglutinative manner. In the case of possession and genetives, the head-final order is required, as the genetive case is a core case, and thus another core case cannot be added.

### Verb classes

|Class|_*npst*_|*_pst_*|*_rel_*|*_ger_*|
|----:|--------|-------|-------|-------|
|1    |-u      |-To    |-o     |-so    |
|2    |-u      |-Ta    |-a     |-so    |
|3    |-i      |-tto   |-i     |-iso   |
|4    |-∅      |-Ta    |-Ta    |-aso   |

## Grammar Testing Bed
<div data-gloss>
  <p>Lam ta nou nei ni cinun seët e oppaa coma se iyetto.</p>
  <p>lam {} ta {} no -o {} nei {} ni {} cin -un {} se -et {} e {} oh -ha -a {} com -a {} se {} i- ye -tto</p>
  <p>man {} 2S[NOM] {} know -REL {} girl[NOM] {} she[NOM] {} book -ACC {} 3S.M -LAT {} 1S[NOM] {} see -REL -ADVR {} give -REL {} he[NOM] {} VEN- go -PST</p>
  <p>lam {} ta {} noː {} {} nɛ̝ː {} ni {} kinun {} {} sɛ̝ːt {} {} ɛ̝ {} opːaː {} {} {} coma {} {} sɛ̝ {} ijɛ̝tːo {} {}</p>
  <p>The man I saw the girl you know give the book to came.</br><i>The man You know the girl She the book to him I saw give He came</i></p>
</div>
<div data-gloss>
  <p>Ni soudso pei.</p>
  <p>ni {} soud -so {} pe -e</p>
  <p>sun[NOM] {} illuminate -GER {} be -NPST</p>
  <p>ni {} soːdzo {} {} pɛ̝ː {}</p>
  <p>The sun shines. (*gnomic*)</p>
</div>
<div data-gloss>
  <p>Ni soudu.</p>
  <p>ni {} soud -u</p>
  <p>sun[NOM] {} illuminate -NPST</p>
  <p>ni {} soːɾu {}</p>
  <p>The sun is shining.</p>
</div>
<div data-gloss>
  <p>Ni souddo.</p>
  <p>ni {} soud -do</p>
  <p>sun[NOM] {} illuminate -PST</p>
  <p>ni {} sodːo {}</p>
  <p>The sun shone.</p>
</div>
<div data-gloss>
  <p>Ni osoudu.</p>
  <p>ni {} o- soud -u</p>
  <p>sun[NOM] {} PERF.PROG- illuminate -NPST</p>
  <p>ni {} osoːɾu {} {}</p>
  <p>The sun has been shining.</p>
</div>
<div data-gloss>
  <p>Ni offushi soudu.</p>
  <p>ni {} offu -shi {} soud -u</p>
  <p>sun[NOM] {} new -GEN {} illuminate -NPST</p>
  <p>ni {} ofːuʑ̠u {} {} soːɾu {}</p>
  <p>The sun is shining again.</p>
</div>
<div data-gloss>
  <p>Ni moushi soudu.</p>
  <p>ni {} mou -shi {} soud -u.</p>
  <p>sun[NOM] {} morning -GEN {} illuminate -NPST</p>
  <p>The sun will shine tomorrow.</p>
</div>
<div data-gloss>
  <p>Ni cyeu soudu.</p>
  <p>ni {} cye -u {} soud -u</p>
  <p>sun[NOM] {} bright -NPST {} illuminate -NPST</p>
  <p>The sun shines brightly.</p>
</div>
<div data-gloss>
  <p>Cye ni soudu.</p>
  <p>cye {} ni {} soud -u</p>
  <p>bright[NOM] {} sun[NOM] {} illuminate -NPST</p>
  <p>The bright sun shines.</p>
</div>
<div data-gloss>
  <p>Ni oporet mehnu iyei.</p>
  <p>ni {} opor -et {} mehn -u {} i- ye -e</p>
  <p>sun[NOM] {} horizon -LAT {} now -NPST {} VEN- go -NPST</p>
  <p>The sun is rising now.</p>
</div>
<div data-gloss>
  <p>Anmi polla.</p>
  <p>an -mi {} pol-la</p>
  <p>person[NOM] -COLL {} shout -PST</p>
  <p>All the people shouted.</p>
</div>
<div data-gloss>
  <p>Anmi tog polla.</p>
  <p>an -mi {} tog {} pol -la</p>
  <p>person[NOM] -COLL {} some[NOM] {} shout -PST</p>
  <p>Some of the people shouted.</p>
</div>
<div data-gloss>
  <p>Anmi togme polla pitecga.</p>
  <p>an -mi {} tog -me {} pol -la {} pi- tec -ca</p>
  <p>person[NOM] -COLL {} some[NOM] -PL {} shout -PST {} two- TEMP -PST</p>
  <p>Many of the people shouted twice.</p>
</div>
<div data-gloss>
  <p>Shwi anme polso motsocu pei.</p>
  <p>shwi {} an -me {} pol- so {} motsoc -u {} pe -e</p>
  <p>happy[NOM] {} person[NOM] -PL {} shout -GER {} often -NPST {} be -NPST</p>
  <p>Happy people often shout.</p>
</div>
<div data-gloss>
  <p>Cathin ollo halla.</p>
  <p>cath -in {} oll -o {} hal -la</p>
  <p>cat[NOM] -DIM {} up -PST {} jump -PST</p>
  <p>The kitten jumped up.</p>
</div>
<div data-gloss>
  <p>Cathin messollet halla.</p>
  <p>cath -in {} mess -oll -et {} hal -la</p>
  <p>cat[NOM] -DIM {} table -SUP -LAT {} jump -PST</p>
  <p>The kitten jumped onto the table.</p>
</div>
<div data-gloss>
  <p>Haol micathin hinhna weiddo.</p>
  <p>haol {} mi- cath -in {} hihn -nha {} weid -do</p>
  <p>little[NOM] {} 1S- cat[NOM] -DIM {} away -PST {} walk -PST</p>
  <p>My little kitten walked away.</p>
</div>
<div data-gloss>
  <p>Haataru.</p>
  <p>haatar -u</p>
  <p>rain -NPST</p>
  <p>It's raining.</p>
</div>
<div data-gloss>
  <p>Gein jaarro.</p>
  <p>gein {} jaar -ro</p>
  <p>rain[NOM] {} come_down -PST</p>
  <p>The rain came down.</p>
</div>
<div data-gloss>
  <p>Cathin geinac loudu.</p>
  <p>cath -in {} gein -ac {} loud -u</p>
  <p>cat[NOM] -DIM {} rain -SUB {} play -NPST</p>
  <p>The kitten is playing in the rain.</p>
</div>
<div data-gloss>
  <p>Haatarra temmo.</p>
  <p>haatar -ra {} tem -mo</p>
  <p>rain -PST {} end -PST</p>
  <p>The rain has stopped.</p>
</div>
<div data-gloss>
  <p>Cottecu haataru temu.</p>
  <p>cot -tec -u {} haatar -u {} tem -u</p>
  <p>short -TEMP -NPST {} rain -NPST {} end -NPST</p>
  <p>Soon, the rain will stop.</p>
</div>
<div data-gloss>
  <p>E akattu cottecu haataru temu.</p>
  <p>e {} akatt -u {} cot -tec -u {} haatar -u {} tem -u</p>
  <p>1S[NOM] {} hope [NPST] {} short -TEMP -NPST {} rain -NPST {} end -NPST</p>
  <p>I hope the rain stops soon.</p>
</div>
<div data-gloss>
  <p>Hattecga, yejeni aleime hoc saanna.</p>
  <p>hat -tec -ca {} yejeni {} alei -me {} hoc {} saan -na</p>
  <p>one -TEMP -PST {} wild[NOM] {} animal[NOM] -PL {} here {} live -PST</p>
  <p>Once, wild animals lived here.</p>
</div>
<div data-gloss>
  <p>A hihnte!</p>
  <p>a {} hihn -te</p>
  <p>ADHORT {} away -IMP</p>
  <p>Go away!</p>
</div>
<div data-gloss>
  <p>A no yete!</p>
  <p>a {} no {} ye -te</p>
  <p>ADHORT {} COHORT {} go -IMP</p>
  <p>Let's go!</p>
</div>
<div data-gloss>
  <p>Ta a yetsoute.</p>
  <p>ta {} a {} ye -tsou -te</p>
  <p>2S {} ADHORT {} go -SBJV -IMP</p>
  <p>You should go.</p>
</div>
<div data-gloss>
  <p>Yenin eun cweinu maacu.</p>
  <p>ye -nin {} e -un {} cwein -u {} maac -u</p>
  <p>go[NOM] -SUPINE {} 1S -ACC {} please -NPST {} make -NPST</p>
  <p>I will be happy to go.</p>
</div>
<div data-gloss>
  <p>Cottecu se iyeihn</p>
  <p>cot -tec -u {} se {} i- ye -e -hn</p>
  <p>short -TEMP -NPST {} 3S.M[NOM] {} VEN- go -NPST -PFV</p>
  <p>He will arrive soon.</p>
</div>
<div data-gloss>
  <p>Peinin seranna hinhna roonna.</p>
  <p>peinin {} se- ranna {} hihn -nha {} roon -na</p>
  <p>baby[NOM] {} 3S- ball[NOM] {} away -PST {} roll -PST</p>
  <p>The baby's ball has rolled away.</p>
</div>
<div data-gloss>
  <p>Pi yotne hatessi maacu</p>
  <p>pi {} yot -me {} hat -essi {} maac -u</p>
  <p>two[NOM] {} boy[NOM] -PL {} one -ESS {} work -NPST</p>
  <p>The two boys are working together.</p>
</div>
<div data-gloss>
  <p>Se paffan ruudafstiu cyeu maacu.</p>
  <p>se {} paffan {} ruudafsti -u {} cye -u {} maac -u</p>
  <p>3S.PROX[NOM] {} mist[NOM] {} probable -NPST {} clear -NPST {} become -NPST</p>
  <p>This mist will probably clear away.</p>
</div>
<div data-gloss>
  <p>Harra ootjim lainihn gyannu.</p>
  <p>harra {} ootji -m {} lain -ihn {} gyann -u</p>
  <p>beautiful[NOM] {} flower[NOM] -PL {} everywhere -ADE {} grow -NPST
  <p>Lovely flowers are growing everywhere.</p>
</div>
<div data-gloss>
  <p>Me essoun laahnetsou.</p>
  <p>me {} es -so -un {} laahne -tsou</p>
  <p>1PL[NOM] {} eat -GER -ACC {} slow -SBJV</p>
  <p>We should eat more slowly.</p>
</div>
<div data-gloss>
  <p>Ta masper iyeihn</p>
  <p>ta {} mas -per {} i- ye -e -hn</p>
  <p>2S[NOM] {} early -too {} VEN- go -NPST -PFV</p>
  <p>You have come too soon.</p>
</div>
<div data-gloss>
  <p>Ta cyoysoun gyaantsou.</p>
  <p>ta {} cyoy -so -un {} gyaan -tsou</p>
  <p>2S[NOM] {} write -GER -ACC {} tidy -SBJV</p>
  <p>You must write more neatly.</p>
</div>
<div data-gloss>
  <p>Gyaanun wethasun harra palas tshaadu.</p>
  <p>gyaan -un {} wethas -un {} harra {} palas {} tshaad -u</p>
  <p>directly -ACC {} opposite -ACC {} lovely {} palace {} stand -NPST</p>
  <p>Directly opposite stands a wonderful palace.</p>
</div>
<div data-gloss>
  <p>Henni second </p>
  <p></p>
  <p></p>
  <p>Henry's dog is lost.</p>
</div>
<div data-gloss>
  <p></p>
  <p></p>
  <p></p>
  <p>My cat is black.</p>
</div>
<div data-gloss>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>

<!--## Basic points

- differentiate front/back teeth

- SOV.
- Many cases, haven't yet decided what to do with them.
  - <sc>ade</sc>, Adessive, near/at/by
  - <sc>ine</sc>, Inessive, inside
  - <sc>itrt</sc>, Intrative, between; also used as a Distributive.
  - <sc>sup</sc>, Superessive, on top
  - <sc>sub</sc>, Subessive, under
  - <sc>abl</sc>, Ablative, away from
  - <sc>lat</sc>, Lative, to; also used as the Dative case.
  - <sc>caus</sc>, Causal, because/because of; also used as the Benefactive.
  - All the same:
    - <sc>com</sc>, Comitative, with
    - <sc>instr</sc>, Instrumental, (done) with
    - <sc>instructive</sc>, Instructive, by means of.
    - <sc>prol</sc>, Prolative, by way of, through.
  - Subcases:
    - <sc>fin</sc>, Final subcase. Used to produce the Terminative, for example, or the Causal-final.
-->