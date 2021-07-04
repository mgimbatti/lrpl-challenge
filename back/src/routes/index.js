const express = require('express');
const router = express.Router();
const axios = require('axios');
const { YELP_SEARCH_URL } = require('../../constants.js')
const { API_KEY } = process.env;

router.get('/:location', async function getParkingLots(req, res) { 
  let results = [];
  try {
    for(let offset=0; offset < 1000; offset+=50) {
      const parkingLots = await axios({
        method: 'get',
        url: `${YELP_SEARCH_URL}`,
        headers: {
          'Authorization': `Bearer ${API_KEY}`},
        params: {
          categories: 'parking',
          location: req.params.location || 'san+francisco',
          limit: 50,
          offset: offset
        } 
      });
      results = results.concat(parkingLots.data.businesses)
      if ((offset + 50) > parkingLots.data.total) break;
      }
      function bayes(rating, reviews) {
        const score = (reviews * rating) / (reviews + 1);
        return score;
      }
      const filteredData = results.map(pL => {
        const content = {
            ...pL,
            score: bayes(pL.rating, pL.review_count)
        }
        return content;
      });
      let sortedData = filteredData.sort((a, b) => {
        if (a.score > b.score) return 1;
        if (a.score < b.score) return -1;
        return 0;
      })
      res.json(sortedData)
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;