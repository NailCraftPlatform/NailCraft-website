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

  const kitHeaders = {
    'Content-Type': 'application/json',
    'X-Kit-Api-Key': apiKey,
  };

  try {
    const tagResults = await Promise.all(
      ids.map(async (tagId) => {
        const r = await fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
          method: 'POST',
          headers: kitHeaders,
          body: JSON.stringify({ email_address: email }),
        });
        return { tagId, ok: r.ok, status: r.status };
      })
    );

    let linkResult = null;
    if (resultLink && typeof resultLink === 'string') {
      const lookup = await fetch(
        `https://api.kit.com/v4/subscribers?email_address=${encodeURIComponent(email)}`,
        { headers: kitHeaders }
      );
      const lookupBody = await lookup.json().catch(() => ({}));
      const subscriberId = lookupBody?.subscribers?.[0]?.id;

      if (subscriberId) {
        const upd = await fetch(`https://api.kit.com/v4/subscribers/${subscriberId}`, {
          method: 'PUT',
          headers: kitHeaders,
          body: JSON.stringify({
            email_address: email,
            fields: { snelheidsscan_resultaat_link: resultLink },
          }),
        });
        const updBody = await upd.json().catch(() => ({}));
        linkResult = { ok: upd.ok, status: upd.status, warnings: updBody?.warnings || null };
      } else {
        const create = await fetch('https://api.kit.com/v4/subscribers', {
          method: 'POST',
          headers: kitHeaders,
          body: JSON.stringify({
            email_address: email,
            fields: { snelheidsscan_resultaat_link: resultLink },
          }),
        });
        const createBody = await create.json().catch(() => ({}));
        linkResult = { ok: create.ok, status: create.status, warnings: createBody?.warnings || null };
      }
    }

    const allOk = tagResults.every((r) => r.ok) && (!linkResult || linkResult.ok);
    res.status(allOk ? 200 : 207).json({ ok: allOk, tagResults, linkResult });
  } catch (err) {
    res.status(502).json({ error: 'Kit-koppeling mislukt', detail: String(err) });
  }
}
