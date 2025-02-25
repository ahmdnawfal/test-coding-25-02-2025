const express = require('express');
const validateHeaders = require('./middleware/validateHeaders');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/data', validateHeaders, (req, res) => {
  res.json({
    responseCode: 200,
    responseMessage: 'SUCCESS',
    data: [],
  });
});

app.post('/api/data', validateHeaders, (req, res) => {
  const body = req.body;

  res.json({
    responseCode: 200,
    responseMessage: 'SUCCESS',
    data: body,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
