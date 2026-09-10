export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, tagIds, resultLink } = req.body || {};

  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: 'Geldig e-mailadres verplicht' });
    return;
  }
  const ids = Array.isArray(tagIds) ? tagIds : [];

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server mist KIT_API_KEY' });
    return;
  }

  try {
    const tagResults = await Promise.all(
      ids.map(async (tagId) => {
        const r = await fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Kit-Api-Key': apiKey,
          },
          body: JSON.stringify({ email_address: email }),
        });
        return { tagId, ok: r.ok, status: r.status };
      })
    );

    let linkResult = null;
    if (resultLink && typeof resultLink === 'string') {
      const r = await fetch('https://api.kit.com/v4/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': apiKey,
        },
        body: JSON.stringify({
          email_address: email,
          fields: { snelheidsscan_resultaat_link: resultLink },
        }),
      });
      linkResult = { ok: r.ok, status: r.status };
    }

    const allOk = tagResults.every((r) => r.ok) && (!linkResult || linkResult.ok);
    res.status(allOk ? 200 : 207).json({ ok: allOk, tagResults, linkResult });
  } catch (err) {
    res.status(502).json({ error: 'Kit-koppeling mislukt', detail: String(err) });
  }
}
