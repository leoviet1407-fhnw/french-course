const { sql } = require('@vercel/postgres');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Create table if it doesn't exist
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS david_progress (
        id TEXT PRIMARY KEY,
        data JSONB NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;
  } catch (e) {
    console.error('Table create error:', e.message);
  }

  // GET — load progress
  if (req.method === 'GET') {
    try {
      const result = await sql`
        SELECT data FROM david_progress WHERE id = 'david'
      `;
      if (result.rows.length === 0) {
        return res.status(200).json({ progress: {}, hwLog: [] });
      }
      return res.status(200).json(result.rows[0].data);
    } catch (e) {
      console.error('GET error:', e.message);
      return res.status(200).json({ progress: {}, hwLog: [] });
    }
  }

  // POST — save progress
  if (req.method === 'POST') {
    try {
      const data = req.body;
      if (!data || typeof data !== 'object') {
        return res.status(400).json({ error: 'Invalid data' });
      }
      const jsonData = JSON.stringify(data);
      await sql`
        INSERT INTO david_progress (id, data, updated_at)
        VALUES ('david', ${jsonData}::jsonb, NOW())
        ON CONFLICT (id)
        DO UPDATE SET data = ${jsonData}::jsonb, updated_at = NOW()
      `;
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error('POST error:', e.message);
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
