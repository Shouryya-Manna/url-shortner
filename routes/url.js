const express = require ('express');
const router = express.Router();
const {handleGenerateShortUrl,handleUrlAnalytics,handleRedirectUrl} = require('../controllers/url')


router.post('/',handleGenerateShortUrl);
router.get('/:shortId',handleRedirectUrl);
router.get('/analytics/:shortId',handleUrlAnalytics);

module.exports = router;