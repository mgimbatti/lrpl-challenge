const express = require('express');
const router = express.Router();
const axios = require('axios');
const { YELP_SEARCH_URL } = require('../../constants.js')
const { API_KEY } = process.env;

router.get('/parkinglots', async function getParkingLots(req, res) { 
  try {
    const parkingLots = await axios({
      method: 'get',
      url: `${YELP_SEARCH_URL}`,
      headers: {
        'Authorization': `Bearer ${API_KEY}`},
      params: {
        categories: 'parking',
        location: req.body&&req.body.location || 'san+francisco'
      } 
    });
    res.json(parkingLots.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;