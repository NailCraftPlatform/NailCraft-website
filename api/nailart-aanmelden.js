// Aanmelding via de pop-up op /nailart/?via=tiktok
// Maakt de inschrijving aan in Kit en geeft de tag BE NAILART.
// Die tag start in Kit automatisch de sequence "Nail art challenge (tag: BE NAILART)".
const TAG_NAILART = 24648309;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, voornaam, t } = req.body || {};

  // Spamcontrole: een mens heeft minstens een seconde nodig om het formulier in te vullen.
  // (Geen verborgen veld meer: browsers vulden dat soms automatisch in, waardoor echte inschrijvingen wegvielen.)
  if (typeof t !== 'number' || t < 1000) {
    res.status(400).json({ error: 'Probeer het nog eens' });
    return;
  }

  const adres = typeof email === 'string' ? email.trim().toLowerCase() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(adres) || adres.length > 200) {
    res.status(400).json({ error: 'Geldig e-mailadres verplicht' });
    return;
  }
  const naam = typeof voornaam === 'string' ? voornaam.trim().slice(0, 60) : '';

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server mist KIT_API_KEY' });
    return;
  }
  const kitHeaders = { 'Content-Type': 'application/json', 'X-Kit-Api-Key': apiKey };

  try {
    // 1. Inschrijving aanmaken (bestaat ze al, dan werkt Kit ze gewoon bij)
    const sub = { email_address: adres };
    if (naam) sub.first_name = naam;
    const maak = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST', headers: kitHeaders, body: JSON.stringify(sub),
    });
    if (!maak.ok) {
      res.status(502).json({ error: 'Inschrijven mislukt', status: maak.status });
      return;
    }

    // 2. Tag BE NAILART geven (start de sequence)
    const tag = await fetch(`https://api.kit.com/v4/tags/${TAG_NAILART}/subscribers`, {
      method: 'POST', headers: kitHeaders, body: JSON.stringify({ email_address: adres }),
    });
    if (!tag.ok) {
      res.status(502).json({ error: 'Taggen mislukt', status: tag.status });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ error: 'Kit-koppeling mislukt' });
  }
}
