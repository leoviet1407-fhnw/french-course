import { put, list, del } from '@vercel/blob';

export const config = {
  api: { bodyParser: true },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET — load progress
  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: 'david-progress' });
      if (!blobs || blobs.length === 0) {
        return res.status(200).json({ progress: {}, extraLessons: [] });
      }
      const latest = blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))[0];
      const response = await fetch(latest.url);
      if (!response.ok) return res.status(200).json({ progress: {}, extraLessons: [] });
      const data = await response.json();
      return res.status(200).json(data);
    } catch (e) {
      console.error('GET error:', e.message);
      return res.status(200).json({ progress: {}, extraLessons: [] });
    }
  }

  // POST — save progress
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Delete old blobs
      const { blobs } = await list({ prefix: 'david-progress' });
      if (blobs && blobs.length > 0) {
        await del(blobs.map(b => b.url));
      }

      // Save new blob — no token param, Vercel injects it automatically
      const { url } = await put(
        `david-progress-${Date.now()}.json`,
        JSON.stringify(data),
        { access: 'public', contentType: 'application/json' }
      );

      console.log('Saved:', url);
      return res.status(200).json({ ok: true, url });
    } catch (e) {
      console.error('POST error:', e.message);
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
