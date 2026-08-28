# NailCraft Platform, projectgeheugen

Dit bestand wordt automatisch gelezen door elke Claude Code sessie die in deze map werkt, ongeacht welk Claude-account daarvoor gebruikt wordt of op welke computer. Het is bedoeld als vaste basis zodat werk aan dit project niet verloren gaat bij een accountwissel, een nieuwe computer, of gewoon een nieuw gesprek.

## Over het project

Statische website voor NailCraft Platform (www.nailcraft.be), online nagelschool van Tabitha Windels. Gemigreerd van WordPress (Elementor) naar losse HTML-bestanden, gehost via GitHub en Vercel.

- Werkmap: `NailCraft-website/` (gekoppeld aan GitHub-repo NailCraftPlatform/NailCraft-website)
- Afbeeldingen: `images/`
- Salespagina's: `salespaginas/`
- Verborgen/interne pagina's (noindex, nergens gelinkt): `tools/kleurapplicatie.html`, `certificaat-the-nailstylist.html`, `sitekaart-intern.html`

## Communicatieregels

- Altijd Nederlands spreken tegen de gebruiker, in chat en in documenten.
- Nooit em-dashes (—) gebruiken, nergens, niet in websiteteksten en niet in chatberichten. Vervang door een komma.
- Altijd de Edit tool gebruiken voor HTML-bestanden, nooit PowerShell Set-Content of vergelijkbaar (corrumpeert emoji en speciale tekens).

## Ontwerpsysteem

- Primaire kleur: `#9c28b1`
- CTA-kleur (call to action knoppen): `#fe9b00`
- Achtergrond licht: `#f8f2ff`
- Tekst: `#2a1a3e`
- Tekst zacht: `#5a4a6e`
- Fonts: Playfair Display (titels), DM Sans (body)
- Secundaire knoppen: altijd kleur en border `#9c28b1`, nooit wit

Elke pagina krijgt standaard:
1. Progress bar met sterretje onder de navigatie (`#nc-progress`, kleur `#9c28b1`)
2. Scroll-to-top knop rechtsonder, verschijnt na 400px scrollen
3. Vaste navigatie met logo, links, hamburgermenu op mobiel
4. Paarse footer (`#9c28b1`), witte tekst, compact op mobiel
5. SEO: Open Graph, Twitter Card, Schema markup, canonical URL (enkel toevoegen als de URL ook klopt met de echte bestandslocatie)

## Verkoopstructuur

Volledig overzicht van alle pagina's, checkout-URL's, upsell-funnels per bedankt-pagina, en een dossier over een bekende domeinnaam-typo staat in `sitekaart-intern.html`, live te bekijken op https://nailcraft.be/sitekaart-intern.html (niet geïndexeerd, niet gelinkt, enkel bereikbaar via directe URL).

Checkout-platform: kennis.shop, via `https://nailcraftplatform.kennis.shop/pay/<slug>`. De domeinnaam bevatte lange tijd een bekende typo ("naillraft" i.p.v. "nailcraft"), deze is inmiddels gecorrigeerd, zowel in de kennis.shop-instellingen zelf als op alle 35 pagina's van de website en in alle Kit-mails (templates en sequenties). Het historische dossier (oude vs. nieuwe URL's, stappenplan) staat nog ter referentie in sitekaart-intern.html.

## Back-upopzet

Naast GitHub en Vercel wordt het project ook manueel geback-upt naar een externe Toshiba-SSD en naar Google Drive (volledige projectmap, inclusief .git-map, bewust dubbel).

Op de Toshiba-SSD:
- `D:\Backup alles uitvoeren.bat`, voert beide onderstaande stappen na elkaar uit
- `D:\7. NailCraft website backup\`, maandelijkse kopie van deze GitHub-repo
- `D:\8. Documenten backup\`, spiegeling van de volledige Documenten-map

Er loopt een maandelijkse herinnering (geplande cloud-routine op claude.ai) die de gebruiker eraan herinnert deze back-up te draaien.
