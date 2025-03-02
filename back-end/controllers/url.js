const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'});
    const shortID = shortid(8);
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory:[],
    })

    return res.json({id:shortID})
}

async function handleUrlAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

async function handleRedirectUrl(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: { visitHistory: {timestamp:Date.now()} },
      }
    );

    console.log("redirect",entry);
    res.redirect(entry.redirectUrl);
}

module.exports = {
    handleGenerateShortUrl,
    handleUrlAnalytics,
    handleRedirectUrl
}