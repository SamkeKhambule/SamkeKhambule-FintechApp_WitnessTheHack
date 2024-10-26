const express = require('express');
const router = express.Router();

router.post('/add-item', (req, res) => {
  // Logic to add item to the inventory
  res.send('Item added');
});

module.exports = router;
