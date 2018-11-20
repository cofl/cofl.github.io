---
title: The Naretvei Language
template: index.pug
uplink: ../
---
<style>
  #aspect-table td {padding:0 3px;}
  #szcj-chart {margin-left:100px;}
  #szcj-chart td {padding:3px 12px;}
  #gloss-table td:first-child {font-variant:small-caps;}
</style>
<div class="hidden" id="toc-footer">

See also:
[Graded Sentences for Analysis](graded-sentences-for-analysis.html)
[Text Samples](text-samples.html)
</div>

# The Naretvei Language
<!--{#top.center}-->
<div class="author">C. LaCourt<br/>4 April 2015</div>

## a. Conventions used

Some prior knowledge is required before reading this document for full comprehension, and certain conventions are used in compliance with field standards.

- Forward slashes (//) are used around [phonemes](http://en.wikipedia.org/wiki/Phoneme).  
  These are the recognized distinct sounds found in a language. This format is called __broad transcription__.
- Square brackets ([]) are used around [phones](http://en.wikipedia.org/wiki/Phone_(linguistics)).   
  These sounds are absolutes, many of which may be covered by a single phoneme. This format is called __narrow transcription__.
- Pointy braces (&lt;&gt;) are used around [graphemes](http://en.wikipedia.org/wiki/Grapheme).  
  These symbols are used to write down language. They may or may not correlate to phonemes.
- __Bold font__ is used to highlight important terms, and words and phrases in the Naretvei language. It is also used for column and row headers in tables, and to label notes.
- _Italics_ are used to highlight important text in contrast to surrounding text.
- ___Bold italic font___ is used to highlight contrasting text within Naretvei samples, and to label tables when more than one being in a section may cause confusion.
- `Code blocks` are used to neatly organize glosses, and `Code spans` are used to highlight technical terms and phenomena in the Naretvei language. Code spans are not used to highlight technical terms in any other areas.
- "Double quotes" are used around inline text samples not in the Naretvei language, for example: inline translations, explanations, etc. They may also be used around dubious terms and for sarcasm.
- This glosses found in this document follow the [Leipzig Glossing Rules](https://www.eva.mpg.de/lingua/resources/glossing-rules.php), using optional rules 4A and 4B.
- The glossing abbreviations used in this document may be found [here](http://en.wikipedia.org/wiki/List_of_glossing_abbreviations) or in [(§b) the glossary of abbreviations](#b-glossary-of-abbreviations).

Please forgive the lack of proper usage of small-caps for abbreviations found in code blocks. There is no current workaround. Number markers may also be found in lowercase instead of small-caps, this is a bad habit formed over months of improper practices.

Some further conventions are used to label affixes:

 - Suffixes are marked with a preceding hyphen. (ex.: __-xo__)
 - Prefixes are marked with a trailing hyphen. (ex.: **xo-**)
 - Circumfixes are marked with a hyphen between the parts. (ex.: __ha-ne__)
 - Infixes are marked with hyphens on both sides of the affix. (ex.: **-e-**)

 Lastly, the abbreviation "f.r." may be used to refer the reader to the Further Reading section, noting that additional material is available. Example:
 
 > The cat is in may cultures considered to be divine in nature, and the subject of worship (f.r. cats, cat worship).

For readers of the web version of this document, no link will be provided in these circumstances, and the Further Reading section must be navigated to manually with the Table of Contents on the left.

## b. Glossary of Abbreviations

A more complete list may be found on [Wikipedia](http://en.wikipedia.org/wiki/List_of_glossing_abbreviations). These abbreviations are the ones used in this document.

|Abbreviation|Meaning|
|------------|-------|
|1           |first person|
|2           |second person|
|3           |third person|
|adj         |adjectivizer|
|a           |animate gender[^1]|
|circ        |[circumfix](http://en.wikipedia.org/wiki/Circumfix)|
|con         |[conative](http://en.wikipedia.org/wiki/Conation)|
|dim         |[diminutive](http://en.wikipedia.org/wiki/Diminutive)|
|fut         |future tense|
|imp         |[imperative](http://en.wikipedia.org/wiki/Imperative_mood)|
|i           |inanimate gender[^2]|
|inf         |[infinitive](http://en.wikipedia.org/wiki/Infinitive)|
|int         |[intensive](http://en.wikipedia.org/wiki/Intensive)|
|neg         |negation ("not")|
|nmz         |nominalizer|
|obj         |object ("the object marker")|
|pass        |[passive voice](http://en.wikipedia.org/wiki/Passive_voice)|
|pl          |plural|
|poss        |possessive case|
|pot         |[potential](http://en.wikipedia.org/wiki/Irrealis_mood#Potential)|
|pst         |past tense|
|prog        |[progressive aspect](http://en.wikipedia.org/wiki/Continuous_and_progressive_aspects)|
|prs / pres  |present tense|
|q           |[interrogative](http://en.wikipedia.org/wiki/Interrogative)|
|quot        |[quotative](http://en.wikipedia.org/wiki/Quotative)|
|s           |singular|
|subr / sr  |[subordinationalizer](http://en.wikipedia.org/wiki/Subordination_%28linguistics%29)|
<!--{#gloss-table}-->

[^1]: By the list on Wikipedia, _*a*_ marks the agent, but due to the lack of agent-marking in this document, the animate gender gloss _*an*_ has been shortened to it.

[^2]: Again, _*i*_ means something different, but for ease the inanimate gender gloss _*inan*_ has been shortened to it.

## 1 Introduction
The Naretvei language was begun in February 2015, as another re-imagining of the Saadan language that I’d been concocting for over a year. It’s intended to be spoken by a fictional race known as the Oran for a series of stories that have been around longer than the idea for the language itself.

The language features a VSO sentence order, with little distinction between subject and object. It also incorporates ideas and features from multiple previous language sketches going back about two years.

Naretvei is agglutinative and semi-analytic, with each morpheme having only a single meaning, and tending to keep the number of affixes to a minimum. It does however feature some elements of fusional languages, namely the plural nominalizer __-nen__ and a technicality resulting from vowel harmony.

## 2 Phonology and Phonetics
### 2.1 Vowels

<table style="margin-right:60px;">
  <thead><tr><th style="font-style:italic;">Phonemes</th>
    <th>Front</th>
    <th>Center</th>
    <th>Back</th></tr></thead>
    <tr><td style="font-weight:bold;">High</td>
      <td style="text-align:center;">/i/ /y/</td><td></td>
      <td style="text-align:center;">/u/</td></tr>
    <tr><td style="font-weight:bold;">Middle</td>
      <td style="text-align:center;">/e̞/ /ø̞/</td><td></td>
      <td style="text-align:center;">/o/</td></tr>
    <tr><td style="font-weight:bold;">Low</td>
      <td style="text-align:center;">/æ/</td>
      <td style="text-align:center;">/a/*</td></tr></table>
<table>
  <thead><tr><th style="font-style:italic;">Orthography</th>
    <th>Front</th>
    <th>Center</th>
    <th>Back</th></tr></thead>
    <tr><td style="font-weight:bold;">High</td>
      <td style="text-align:center;">&lt;i&gt; &lt;ü&gt;</td><td></td>
      <td style="text-align:center;">&lt;u&gt;</td></tr>
    <tr><td style="font-weight:bold;">Middle</td>
      <td style="text-align:center;">&lt;e&gt; &lt;ö&gt;</td><td></td>
      <td style="text-align:center;">&lt;o&gt;</td></tr>
    <tr><td style="font-weight:bold;">Low</td>
      <td style="text-align:center;">&lt;ä&gt;</td>
      <td style="text-align:center;">&lt;a&gt;</td></tr></table>

<span style="font-weight:bold;">Note *:</span> Technically /ɐ̞/, but displayed as /a/ here for simplicity.

- Naretvei features long and short vowel qualities.
- Vowel harmony is present: &lt;a o u&gt; are fronted to &lt;ä ö ü&gt; and likewise &lt;ä ö ü&gt; are dropped back to &lt;a o u&gt; when the first vowel of them stem that is not &lt;e&gt; or &lt;i&gt; is of either group.
    - &lt;a o u&gt; often undergo fronting after &lt;i&gt; in single-syllable words containing only &lt;e i&gt; as vowels.
- /u/ is often devoiced to /ʷù̥/ when there is no coda, especially after &lt;c j p&gt;.
- /i/ is often devoiced to /í̥/ when there is no coda, especially after &lt;c j p&gt;
- /e̞/ becomes [ɛ] between consonants.
- The rules governing /e̞/ are covered in [§2.3: E-mutation](#23-e-mutation).

### 2.2 Consonants

<table style="margin-right:60px;">
  <thead>
    <tr><th style="font-style:italic;">Phonemes</th>
      <th>Bilabial</th>
      <th>Dental~Palatal</th>
      <th>Velar</th>
      <th>Uvular</th></tr></thead>
    <tr>
      <td style="font-weight:bold;">Plosive</td>
      <td style="text-align:center;">/p/ /b/</td>
      <td style="text-align:center;">/t/ /d/</td>
      <td style="text-align:center;" colspan="2">/k~q/</td></tr>
    <tr>
      <td style="font-weight:bold;">Nasal</td>
      <td style="text-align:center;">/m/</td>
      <td style="text-align:center;">/n/ [ɳ]</td>
      <td style="text-align:center;" colspan="2" >/ŋ~ɴ/</td>
    <tr>
      <td style="font-weight:bold;">Fricative</td>
      <td style="text-align:center;">/v/</td>
      <td style="text-align:center;">/s/ /z/</td>
      <td style="text-align:center;">/x/</td>
      <td style="text-align:center;">/χ/</td></tr>
    <tr>
      <td style="font-weight:bold;">Affricate</td>
      <td style="text-align:center;"></td>
      <td style="text-align:center;">/t͡s/ /d͡z/</td></tr>
    <tr>
      <td style="font-weight:bold;">Other</td>
      <td style="text-align:center;">/w/</td>
      <td style="text-align:center;">/l/ /r~ɾ/ /j/ [ɥ]</td>
      <td></td><td style="text-align:center;">/ʁ/</td></tr></table>

<table>
  <thead>
    <tr><th style="font-style:italic;">Orthography</th>
      <th>Bilabial</th>
      <th>Dental~Palatal</th>
      <th>Velar</th>
      <th>Uvular</th></tr></thead>
    <tr>
      <td style="font-weight:bold;">Plosive</td>
      <td style="text-align:center;">&lt;p&gt; &lt;b&gt;</td>
      <td style="text-align:center;">&lt;t&gt; &lt;d&gt;</td>
      <td style="text-align:center;" colspan="2">&lt;k&gt;</td></tr>
    <tr>
      <td style="font-weight:bold;">Nasal</td>
      <td style="text-align:center;">&lt;m&gt;</td>
      <td style="text-align:center;">&lt;n&gt;</td>
      <td style="text-align:center;" colspan="2">&lt;nq&gt;</td></tr>
    <tr>
      <td style="font-weight:bold;">Fricative</td>
      <td style="text-align:center;">&lt;v&gt;</td>
      <td style="text-align:center;">&lt;s&gt; &lt;z&gt;</td>
      <td style="text-align:center;">&lt;h&gt;</td>
      <td style="text-align:center;">&lt;x&gt;</td></tr>
    <tr>
      <td style="font-weight:bold;">Affricate</td>
      <td style="text-align:center;"></td>
      <td style="text-align:center;">&lt;c&gt; &lt;j&gt;</td></tr>
    <tr>
      <td style="font-weight:bold;">Other</td>
      <td style="text-align:center;">&lt;w&gt;</td>
      <td style="text-align:center;">&lt;l&gt; &lt;r&gt; &lt;y&gt;</td>
      <td></td><td style="text-align:center;">&lt;rr&gt;</td></tr></table>

 - No aspiration is noted here, but may occur in speech.
 - /x/ is allophonic with [h], and is sometimes dropped or pushed back to [χ].
 - All consonants except &lt;r&gt; can become geminate, or long. The orthography for /ŋː/ is &lt;nqq&gt;, for /tt͡s/ is &lt;cc&gt;, and for /dd͡z/ is &lt;jj&gt;.
 - [ɳ] and [ɥ] appear from /n/ and /w/ as products of e-mutation, documented in [§2.3: E-mutation](#23-e-mutation).
 - In consonant clusters, consonants undergo voicing assimilation, where voiceless consonants following an initial voiced consonant themselves become voiceless, though voiced consonants following and initial voiceless consonant do not become voiceless, nor does the initial consonant become voiced to match the rest. The exception to this is consonants whose only distinction is voicing, for example /p/ and /b/, for which the pair always becomes the long form of the initial consonant.
 - The clusters &lt;c cc&gt; and &lt;j jj&gt; as well as the consonants &lt;s z&gt; shift around depending on the following vowel:
<table id="szcj-chart">
    <thead>
      <tr><td></td>
        <th>c cc</th>
         <th>j jj</th>
         <th>s</th>
         <th>z</th></tr></thead>
       <tr><th>e</th><td>t͡ʃɛ</td><td>d͡ʒɛ</td><td>ʃe̞</td><td>ʒʲe̞</td></tr>
       <tr><th>ü</th><td>t͡ʃy</td><td>d͡ʒy</td><td>ʃy</td><td>ʒy</td></tr>
       <tr><th>i</th><td>t͡ʃi</td><td>ʒi</td><td>ʃi</td><td>zi</td></tr>
       <tr><th>ö</th><td>t͡ʃø</td><td>ʒø</td><td>ʃø</td><td>zø</td></tr>
       <tr><th>a</th><td>t͡sa</td><td>d͡zɛ</td><td>sa</td><td>za</td></tr>
       <tr><th>o</th><td>t͡sɛ</td><td>d͡zɛ</td><td>so</td><td>zo</td></tr>
       <tr><th>u</th><td>t͡s̻ɛ</td><td>d͡z̻u</td><td>s̻u</td><td>z̻u</td></tr>
       <tr><th>ä</th><td>t͡s̻æ</td><td>d͡z̻æ</td><td>s̻æ</td><td>z̻æ</td></tr>
   </table>

 __Note:__ &lt;z j&gt; are currently undergoing a shift, become purely /z/ and /ʒ/ respectively. The standard pronunciation remains /ʑ d͡ʑ/, however, so for this document they will be written as such.

### 2.3 E-mutation
 
 E-mutation is the process by which the sound /e̞/ mutates or palatalizes the previous consonant. The effect only occurs with the /e̞/, not the long /e̞ː/ (which becomes [eː]), and only after single consonants, not consonant clusters or long consonants, where it becomes /ɛ/. It does not alter the consonants &lt;v r rr x nq&gt;. Lastly, it does not apply to &lt;s&gt;, which has its own rules. This rule does operate across morpheme and word boundaries.
 
 In all applicable cases, the existence of /e̞/ causes palatalization, effectively becoming /ʲe̞/, so, for example:
 
 - [be̞]→[bʲe̞]
 - [ke̞]→[kʲe̞]
 - [me̞]→[mʲe̞]


  The special cases for this are as follows:
  
  - [we̞]→[ɥe̞]*
  - [ne̞]→[ɳe̞]


<span style="font-weight:bold;">Note *:</span> /ɥ/ is functionally equivalent to /jʷ/, which I treat as functionally equivalent to /wʲ/.


### 2.4 Phonotactics and Syllable Structure
The syllable structure of Naretvei is a fairly loose (h)(C)(R|F)V(V)(R)(C(C)). A final &lt;y&gt; may appear after long consonants to separate them from adjacent identical consonants, i.e. *&lt;nnn&gt;→&lt;nnyn&gt;.

__C__, consonants: &lt;p b t d k m n nq v s z h x c j l&gt;  
__R__, glides: &lt;rr r l y w&gt;  
__F__, fricatives: &lt;s h&gt;
__V__, vowels:  &lt;i e o ö u ü a ä&gt;

__Note:__ For all intents and purposes, affricates are treated as single consonants.

- The following rules regulate the onset, (h)(C)(R|F):
  - No doubled or long consonants.
  - Initial &lt;h&gt; can only appear if there is no other fricative in the onset.
- These rules regulate the nucleus, V(V):
  - No mixing of vowel harmony groups.
  - If a second vowel is present, the two form a dipthong, or a long vowel if they are the same.
- These rules regulate the coda, ((R)C(C)): 
  - Long vowels are allowed, but not with a second consonant.
  - For plosive clusters, only &lt;pt pk kt&gt; are allowed.
  - Plosive may appear following fricatives, or preceding the fricatives &lt;s z v&gt;.
  - Nasals never appear after plosives or affricates. 

### 2.5 Stress and Timing

Stress almost always falls on the first syllable of the word, regardless of affixes, though if affixes are present then a secondary stress tends to fall on the first syllable of the root.

- ex.: __hademone__, "to go": /ˈxaˌdʲe̞moɳe̞/
- ex.: __aneallemiaa__, "will want to try to learn": /ˈaɳe̞alːɛˌmiaː/
- ex.: __kouxopeen__, "must (now) seem to make": /ˈko͡uχoˌpeːn/

Naretvei is also mora-timed (f.r. morae, mora timing). Plain consonants, single-consonant clusters, affricates, and approximates have no morae, single vowels, dipthongs, and long consonants make one, and long vowels constitute two. The theoretical highest number of morae any syllable can have is three, a plain onset with a long vowel and long consonant in the coda.

Perhaps more plainly, onsets never constitute a mora, nuclei may constitute one or two morae by length of the vowel, and codas may constitute zero or one morae depending on the existence of a long consonant. The three kinds of syllables, therefore, are monomoraic, bimoraic, and trimoraic, or more friendily "light," "heavy," and "superheavy." 

## 3 Basic Syntax

As stated in the [Introduction](#1-introduction), Naretvei is a VSO language, meaning that verb precedes subject, both of which proceed any objects the verb may take. By there being little difference between subject and objects, it was meant that other than its position directly after the verb and the lack of an object marker. Objects may in fact also appear in that same position, also without the marker, so the fact that they aren't the subject of the verb must be distinguished with context, or assumption if context is unavailable.

Do note that while VSO is the dominant word order, by no means is it fixed. Any subject or object can be fronted off into a separate clause, and the subject may appear at the end of the sentence when following the [(§4.2.1) VO de nije S](#421-the-vo-de-nije-s-form) form.

### 3.1 Structure of the Verb and Adverbs

Naretvei is primarily head-final for all parts below the level of sentence. That is to say, any adverbs on the verb or adjectives on a noun precede the word they describe. Adverbs have less restrictions on them than adjectives, with no required order beyond their location between aspect particles and the negation particle. Times such as "tomorrow" or "last weekend" always come before the aspect particles, however, and are the only exception to the rule. The negation particle always appears directly before the thing it is negating, so both adverb and verb may be negated without confusion.

#### Examples

1. __Dussi miie hanu de hämäyne.__  
    The animal quickly learns to survive.
    
    ```
    dussi   mii-e     hanu   de  hä-mäy-ne
    quickly learn-PRS animal OBJ INF-survive-CIRC
    ```

2. __Es mot ooce zal.__  
    The sun is not rising.
    
    ```
    es       mot ooc-e     zal
    PRS_PROG NEG bloom-PRS sun
    ```

3. __Dussi mot ooce zal.__  
    The sun does not rise quickly.
    
    ```
    dussi   mot ooc-e     zal
    quickly NEG bloom-PRS sun
    ```

4. __Mot dussi ooce zal.__  
    The sun rises unquickly.
    
    ```
    mot dussi   ooc-e    zal
    NEG quickly rise-PRS sun
    ```

### 3.2 Structure of the Noun Phrase

In Noun phrases, similar to Verb phrases, descriptors precede the noun, except for [(§4.2) subordinated verb constructs](#42-verb-subordination). Also like Verb phrases, negation may be used on any noun or adjective, the negation particle appearing immediately before the term to which it applies. In contrast to them, in Noun phrases adjectives have heavier restrictions put on them compared to the adverbs in Verb phrases. Like English and many other languages, Naretvei features an adjective order. Adjectives fall into categories based on what they describe, be it shape, or colour, or age, etc. The adjective order is something not well understood, and hard to define, but appears to be the following (in order said):

- Possessives
- Number
- Temperature
 - Colour
 - Size
 - Shape
 - Texture
 - Age

 Adjectives of the same category may be placed in any sub-order within their respective zones, but may not leave it.
 
 Relative and subordinate clauses always come after the noun they describe. More on verb subordination can be found in [section §4.2](#42-verb-subordination).

## 4 Verbs

Verbs can be considered the most important part of the Naretvei language, and the most important part of that is tense. Tense is a core to how the language functions, appearing in conjugation, prepositions, the progressive aspect particles, and other places. No sentence is complete without some description of tense, save when the verb is dropped. The three tenses are:

 - Past
 - Present
 - Future

This contrasts with English, which technically has only past and non-past tenses. It isn't as complex as some systems, lacking things like hodiernal or crastinal tense, but for I feel this system best matches the culture: it's done, being done, or will be done shortly. The same action-oriented ideology is why I placed the verb at the start of sentences, as it's the most important part. Earlier iterations of the language also featured a non-future tense, but this was dropped after it was found to be more or less useless and confusing.

### 4.1 Verb Affixes

To begin, the infinitive forms of verbs is a circumfix, beginning with __ha-__ and ending with __-ne__, written for ease as __ha-ne__. A number of prefixes can also be placed on the verb. They are:

 - __alle-:__ <sc>con</sc>, the Conative. This prefix means "to try" or "attempt."  
  Compare:  __demoe__, "(I) go", with __alledemoe__, "(I) try to go."
- __ane-:__ <sc>pot</sc>, the Potential. This prefix correlates with "may", though it also means "to want."  
  Compare: __demoe__, "(I) go," with __anedemoe__, "(I) want to go" or "I may go."
- __xo-:__ <sc>imp</sc>, the Imperative. This prefix correlates with "must" or "should."

The imperative __xo-__ always proceeds the others, which may switch, and all lie with the infinitive __ha-ne__ if the infinitive is present. Always outside, though, are the prefixes for the evidentiality-like system, of which only one can be used at a time. They are:

- __vei-:__ This prefix is best explained with this example:  
  - __rrae__: "(I) love"
  - __veirrae__: "(I) say that I love" or "It is said that (someone) loves..."
- __kou-:__ To continue the above example:
  - __kourrae__: "(I) appear to love" or "It appears that (someone) loves"

And as for the suffixes, they are:
 - __-(e)n:__ <sc>nmz</sc>, Nominalization. This suffix turns verbs of the inanimate gender into singular nouns, with the &lt;e&gt; present if the last syllable of the verb does not have an open consonant slot in the coda.
   - ex.: __ucae__, "(I) wait" → __ucan__, "a/the wait"
   - ex.: __zaze__, "(I) whine" → __zazen__, "a/the whine"
- __-(e)nn__ <sc>nmz</sc>, Nominalization. This suffix turns verbs of the animate gender into singular nouns, with the &lt;e&gt; present if the last syllable of the verb does not have an open consonant slot in the coda.
    - ex.: __tae__, "(I) sing" → __tann__, "a/the song"
 - __-nen:__ <sc>pl.nmz</sc>, Plural nominalization. This suffix functions identically to __-(e)n__ and __-(e)nn__, but converts the verb to a *plural* noun, and does not change for gender. A plural infix must also be used; see [§4.2](#42-verb-subordination).
   - ex.: __tae__, "(I) sing" → __temanen__, "songs"
   - ex.: __ucae__, "(I) wait" →__ucavanen__, "(some) waits"
 - __-ci:__ <sc>adj</sc>, Adjectivization. This suffix turns a verb into an adjective or, despite the name, an adverb, as there is almost no line between the two.
   - ex.: __tae__, "(I) sing" → __taci__, "songlike" or "musical"  

#### 4.1.1 Tense

On tense: there are technically two classes of verbs in Naretvei: those that conjugate tense with a suffix, and those that conjugate tense with a suffix, and those that conjugate it with an infix. Suffixing verbs are far more common. The suffixes are:

 - __-e:__ <sc>prs</sc>, Present tense
 - __-o:__ <sc>pst</sc>, Past tense
 - __-a:__ <sc>fut</sc>, Future tense


 Infixes work a bit differently. The default is **-e-**, which also marks the present tense. The other two are:
 
 - **-o-**: <sc>pst</sc>, Past tense
 - **-a-**: <sc>fut</sc>, Future tense

#### 4.1.2 Reduplication

Though not technically an affix, when the first syllable of a verb stem is reduplicated, the reduplicated segment marks an <sc>int</sc> (intensive) upon the verb.

Compare:
 - __demoe__: "(I) walk"
 - __dedemoe__: "(I) run"


 In the case of an infixing verb where the first syllable contains the tense infix, the default infix is instead used in the reduplication.
 
 Compare:
  - __won__: "(I) was"
  - __wewon__: "(I) really was"

### 4.2 Verb Subordination

Subordination of a verb to a noun is a common way to make complex sentences. It functions by adding the infix __-j-__  between the stem and the tense suffix, or the suffix __-je__ to infixing verbs. Neither the suffixes __-n__ or __-ci__ would work here, as these verbs still take objects (usually only one) and can function as either adjectives or complete noun phrases.

Subordination is almost never found in the Subject.

#### Examples

1. __niie de nije tama.__  
  "I know what you do."
  
  ```
  nii-e    de  ni-j-e      tama
  know-PRS OBJ do-SUBR-PRS 2[s]
  ```

2. __rrae de neko veijo acanq.__  
  "I like the cat she saw."
  
  ```
  rra-e    de  neko vei-j-o      acanq
  like-PRS OBJ cat  see-SUBR-PST 3[s]
  ```

3. __mot konne de ol anealletaoja__  
  "There is nothing that I will want to try to sell."
  
  ```
  mot konn-e       de  ol   ane-alle-tao-j-a
  NEG there_is-PRS OBJ zero POT-CON-sell-SUBR-FUT
  ```

#### 4.2.1 The `VO de nije S` Form

The `VO de nije S` form is fairly simple despite its name. It makes use of the subordination of verbs to noun phrases to transform the Subject into an active Object.  Only active subjects may be moved in such a manner; passive subjects must remain immediately after the verb. It works by subordinating the verb __hanine__ (to do) and grouping the subject with it.

An example like __zanqe ponna de nije haci__ would translate to "Eat an apple do I."

    zanq-e  ponna de  ni-j-e      haci
    eat-PRS apple OBJ do-SUBR-PRS 1[s]

This example also demonstrates the earlier note about how objects may be confused with subjects by relocation and dropping of the object marker. The object marker could of course been inserted here (<b>zanqe <i>de</i> ponna...</b>), but it remains optional.

### 4.3 The Progressive Aspect
The above examples demonstrated one of the more interesting of the Verbal features, the aspect system. The particles are:

 - __os__, the Past Progressive
 - __es__, the Present Progressive
 - __as__, the Future Progressive

When combined with tense on the verb, these particles form a time span during which action occurs. For example, the phrase "I am eating" would be translated as __es zanqe haci__, with the present progressive and present tense on the verb combining to form a time span in the present, a current ongoing action. By changing the __es__ to and __os__, however, the sentence would translate to "I _have been_ eating", the __os__ being in the past tense drawing the start of the action into the past. An __as__ instead would describe the action, eating, as happening now and going to be happening in the future as well, a far easier way of saying "am and will be doing."
  
<table id="aspect-table">
  <thead><tr><th></th>
    <th>PST Tense</th>
    <th>PRS Tense</th>
    <th>FUT Tense</th>
  </tr></thead>
  <tr>
    <td style="font-weight:bold;">os</td>
    <td>had been</td>
    <td>have been</td>
    <td>then had and will be</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">es</td>
    <td>was and am now</td>
    <td>am</td>
    <td>am and will then be</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">as</td>
    <td>had and will be</td>
    <td>am and will be</td>
    <td>will be</td>
  </tr>
</table>

As a final note, aspect particles may not be negated.

## 5 Nouns

The nouns come in two genders: animate and inanimate. The gender system is almost vestigial as in English, but retains importance beyond the realm of pronouns, where it's actually disappeared entirely. Things like animals, people, machines, non-static things like fire or rain, and actions tend to be animate, whereas things like trees, rocks, waiting and other non-moving, passive things and actions tend to be inanimate.

### 5.1 Pluralization

Pluralization functions through an affix placed after the first consonant(s) in a word. The affixes are:

 - __-em-:__ <sc>a.pl</sc>, the Animate plural. This one is fairly simple.
   - ex.: __yan__, "person" → __yeman__, "people"
   - ex.: __hanu__, "animal" → __hemanu__, "animals"
   - ex.: __pworr__, "fire" → __pwemorr__, "fires"
- __-Vv-:__ <sc>i.pl</sc>, the Inanimate plural. This infix is more complex than its animate counterpart. The capital "V" stands for "Vowel," as in the vowel sound class. It is filled by the first vowel to come after the infix, or the first vowel before it if there isn't one.
   - ex.: __domo__, "voice" → __dovomo__, "voices"
   - ex.: __dyurr__, "water" → __dyuvurr__, "waters"
   - ex.: __nyakan__, "idiot" → __nyavakanen__, "idiots"
       - __nyakan__ is formed from __nyaka__, "stupid"
   - ex.: __änn__, "fenn, marsh" → __ännäv__, "fenns, marshes"

Both are often marked as only <sc>pl</sc>, as gender is not terribly important and the usual glosser can be lazy.

### 5.2 Noun Affixes

Unlike verbs, most affixes on nouns come after the stem. It is not known why they are there rather than before the stem.

 - __-mo:__ <sc>dim</sc>, the Diminutive.
   - ex.: __neko__, "cat" → __nekomo__, "kitten"
   - ex.: __jorr__, "money" → __jorrmo__, "penny" or "little money" (colloquial)
- __-ci:__ <sc>adj</sc>, the Adjectivizer.

#### 5.2.1 Possession

Possession functions with the suffix __-(o)v__, with the &lt;o&gt; present if there is no available consonant slot the &lt;v&gt; can fit in, or if the previous consonant was &lt;v&gt;. It's used, however, for far more than just simple possession. Any time English would use "-'s" or "of", __-(o)v__ will be found. There is no complex possession system like in English, with a clitic; see the examples.

__-(o)v__ is glossed as <sc>-poss</sc>.

#### Examples

 1. __Enqlandov derratyan.__  
    The King of England.
    
        Enqland-ov   derrat-yan
        England-POSS direct-person
 2. __Prransov derratyanov yoppo.__  
    The child of the King of France.
    
        Prrans-ov   derratyan-ov  yoppo
        France-POSS director-POSS child
        
### 5.3 Pronouns and Demonstratives

It is safe to say that no spoken language can effectively get away without pronouns or demonstratives of any sort for long, and Naretvei is no exception.

## 6 Adjectives and Adverbs

## 7 Other affixes and Word-building

These affixes came around following grammaticalization of previously separate words joined with possession, though they now apply to all types of words, be it verb or noun or adjective, etc. Most of these terms replace nominalization affixes if present.

 - __-miin:__ "-学" ("-gaku"). Denotes the study of the stem.
    - ex.: __morr__, "number" → __morrmiin__, "mathematics"
    - ex.: __veinn__, "language" → __veimiin__, "linguistics"
    - ex.: __oryeman__, "old people" → __oryemanmiin__, "archeology"
 - __-yan:__ "-er, -man". Denotes the stem as an aspect of a person.
    - ex.: __morr__, "number" → __morryan__, "counter"
    - ex.: __bütti__, "book" → __büttiyan__, "reader"
    - ex.: __hasrritne__, "to write" → __srrityan__, "author"
    - ex.: __Nippon__, "Japan" (borrowed term) → __Nipponyan__, "Japanese person"
 - __-vei:__ Denotes the language of the stem, where the stem is usually a place.
    - ex.: __Prrans__, "France" (borrowed term) → __Prransvei__, "French"
    - ex.: __Naret__ → __Naretvei__, "Naretese" or "language of Naret"
      - Note how silly "the Naretvei language" sounds now.
    - ex.: __veimiin__, "linguistics" → __veimiinvei__, "linguistics jargon"

## 8 Particles and Prepositions

# Appendix <!--{#app}-->

## Futher Reading

Morae and Mora Timing:
 - <https://en.wikipedia.org/wiki/Mora_(linguistics)>
 - <https://en.wikipedia.org/wiki/Isochrony#Mora_timing>