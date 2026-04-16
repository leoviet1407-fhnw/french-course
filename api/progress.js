import { put, list } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET — load David's progress
  if (req.method === 'GET') {
    try {
      const { blobs } = await list({
        prefix: 'david-progress',
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      if (!blobs || blobs.length === 0) {
        return res.status(200).json({ progress: {}, extraLessons: [] });
      }

      const latest = blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))[0];
      const response = await fetch(latest.url);
      if (!response.ok) return res.status(200).json({ progress: {}, extraLessons: [] });
      const data = await response.json();
      return res.status(200).json(data);
    } catch (e) {
      console.error('Blob load error:', e.message);
      return res.status(200).json({ progress: {}, extraLessons: [], error: e.message });
    }
  }

  // POST — save David's progress
  if (req.method === 'POST') {
    try {
      // Check token exists
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error('BLOB_READ_WRITE_TOKEN is not set');
        return res.status(500).json({ error: 'Blob token not configured' });
      }

      const data = req.body;
      if (!data || typeof data !== 'object') {
        return res.status(400).json({ error: 'Invalid data' });
      }

      const blob = await put('david-progress.json', JSON.stringify(data), {
        access: 'public',
        allowOverwrite: true,
        contentType: 'application/json',
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      console.log('Saved to blob:', blob.url);
      return res.status(200).json({ ok: true, url: blob.url });
    } catch (e) {
      console.error('Blob save error:', e.message);
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
