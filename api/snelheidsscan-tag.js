export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, tagIds } = req.body || {};

  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: 'Geldig e-mailadres verplicht' });
    return;
  }
  if (!Array.isArray(tagIds) || tagIds.length === 0) {
    res.status(400).json({ error: 'tagIds moet een niet-lege array zijn' });
    return;
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server mist KIT_API_KEY' });
    return;
  }

  try {
    const results = await Promise.all(
      tagIds.map(async (tagId) => {
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

    const allOk = results.every((r) => r.ok);
    res.status(allOk ? 200 : 207).json({ ok: allOk, results });
  } catch (err) {
    res.status(502).json({ error: 'Kit-koppeling mislukt', detail: String(err) });
  }
}
