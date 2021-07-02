const express = require('express');
const router = express.Router();
const axios = require('axios');
const { CORS_HEROKU_URL, YELP_SEARCH_URL } = require('../../constants.js')
const { API_KEY } = process.env;

router.get('/', async function getParkingLots(req, res) {
  try {
    const parkingLots = await axios.get(
      `${YELP_SEARCH_URL}?categories=parking&location=san+francisco`,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );
    res.json(parkingLots.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;