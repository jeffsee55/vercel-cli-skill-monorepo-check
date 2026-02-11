import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Express API in monorepo' });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

export default app;
