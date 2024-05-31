const express = require("express");
require("dotenv").config();
const translateRouter = express.Router();

const translate = require('google-translate-api');

const { Translation } = require('../models/translationSchema');


translateRouter.post("/", async(req, res) => {
    const { text, sourceLang, targetLang } = req.body;

  if (!text || !sourceLang || !targetLang) {
    return res.status(400).send({ error: true, message: 'Invalid input parameters' });
  }

  try {
    const result = await translate(text, { from: sourceLang, to: targetLang });
    const translatedText = result.text;

    res.send({ translatedText });
  } catch (err) {
    console.error('Translation error:', err);
    res.status(500).send({ error: true, message: 'Translation failed' });
  }
  } ) 

  module.exports = {
    translateRouter
  }