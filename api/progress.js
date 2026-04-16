import { put, head, getDownloadUrl } from '@vercel/blob';

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const BLOB_KEY = 'david-progress.json';

  // GET — load progress
  if (req.method === 'GET') {
    try {
      const url = `https://${process.env.BLOB_READ_WRITE_TOKEN.split('_')[2]}.public.blob.vercel-storage.com/${BLOB_KEY}`;
      const response = await fetch(url);
      if (!response.ok) {
        return res.status(200).json({ progress: {}, extraLessons: [] });
      }
      const data = await response.json();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(200).json({ progress: {}, extraLessons: [] });
    }
  }

  // POST — save progress
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const blob = await put(BLOB_KEY, JSON.stringify(data), {
        access: 'public',
        allowOverwrite: true,
        contentType: 'application/json',
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      return res.status(200).json({ ok: true, url: blob.url });
    } catch (e) {
      console.error('Blob save error:', e);
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
