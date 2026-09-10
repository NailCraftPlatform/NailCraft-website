# Snelheidsscan, kennisbank

## Schermenplan (UX, definitief)

1. **Intro:** titel "Snelheidsscan", korte uitleg, start-knop.
2. **Techniek:** BIAB / Hardgel & Acrylgel / Upperform, enkelvoudige keuze.
3. **Voorbereiding:** tijd affrezen (doel 10 min) + tijd manicure (doel 30 min). Checkboxes: affrezen oud product, nagelriemen reinigen, nagelriemen knippen, huid polijsten, nagelplaat opruwen, prep-primer-base.
4. **Productapplicatie:** tijd (doel 30 min). Checkboxes: opbouwen met gel, navijlen na opbouwen, vorm vijlen, uitfrezen natuurlijke nagel (enkel tonen/relevant bij Hardgel en Upperform).
5. **Kleur & French:** tijd (doel 20 min), plus vraag "vooral kleur, French, of beide".
6. **Frees:** geen tijd, kennis-checklist (toerentallen, bits, handpositie, frees laten werken, gelijkmatig affrezen).
7. **Werkplek:** geen tijd, korte gewoonte-checklist (2-3 vragen), puur voor tips op het resultaatscherm, triggert geen tag.
8. **Afwerking:** tijd (doel 10 min, topcoat + foto's samen). Checkboxes: topcoat plaatsen, foto's nemen, olie.
9. **Mailadres:** met waarde-preview/geruststelling vooraf (zie microcopy hieronder), geen "kale" vraag.
10. **Resultaat:** ALLE fases tonen (niet enkel de problematische), met groen vinkje bij wat al goed zit en gerichte tips/materiaal/cursus bij wat boven doeltijd zit of waar checkboxes op wijzen. Overzichtelijker en motiverender dan enkel probleemgebieden tonen.

### Doeltijd zichtbaar tijdens het invullen

Op elk fase-scherm met een tijd-input wordt de doeltijd meteen getoond (bv. "max 10 min"), zodat de gebruiker meteen kan vergelijken terwijl ze typen.

### Voortgang en motivatie

- Voortgangsindicator bovenaan elk scherm (bv. "Vraag 4 van 10" of een balk).
- Motiverende microcopy die meebeweegt met de voortgang: "Goed bezig, nog maar een paar vragen", "Je bent er bijna".
- Korte, persoonlijke reacties na een antwoord, in Tabitha's stem: bv. "Oké, daar weet ik al meer over, ik ga je zo gericht mogelijk helpen." Geeft het gevoel van een echt gesprek, niet een kaal formulier.

### Microcopy mailadres-scherm (screen 9)

Niet zomaar "vul je mailadres in". Eerst kort laten voelen wat ze krijgen: bijvoorbeeld een teaser dat er al persoonlijke tips klaarstaan die hen direct gaan helpen, zodat het niet aanvoelt als "ik vul alles in en krijg niets terug". Exacte copy schrijven we bij de bouw van dit scherm.


Dit bestand verzamelt Tabitha's expertkennis per fase, als basis voor de content van de Snelheidsscan-tool. Wordt fase per fase aangevuld tijdens gesprekken met Claude.

Tag-structuur: 5 tags, meerdere tegelijk mogelijk per gebruiker.
`struggle-voorbereiding`, `struggle-applicatie`, `struggle-kleurfrench`, `struggle-frees`, `struggle-afwerking`

Werkplek (fase 4) krijgt bewust GEEN eigen tag/sequence: geen cursus in het aanbod hiervoor. De werkplek-tips worden wel getoond op het resultaatscherm (als algemene tip, niet gekoppeld aan een specifieke tag), maar triggeren geen Kit-tag.

Foto's komen in `tools/snelheidsscan-afbeeldingen/`, bestandsnamen zoals hieronder aangegeven per item.

---

## Fase 1: Voorbereiding (tag: struggle-voorbereiding)

Struggles uit checklist: affrezen oud product, nagelriemen reinigen, nagelriemen knippen, huid polijsten, nagelplaat opruwen, prep-primer-base.

("Uitfrezen natuurlijke nagel" hoort hier NIET bij, zie Fase 2, dat gebeurt pas na de opbouw.)

Doeltijd referentie (uit werkboek): affrezen max 10 min, manicure max 30 min. Vuistregel van Tabitha: **max 1 minuut per nagel** voor affrezen, dus 10 nagels = 10 min. Boven die tijd: wijst op techniekprobleem, niet op traagheid an sich.

### Traag bij affrezen

**Freesbit:** conische bitjes, ideaal voor beginners. Werking:
- Buik van de bit = kleurencode van het bandje (bv. rood bandje = rode buik = grof)
- Wang (net onder de buik) = één kleurencode lichter (bij rood dus geel)
- Top = extra fijn, superfijn, ideaal voor uitgegroeide nagelriemzone en nagelwallen (dun weefsel)
- Door de afronding volgt een conische bit makkelijker de c-curve van kunstnagel en natuurlijke nagel

Foto nodig: `conische-freesbit.webp`

**Toerental:** altijd minimaal 25.000 toeren, liefst 30.000 toeren. Hoe trager je werkt, hoe meer het bitje inhaakt op het product, wat lifting en pijn veroorzaakt. Sneller draaien = veiliger.

### Traag bij manicure

**Pusher:** kies een pusher met een zachte c-curve, heel dun vooraan. Dat maakt het makkelijker om onder de nagelriem te komen en de pockets mooi open te zetten. Gevolg: minder werk met de frees nadien, en veiliger knippen (minder wondjes). Bij extreem gevoelige nagelriemen: schakelen naar een houten stokje (techniek uitgebreid getoond in Manicure Pro).

Foto nodig: `pusher-staleks.webp`

**Flame bitje:** gebruik een flame bitje om de nagelriemen en nagelplaat te reinigen vóór het knippen. Zorgt voor een vlottere kniplijn en minimaliseert het risico op wondjes, omdat er geen velletjes meer in de weg zitten van schaartje of velletjestang.

Foto nodig: `flame-bit.webp`

### Extra tip (niet in gratis ebook)

**Prep-product:** alcohol +90% (in apotheek te koop in België) als vervanging voor dure cleanser-producten. Ontvet krachtig. De samenstelling van commerciële cleansers is vooral ethanol, hetzelfde als ontsmettingsalcohol +90%, maar tegen een veel hogere prijs. Bespaart geld en werkt minstens even krachtig.

### Cursus-koppeling

- **Manicure Pro** (`https://nailcraftplatform.kennis.shop/pay/manicurepro`): standaardaanbeveling voor deze fase. Reden: als de manicure niet grondig gebeurt, ontstaan er problemen bij de productapplicatie nadien, dat vertraagt het totale proces enorm. Steken laten vallen tijdens manicure = latere vertraging.
- **Refill Removal Pro** (`https://nailcraftplatform.kennis.shop/pay/refillremovalpro`): specifiek aanraden wanneer iemand vooral bij affrezen tijd verliest (boven de 1 min/nagel vuistregel). Behandelt bitjes, toerental, kleurencodes, stappenplan en techniek in detail.

Beslisregel voor de tool: als affreestijd > 10 min (1 min/nagel) → Refill Removal Pro. Als vooral manicure-tijd > 30 min of manicure-struggles aangevinkt → Manicure Pro.

---

## Fase 2: Productapplicatie (tag: struggle-applicatie)

Struggles uit checklist: opbouwen met gel, navijlen na opbouwen (oppervlak), vorm vijlen, uitfrezen natuurlijke nagel. Techniek eerder aangeduid in de tool (BIAB, Hardgel & Acrylgel, Upperform, zie schermenplan) bepaalt welke tips en cursus getoond worden.

**Uitfrezen natuurlijke nagel** gebeurt pas na de opbouw, net voor vorm vijlen en topcoat, dus hier en niet bij Voorbereiding. Enkel relevant bij Hardgel en Upperform (niet bij BIAB/Acrylgel). Wordt behandeld in Easy Nails (hardgel-onderdeel) en in de Upperform-trainingen.

### BIAB en hardgel

**Penseel:** geen te groot penseel, vooral bij kleine nagels (pink) zorgt dat voor te snel te veel product. Ideaal: een kattentong, penseel met afgeronde hoeken die de bocht van nagelriem naar nagelwal volgt, zo minder kans op huidcontact.
Foto nodig: `penseel-kattentong.webp`

**Fine liner:** 6 tot 11 mm, voor het afwerken van de randen aan nagelriem en nagelwal.

**Kerntip:** leer zo strak opbouwen dat navijlen van het oppervlak niet meer nodig is. Bespaart enorm veel tijd en arbeid (minder belasting gewrichten). Dit is exact wat de Easy Nails cursus aanleert.

### Acrylgel

Altijd een apart penseel gebruiken, niet hetzelfde penseel als voor andere gelproducten.
Niet te dik werken: less is more. Te dik bouwen geeft een groot contrast tussen de flexibiliteit van de natuurlijke nagelplaat en de hardheid van het product, wat sneller tot lifting leidt. Vergeet de voorkant van de natuurlijke nagel niet mee te onderfrezen, anders ontstaat daar altijd lifting.

### Upperform

Juiste upperform kiezen per klant is cruciaal, er bestaan veel varianten om een reden: elke natuurlijke nagel en elke gewenste vorm/lengte is anders. Verkeerde keuze = meer vijlwerk.
**Tip:** niet veel langer vullen dan de gewenste lengte, max 1 à 2 mm extra. Genoeg ruimte om de vorm te vijlen, maar geen tijdverlies (tot 15 min) aan onnodig inkorten en productverspilling.

### Extra tip (niet in gratis ebook)

Het geheim van in één keer perfect opbouwen zonder achteraf te corrigeren: correcte kennis van de architectuur (waar de apex moet zitten) en hoe je levelt met je product. Dit wordt aangeleerd in Easy Nails.

### Cursus-koppeling

Techniekopties in de tool (schermenplan): **BIAB** / **Hardgel & Acrylgel** (samengevoegd) / **Upperform**.

- Techniek = BIAB, of Hardgel & Acrylgel → **Easy Nails** (`https://nailcraftplatform.kennis.shop/pay/easynails`): sneller opbouwen zonder navijlen. Standaardkeuze bij deze technieken of bij "navijlen na opbouwen"/"opbouwen met gel" als struggle. (Acrylgel-specifieke tips blijven getoond, maar er is geen apart cursusaanbod enkel voor acrylgel: Easy Nails is de dichtstbijzijnde match.)
- **The Gel Code** (`https://nailcraftplatform.kennis.shop/pay/thegelcode`, e-book): gelproducten begrijpen, hun mogelijkheden en limieten kennen. Kiezen wanneer het probleem meer bij productkennis/keuzes lijkt te liggen dan bij handtechniek.
- Techniek = Upperform → **Upperform Master** (`https://nailcraftplatform.kennis.shop/pay/upperformmaster`). (Lichtere varianten bestaan ook: Upperform Guide, e-book €70, en Upperform Pro, videocursus €185. Standaard raden we Master aan als volledigste optie, tenzij later gekozen wordt voor prijsgetrapt aanbevelen.)

---

## Fase 2b: Kleur & French (tag: struggle-kleurfrench)

Doeltijd referentie (uit werkboek): kleur of French, max 20 min.

In de tool wordt binnen deze fase extra gevraagd: struggel je vooral met **effen kleur**, met **French**, of **beide**? Dat bepaalt welke cursus(sen) getoond worden.

### Kleur

Kies een kleur die bijna volledig dekkend is in 1 laag. Test bij aankoop op een tipje huid/nagel: dekt die niet na 2 dunne lagen, dan is de kwaliteit onvoldoende.

### French

Gebruik een kleur die al dekkend is in 1 dunne laag, zodat je niet meerdere keren over dezelfde lijn moet gaan. Bij voorkeur een paint gel.

### Extra tip (niet in gratis ebook)

**Fine liner:** Tabitha's go-to tool voor kleurapplicatie is een 6mm fine liner. Niet te lang, waardoor je nauwkeuriger en preciezer kan werken vlak onder de nagelriem en aan de nagelwallen.
Foto nodig: `fine-liner.webp`

### Cursus-koppeling

- Struggle = kleur → **Kleurapplicatie** (`https://nailcraftplatform.kennis.shop/pay/kleurapplicatie`, €89)
- Struggle = French → **Soft French** (`https://nailcraftplatform.kennis.shop/pay/softfrench`, mini-cursus)
- Struggle = beide → beide cursussen tonen

---

## Fase 3: Frees als snelheidsmachine (tag: struggle-frees)

Checklist uit werkboek: toerentallen kennen, bits kennen, stevige handpositie, de frees laten werken (niet forceren met kracht), gelijkmatig affrezen.

### Materiaal

**Freestoestel voor beginners, budgetvriendelijk:** Marathon (Tabitha werkte hier zelf 16 jaar mee), betrouwbaar en goede kwaliteit om mee te starten.
- Marathon Champion III, Amazon Nederland: https://amzn.to/4gLWWFw
- Marathon 3 Champion, Amazon Belgie: https://www.amazon.com.be/-/nl/Marathon-Elektrische-nagelboor-professionele-nagelpolijstmachine/dp/B087YN7P2L?tag=nailcraftplat-21&linkCode=ll2&linkId=c0572c82c6334c8e249cc727b4fbf007

**Freestoestel met meer functies:** Micro NX, digitaal instelbaar toerental. Tabitha gebruikt dit zelf al 2 jaar.
- https://www.tanyasavchenko.com/products/frees-micro-nx-300b

### Kern van goed affrezen: zone-kennis van je bitje

De meest voorkomende fout: random frezen zonder stappenplan en zonder kennis van de zones van het bitje.
- Nagelriemzone en nagelwallen: product zit hier dunner, dus de zachtere delen van het bitje gebruiken (wang en top)
- Apex en midden van de nagel: massiever/dikker opgebouwd, dus de buik van het bitje gebruiken
- Regel: nooit meer dan 2 keer na elkaar direct over dezelfde zone gaan, risico op hitte

**Fix:** een vast stappenplan volgen in plaats van random werken, dat geeft altijd consistente resultaten. Dit is exact wat Refill Removal Pro aanleert.

### Cursus-koppeling

- **Refill Removal Pro** (`https://nailcraftplatform.kennis.shop/pay/refillremovalpro`): enige aanbeveling voor deze fase, geldt voor elke frees-struggle. Geen andere cursus is hier van toepassing.

---

## Fase 4: Werkplek (geen tag, algemene tip op resultaatscherm)

### Indeling werkpost

Verdeel materiaal in twee groepen:
1. Materiaal dat je maar 1 keer gebruikt per behandeling (pusher, houten stokje, schaartje, base, builder, top, ...)
2. Materiaal dat je meerdere keren gebruikt (vijl, nailwipes, afvalbakje, freeskopjes, ontsmettingsalcohol, cleansers, ...)

Regel: groep 2 (meerdere keren nodig) komt aan je dominante kant (rechts voor rechtshandigen, links voor linkshandigen), groep 1 aan de andere kant.

**Tussendoor opruimen:** wanneer de klant beide handen in de lamp heeft, dat moment gebruiken om op te ruimen en de volgende stap klaar te zetten.

### Extra tip (niet in gratis ebook)

**Vraag vooraf inspo-foto's:** laat de klant op voorhand een inspiratiefoto sturen of laten weten wat ze precies wil. Zo heb je je plan al klaar vóór de behandeling begint en kan je producten vooraf klaarzetten. Bespaart tijd die anders verloren gaat aan nadenken tijdens de behandeling omdat de klant zelf nog niet goed weet wat ze wil.

### Meest voorkomende, onbewuste fout

Niet tussendoor opruimen: cursisten komen dan met hun mouw of handen tegen vuil materiaal, waardoor handen of handschoenen gaan plakken en alles een puinhoop wordt. Fix: producten die je nodig hebt klaarzetten, en zodra je klaar bent met een product het meteen wegzetten. Houdt overzicht en oogt professioneler.

### Cursus-koppeling

Geen directe workflow-cursus voor deze fase. In plaats daarvan: **The Basics** (`https://nailcraftplatform.kennis.shop/pay/thebasics`, e-book, €45) voor wie wil weten welke materialen Tabitha gebruikt en waarom die de beste keuze zijn, dus eerder een materiaalkennis-aanbeveling dan een workflow-cursus.

---

## Fase 5: Afwerking (tag: struggle-afwerking)

Doeltijd voor de tool: **10 min** voor topcoat + foto's samen (bijgesteld door Tabitha; het werkboek noemt 20 min als bredere schatting inclusief olie, maar voor de tool geldt 10 min als scherpere norm).

### Topcoat en olie

**Topcoat:** een no-wipe topcoat gebruiken (zonder kleeflaag). Let op dat het product geen stofjes bevat, dus het potje altijd goed sluiten na gebruik.

**Olie voor foto's:** een niet-vette, dunne olie gebruiken. Dikke/vette olie geeft geen mooie, scherpe foto's.

### Extra tip (niet in gratis ebook)

**Huidglans zonder te glanzend:** gebruik een tonic (dezelfde soort als voor het gezicht) op de huid rond de nagel voor een zachte, natuurlijke glans, zoals een "Coup d'Eclat" voor de huid. Geeft een gezonde uitstraling zonder overdreven glans op foto's.

### Cursus-koppeling

- **Nail Content Creator** (`https://nailcraftplatform.kennis.shop/pay/nailcontentcreator`, e-book + video's, €60): beste match voor deze volledige fase, zowel voor topcoat/olie-afwerking als voor het maken van goede klantfoto's.
