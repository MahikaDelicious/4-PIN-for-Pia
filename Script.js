const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const pins = [
  { pin: '1234', status: 'Not Tried' },
  { pin: '5678', status: 'Not Tried' },
  // Add more 4pins here
];

app.post('/track-pin', (req, res) => {
  const { pin } = req.body;
  
  const pinEntry = pins.find(entry => entry.pin === pin);
  if (pinEntry) {
    pinEntry.status = 'Tried';
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
