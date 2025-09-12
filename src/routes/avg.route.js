const express = require('express');
const router = express.Router();


router.get('/privacy-policy', (req, res) => {
  res.render('avg/PrivacyPolicy');
});



module.exports = router;
